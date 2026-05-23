<template>
  <div>
    <section class="pt-32 pb-16 md:pt-40 md:pb-20 bg-creme">
      <div class="container-custom text-center">
        <h1 class="font-georgia text-4xl md:text-5xl text-noir-logo mb-6">La Corporation</h1>
        <p class="text-lg text-noir-texte/60 max-w-3xl mx-auto">Une institution panafricaine bâtie pour durer, guidée par une vision claire et une gouvernance solide.</p>
      </div>
    </section>

    <!-- Mission & Valeurs -->
    <section class="section-padding bg-white">
      <div class="container-custom grid md:grid-cols-2 gap-12">
        <div>
          <SectionTitle title="Notre Mission" alignment="left" />
          <p class="text-noir-texte/70 leading-relaxed">Catalyser la transformation numérique de l'Afrique en créant un écosystème technologique intégré, porteur de souveraineté et de prospérité.</p>
        </div>
        <div class="space-y-4">
          <div v-for="v in values" :key="v.title" class="card-premium border-l-4 border-l-gold">
            <h3 class="font-montserrat font-bold text-lg text-noir-logo">{{ v.title }}</h3>
            <p class="text-sm text-noir-texte/60">{{ v.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Gouvernance -->
    <section class="section-padding bg-creme" id="gouvernance">
      <div class="container-custom">
        <SectionTitle title="Gouvernance" subtitle="Une équipe dirigeante expérimentée au service d'une ambition continentale." />
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div v-for="member in GOVERNANCE" :key="member.id" class="card-premium text-center">
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
  </div>
</template>

<script setup lang="ts">
import { GOVERNANCE } from '~/constants/data'
import SectionTitle from '~/components/ui/SectionTitle.vue'

const values = [
  { title: 'Excellence', description: 'Nous visons l\'excellence dans chaque initiative, chaque partenariat.' },
  { title: 'Souveraineté', description: 'Nous œuvrons pour l\'autonomie technologique du continent africain.' },
  { title: 'Impact', description: 'Chaque filiale doit générer un impact économique et social mesurable.' },
  { title: 'Intégrité', description: 'Transparence et éthique sont les fondations de notre gouvernance.' }
]
useHead({ title: 'Corporation - HSV' })
</script>