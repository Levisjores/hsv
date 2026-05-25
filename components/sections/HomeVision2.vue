<template>
  <section class="section-padding bg-creme">
    <div class="container-custom">
      <SectionTitle
        title="Notre Vision"
        subtitle="Construire l'écosystème technologique panafricain de demain."
      />
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <VisionBlock
          icon="mdi:earth"
          title="Ancrage Africain"
          description="Des solutions conçues pour et par l'Afrique, adaptées aux réalités locales avec une ambition mondiale."
        />
        <VisionBlock
          icon="mdi:rocket-launch-outline"
          title="Innovation Continue"
          description="Recherche et développement permanents pour rester à la pointe des technologies émergentes."
        />
        <VisionBlock
          icon="mdi:handshake"
          title="Impact Durable"
          description="Création de valeur à long terme pour nos partenaires, nos clients et le continent africain."
        />
      </div>

      <!-- Timeline -->
      <div class="mt-20">
        <SectionTitle title="Notre Histoire & Futur" alignment="center" />
        <Timeline :items="timelineItems" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import SectionTitle from '~/components/ui/SectionTitle.vue'
import VisionBlock from '~/components/ui/VisionBlock.vue'
import Timeline from '~/components/ui/Timeline.vue'

const timelineItems = [
  { year: '2026', title: 'Fondation de HSV', description: 'Création de la corporation avec une vision panafricaine.' },
  { year: '2028', title: 'Lancement HSV TECH', description: 'Objectif : première filiale opérationnelle - solutions logicielles enterprise.' },
  { year: '2030', title: 'Expansion continentale', description: 'Présence dans 25 pays africains, 150+ projets livrés.' },
  { year: '2032', title: 'Lancement HSV HEALTH & HSV AI', description: 'Entrée dans la santé numérique et l\'intelligence artificielle.' },
  { year: '2034', title: 'HSV CLOUD - Cloud souverain', description: 'Infrastructure cloud panafricaine pour la souveraineté des données.' },
  { year: '2036', title: 'Licorne panafricaine', description: 'Objectif : devenir la première licorne technologique panafricaine.' }
]
</script>