<template>
  <div
    v-motion="scaleIn"
    class="card-premium group cursor-default"
  >
    <!-- Icône -->
    <div class="w-14 h-14 rounded-sm bg-gold/10 flex items-center justify-center mb-5 group-hover:bg-gold/20 transition-colors">
      <Icon :name="service.icon" size="28" class="text-gold-dark" />
    </div>

    <!-- Contenu -->
    <h3 class="font-montserrat font-semibold text-lg text-noir-logo mb-3">{{ service.title }}</h3>
    <p class="text-sm text-noir-texte/60 leading-relaxed mb-4">{{ service.description }}</p>

    <!-- Features -->
    <ul class="space-y-2">
      <li v-for="feature in service.features" :key="feature" class="flex items-center gap-2 text-sm text-noir-texte/70">
        <Icon name="mdi:check-circle-outline" size="16" class="text-green-light flex-shrink-0" />
        {{ feature }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import type { ServiceCardProps } from '~/types/components'
import { useAnimation } from '~/composables/useAnimation'

defineProps<ServiceCardProps>()

const { scaleIn } = useAnimation()
</script>