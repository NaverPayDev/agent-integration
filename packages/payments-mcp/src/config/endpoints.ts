/**
 * Npay agent-payments-integration
 * Copyright (c) 2025-present NAVER FINANCIAL Corp.
 * Apache-2.0
 */

import {Environment, Endpoints} from './types.js'

const production: Endpoints = {
    developers: {
        docs: 'https://docs.pay.naver.com',
    },
}

const development: Endpoints = {
    developers: {
        docs: process.env.NPAY_DEVELOPERS_DOCS_URL || 'http://localhost:3000/developers',
    },
}

export default function endpoints(environment: Environment): Endpoints {
    return environment === Environment.Development ? development : production
}
