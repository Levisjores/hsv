<template>
  <section class="section-padding bg-noir-logo">
    <div class="container-custom">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
        <StatisticCard v-for="stat in STATISTICS" :key="stat.id" :statistic="stat" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { STATISTICS } from '~/constants/services'
import StatisticCard from '~/components/ui/StatisticCard.vue'
</script>