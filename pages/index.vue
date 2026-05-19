<template>
  <div>
    <HeroSection />
    <HomeServices />
    <HomeStats />
    <HomeVision />
    <HomeInnovation />
    <HomeInvest />
    <HomePartners />

    <!-- Témoignages -->
    <section class="section-padding bg-creme">
      <div class="container-custom">
        <SectionTitle title="Ce qu'ils disent de nous" subtitle="La confiance de nos partenaires est notre plus grande fierté." />
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <TestimonialCard v-for="t in TESTIMONIALS" :key="t.id" :testimonial="t" />
        </div>
      </div>
    </section>

    <!-- CTA Contact -->
    <CTASection
      title="Prêt à transformer votre vision en réalité ?"
      description="Discutons de votre projet et explorons comment HYDRA SILICON VALLEY peut vous accompagner."
      primary-label="Nous contacter"
      primary-to="/contact"
      variant="dark"
    />
  </div>
</template>

<script setup lang="ts">
import { TESTIMONIALS } from '~/constants/services'
import HeroSection from '~/components/ui/HeroSection.vue'
import HomeServices from '~/components/sections/HomeServices.vue'
import HomeStats from '~/components/sections/HomeStats.vue'
import HomeVision from '~/components/sections/HomeVision.vue'
import HomeInnovation from '~/components/sections/HomeInnovation.vue'
import HomeInvest from '~/components/sections/HomeInvest.vue'
import HomePartners from '~/components/sections/HomePartners.vue'
import SectionTitle from '~/components/ui/SectionTitle.vue'
import TestimonialCard from '~/components/ui/TestimonialCard.vue'
import CTASection from '~/components/ui/CTASection.vue'

useHead({
  title: 'HYDRA SILICON VALLEY - Corporation Technologique Panafricaine',
  meta: [
    { name: 'description', content: 'Enracinés en Afrique. Élevés au niveau mondial. Corporation technologique panafricaine - Innovation, Cloud, IA, Cybersécurité.' }
  ]
})
</script>