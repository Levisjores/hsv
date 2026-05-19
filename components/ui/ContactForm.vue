<template>
  <div class="card-premium">
    <!-- Succès -->
    <div v-if="contactStore.isSuccess" class="text-center py-8">
      <div class="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-4">
        <Icon name="mdi:check" size="32" class="text-green-medium" />
      </div>
      <h3 class="font-montserrat font-bold text-xl text-noir-logo mb-2">Message envoyé !</h3>
      <p class="text-noir-texte/60 mb-6">Notre équipe vous répondra dans les 48h.</p>
      <button @click="contactStore.resetForm()" class="btn-ghost">Envoyer un autre message</button>
    </div>

    <!-- Formulaire -->
    <form v-else @submit.prevent="handleSubmit" class="space-y-5">
      <div>
        <label for="name" class="block text-sm font-montserrat font-medium text-noir-logo mb-1.5">Nom complet *</label>
        <input
          id="name"
          v-model="form.name"
          type="text"
          required
          class="w-full px-4 py-2.5 border border-sable-dore/50 rounded-sm bg-creme/50 text-noir-texte text-sm
                 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/20 transition-colors"
          placeholder="Votre nom"
        />
      </div>

      <div>
        <label for="email" class="block text-sm font-montserrat font-medium text-noir-logo mb-1.5">Email *</label>
        <input
          id="email"
          v-model="form.email"
          type="email"
          required
          class="w-full px-4 py-2.5 border border-sable-dore/50 rounded-sm bg-creme/50 text-noir-texte text-sm
                 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/20 transition-colors"
          placeholder="vous@entreprise.com"
        />
      </div>

      <div>
        <label for="company" class="block text-sm font-montserrat font-medium text-noir-logo mb-1.5">Entreprise</label>
        <input
          id="company"
          v-model="form.company"
          type="text"
          class="w-full px-4 py-2.5 border border-sable-dore/50 rounded-sm bg-creme/50 text-noir-texte text-sm
                 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/20 transition-colors"
          placeholder="Nom de votre entreprise"
        />
      </div>

      <div>
        <label for="subject" class="block text-sm font-montserrat font-medium text-noir-logo mb-1.5">Sujet *</label>
        <select
          id="subject"
          v-model="form.subject"
          required
          class="w-full px-4 py-2.5 border border-sable-dore/50 rounded-sm bg-creme/50 text-noir-texte text-sm
                 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/20 transition-colors"
        >
          <option value="" disabled>Choisir un sujet</option>
          <option value="Projet">Projet / Collaboration</option>
          <option value="Investissement">Investissement</option>
          <option value="Partenariat">Partenariat</option>
          <option value="Presse">Presse / Médias</option>
          <option value="Autre">Autre</option>
        </select>
      </div>

      <div>
        <label for="message" class="block text-sm font-montserrat font-medium text-noir-logo mb-1.5">Message *</label>
        <textarea
          id="message"
          v-model="form.message"
          required
          rows="4"
          class="w-full px-4 py-2.5 border border-sable-dore/50 rounded-sm bg-creme/50 text-noir-texte text-sm
                 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/20 transition-colors resize-none"
          placeholder="Décrivez votre projet ou demande..."
        />
      </div>

      <!-- Erreur -->
      <div v-if="contactStore.error" class="text-sm text-red-600 bg-red-50 px-4 py-2 rounded-sm">
        {{ contactStore.error }}
      </div>

      <button
        type="submit"
        :disabled="contactStore.isSubmitting"
        class="btn-primary w-full justify-center"
      >
        <span v-if="contactStore.isSubmitting" class="flex items-center gap-2">
          <Icon name="mdi:loading" size="18" class="animate-spin" />
          Envoi en cours...
        </span>
        <span v-else class="flex items-center gap-2">
          Envoyer le message
          <Icon name="mdi:send" size="18" />
        </span>
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import type { ContactFormData } from '~/types'
import { useContactStore } from '~/stores/contact'

const contactStore = useContactStore()

const form = reactive<ContactFormData>({
  name: '',
  email: '',
  company: '',
  subject: '',
  message: ''
})

const handleSubmit = async () => {
  await contactStore.submitForm({ ...form })
  if (contactStore.isSuccess) {
    // Reset form après succès
    form.name = ''
    form.email = ''
    form.company = ''
    form.subject = ''
    form.message = ''
  }
}
</script>