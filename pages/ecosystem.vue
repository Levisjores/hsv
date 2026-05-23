<template>
  <div>
    <section class="pt-32 pb-16 md:pt-40 md:pb-20 bg-creme">
      <div class="container-custom text-center">
        <h1 class="font-georgia text-4xl md:text-5xl text-noir-logo mb-6">Notre Écosystème</h1>
        <p class="text-lg text-noir-texte/60 max-w-3xl mx-auto">Six entités autonomes et complémentaires pour relever les défis technologiques du continent.</p>
      </div>
    </section>

    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FilialeCard v-for="filiale in FILIALES" :key="filiale.id" :filiale="filiale" />
        </div>
      </div>
    </section>

    <section class="section-padding bg-noir-logo text-center">
      <div class="container-custom">
        <h2 class="font-georgia text-3xl text-white mb-4">Un groupe, une vision</h2>
        <p class="text-white/60 max-w-2xl mx-auto">Chaque filiale opère avec une autonomie stratégique tout en bénéficiant des synergies du groupe.</p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { FILIALES } from '~/constants/data'
import FilialeCard from '~/components/ui/FilialeCard.vue'
useHead({ title: 'Écosystème - HSV' })
</script>