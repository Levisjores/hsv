import type { NavItem } from '~/types'

export const MAIN_NAVIGATION: NavItem[] = [
  { label: 'Accueil', to: '/' },
  { label: 'À propos', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Écosystème', to: '/ecosystem' },
  { label: 'Contact', to: '/contact' }
]

export const FOOTER_NAVIGATION = {
  corporation: [
    { label: 'À propos', to: '/about' },
    { label: 'Équipe', to: '/about#team' },
    { label: 'Vision', to: '/about#vision' },
    { label: 'Carrières', to: '/contact' }
  ],
  services: [
    { label: 'Développement', to: '/services' },
    { label: 'Cloud', to: '/services' },
    { label: 'Cybersécurité', to: '/services' },
    { label: 'IA', to: '/services' }
  ],
  ecosystem: [
    { label: 'HSV TECH', to: '/ecosystem' },
    { label: 'HSV HEALTH', to: '/ecosystem' },
    { label: 'HSV CLOUD', to: '/ecosystem' },
    { label: 'HSV AI', to: '/ecosystem' }
  ],
  legal: [
    { label: 'Mentions légales', to: '/legal' },
    { label: 'Confidentialité', to: '/privacy' },
    { label: 'Cookies', to: '/cookies' }
  ]
}

export const SOCIAL_LINKS = [
  { label: 'LinkedIn', url: '#', icon: 'mdi:linkedin' },
  { label: 'Twitter', url: '#', icon: 'mdi:twitter' },
  { label: 'YouTube', url: '#', icon: 'mdi:youtube' }
]