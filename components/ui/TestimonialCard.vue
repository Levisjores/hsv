<template>
  <div class="card-premium">
    <!-- Quote -->
    <Icon name="mdi:format-quote-open" size="32" class="text-gold/30 mb-4" />
    <p class="text-noir-texte/70 leading-relaxed mb-6 italic">"{{ testimonial.content }}"</p>

    <!-- Auteur -->
    <div class="flex items-center gap-3">
      <div class="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
        <span class="font-montserrat font-bold text-gold-dark text-sm">
          {{ testimonial.name.charAt(0) }}
        </span>
      </div>
      <div>
        <p class="font-montserrat font-semibold text-sm text-noir-logo">{{ testimonial.name }}</p>
        <p class="text-xs text-noir-texte/50">{{ testimonial.role }}, {{ testimonial.company }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Testimonial } from '~/types'

defineProps<{
  testimonial: Testimonial
}>()
</script>