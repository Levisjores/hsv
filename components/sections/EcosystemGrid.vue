<template>
  <section class="section-padding bg-creme">
    <div class="container-custom">
      <SectionTitle title="Notre Écosystème" subtitle="Des filiales spécialisées pour couvrir tous les secteurs technologiques stratégiques." />
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <FilialeCard v-for="filiale in FILIALES" :key="filiale.id" :filiale="filiale" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { FILIALES } from '~/constants/services'
import SectionTitle from '~/components/ui/SectionTitle.vue'
import FilialeCard from '~/components/ui/FilialeCard.vue'
</script>