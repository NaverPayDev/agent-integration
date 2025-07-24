/**
 * Npay agent-integration
 * Copyright (c) 2025-present NAVER FINANCIAL Corp.
 * Apache-2.0
 */

export function toJsonString(data: unknown): string {
    return JSON.stringify(data, null, 2)
}
