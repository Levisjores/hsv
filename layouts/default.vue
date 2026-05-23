<template>
  <div class="min-h-screen flex flex-col">
    <AppNavbar />
    <main class="flex-1">
      <slot />
    </main>
    <AppFooter />
    <ChatbotWidget />
  </div>
</template>

<script setup lang="ts">

import { onMounted, onUnmounted } from 'vue'
import AppNavbar from '~/components/global/AppNavbar.vue'
import AppFooter from '~/components/global/AppFooter.vue'
//import ChatbotWidget from '~/components/global/ChatbotWidget.vue'
import { useUIStore } from '~/stores/ui'

const uiStore = useUIStore()

// Suivre le scroll pour la navbar
const handleScroll = () => {
  if (import.meta.client) {
    uiStore.setScrollY(window.scrollY)
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>