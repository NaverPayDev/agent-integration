/**
 * Npay agent-payments-integration
 * Copyright (c) 2025-present NAVER FINANCIAL Corp.
 * Apache-2.0
 */

export interface DocumentCategory {
    readonly id: string
    readonly name: string
    readonly description: string
    readonly baseUrl: string
    readonly overview: string
}

export interface GetDocumentInput {
    readonly categoryId: string
    readonly path?: string
}
