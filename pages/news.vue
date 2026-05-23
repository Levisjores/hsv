<template>
  <div>
    <section class="pt-32 pb-16 md:pt-40 md:pb-20 bg-creme">
      <div class="container-custom text-center">
        <h1 class="font-georgia text-4xl md:text-5xl text-noir-logo mb-6">Actualités</h1>
        <p class="text-lg text-noir-texte/60 max-w-3xl mx-auto">Les dernières nouvelles de la corporation et de ses filiales.</p>
      </div>
    </section>
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <NewsCard v-for="article in NEWS_ARTICLES" :key="article.id" :article="article" />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { NEWS_ARTICLES } from '~/constants/data'
import NewsCard from '~/components/ui/NewsCard.vue'
useHead({ title: 'Actualités - HSV' })
</script>