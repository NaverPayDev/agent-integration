/**
 * Npay agent-integration
 * Copyright (c) 2025-present NAVER FINANCIAL Corp.
 * Apache-2.0
 */

import {McpServer} from '@modelcontextprotocol/sdk/server/mcp.js'
import {StdioServerTransport} from '@modelcontextprotocol/sdk/server/stdio.js'

import {AppConfig} from '../config/types.js'
import {getDocumentTool, searchDocumentsTool} from '../domains/documents/tools.js'
import logger from './logger.js'
import {McpServerRunner} from './types.js'

const tools = [getDocumentTool, searchDocumentsTool]

function createMcpServer(config: AppConfig) {
    return new McpServer({
        name: config.server.name,
        version: config.server.version,
    })
}

function registerTools(server: McpServer) {
    tools.forEach(({name, description, handler}) => {
        server.registerTool(name, description, handler)
    })
}

export function setupMcpServer(config: AppConfig): McpServerRunner {
    const server = createMcpServer(config)
    registerTools(server)
    return {
        async start() {
            const transport = new StdioServerTransport()
            await server.connect(transport)
            logger.info(`🔌 Npay Payments MCP is running on stdio. (env: ${config.env})`)
        },
    }
}
