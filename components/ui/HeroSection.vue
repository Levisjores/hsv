<template>
  <section class="relative min-h-screen flex items-center overflow-hidden bg-creme">
    <HexagonPattern class="absolute inset-0 opacity-[0.02]" />
    <div class="container-custom relative z-10 pt-24 md:pt-32 pb-16">
      <div class="max-w-4xl">
        <div v-motion="fadeIn" class="inline-flex items-center gap-2 px-4 py-1.5 border border-gold/30 rounded-full mb-8">
          <span class="w-2 h-2 rounded-full bg-gold" />
          <span class="text-xs font-montserrat font-medium text-gold-dark tracking-wider uppercase">Corporation Panafricaine</span>
        </div>

        <h1 v-motion="fadeInUp" class="font-georgia text-5xl md:text-7xl text-noir-logo leading-tight mb-6 text-balance">
          Enracinés en Afrique.<br />
          <span class="text-gradient-gold italic">Élevés au niveau mondial.</span>
        </h1>

        <p v-motion="fadeInUp" class="text-lg md:text-xl text-noir-texte/60 max-w-2xl mb-10 leading-relaxed font-arial">
          HYDRA SILICON VALLEY construit un écosystème technologique panafricain de classe mondiale, structuré pour durer et impacter positivement le continent sur plusieurs décennies.
        </p>

        <div v-motion="fadeInUp" class="flex flex-col sm:flex-row gap-4">
          <NuxtLink to="/ecosystem" class="btn-primary">
            Découvrir l'écosystème
            <Icon name="mdi:arrow-right" size="20" />
          </NuxtLink>
          <NuxtLink to="/corporation" class="btn-secondary">
            Notre corporation
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useAnimation } from '~/composables/useAnimation'
const { fadeIn, fadeInUp } = useAnimation()
</script>