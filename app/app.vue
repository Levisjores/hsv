<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
// Charger les tokens d'auth au démarrage
import { apiClient } from '~/services/api/client'

if (import.meta.client) {
  apiClient.loadTokens()
}

useHead({
  htmlAttrs: { lang: 'fr' },
  link: [{ rel: 'canonical', href: 'https://hydrasv.com' }]
})
</script>