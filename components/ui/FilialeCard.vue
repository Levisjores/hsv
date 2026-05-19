<template>
  <div
    v-motion="scaleIn"
    class="card-premium group relative overflow-hidden"
  >
    <!-- Badge statut -->
    <span
      class="absolute top-4 right-4 text-[10px] font-montserrat font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full"
      :class="statusClass"
    >
      {{ statusLabel }}
    </span>

    <!-- Icône -->
    <div
      class="w-12 h-12 rounded-sm flex items-center justify-center mb-4"
      :class="iconBgClass"
    >
      <Icon :name="filiale.icon" size="24" :class="iconColorClass" />
    </div>

    <!-- Contenu -->
    <h3 class="font-montserrat font-bold text-lg text-noir-logo mb-1">{{ filiale.name }}</h3>
    <p class="text-xs text-gold-dark font-montserrat font-semibold tracking-wider mb-3">{{ filiale.acronym }}</p>
    <p class="text-sm text-noir-texte/60 leading-relaxed mb-4">{{ filiale.description }}</p>

    <!-- Secteur -->
    <div class="flex items-center gap-2 text-xs text-noir-texte/40">
      <Icon name="mdi:tag-outline" size="14" />
      {{ filiale.sector }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { FilialeCardProps } from '~/types/components'
import { useAnimation } from '~/composables/useAnimation'

const props = defineProps<FilialeCardProps>()

const { scaleIn } = useAnimation()

const statusLabel = computed(() => {
  const labels: Record<string, string> = {
    active: 'Actif',
    planned: 'Planifié',
    upcoming: 'À venir'
  }
  return labels[props.filiale.status] || 'À venir'
})

const statusClass = computed(() => {
  const classes: Record<string, string> = {
    active: 'bg-green-50 text-green-medium border border-green-200',
    planned: 'bg-gold/10 text-gold-dark border border-gold/30',
    upcoming: 'bg-creme text-brun-dore border border-sable-dore'
  }
  return classes[props.filiale.status] || ''
})

const iconBgClass = computed(() => {
  return props.filiale.color === 'gold' ? 'bg-gold/10' : 'bg-green-50'
})

const iconColorClass = computed(() => {
  return props.filiale.color === 'gold' ? 'text-gold-dark' : 'text-green-deep'
})
</script>