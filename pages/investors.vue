<template>
  <div>
    <section class="pt-32 pb-16 md:pt-40 md:pb-20 bg-creme">
      <div class="container-custom text-center">
        <h1 class="font-georgia text-4xl md:text-5xl text-noir-logo mb-6">Investisseurs</h1>
        <p class="text-lg text-noir-texte/60 max-w-3xl mx-auto">Rejoignez les partenaires qui construisent avec nous l'avenir technologique africain.</p>
      </div>
    </section>

    <section class="section-padding bg-white">
      <div class="container-custom grid md:grid-cols-3 gap-8">
        <div class="card-premium text-center">
          <Icon name="mdi:chart-timeline-variant" size="36" class="text-gold-dark mb-4" />
          <h3 class="font-montserrat font-bold text-lg mb-2">Croissance Structurelle</h3>
          <p class="text-sm text-noir-texte/60">Un portefeuille diversifié dans les secteurs les plus porteurs du numérique africain.</p>
        </div>
        <div class="card-premium text-center">
          <Icon name="mdi:shield-check" size="36" class="text-gold-dark mb-4" />
          <h3 class="font-montserrat font-bold text-lg mb-2">Gouvernance Transparente</h3>
          <p class="text-sm text-noir-texte/60">Conseil d'administration indépendant, audits réguliers, reporting institutionnel.</p>
        </div>
        <div class="card-premium text-center">
          <Icon name="mdi:earth" size="36" class="text-gold-dark mb-4" />
          <h3 class="font-montserrat font-bold text-lg mb-2">Impact Panafricain</h3>
          <p class="text-sm text-noir-texte/60">Un investissement à fort impact social et économique sur tout le continent.</p>
        </div>
      </div>
    </section>

    <section class="section-padding bg-creme">
      <div class="container-custom max-w-2xl mx-auto">
        <SectionTitle title="Contact Investisseurs" subtitle="Notre équipe dédiée vous répond sous 48h." />
        <ContactForm />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import SectionTitle from '~/components/ui/SectionTitle.vue'
import ContactForm from '~/components/ui/ContactForm.vue'
useHead({ title: 'Investisseurs - HSV' })
</script>