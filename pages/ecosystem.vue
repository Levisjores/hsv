<template>
  <div>
    <!-- Hero -->
    <section class="pt-32 pb-16 md:pt-40 md:pb-20 bg-creme">
      <div class="container-custom">
        <div class="max-w-3xl mx-auto text-center">
          <span class="text-xs font-montserrat font-semibold text-gold-dark tracking-widest uppercase">Vision</span>
          <h1 class="font-georgia text-4xl md:text-5xl text-noir-logo mt-4 mb-6">Notre Écosystème</h1>
          <p class="text-lg text-noir-texte/60 leading-relaxed">
            Des filiales spécialisées pour construire l'infrastructure technologique complète de l'Afrique de demain.
          </p>
        </div>
      </div>
    </section>

    <EcosystemGrid />

    <!-- Vision écosystème -->
    <section class="section-padding bg-noir-logo">
      <div class="container-custom text-center">
        <h2 class="font-georgia text-3xl text-white mb-6">Un écosystème intégré</h2>
        <p class="text-white/60 max-w-2xl mx-auto mb-0">
          Chaque filiale opère de manière autonome dans son domaine d'expertise tout en bénéficiant
          des synergies du groupe. Cette structure permet agilité et excellence dans chaque secteur.
        </p>
      </div>
    </section>

    <CTASection
      title="Investissez dans l'écosystème HSV"
      description="Rejoignez les partenaires qui construisent avec nous le futur technologique africain."
      primary-label="Nous contacter"
      primary-to="/contact"
      variant="gold"
    />
  </div>
</template>

<script setup lang="ts">
import EcosystemGrid from '~/components/sections/EcosystemGrid.vue'
import CTASection from '~/components/ui/CTASection.vue'

useHead({
  title: 'Écosystème - HYDRA SILICON VALLEY'
})
</script>