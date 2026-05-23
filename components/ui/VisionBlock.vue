<template>
  <div class="card-premium border-l-4 border-l-gold">
    <div class="flex items-start gap-4">
      <div class="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
        <Icon :name="icon" size="24" class="text-gold-dark" />
      </div>
      <div>
        <h3 class="font-montserrat font-bold text-lg text-noir-logo mb-2">{{ title }}</h3>
        <p class="text-noir-texte/60 leading-relaxed">{{ description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{ title: string; description: string; icon: string }>()
</script>