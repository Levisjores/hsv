import { defineStore } from 'pinia'
import type { ContactFormData } from '~/types'
import { ref } from 'vue'

export const useContactStore = defineStore('contact', () => {
  const isSubmitting = ref(false)
  const numero = "237673713395";
  let message = "";
  let MessageEncode ="";
  const isSuccess = ref(false)
  const error = ref<string | null>(null)

  async function submitForm(data: ContactFormData) {
    message = "Bonjour HSV je suis " + data.firstName +" " + data.lastName + " \n" + "E-mail: " + data.email + " \n" + " Nous somme l'entreprise " + data.organization +  " et nous voulons parlé de " + data.subject + " \n" + data.message
    MessageEncode = encodeURIComponent(message);
    const url = `https://api.whatsapp.com/send?phone=${numero}&text=${MessageEncode}`
    window.open(url, "_blank", "noopener,noreferrer");
    isSubmitting.value = true
    error.value = null
    isSuccess.value = false
    await new Promise(resolve => setTimeout(resolve, 1500)) // mock
    isSuccess.value = true
    isSubmitting.value = false
  }

  function resetForm() { isSuccess.value = false }

  return { isSubmitting, isSuccess, error, submitForm, resetForm }
})