<template>
  <div>
    <section class="pt-32 pb-16 md:pt-40 md:pb-20 bg-creme">
      <div class="container-custom text-center">
        <h1 class="font-georgia text-4xl md:text-5xl text-noir-logo mb-6">Contact Institutionnel</h1>
        <p class="text-lg text-noir-texte/60 max-w-3xl mx-auto">Relations investisseurs, partenariats stratégiques, médias.</p>
      </div>
    </section>
    <section class="section-padding bg-white">
      <div class="container-custom grid md:grid-cols-3 gap-12">
        <div class="md:col-span-2">
          <ContactForm />
        </div>
        <div class="space-y-6">
          <div class="card-premium">
            <h3 class="font-montserrat font-bold text-lg mb-4">Siège Social</h3>
            <p class="text-sm text-noir-texte/60">Awae Escalier<br />Yaoundé, Cameroun</p>
          </div>
          <div class="card-premium">
            <h3 class="font-montserrat font-bold text-lg mb-4">Presse</h3>
            <p class="text-sm text-noir-texte/60">media@hydrasv.com</p>
          </div>
          <div class="card-premium bg-gold/5 border-gold/30">
            <h3 class="font-montserrat font-bold text-lg mb-2">Investisseurs</h3>
            <p class="text-sm text-noir-texte/60"><a href="mailto:hydrasiliconvalley@gmail.com">hydrasiliconvalley@gmail.comc</a></p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import ContactForm from '~/components/ui/ContactForm.vue'
useHead({ title: 'Contact - HSV' })
</script>