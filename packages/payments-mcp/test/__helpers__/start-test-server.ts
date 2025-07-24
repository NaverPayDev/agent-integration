/**
 * Npay agent-integration
 * Copyright (c) 2025-present NAVER FINANCIAL Corp.
 * Apache-2.0
 */

import logger from './logger.js'
import {createTestServer} from './test-server.js'

async function main() {
    const server = createTestServer()
    await server.start()
    logger.info('> Press Ctrl+C to stop')
    process.on('SIGINT', async () => {
        await server.stop()
        process.exit(0)
    })
}

main().catch((err) => {
    logger.error('❌ Failed to start the test server:', err)
    process.exit(1)
})
