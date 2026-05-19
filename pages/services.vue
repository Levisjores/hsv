<template>
  <div>
    <!-- Hero -->
    <section class="pt-32 pb-16 md:pt-40 md:pb-20 bg-creme">
      <div class="container-custom">
        <div class="max-w-3xl mx-auto text-center">
          <span class="text-xs font-montserrat font-semibold text-gold-dark tracking-widest uppercase">Expertise</span>
          <h1 class="font-georgia text-4xl md:text-5xl text-noir-logo mt-4 mb-6">Nos Services</h1>
          <p class="text-lg text-noir-texte/60 leading-relaxed">
            Des solutions technologiques complètes, de la stratégie à la mise en production.
          </p>
        </div>
      </div>
    </section>

    <ServicesGrid />

    <!-- Approche -->
    <section class="section-padding bg-creme">
      <div class="container-custom">
        <SectionTitle title="Notre Approche" subtitle="Une méthodologie éprouvée pour garantir le succès de chaque projet." />
        <FeatureGrid :features="approcheFeatures" />
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
import ServicesGrid from '~/components/sections/ServicesGrid.vue'
import SectionTitle from '~/components/ui/SectionTitle.vue'
import FeatureGrid from '~/components/ui/FeatureGrid.vue'
import CTASection from '~/components/ui/CTASection.vue'

const approcheFeatures = [
  { icon: 'mdi:magnify', title: 'Découverte', description: 'Analyse approfondie de vos besoins et objectifs business.' },
  { icon: 'mdi:pencil-outline', title: 'Conception', description: 'Architecture et design de la solution optimale.' },
  { icon: 'mdi:code-tags', title: 'Développement', description: 'Développement agile avec les meilleures technologies.' },
  { icon: 'mdi:shield-check-outline', title: 'Qualité', description: 'Tests rigoureux et validation avant déploiement.' },
  { icon: 'mdi:rocket-launch-outline', title: 'Déploiement', description: 'Mise en production sécurisée et progressive.' },
  { icon: 'mdi:headset', title: 'Support', description: 'Accompagnement continu et maintenance proactive.' }
]

useHead({
  title: 'Services - HYDRA SILICON VALLEY'
})
</script>