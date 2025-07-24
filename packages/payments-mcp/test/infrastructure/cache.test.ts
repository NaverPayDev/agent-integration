/**
 * Npay agent-integration
 * Copyright (c) 2025-present NAVER FINANCIAL Corp.
 * Apache-2.0
 */

import {describe, it, expect, beforeEach} from 'vitest'

import {withCache, clearCache} from '../../src/infrastructure/cache.js'
import {sleep} from '../__helpers__/utils.js'

interface User {
    readonly id: number
    readonly name: string
    readonly nickname: string
}

describe('cache', () => {
    const cacheKey = 'user:0'

    async function fetchUser(nickname: string): Promise<User> {
        return {id: 0, name: '홍길동', nickname}
    }

    beforeEach(() => {
        clearCache()
    })

    describe('withCache()', () => {
        describe('fetcher 실행 시 오류가 발생하면', () => {
            async function fetchError(): Promise<void> {
                throw Error('fetch failed.')
            }

            it('캐시하지 않는다', async () => {
                await expect(withCache(cacheKey, fetchError, 1000)).rejects.toThrow('fetch failed')

                const user = await withCache(cacheKey, () => fetchUser('hong'), 1000)

                expect(user.nickname).toEqual('hong')
            })
        })

        describe('캐시되지 않은 데이터라면', () => {
            it('데이터를 조회하고 캐시한다', async () => {
                const user1 = await withCache(cacheKey, () => fetchUser('hong'), 1000)
                const user2 = await withCache(cacheKey, () => fetchUser('gildong'), 1000)

                expect(user1.nickname).toEqual('hong')
                expect(user2).toEqual(user1)
            })
        })

        describe('캐시된 데이터가 만료되었다면', () => {
            it('새로운 데이터를 조회하고 캐시한다', async () => {
                const user1 = await withCache(cacheKey, () => fetchUser('hong'), 1000)
                await sleep(1001)
                const user2 = await withCache(cacheKey, () => fetchUser('gildong'), 1000)
                const user3 = await withCache(cacheKey, () => fetchUser('hong'), 1000)

                expect(user1.nickname).toEqual('hong')
                expect(user2.nickname).toEqual('gildong')
                expect(user3).toEqual(user2)
            })
        })

        it('캐시 키를 기준으로 캐시한다', async () => {
            const user1 = await withCache('user:0', () => fetchUser('hong'), 1000)
            const user2 = await withCache('user:1', () => fetchUser('gildong'), 1000)

            expect(user1.nickname).toEqual('hong')
            expect(user2.nickname).toEqual('gildong')
        })

        describe('캐시 크기 제한에 도달했다면', () => {
            it('가장 오래된 항목을 제거한다', async () => {
                const originalUser = await withCache(cacheKey, () => fetchUser('hong'), 1000)
                expect(originalUser.nickname).toEqual('hong')

                for (let i = 1; i < 100; i++) {
                    await withCache(`user:${i}`, () => fetchUser(`user${i}`), 1000)
                }

                const stillCached = await withCache(cacheKey, () => fetchUser('gildong'), 1000)
                expect(stillCached.nickname).toEqual('hong')

                await withCache('user:101', () => fetchUser('trigger_eviction'), 1000)

                const evictedUser = await withCache(cacheKey, () => fetchUser('gildong'), 1000)
                expect(evictedUser.nickname).toEqual('gildong')
            })
        })
    })

    describe('clearCache()', () => {
        it('캐시를 초기화한다', async () => {
            const user1 = await withCache(cacheKey, () => fetchUser('hong'), 1000)
            clearCache()
            const user2 = await withCache(cacheKey, () => fetchUser('gildong'), 1000)

            expect(user1.nickname).toEqual('hong')
            expect(user2.nickname).toEqual('gildong')
        })
    })
})
