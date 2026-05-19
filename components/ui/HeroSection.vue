<template>
  <section class="relative min-h-screen flex items-center overflow-hidden">
    <!-- Fond avec motif hexagonal subtil -->
    <div class="absolute inset-0 bg-creme">
      <div class="absolute inset-0 opacity-[0.03]"
           style="background-image: url('data:image/svg+xml,%3Csvg width=\'60\' height=\'52\' viewBox=\'0 0 60 52\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M30 0L60 15V45L30 60L0 45V15L30 0Z\' fill=\'%23C9A84C\'/%3E%3C/svg%3E'); background-size: 60px 52px;" />
    </div>

    <!-- HexagonDecoration flottant -->
    <HexagonDecoration class="absolute top-20 right-10 opacity-10" :size="300" />
    <HexagonDecoration class="absolute bottom-20 left-10 opacity-5" :size="200" />

    <div class="container-custom relative z-10 pt-24 md:pt-32 pb-16">
      <div class="max-w-4xl">
        <!-- Badge -->
        <div v-motion="fadeIn" class="inline-flex items-center gap-2 px-4 py-1.5 border border-gold/30 rounded-full mb-8">
          <span class="w-2 h-2 rounded-full bg-gold animate-pulse" />
          <span class="text-xs font-montserrat font-medium text-gold-dark tracking-wider uppercase">Corporation Panafricaine</span>
        </div>

        <!-- Titre principal -->
        <h1 v-motion="fadeInUp" class="font-georgia text-5xl md:text-6xl lg:text-7xl text-noir-logo leading-tight mb-6 text-balance">
          Enracinés en Afrique.<br />
          <span class="text-gradient-gold">Élevés au niveau mondial.</span>
        </h1>

        <!-- Description -->
        <p v-motion="fadeInUp" class="text-lg md:text-xl text-noir-texte/60 max-w-2xl mb-10 leading-relaxed">
          HYDRA SILICON VALLEY est une corporation technologique panafricaine qui crée des solutions innovantes
          pour propulser l'Afrique dans l'ère numérique mondiale.
        </p>

        <!-- CTAs -->
        <div v-motion="fadeInUp" class="flex flex-col sm:flex-row gap-4">
          <NuxtLink to="/services" class="btn-primary">
            Découvrir nos services
            <Icon name="mdi:arrow-right" size="20" />
          </NuxtLink>
          <NuxtLink to="/contact" class="btn-secondary">
            Contacter l'équipe
          </NuxtLink>
        </div>

        <!-- Stats rapides -->
        <div v-motion="fadeInUp" class="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-12 border-t border-gold/20">
          <div v-for="stat in STATISTICS" :key="stat.id" class="text-center md:text-left">
            <AnimatedCounter :value="stat.value" :suffix="stat.suffix" class="text-3xl md:text-4xl font-georgia text-gold-dark" />
            <p class="text-sm text-noir-texte/50 mt-1">{{ stat.label }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { STATISTICS } from '~/constants/services'
import { useAnimation } from '~/composables/useAnimation'

const { fadeIn, fadeInUp } = useAnimation()
</script>