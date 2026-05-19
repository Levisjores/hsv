<template>
  <section :class="bgClass">
    <div class="container-custom py-16 md:py-20 text-center">
      <div v-motion="fadeInUp" class="max-w-2xl mx-auto">
        <h2 class="font-georgia text-3xl md:text-4xl mb-4" :class="titleClass">
          {{ title }}
        </h2>
        <p class="text-lg mb-8" :class="descClass">
          {{ description }}
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink :to="primaryTo" class="btn-primary">
            {{ primaryLabel }}
            <Icon name="mdi:arrow-right" size="20" />
          </NuxtLink>
          <NuxtLink v-if="secondaryLabel && secondaryTo" :to="secondaryTo" class="btn-secondary">
            {{ secondaryLabel }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { CTASectionProps } from '~/types/components'
import { useAnimation } from '~/composables/useAnimation'

const props = withDefaults(defineProps<CTASectionProps>(), {
  variant: 'gold',
  secondaryLabel: '',
  secondaryTo: ''
})

const { fadeInUp } = useAnimation()

const bgClass = computed(() => {
  const classes: Record<string, string> = {
    gold: 'bg-gold',
    dark: 'bg-noir-logo',
    creme: 'bg-creme'
  }
  return classes[props.variant] || 'bg-gold'
})

const titleClass = computed(() => {
  return props.variant === 'gold' ? 'text-white' : 'text-noir-logo'
})

const descClass = computed(() => {
  return props.variant === 'gold' ? 'text-white/80' : 'text-noir-texte/60'
})
</script>