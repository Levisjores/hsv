import { defineStore } from 'pinia'
import type { ChatbotMessage } from '~/types/api'

/**
 * Store du chatbot - version mockée
 *
 * Architecture future :
 * Frontend → API Laravel → Microservice Python (LLM)
 * Le microservice Python utilisera un modèle de langage (GPT, Llama, etc.)
 * pour fournir des réponses contextuelles sur HSV.
 */

interface ChatbotState {
  messages: ChatbotMessage[]
  isTyping: boolean
  isOpen: boolean
}

const WELCOME_MESSAGE: ChatbotMessage = {
  id: 'welcome',
  content: 'Bonjour, je suis l\'assistant virtuel de HYDRA SILICON VALLEY. Comment puis-je vous aider aujourd\'hui ?',
  role: 'assistant',
  timestamp: new Date()
}

const MOCK_RESPONSES: Record<string, string> = {
  services: 'Nous proposons des services en développement logiciel, cloud, cybersécurité, IA, solutions SaaS, transformation digitale, systèmes de vote et plateformes financières.',
  contact: 'Vous pouvez nous contacter via le formulaire sur la page Contact, ou par email à contact@hydrasv.com.',
  ecosystem: 'Notre écosystème comprend HSV TECH, HSV HEALTH, HSV CLOUD, HSV AI, HSV FINANCE et HSV EDUCATION.',
  default: 'Merci de votre intérêt pour HYDRA SILICON VALLEY. Je transmets votre demande à notre équipe qui vous répondra dans les meilleurs délais.'
}

export const useChatbotStore = defineStore('chatbot', {
  state: (): ChatbotState => ({
    messages: [WELCOME_MESSAGE],
    isTyping: false,
    isOpen: false
  }),

  actions: {
    toggle(): void {
      this.isOpen = !this.isOpen
    },

    open(): void {
      this.isOpen = true
    },

    close(): void {
      this.isOpen = false
    },

    async sendMessage(content: string): Promise<void> {
      // Ajouter le message utilisateur
      const userMessage: ChatbotMessage = {
        id: `user-${Date.now()}`,
        content,
        role: 'user',
        timestamp: new Date()
      }
      this.messages.push(userMessage)

      // Simuler la frappe du bot
      this.isTyping = true

      // Simuler délai réseau + traitement IA
      await new Promise((resolve) => setTimeout(resolve, 1000 + Math.random() * 1000))

      // Trouver une réponse mockée
      let responseContent = MOCK_RESPONSES.default
      const lowerContent = content.toLowerCase()
      if (lowerContent.includes('service')) responseContent = MOCK_RESPONSES.services
      if (lowerContent.includes('contact')) responseContent = MOCK_RESPONSES.contact
      if (lowerContent.includes('ecosyst') || lowerContent.includes('filiale')) responseContent = MOCK_RESPONSES.ecosystem

      const botMessage: ChatbotMessage = {
        id: `bot-${Date.now()}`,
        content: responseContent,
        role: 'assistant',
        timestamp: new Date()
      }
      this.messages.push(botMessage)
      this.isTyping = false
    },

    reset(): void {
      this.messages = [WELCOME_MESSAGE]
    }
  }
})