/**
 * Plugin Motion - configuration globale des animations
 */
export default defineNuxtPlugin(() => {
  // Configuration par défaut pour @vueuse/motion
  // Les animations sont volontairement sobres et premium
  return {
    provide: {
      motion: {
        defaults: {
          initial: { opacity: 0 },
          enter: { opacity: 1 }
        }
      }
    }
  }
})