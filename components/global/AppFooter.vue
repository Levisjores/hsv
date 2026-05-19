<template>
  <footer class="bg-noir-logo text-white">
    <!-- Ligne dorée supérieure -->
    <div class="h-0.5 bg-gold/40" />

    <div class="container-custom py-16 md:py-20">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
        <!-- Colonne 1 : Marque -->
        <div class="lg:col-span-2">
          <div class="flex items-center gap-3 mb-4">
            <div class="w-10 h-10 rounded-sm bg-gold flex items-center justify-center text-noir-logo font-georgia font-bold text-lg">
              H
            </div>
            <div>
              <p class="font-montserrat font-semibold text-sm tracking-widest uppercase">HYDRA SILICON VALLEY</p>
              <p class="text-xs text-white/50 tracking-wide">Enracinés en Afrique. Élevés au niveau mondial.</p>
            </div>
          </div>
          <p class="text-white/60 text-sm leading-relaxed max-w-sm">
            Corporation technologique panafricaine. Nous créons des solutions innovantes pour propulser l'Afrique dans l'ère numérique mondiale.
          </p>
        </div>

        <!-- Colonne 2 : Corporation -->
        <div>
          <h4 class="font-montserrat font-semibold text-xs uppercase tracking-widest text-gold mb-4">Corporation</h4>
          <ul class="space-y-2">
            <li v-for="link in FOOTER_NAVIGATION.corporation" :key="link.to">
              <NuxtLink :to="link.to" class="text-sm text-white/60 hover:text-gold-light transition-colors">
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Colonne 3 : Services -->
        <div>
          <h4 class="font-montserrat font-semibold text-xs uppercase tracking-widest text-gold mb-4">Services</h4>
          <ul class="space-y-2">
            <li v-for="link in FOOTER_NAVIGATION.services" :key="link.to">
              <NuxtLink :to="link.to" class="text-sm text-white/60 hover:text-gold-light transition-colors">
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Colonne 4 : Écosystème -->
        <div>
          <h4 class="font-montserrat font-semibold text-xs uppercase tracking-widest text-gold mb-4">Écosystème</h4>
          <ul class="space-y-2">
            <li v-for="link in FOOTER_NAVIGATION.ecosystem" :key="link.to">
              <NuxtLink :to="link.to" class="text-sm text-white/60 hover:text-gold-light transition-colors">
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>

      <!-- Séparateur -->
      <div class="h-px bg-white/10 my-10" />

      <!-- Bottom bar -->
      <div class="flex flex-col sm:flex-row items-center justify-between gap-4">
        <p class="text-xs text-white/40">
          &copy; {{ new Date().getFullYear() }} HYDRA SILICON VALLEY. Tous droits réservés.
        </p>
        <div class="flex items-center gap-6">
          <a v-for="social in SOCIAL_LINKS" :key="social.label" :href="social.url" target="_blank" rel="noopener noreferrer"
             class="text-white/40 hover:text-gold-light transition-colors" :aria-label="social.label">
            <Icon :name="social.icon" size="20" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { FOOTER_NAVIGATION, SOCIAL_LINKS } from '~/constants/navigation'
</script>