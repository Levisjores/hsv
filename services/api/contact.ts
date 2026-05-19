import { apiClient } from './client'
import type { ContactFormData } from '~/types'

/**
 * Service contact - sera connecté au backend Laravel
 * POST /api/v1/contact
 */
export async function submitContactForm(data: ContactFormData): Promise<void> {
  // Pour le moment, mock de l'appel API
  // Dans le futur : apiClient.post('/contact', data)
  console.log('Contact form submitted (mock):', data)

  // Simulation d'un délai réseau
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, 1500)
  })
}