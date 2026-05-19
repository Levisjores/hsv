<template>
  <section class="section-padding bg-white relative overflow-hidden">
    <HexagonDecoration class="absolute -top-20 -right-20 opacity-5" :size="400" />
    <div class="container-custom relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- Texte -->
        <div>
          <SectionTitle
            title="Innovation & Excellence"
            subtitle="Nous combinons expertise mondiale et compréhension fine des réalités africaines."
            alignment="left"
          />
          <p class="text-noir-texte/70 leading-relaxed mb-6">
            Notre approche unique allie les standards internationaux de qualité à une connaissance approfondie
            des marchés africains. Nous créons des solutions qui répondent aux vrais besoins du continent.
          </p>
          <ul class="space-y-3">
            <li v-for="item in innovationPoints" :key="item" class="flex items-center gap-3 text-sm text-noir-texte/70">
              <Icon name="mdi:hexagon-outline" size="18" class="text-gold flex-shrink-0" />
              {{ item }}
            </li>
          </ul>
        </div>

        <!-- Visuel abstrait -->
        <div class="flex items-center justify-center">
          <div class="relative">
            <HexagonDecoration :size="250" stroke-color="#C9A84C" :stroke-width="1.5" class="opacity-30" />
            <HexagonDecoration :size="180" stroke-color="#1B5E20" :stroke-width="1" class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-40" />
            <HexagonDecoration :size="110" stroke-color="#C9A84C" :stroke-width="2" class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-60" />
            <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center">
              <Icon name="mdi:lightbulb-outline" size="24" class="text-gold-dark" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import SectionTitle from '~/components/ui/SectionTitle.vue'

const innovationPoints = [
  'Méthodologie agile certifiée ISO',
  'Centre R&D basé à Abidjan',
  'Partenariats avec les meilleures universités africaines',
  'Programme de formation continue pour nos équipes',
  'Veille technologique permanente'
]
</script>