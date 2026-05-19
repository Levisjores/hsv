<template>
  <div>
    <!-- Hero -->
    <section class="pt-32 pb-16 md:pt-40 md:pb-20 bg-creme">
      <div class="container-custom">
        <div class="max-w-3xl mx-auto text-center">
          <span class="text-xs font-montserrat font-semibold text-gold-dark tracking-widest uppercase">Contact</span>
          <h1 class="font-georgia text-4xl md:text-5xl text-noir-logo mt-4 mb-6">Parlons de votre projet</h1>
          <p class="text-lg text-noir-texte/60 leading-relaxed">
            Notre équipe est à votre écoute pour discuter de vos besoins et explorer comment nous pouvons vous aider.
          </p>
        </div>
      </div>
    </section>

    <!-- Contact + Infos -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <!-- Formulaire -->
          <div class="lg:col-span-2">
            <ContactForm />
          </div>

          <!-- Infos -->
          <div class="space-y-8">
            <div>
              <h3 class="font-montserrat font-bold text-lg text-noir-logo mb-4">Informations</h3>
              <div class="space-y-4">
                <div class="flex items-start gap-3">
                  <Icon name="mdi:map-marker-outline" size="20" class="text-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <p class="text-sm font-medium text-noir-logo">Siège Social</p>
                    <p class="text-sm text-noir-texte/60">Plateau, Immeuble Signal<br />Abidjan, Côte d'Ivoire</p>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <Icon name="mdi:email-outline" size="20" class="text-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <p class="text-sm font-medium text-noir-logo">Email</p>
                    <p class="text-sm text-noir-texte/60">contact@hydrasv.com</p>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <Icon name="mdi:phone-outline" size="20" class="text-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <p class="text-sm font-medium text-noir-logo">Téléphone</p>
                    <p class="text-sm text-noir-texte/60">+225 27 22 00 00 00</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- CTA Investisseur -->
            <div class="card-premium bg-gold/5 border-gold/30">
              <Icon name="mdi:handshake" size="28" class="text-gold-dark mb-3" />
              <h4 class="font-montserrat font-bold text-noir-logo mb-2">Investisseurs</h4>
              <p class="text-sm text-noir-texte/60 mb-4">
                Vous souhaitez investir dans la tech africaine ? Contactez directement notre équipe dédiée.
              </p>
              <a href="mailto:invest@hydrasv.com" class="text-sm font-montserrat font-semibold text-gold-dark hover:text-gold">
                invest@hydrasv.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import ContactForm from '~/components/ui/ContactForm.vue'
    
useHead({
  title: 'Contact - HYDRA SILICON VALLEY'
})
</script>