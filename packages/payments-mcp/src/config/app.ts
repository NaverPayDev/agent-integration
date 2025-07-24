/**
 * Npay agent-integration
 * Copyright (c) 2025-present NAVER FINANCIAL Corp.
 * Apache-2.0
 */

import packageJson from '../../package.json' with {type: 'json'}
import endpoints from './endpoints.js'
import {getEnvironment} from './environment.js'
import {AppConfig} from './types.js'

const environment = getEnvironment()

const config: AppConfig = {
    env: environment,
    server: {
        name: '네이버페이(Npay) Payments MCP',
        version: packageJson.version,
    },
    logger: {
        name: '@naverpay/payments-mcp',
        stream: 'stderr',
    },
    endpoint: endpoints(environment),
}

export default config
