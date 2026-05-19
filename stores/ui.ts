// stores/ui.ts - Version compatible Pinia 3
import { defineStore } from 'pinia'

export const useUIStore = defineStore('ui', () => {
  const isNavOpen = ref(false)
  const isChatbotOpen = ref(false)
  const scrollY = ref(0)
  const isScrolled = ref(false)

  function toggleNav() {
    isNavOpen.value = !isNavOpen.value
  }
  function closeNav() {
    isNavOpen.value = false
  }
  function toggleChatbot() {
    isChatbotOpen.value = !isChatbotOpen.value
  }
  function setScrollY(value: number) {
    scrollY.value = value
    isScrolled.value = value > 50
  }

  return { isNavOpen, isChatbotOpen, scrollY, isScrolled, toggleNav, closeNav, toggleChatbot, setScrollY }
})