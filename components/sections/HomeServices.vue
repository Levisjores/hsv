<template>
  <section class="section-padding bg-white">
    <div class="container-custom">
      <SectionTitle
        title="Nos Services"
        subtitle="Des solutions technologiques complètes pour accompagner votre transformation digitale."
      />
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ServiceCard v-for="(service, index) in SERVICES.slice(0, 6)" :key="service.id" :service="service" :index="index" />
      </div>
      <div class="text-center mt-10">
        <NuxtLink to="/services" class="btn-secondary">
          Voir tous les services
          <Icon name="mdi:arrow-right" size="18" />
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { SERVICES } from '~/constants/services'
import SectionTitle from '~/components/ui/SectionTitle.vue'
import ServiceCard from '~/components/ui/ServiceCard.vue'
</script>