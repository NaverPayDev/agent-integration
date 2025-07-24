/**
 * Npay agent-integration
 * Copyright (c) 2025-present NAVER FINANCIAL Corp.
 * Apache-2.0
 */

import {describe, it, expect, beforeEach, afterEach} from 'vitest'

import logger, {createLogger} from '../../src/infrastructure/logger'

describe('logger', () => {
    let originalStderr: typeof process.stderr.write
    let originalStdout: typeof process.stdout.write
    let capturedStderr: string[] = []
    let capturedStdout: string[] = []

    beforeEach(() => {
        capturedStderr = []
        capturedStdout = []

        originalStderr = process.stderr.write
        process.stderr.write = (chunk: string | Uint8Array) => {
            capturedStderr.push(typeof chunk === 'string' ? chunk : chunk.toString())
            return true
        }

        originalStdout = process.stdout.write
        process.stdout.write = (chunk: string | Uint8Array) => {
            capturedStdout.push(typeof chunk === 'string' ? chunk : chunk.toString())
            return true
        }
    })

    afterEach(() => {
        process.stderr.write = originalStderr
        process.stdout.write = originalStdout
    })

    describe('logger', () => {
        const message = '테스트 메시지'

        describe('info()', () => {
            it('INFO 레벨의 로그를 stderr에 남긴다', () => {
                logger.info(message)

                expect(capturedStderr).toHaveLength(1)
                expect(capturedStdout).toHaveLength(0)

                const output = capturedStderr[0]
                expect(output).toMatch(/^\[\d{2}:\d{2}:\d{2}\.\d{3}\]/)
                expect(output).toContain('INFO')
                expect(output).toContain('@naverpay/payments-mcp')
                expect(output).toContain(`${process.pid})`)
                expect(output).toContain(message)
                expect(output.endsWith('\n')).toBe(true)
            })
        })

        describe('warn()', () => {
            it('WARN 레벨의 로그를 stderr에 남긴다', () => {
                logger.warn(message)

                expect(capturedStderr).toHaveLength(1)
                expect(capturedStdout).toHaveLength(0)

                const output = capturedStderr[0]
                expect(output).toMatch(/^\[\d{2}:\d{2}:\d{2}\.\d{3}\]/)
                expect(output).toContain('WARN')
                expect(output).toContain('@naverpay/payments-mcp')
                expect(output).toContain(`${process.pid})`)
                expect(output).toContain(message)
                expect(output.endsWith('\n')).toBe(true)
            })
        })

        describe('error()', () => {
            it('ERROR 레벨의 로그를 stderr에 남긴다', () => {
                logger.error(message)

                expect(capturedStderr).toHaveLength(1)
                expect(capturedStdout).toHaveLength(0)

                const output = capturedStderr[0]
                expect(output).toMatch(/^\[\d{2}:\d{2}:\d{2}\.\d{3}\]/)
                expect(output).toContain('ERROR')
                expect(output).toContain('@naverpay/payments-mcp')
                expect(output).toContain(`${process.pid})`)
                expect(output).toContain(message)
                expect(output.endsWith('\n')).toBe(true)
            })

            it('메시지와 error 객체를 함께 로그에 남긴다', () => {
                const error = new TypeError('Connection timeout')

                logger.error(message, error)

                expect(capturedStderr).toHaveLength(1)
                const output = capturedStderr[0]
                expect(output).toContain('ERROR')
                expect(output).toContain(message)
                expect(output).toContain('TypeError: Connection timeout')
            })
        })

        describe('debug()', () => {
            it('DEBUG 레벨의 로그를 stderr에 남긴다', () => {
                logger.debug(message)

                expect(capturedStderr).toHaveLength(1)
                expect(capturedStdout).toHaveLength(0)

                const output = capturedStderr[0]
                expect(output).toMatch(/^\[\d{2}:\d{2}:\d{2}\.\d{3}\]/)
                expect(output).toContain('DEBUG')
                expect(output).toContain('@naverpay/payments-mcp')
                expect(output).toContain(`${process.pid})`)
                expect(output).toContain(message)
                expect(output.endsWith('\n')).toBe(true)
            })
        })
    })

    describe('createLogger()', () => {
        const message = '테스트 메시지'

        describe('stream을 stderr로 설정했을 때', () => {
            const stderrLogger = createLogger({name: 'test-server', stream: 'stderr'})

            it('로그를 stderr에 남긴다', () => {
                stderrLogger.info(message)

                expect(capturedStderr).toHaveLength(1)
                expect(capturedStdout).toHaveLength(0)
                expect(capturedStderr[0]).toContain('test-server')
                expect(capturedStderr[0]).toContain(message)
            })
        })

        describe('stream을 stdout로 설정했을 때', () => {
            const stdoutLogger = createLogger({name: 'test-server', stream: 'stdout'})

            it('로그를 stdout에 남긴다', () => {
                stdoutLogger.info(message)

                expect(capturedStdout).toHaveLength(1)
                expect(capturedStderr).toHaveLength(0)
                expect(capturedStdout[0]).toContain('test-server')
                expect(capturedStdout[0]).toContain(message)
            })
        })
    })
})
