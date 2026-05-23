import type { NavItem } from '~/types'

export const MAIN_NAVIGATION: NavItem[] = [
  { label: 'Accueil', to: '/' },
  { label: 'Corporation', to: '/corporation' },
  { label: 'Écosystème', to: '/ecosystem' },
  { label: 'Vision', to: '/vision' },
  { label: 'Investisseurs', to: '/investors' },
  { label: 'Actualités', to: '/news' },
  { label: 'Contact', to: '/contact' }
]

export const FOOTER_NAVIGATION = {
  corporation: [
    { label: 'À propos', to: '/corporation' },
    { label: 'Gouvernance', to: '/corporation#gouvernance' },
    { label: 'Vision', to: '/vision' }
  ],
  ecosystem: [
    { label: 'HSV TECH', to: '/ecosystem' },
    { label: 'HSV HEALTH', to: '/ecosystem' },
    { label: 'HSV CLOUD', to: '/ecosystem' },
    { label: 'HSV AI', to: '/ecosystem' },
    { label: 'HSV FINANCE', to: '/ecosystem' },
    { label: 'HSV EDUCATION', to: '/ecosystem' }
  ],
  media: [
    { label: 'Actualités', to: '/news' },
    { label: 'Presse', to: '/contact' }
  ]
}

export const SOCIAL_LINKS = [
  { label: 'LinkedIn', url: '#', icon: 'mdi:linkedin' },
  { label: 'Twitter', url: '#', icon: 'mdi:twitter' }
]