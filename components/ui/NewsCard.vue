<template>
  <div class="card-premium group cursor-pointer">
    <span class="text-xs text-gold-dark font-montserrat font-semibold uppercase tracking-wider">{{ article.category }}</span>
    <h3 class="font-montserrat font-bold text-lg text-noir-logo mt-2 mb-2 group-hover:text-gold-dark transition-colors">{{ article.title }}</h3>
    <p class="text-sm text-noir-texte/60 mb-4">{{ article.excerpt }}</p>
    <div class="flex items-center justify-between text-xs text-noir-texte/40">
      <span>{{ article.date }}</span>
      <NuxtLink :to="`/news/${article.slug}`" class="text-gold-dark font-medium hover:underline">Lire →</NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { NewsArticle } from '~/types'
defineProps<{ article: NewsArticle }>()
</script>