/**
 * Npay agent-payments-integration
 * Copyright (c) 2025-present NAVER FINANCIAL Corp.
 * Apache-2.0
 */

import {beforeAll} from 'vitest'

import {clearCache} from '../src/infrastructure/cache.js'

beforeAll(async () => {
    await clearCache()
})
