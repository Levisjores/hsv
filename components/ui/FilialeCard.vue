<template>
  <div v-motion="scaleIn" class="card-premium group relative overflow-hidden">
    <span class="absolute top-4 right-4 text-[10px] font-montserrat font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full"
          :class="statusClass">
      {{ statusLabel }}
    </span>
    <div class="w-14 h-14 rounded-sm flex items-center justify-center mb-4"
         :class="iconBgClass">
      <Icon :name="filiale.icon" size="28" :class="iconColorClass" />
    </div>
    <h3 class="font-montserrat font-bold text-lg text-noir-logo mb-1">{{ filiale.name }}</h3>
    <p class="text-xs text-gold-dark font-montserrat font-semibold tracking-wider mb-3">{{ filiale.acronym }}</p>
    <p class="text-sm text-noir-texte/60 leading-relaxed mb-4">{{ filiale.description }}</p>
    <p class="text-xs text-noir-texte/40 mb-4 italic">« {{ filiale.vision }} »</p>
    <div class="flex items-center justify-between text-xs text-noir-texte/40">
      <span class="flex items-center gap-1"><Icon name="mdi:domain" size="14" /> {{ filiale.sector }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { Filiale } from '~/types'
import { useAnimation } from '~/composables/useAnimation'

const props = defineProps<{ filiale: Filiale }>()
const { scaleIn } = useAnimation()

const statusLabel = computed(() => {
  const labels: Record<string, string> = { active: 'Actif', planned: 'Bientôt', upcoming: 'En développement' }
  return labels[props.filiale.status] || ''
})
const statusClass = computed(() => {
  const classes: Record<string, string> = {
    active: 'bg-green-50 text-green-medium border border-green-200',
    planned: 'bg-gold/10 text-gold-dark border border-gold/30',
    upcoming: 'bg-creme text-brun-dore border border-sable-dore'
  }
  return classes[props.filiale.status] || ''
})
const iconBgClass = computed(() => props.filiale.color === 'gold' ? 'bg-gold/10' : 'bg-green-50')
const iconColorClass = computed(() => props.filiale.color === 'gold' ? 'text-gold-dark' : 'text-green-deep')
</script>