<template>
  <!--
    Chatbot Widget - Version frontend mockée
    Architecture future :
    Frontend → API Laravel → Microservice Python IA (LLM)
    Le microservice Python utilisera un modèle de langage pour répondre
    aux questions sur HSV, ses services, l'écosystème, etc.
  -->
  <div class="fixed bottom-6 right-6 z-40">
    <!-- Fenêtre de chat -->
    <Transition name="chat-slide">
      <div v-if="chatbotStore.isOpen"
           class="absolute bottom-16 right-0 w-80 sm:w-96 h-[500px] bg-white rounded-sm shadow-2xl shadow-noir-logo/20 border border-sable-dore/50 flex flex-col overflow-hidden">
        <!-- Header -->
        <div class="bg-noir-logo text-white px-4 py-3 flex items-center justify-between">
          <div class="flex items-center gap-2">
            <div class="w-7 h-7 rounded-full bg-gold flex items-center justify-center">
              <Icon name="mdi:robot-outline" size="16" class="text-noir-logo" />
            </div>
            <div>
              <p class="text-xs font-montserrat font-semibold">Assistant HSV</p>
              <p class="text-[10px] text-white/50">Propulsé par IA</p>
            </div>
          </div>
          <button @click="chatbotStore.close()" class="text-white/60 hover:text-white transition-colors">
            <Icon name="mdi:close" size="18" />
          </button>
        </div>

        <!-- Messages -->
        <div ref="messagesContainer" class="flex-1 overflow-y-auto p-4 space-y-4 bg-creme/50">
          <div v-for="msg in chatbotStore.messages" :key="msg.id"
               class="flex" :class="msg.role === 'user' ? 'justify-end' : 'justify-start'">
            <div class="max-w-[80%] rounded-sm px-3 py-2 text-sm"
                 :class="msg.role === 'user'
                   ? 'bg-gold text-white'
                   : 'bg-white text-noir-texte border border-sable-dore/30'">
              {{ msg.content }}
            </div>
          </div>

          <!-- Indicateur de frappe -->
          <div v-if="chatbotStore.isTyping" class="flex justify-start">
            <div class="bg-white border border-sable-dore/30 rounded-sm px-4 py-2 flex gap-1">
              <span class="w-2 h-2 rounded-full bg-gold/40 animate-bounce" style="animation-delay: 0ms" />
              <span class="w-2 h-2 rounded-full bg-gold/40 animate-bounce" style="animation-delay: 150ms" />
              <span class="w-2 h-2 rounded-full bg-gold/40 animate-bounce" style="animation-delay: 300ms" />
            </div>
          </div>
        </div>

        <!-- Input -->
        <div class="border-t border-sable-dore/30 p-3 bg-white">
          <form @submit.prevent="sendMessage" class="flex gap-2">
            <input
              v-model="inputMessage"
              type="text"
              placeholder="Écrivez votre message..."
              class="flex-1 text-sm px-3 py-2 border border-sable-dore/50 rounded-sm focus:outline-none focus:border-gold/50 bg-creme/50"
              :disabled="chatbotStore.isTyping"
            />
            <button
              type="submit"
              :disabled="!inputMessage.trim() || chatbotStore.isTyping"
              class="px-3 py-2 bg-gold text-white rounded-sm hover:bg-gold-dark transition-colors disabled:opacity-50"
            >
              <Icon name="mdi:send" size="18" />
            </button>
          </form>
        </div>
      </div>
    </Transition>

    <!-- Bouton flottant -->
    <button
      v-if="!chatbotStore.isOpen"
      @click="chatbotStore.open()"
      class="w-14 h-14 bg-gold text-white rounded-full shadow-lg shadow-gold/30 hover:bg-gold-dark hover:shadow-xl hover:shadow-gold/40 transition-all duration-300 flex items-center justify-center"
      aria-label="Ouvrir l'assistant"
    >
      <Icon name="mdi:chat-outline" size="24" />
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, nextTick } from 'vue'
import { useChatbotStore } from '~/stores/chatbot'

const chatbotStore = useChatbotStore()
const inputMessage = ref('')
const messagesContainer = ref<HTMLElement>()

const sendMessage = async () => {
  const content = inputMessage.value.trim()
  if (!content || chatbotStore.isTyping) return

  inputMessage.value = ''
  await chatbotStore.sendMessage(content)

  // Scroll to bottom
  await nextTick()
  if (messagesContainer.value) {
    messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight
  }
}
</script>

<style scoped>
.chat-slide-enter-active,
.chat-slide-leave-active {
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
.chat-slide-enter-from,
.chat-slide-leave-to {
  opacity: 0;
  transform: translateY(20px) scale(0.95);
}
</style>