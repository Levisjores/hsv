<template>
  <div>
    <AboutHero />

    <!-- Mission & Valeurs -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionTitle title="Notre Mission" alignment="left" />
            <p class="text-noir-texte/70 leading-relaxed mb-6">
              HYDRA SILICON VALLEY a pour mission de catalyser la transformation numérique de l'Afrique
              en créant des solutions technologiques d'excellence, portées par des talents africains.
            </p>
            <p class="text-noir-texte/70 leading-relaxed">
              Nous croyons que la technologie est le levier le plus puissant pour accélérer le développement
              économique et social du continent. Notre approche combine standards internationaux et adaptation
              aux réalités locales.
            </p>
          </div>
          <div class="space-y-4">
            <div v-for="valeur in valeurs" :key="valeur.titre" class="card-premium border-l-4 border-l-gold">
              <h3 class="font-montserrat font-bold text-lg text-noir-logo mb-1">{{ valeur.titre }}</h3>
              <p class="text-sm text-noir-texte/60">{{ valeur.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Vision 50 ans -->
    <section class="section-padding bg-noir-logo">
      <div class="container-custom text-center">
        <h2 class="font-georgia text-3xl md:text-4xl text-white mb-6">Notre Vision 2050</h2>
        <p class="text-white/60 text-lg max-w-3xl mx-auto mb-12">
          Devenir le leader incontesté de la technologie en Afrique, avec un écosystème intégré
          couvrant tous les secteurs stratégiques : logiciel, cloud, IA, santé, finance, éducation.
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div v-for="obj in objectifs" :key="obj" class="text-center p-6">
            <div class="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-3">
              <Icon name="mdi:target" size="24" class="text-gold" />
            </div>
            <p class="text-white/80 text-sm">{{ obj }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Équipe -->
    <TeamSection />

    <!-- CTA -->
    <CTASection
      title="Rejoignez l'aventure HSV"
      description="Nous recrutons les meilleurs talents africains pour construire l'avenir technologique du continent."
      primary-label="Nous contacter"
      primary-to="/contact"
      secondary-label="Voir nos services"
      secondary-to="/services"
      variant="gold"
    />
  </div>
</template>

<script setup lang="ts">
import SectionTitle from '~/components/ui/SectionTitle.vue'

const valeurs = [
  { titre: 'Excellence', description: 'Nous visons l\'excellence dans chaque ligne de code, chaque projet, chaque relation.' },
  { titre: 'Innovation', description: 'Nous repoussons constamment les limites pour créer des solutions disruptives.' },
  { titre: 'Impact', description: 'Chaque projet doit générer un impact mesurable et positif pour l\'Afrique.' },
  { titre: 'Intégrité', description: 'Transparence et éthique sont au cœur de toutes nos actions.' }
]

const objectifs = [
  'Présence dans 54 pays africains',
  '10 000 experts formés',
  'Cloud souverain africain opérationnel',
  'Leader en IA pour l\'Afrique'
]

useHead({
  title: 'À propos - HYDRA SILICON VALLEY'
})
</script>