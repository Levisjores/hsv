<template>
  <div class="relative">
    <div class="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gold/20 transform md:-translate-x-px" />
    <div class="space-y-12">
      <div v-for="(item, index) in items" :key="index"
           class="relative flex items-start gap-6 md:gap-0"
           :class="index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'">
        <div class="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-gold border-2 border-creme transform -translate-x-1/2 mt-1.5 z-10" />
        <div class="ml-12 md:ml-0 md:w-1/2" :class="index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'">
          <span class="text-xs font-montserrat font-semibold text-gold-dark tracking-wider uppercase">{{ item.year }}</span>
          <h3 class="font-montserrat font-bold text-lg text-noir-logo mt-1">{{ item.title }}</h3>
          <p class="text-sm text-noir-texte/60 mt-2">{{ item.description }}</p>
        </div>
        <div class="hidden md:block md:w-1/2" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { TimelineEvent } from '~/types'
defineProps<{ items: TimelineEvent[] }>()
</script>