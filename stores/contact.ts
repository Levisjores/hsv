import { defineStore } from 'pinia'
import type { ContactFormData } from '~/types'
import { ref } from 'vue'

export const useContactStore = defineStore('contact', () => {
  const isSubmitting = ref(false)
  const isSuccess = ref(false)
  const error = ref<string | null>(null)

  async function submitForm(data: ContactFormData) {
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