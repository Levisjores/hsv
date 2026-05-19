<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="uiStore.isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm shadow-gold/10' : 'bg-transparent'"
  >
    <nav class="container-custom flex items-center justify-between h-16 md:h-20">
      <!-- Logo -->
      <NuxtLink to="/" class="flex items-center gap-3 group" aria-label="Accueil HSV">
        <div class="w-10 h-10 rounded-sm bg-gold flex items-center justify-center text-white font-georgia font-bold text-lg">
          H
        </div>
        <span class="hidden sm:block font-montserrat font-semibold text-sm tracking-widest uppercase"
              :class="uiStore.isScrolled ? 'text-noir-logo' : 'text-noir-logo'">
          HYDRA SV
        </span>
      </NuxtLink>

      <!-- Navigation Desktop -->
      <ul class="hidden lg:flex items-center gap-1">
        <li v-for="item in MAIN_NAVIGATION" :key="item.to">
          <NuxtLink
            :to="item.to"
            class="px-4 py-2 text-sm font-montserrat font-medium rounded-sm transition-colors duration-200"
            :class="uiStore.isScrolled ? 'text-noir-texte hover:text-gold-dark hover:bg-gold/5' : 'text-noir-texte hover:text-gold-dark hover:bg-gold/5'"
            active-class="!text-gold-dark !bg-gold/10"
          >
            {{ item.label }}
          </NuxtLink>
        </li>
      </ul>

      <!-- Actions Desktop -->
      <div class="hidden lg:flex items-center gap-3">
        <button class="btn-ghost text-sm" @click="chatbotStore.toggle()">
          <Icon name="mdi:chat-outline" size="18" />
          <span>Assistant</span>
        </button>
        <NuxtLink to="/contact" class="btn-primary text-sm !py-2.5 !px-5">
          Nous contacter
        </NuxtLink>
      </div>

      <!-- Burger Mobile -->
      <button
        class="lg:hidden p-2 rounded-sm hover:bg-gold/10 transition-colors"
        @click="uiStore.toggleNav()"
        :aria-label="uiStore.isNavOpen ? 'Fermer le menu' : 'Ouvrir le menu'"
      >
        <Icon v-if="!uiStore.isNavOpen" name="mdi:menu" size="24" />
        <Icon v-else name="mdi:close" size="24" />
      </button>
    </nav>

    <!-- Mobile Menu -->
    <Transition name="slide-down">
      <div v-if="uiStore.isNavOpen" class="lg:hidden bg-white border-t border-sable-dore/30 shadow-lg">
        <ul class="container-custom py-4 space-y-1">
          <li v-for="item in MAIN_NAVIGATION" :key="item.to">
            <NuxtLink
              :to="item.to"
              class="block px-4 py-3 text-sm font-montserrat font-medium rounded-sm transition-colors hover:bg-gold/5 hover:text-gold-dark"
              active-class="!text-gold-dark !bg-gold/10"
              @click="uiStore.closeNav()"
            >
              {{ item.label }}
            </NuxtLink>
          </li>
          <li class="pt-4 border-t border-sable-dore/30">
            <NuxtLink
              to="/contact"
              class="btn-primary w-full justify-center text-sm"
              @click="uiStore.closeNav()"
            >
              Nous contacter
            </NuxtLink>
          </li>
        </ul>
      </div>
    </Transition>
  </header>
</template>

<script setup lang="ts">
import { MAIN_NAVIGATION } from '~/constants/navigation'
import { useUIStore } from '~/stores/ui'
import { useChatbotStore } from '~/stores/chatbot'

const uiStore = useUIStore()
const chatbotStore = useChatbotStore()
</script>

<style scoped>
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.3s ease;
}
.slide-down-enter-from,
.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>