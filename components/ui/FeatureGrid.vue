<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <div v-for="(feature, index) in features" :key="index"
         v-motion="scaleIn"
         class="card-premium text-center group">
      <div class="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-gold/20 transition-colors">
        <Icon :name="feature.icon" size="32" class="text-gold-dark" />
      </div>
      <h3 class="font-montserrat font-semibold text-lg text-noir-logo mb-2">{{ feature.title }}</h3>
      <p class="text-sm text-noir-texte/60">{{ feature.description }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAnimation } from '~/composables/useAnimation'

interface Feature {
  icon: string
  title: string
  description: string
}

defineProps<{
  features: Feature[]
}>()

const { scaleIn } = useAnimation()
</script>