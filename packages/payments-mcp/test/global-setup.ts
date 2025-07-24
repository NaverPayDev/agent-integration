/**
 * Npay agent-integration
 * Copyright (c) 2025-present NAVER FINANCIAL Corp.
 * Apache-2.0
 */

import {createTestServer} from './__helpers__/test-server.js'

process.env.NODE_ENV = 'development'

const testServer = createTestServer()

export default async function setup() {
    await testServer.start()

    return async () => {
        await testServer.stop()
    }
}
