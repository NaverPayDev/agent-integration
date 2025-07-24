#!/usr/bin/env node
/**
 * Npay agent-integration
 * Copyright (c) 2025-present NAVER FINANCIAL Corp.
 * Apache-2.0
 */

import appConfig from './config/app.js'
import logger from './infrastructure/logger.js'
import {setupMcpServer} from './infrastructure/server.js'

async function main() {
    const server = setupMcpServer(appConfig)
    await server.start()
}

main().catch((err) => {
    logger.error('❌ Failed to start the MCP server:', err)
    process.exit(1)
})
