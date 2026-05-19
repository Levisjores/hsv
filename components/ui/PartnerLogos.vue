<template>
  <div class="flex flex-wrap items-center justify-center gap-8 md:gap-12">
    <div v-for="partner in partners" :key="partner"
         class="h-8 opacity-30 hover:opacity-60 transition-opacity duration-300">
      <div class="h-full flex items-center">
        <span class="text-sm font-montserrat font-semibold text-noir-texte/40 tracking-widest uppercase">
          {{ partner }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  partners: string[]
}>()
</script>