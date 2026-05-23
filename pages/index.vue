<template>
  <div>
    <HeroSection />

    <!-- Aperçu de l'écosystème -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <SectionTitle title="Notre Écosystème" subtitle="Six filiales stratégiques pour couvrir tous les leviers de la transformation numérique africaine." />
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FilialeCard v-for="filiale in FILIALES" :key="filiale.id" :filiale="filiale" />
        </div>
        <div class="text-center mt-10">
          <NuxtLink to="/ecosystem" class="btn-secondary">Découvrir tout l'écosystème <Icon name="mdi:arrow-right" size="18" /></NuxtLink>
        </div>
      </div>
    </section>

    <!-- Statistiques institutionnelles -->
    <section class="section-padding bg-noir-logo">
      <div class="container-custom">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div v-for="stat in STATISTICS" :key="stat.id" class="text-center">
            <AnimatedCounter :value="stat.value" :suffix="stat.suffix" class="text-4xl font-georgia text-gold block" />
            <p class="text-sm text-white/60 mt-2 font-montserrat">{{ stat.label }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Vision résumée -->
    <section class="section-padding bg-creme">
      <div class="container-custom">
        <SectionTitle title="Vision 2070" subtitle="Notre feuille de route pour faire de l'Afrique un continent numérique souverain." />
        <div class="max-w-3xl mx-auto">
          <Timeline :items="VISION_TIMELINE" />
        </div>
      </div>
    </section>

    <!-- Dernières actualités -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <SectionTitle title="Actualités" subtitle="Les dernières annonces de la corporation." />
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <NewsCard v-for="article in NEWS_ARTICLES.slice(0, 3)" :key="article.id" :article="article" />
        </div>
        <div class="text-center mt-10">
          <NuxtLink to="/news" class="btn-secondary">Toutes les actualités <Icon name="mdi:arrow-right" size="18" /></NuxtLink>
        </div>
      </div>
    </section>

    <!-- CTA Investisseurs -->
    <section class="py-20 bg-gold text-center">
      <div class="container-custom">
        <h2 class="font-georgia text-3xl md:text-4xl text-white mb-4">Façonnons l'avenir technologique africain.</h2>
        <p class="text-white/80 max-w-2xl mx-auto mb-8">Rejoignez les investisseurs visionnaires qui parient sur le potentiel illimité du continent.</p>
        <NuxtLink to="/investors" class="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-gold-dark font-montserrat font-semibold rounded-sm hover:bg-noir-logo hover:text-white transition-all">Devenir investisseur <Icon name="mdi:arrow-right" size="20" /></NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { FILIALES, STATISTICS, VISION_TIMELINE, NEWS_ARTICLES } from '~/constants/data'
import SectionTitle from '~/components/ui/SectionTitle.vue'
import FilialeCard from '~/components/ui/FilialeCard.vue'
import AnimatedCounter from '~/components/ui/AnimatedCounter.vue'
import Timeline from '~/components/ui/Timeline.vue'
import NewsCard from '~/components/ui/NewsCard.vue'

useHead({ title: 'HYDRA SILICON VALLEY - Corporation Technologique Panafricaine' })
</script>