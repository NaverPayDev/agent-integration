/**
 * Npay agent-payments-integration
 * Copyright (c) 2025-present NAVER FINANCIAL Corp.
 * Apache-2.0
 */

import {Environment} from './types.js'

export function getEnvironment(): Environment {
    return (process.env.NODE_ENV as Environment) || Environment.Production
}
