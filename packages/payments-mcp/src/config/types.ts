/**
 * Npay agent-integration
 * Copyright (c) 2025-present NAVER FINANCIAL Corp.
 * Apache-2.0
 */

import {LoggerOptions} from '../infrastructure/types.js'

export interface Endpoints {
    readonly developers: {
        readonly docs: string
    }
}

export interface AppConfig {
    readonly env: Environment
    readonly server: {
        readonly name: string
        readonly version: string
    }
    readonly logger: LoggerOptions
    readonly endpoint: Endpoints
}

export enum Environment {
    Development = 'development',
    Production = 'production',
}
