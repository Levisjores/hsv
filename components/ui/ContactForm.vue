<template>
  <div class="card-premium">
    <div v-if="contactStore.isSuccess" class="text-center py-8">
      <div class="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-4">
        <Icon name="mdi:check" size="32" class="text-green-medium" />
      </div>
      <h3 class="font-montserrat font-bold text-xl text-noir-logo mb-2">Message envoyé.</h3>
      <p class="text-noir-texte/60 mb-6">Notre équipe relations institutionnelles vous répondra rapidement.</p>
      <button @click="contactStore.resetForm()" class="btn-ghost">Envoyer un autre message</button>
    </div>
    <form v-else @submit.prevent="handleSubmit" class="space-y-5">
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label for="firstName" class="block text-sm font-montserrat font-medium text-noir-logo mb-1.5">Prénom *</label>
          <input id="firstName" v-model="form.firstName" type="text" required class="input-field" placeholder="Votre prénom" />
        </div>
        <div>
          <label for="lastName" class="block text-sm font-montserrat font-medium text-noir-logo mb-1.5">Nom *</label>
          <input id="lastName" v-model="form.lastName" type="text" required class="input-field" placeholder="Votre nom" />
        </div>
      </div>
      <div>
        <label for="email" class="block text-sm font-montserrat font-medium text-noir-logo mb-1.5">Email *</label>
        <input id="email" v-model="form.email" type="email" required class="input-field" placeholder="vous@organisation.com" />
      </div>
      <div>
        <label for="organization" class="block text-sm font-montserrat font-medium text-noir-logo mb-1.5">Organisation</label>
        <input id="organization" v-model="form.organization" type="text" class="input-field" placeholder="Nom de votre organisation" />
      </div>
      <div>
        <label for="subject" class="block text-sm font-montserrat font-medium text-noir-logo mb-1.5">Sujet *</label>
        <select id="subject" v-model="form.subject" required class="input-field">
          <option value="" disabled>Choisir un sujet</option>
          <option value="investor">Relations investisseurs</option>
          <option value="partnership">Partenariat stratégique</option>
          <option value="media">Presse & Médias</option>
          <option value="institutional">Relations institutionnelles</option>
          <option value="other">Autre</option>
        </select>
      </div>
      <div>
        <label for="message" class="block text-sm font-montserrat font-medium text-noir-logo mb-1.5">Message *</label>
        <textarea id="message" v-model="form.message" required rows="4" class="input-field resize-none" placeholder="Votre message..."></textarea>
      </div>
      <button type="submit" :disabled="contactStore.isSubmitting" class="btn-primary w-full justify-center">
        <span v-if="contactStore.isSubmitting" class="flex items-center gap-2">
          <Icon name="mdi:loading" size="18" class="animate-spin" /> Envoi en cours...
        </span>
        <span v-else>Envoyer le message</span>
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import type { ContactFormData } from '~/types'
import { useContactStore } from '~/stores/contact'

const contactStore = useContactStore()
const form = reactive<ContactFormData>({ firstName: '', lastName: '', email: '', organization: '', subject: '', message: '' })

const handleSubmit = async () => {
  await contactStore.submitForm({ ...form })
  if (contactStore.isSuccess) Object.assign(form, { firstName: '', lastName: '', email: '', organization: '', subject: '', message: '' })
}
</script>