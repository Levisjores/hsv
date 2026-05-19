<template>
  <section class="section-padding bg-gold">
    <div class="container-custom text-center">
      <div v-motion="fadeInUp" class="max-w-2xl mx-auto">
        <h2 class="font-georgia text-3xl md:text-4xl text-white mb-4">
          Investissez dans l'avenir technologique africain
        </h2>
        <p class="text-white/80 text-lg mb-8">
          Rejoignez les investisseurs visionnaires qui parient sur le potentiel illimité de la tech africaine.
        </p>
        <NuxtLink to="/contact" class="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-gold-dark font-montserrat font-semibold rounded-sm
                                 hover:bg-noir-logo hover:text-white transition-all duration-300">
          Devenir investisseur
          <Icon name="mdi:arrow-right" size="20" />
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useAnimation } from '~/composables/useAnimation'

const { fadeInUp } = useAnimation()
</script>