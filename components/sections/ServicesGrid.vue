<template>
  <section class="section-padding bg-white">
    <div class="container-custom">
      <SectionTitle title="Tous nos Services" subtitle="Un écosystème complet de solutions technologiques." />
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ServiceCard v-for="service in SERVICES" :key="service.id" :service="service" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { SERVICES } from '~/constants/services'
import SectionTitle from '~/components/ui/SectionTitle.vue'
import ServiceCard from '~/components/ui/ServiceCard.vue'
</script>