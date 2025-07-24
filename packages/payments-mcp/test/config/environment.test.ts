/**
 * Npay agent-integration
 * Copyright (c) 2025-present NAVER FINANCIAL Corp.
 * Apache-2.0
 */

import {describe, it, expect, beforeEach, afterEach, vi} from 'vitest'

import {getEnvironment} from '../../src/config/environment.js'
import {Environment} from '../../src/config/types.js'

describe('environment', () => {
    describe('getEnvironment()', () => {
        const originalEnv = process.env.NODE_ENV

        beforeEach(() => {
            vi.stubEnv('NODE_ENV', originalEnv)
        })

        afterEach(() => {
            vi.unstubAllEnvs()
        })

        describe('NODE_ENV가 "development"일 때', () => {
            it('Environment.Development를 반환한다', () => {
                vi.stubEnv('NODE_ENV', 'development')

                const result = getEnvironment()

                expect(result).toEqual(Environment.Development)
            })
        })

        describe('NODE_ENV가 "production을"일 때', () => {
            it('Environment.Production을 반환한다', () => {
                vi.stubEnv('NODE_ENV', 'production')

                const result = getEnvironment()

                expect(result).toEqual(Environment.Production)
            })
        })

        describe('NODE_ENV가 설정되지 않았을 때', () => {
            it('Environment.Production을 반환한다', () => {
                vi.stubEnv('NODE_ENV', undefined)

                const result = getEnvironment()

                expect(result).toEqual(Environment.Production)
            })
        })
    })
})
