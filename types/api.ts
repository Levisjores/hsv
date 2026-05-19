// Types pour les futures APIs
// Architecture API-first préparée pour Laravel backend

export interface ApiResponse<T> {
  data: T
  message: string
  status: number
  meta?: {
    currentPage: number
    lastPage: number
    perPage: number
    total: number
  }
}

export interface ApiError {
  message: string
  errors?: Record<string, string[]>
  status: number
}

export interface AuthUser {
  id: string
  name: string
  email: string
  role: string
  avatar?: string
}

export interface AuthTokens {
  accessToken: string
  refreshToken: string
  expiresIn: number
}

export interface ChatbotMessage {
  id: string
  content: string
  role: 'user' | 'assistant'
  timestamp: Date
}

export interface ChatbotResponse {
  message: string
  suggestions?: string[]
  actions?: Array<{ label: string; action: string }>
}