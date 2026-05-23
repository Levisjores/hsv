<template>
  <div>
    <section class="pt-32 pb-16 md:pt-40 md:pb-20 bg-creme">
      <div class="container-custom text-center">
        <h1 class="font-georgia text-4xl md:text-5xl text-noir-logo mb-6">Vision 2070</h1>
        <p class="text-lg text-noir-texte/60 max-w-3xl mx-auto">Une ambition sur cinq décennies pour transformer l'Afrique en acteur numérique souverain.</p>
      </div>
    </section>

    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          <VisionBlock icon="mdi:shield-account" title="Souveraineté Numérique" description="Infrastructures cloud, données hébergées localement, normes africaines." />
          <VisionBlock icon="mdi:school" title="Capital Humain" description="Former les talents tech de demain pour réduire la dépendance extérieure." />
          <VisionBlock icon="mdi:chart-line" title="Industrialisation" description="Créer des filières technologiques compétitives à l'échelle mondiale." />
          <VisionBlock icon="mdi:handshake" title="Partenariats Stratégiques" description="Alliances avec gouvernements, universités et leaders mondiaux." />
          <VisionBlock icon="mdi:leaf" title="Innovation Durable" description="Technologies vertes, énergies renouvelables pour les data centers." />
          <VisionBlock icon="mdi:earth" title="Expansion Panafricaine" description="Présence dans les 54 pays africains d'ici 2050." />
        </div>

        <SectionTitle title="Feuille de route" subtitle="Les grandes étapes de notre développement." />
        <Timeline :items="VISION_TIMELINE" />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { VISION_TIMELINE } from '~/constants/data'
import SectionTitle from '~/components/ui/SectionTitle.vue'
import VisionBlock from '~/components/ui/VisionBlock.vue'
import Timeline from '~/components/ui/Timeline.vue'
useHead({ title: 'Vision 2070 - HSV' })
</script>