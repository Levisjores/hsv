import { defineStore } from 'pinia'
import type { ContactFormData } from '~/types'
import { submitContactForm } from '~/services/api/contact'

interface ContactState {
  isSubmitting: boolean
  isSuccess: boolean
  error: string | null
}

export const useContactStore = defineStore('contact', {
  state: (): ContactState => ({
    isSubmitting: false,
    isSuccess: false,
    error: null
  }),

  actions: {
    async submitForm(data: ContactFormData): Promise<boolean> {
      this.isSubmitting = true
      this.error = null
      this.isSuccess = false

      try {
        await submitContactForm(data)
        this.isSuccess = true
        return true
      } catch (err) {
        this.error = (err as Error).message || 'Une erreur est survenue'
        return false
      } finally {
        this.isSubmitting = false
      }
    },

    resetForm(): void {
      this.isSubmitting = false
      this.isSuccess = false
      this.error = null
    }
  }
})