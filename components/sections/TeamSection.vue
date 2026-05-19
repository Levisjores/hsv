<template>
  <section class="section-padding bg-white">
    <div class="container-custom">
      <SectionTitle title="Notre Équipe Dirigeante" subtitle="Des leaders expérimentés guidés par une vision commune." />
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div v-for="member in TEAM_MEMBERS" :key="member.id" class="card-premium text-center">
          <div class="w-20 h-20 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-4">
            <span class="font-georgia text-2xl text-gold-dark">{{ member.name.charAt(0) }}</span>
          </div>
          <h3 class="font-montserrat font-bold text-lg text-noir-logo">{{ member.name }}</h3>
          <p class="text-sm text-gold-dark font-medium mb-3">{{ member.role }}</p>
          <p class="text-sm text-noir-texte/60">{{ member.bio }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { TEAM_MEMBERS } from '~/constants/services'
import SectionTitle from '~/components/ui/SectionTitle.vue'
</script>