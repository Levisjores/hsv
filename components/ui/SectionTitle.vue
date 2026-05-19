<template>
  <div class="mb-12 md:mb-16" :class="alignment === 'center' ? 'text-center' : 'text-left'">
    <div v-if="alignment === 'center'" class="gold-divider" />
    <div v-else class="gold-divider-left" />
    <h2 class="font-georgia mb-3" :class="variant === 'gold' ? 'text-gold' : 'text-noir-logo'">
      {{ title }}
    </h2>
    <p v-if="subtitle" class="text-lg text-noir-texte/60 max-w-2xl" :class="alignment === 'center' ? 'mx-auto' : ''">
      {{ subtitle }}
    </p>
  </div>
</template>

<script setup lang="ts">
import type { SectionTitleProps } from '~/types/components'

withDefaults(defineProps<SectionTitleProps>(), {
  alignment: 'center',
  variant: 'dark',
  subtitle: ''
})
</script>