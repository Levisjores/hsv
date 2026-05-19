/**
 * Client HTTP centralisé pour HYDRA SILICON VALLEY
 *
 * Architecture API-first préparée pour :
 * - Backend Laravel API
 * - Authentification JWT
 * - Microservice chatbot Python
 * - Futurs sous-domaines (api.hydrasv.com)
 *
 * Évolution prévue :
 * Frontend → api.hydrasv.com (Laravel) → microservices (Python, etc.)
 */

import type { ApiResponse, ApiError, AuthTokens } from '~/types/api'

const API_BASE = process.env.NUXT_PUBLIC_API_BASE || 'https://api.hydrasv.com/v1'

interface RequestOptions {
  method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'
  body?: unknown
  headers?: Record<string, string>
  auth?: boolean
}

class ApiClient {
  private baseUrl: string
  private tokens: AuthTokens | null = null

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl
  }

  setTokens(tokens: AuthTokens): void {
    this.tokens = tokens
    // Stocker dans localStorage pour persistance
    if (import.meta.client) {
      localStorage.setItem('hsv_auth_tokens', JSON.stringify(tokens))
    }
  }

  clearTokens(): void {
    this.tokens = null
    if (import.meta.client) {
      localStorage.removeItem('hsv_auth_tokens')
    }
  }

  loadTokens(): void {
    if (import.meta.client) {
      const stored = localStorage.getItem('hsv_auth_tokens')
      if (stored) {
        this.tokens = JSON.parse(stored)
      }
    }
  }

  private getHeaders(options: RequestOptions): Record<string, string> {
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      ...options.headers
    }

    if (options.auth && this.tokens) {
      headers['Authorization'] = `Bearer ${this.tokens.accessToken}`
    }

    return headers
  }

  async request<T>(endpoint: string, options: RequestOptions = {}): Promise<T> {
    const { method = 'GET', body, auth = false } = options

    const url = `${this.baseUrl}${endpoint}`
    const headers = this.getHeaders(options)

    const response = await fetch(url, {
      method,
      headers,
      body: body ? JSON.stringify(body) : undefined
    })

    if (!response.ok) {
      const error: ApiError = await response.json()
      throw error
    }

    const data: ApiResponse<T> = await response.json()
    return data.data
  }

  async get<T>(endpoint: string, auth = false): Promise<T> {
    return this.request<T>(endpoint, { method: 'GET', auth })
  }

  async post<T>(endpoint: string, body: unknown, auth = false): Promise<T> {
    return this.request<T>(endpoint, { method: 'POST', body, auth })
  }

  async put<T>(endpoint: string, body: unknown, auth = true): Promise<T> {
    return this.request<T>(endpoint, { method: 'PUT', body, auth })
  }

  async delete<T>(endpoint: string, auth = true): Promise<T> {
    return this.request<T>(endpoint, { method: 'DELETE', auth })
  }
}

// Singleton du client API
export const apiClient = new ApiClient(API_BASE)

// Charger les tokens au démarrage côté client
if (import.meta.client) {
  apiClient.loadTokens()
}