<template>
  <div class="text-center p-6">
    <AnimatedCounter
      :value="statistic.value"
      :suffix="statistic.suffix"
      :prefix="statistic.prefix"
      class="text-4xl md:text-5xl font-georgia text-gold mb-2"
    />
    <p class="text-sm md:text-base text-noir-texte/60 font-montserrat">{{ statistic.label }}</p>
  </div>
</template>

<script setup lang="ts">
import type { StatisticCardProps } from '~/types/components'
import AnimatedCounter from './AnimatedCounter.vue'

defineProps<StatisticCardProps>()
</script>