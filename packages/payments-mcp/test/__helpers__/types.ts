/**
 * Npay agent-integration
 * Copyright (c) 2025-present NAVER FINANCIAL Corp.
 * Apache-2.0
 */

export interface TestServer {
    readonly start: () => Promise<void>
    readonly stop: () => Promise<void>
}
