<template>
  <div>
    <!-- Hero -->
    <section class="pt-32 pb-16 md:pt-40 md:pb-20 bg-creme">
      <div class="container-custom">
        <div class="max-w-3xl mx-auto text-center">
          <span class="text-xs font-montserrat font-semibold text-gold-dark tracking-widest uppercase">Notre offre</span>
          <h1 class="font-georgia text-4xl md:text-5xl text-noir-logo mt-4 mb-6">Nos Services</h1>
          <p class="text-lg text-noir-texte/60 leading-relaxed">
            Des solutions technologiques déjà opérationnelles et une feuille de route ambitieuse pour répondre à tous les défis du continent.
          </p>
        </div>
      </div>
    </section>

    <!-- Services Actuels -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <SectionTitle title="Services Actuels" subtitle="Délivrés dès aujourd'hui par nos équipes." />
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ServiceCard v-for="service in activeServices" :key="service.id" :service="service" />
        </div>
      </div>
    </section>

    <!-- Services Futurs -->
    <section class="section-padding bg-creme">
      <div class="container-custom">
        <SectionTitle title="Services à Venir" subtitle="Notre feuille de route pour les prochaines années." />
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ServiceCard v-for="service in futureServices" :key="service.id" :service="service" />
        </div>
      </div>
    </section>

    <!-- CTA -->
    <CTASection
      title="Un projet en tête ?"
      description="Parlons-en. Notre équipe est prête à vous accompagner de la conception à la réalisation."
      primary-label="Démarrer un projet"
      primary-to="/contact"
      variant="dark"
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { SERVICES } from '~/constants/services'
import SectionTitle from '~/components/ui/SectionTitle.vue'
import ServiceCard from '~/components/ui/ServiceCard.vue'
import CTASection from '~/components/ui/CTASection.vue'

const activeServices = computed(() => SERVICES.filter(s => s.status === 'active'))
const futureServices = computed(() => SERVICES.filter(s => s.status !== 'active'))

useHead({
  title: 'Services - HYDRA SILICON VALLEY'
})
</script>