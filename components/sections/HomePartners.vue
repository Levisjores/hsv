<template>
  <section class="py-12 bg-white border-t border-sable-dore/30">
    <div class="container-custom">
      <p class="text-center text-xs font-montserrat font-semibold text-noir-texte/30 uppercase tracking-widest mb-8">
        Ils nous font confiance
      </p>
      <PartnerLogos :partners="['ORANGE', 'ECOBANK', 'MTN', 'BOLLORÉ', 'TOTAL', 'AIR FRANCE']" />
    </div>
  </section>
</template>

<script setup lang="ts">
import PartnerLogos from '~/components/ui/PartnerLogos.vue'
</script>