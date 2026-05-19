// Configuration Nuxt 3 - HYDRA SILICON VALLEY
export default defineNuxtConfig({
  compatibilityDate: '2026-05-19',
  devtools: { enabled: true },

  modules: [
    '@nuxt/image',
    '@nuxt/icon',
    '@pinia/nuxt',
    '@vueuse/motion/nuxt'
  ],

  css: ['~/assets/css/main.css'],

  // PostCSS intégré dans nuxt.config (pas de fichier séparé)
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  // Auto-import des composants dans les sous-dossiers
  components: [
    {
      path: '~/components/global',
      pathPrefix: false,
    },
    {
      path: '~/components/ui',
      pathPrefix: false,
    },
    {
      path: '~/components/sections',
      pathPrefix: false,
    },
  ],

  app: {
    head: {
      title: 'HYDRA SILICON VALLEY - Corporation Technologique Panafricaine',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Enracinés en Afrique. Élevés au niveau mondial.' },
        { property: 'og:title', content: 'HYDRA SILICON VALLEY' },
        { property: 'og:description', content: 'Corporation technologique panafricaine premium' },
        { property: 'og:type', content: 'website' },
        { property: 'og:locale', content: 'fr_FR' },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap' }
      ]
    }
  },

  typescript: {
    strict: true,
    typeCheck: false  // Désactivé pour éviter les faux positifs
  },

  runtimeConfig: {
    public: {
      apiBase: 'https://api.hydrasv.com/v1',
      siteUrl: 'https://hydrasv.com'
    }
  }
})