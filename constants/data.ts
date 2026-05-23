import type { Filiale, TimelineEvent, Statistic, NewsArticle, GovernanceMember } from '~/types'

export const FILIALES: Filiale[] = [
  {
    id: 'hsv-tech',
    name: 'HSV TECH',
    acronym: 'HSV-T',
    description: 'Solutions logicielles enterprise pour l\'Afrique et l\'international.',
    sector: 'Logiciels & Transformation Digitale',
    status: 'active',
    color: 'gold',
    icon: 'mdi:code-tags',
    vision: 'Devenir le leader africain des solutions logicielles d\'entreprise.',
    futureUrl: 'https://tech.hydrasv.com'
  },
  {
    id: 'hsv-health',
    name: 'HSV HEALTH',
    acronym: 'HSV-H',
    description: 'Technologies pour la santé : télémédecine, dossiers patients, logistique médicale.',
    sector: 'Santé Digitale',
    status: 'planned',
    color: 'green',
    icon: 'mdi:heart-pulse',
    vision: 'Rendre les soins de santé accessibles à tous grâce à la technologie.',
    futureUrl: 'https://health.hydrasv.com'
  },
  {
    id: 'hsv-cloud',
    name: 'HSV CLOUD',
    acronym: 'HSV-C',
    description: 'Infrastructure cloud souveraine africaine, garantissant la localisation des données.',
    sector: 'Cloud & Infrastructure',
    status: 'upcoming',
    color: 'gold',
    icon: 'mdi:server',
    vision: 'Bâtir le cloud de confiance du continent africain.',
    futureUrl: 'https://cloud.hydrasv.com'
  },
  {
    id: 'hsv-ai',
    name: 'HSV AI',
    acronym: 'HSV-AI',
    description: 'Centre d\'excellence en intelligence artificielle, recherche et solutions IA.',
    sector: 'Intelligence Artificielle',
    status: 'planned',
    color: 'green',
    icon: 'mdi:brain',
    vision: 'Faire de l\'IA un levier de développement inclusif en Afrique.',
    futureUrl: 'https://ai.hydrasv.com'
  },
  {
    id: 'hsv-finance',
    name: 'HSV FINANCE',
    acronym: 'HSV-F',
    description: 'Technologies financières : mobile money, banking, blockchain, inclusion financière.',
    sector: 'FinTech & Services Financiers',
    status: 'upcoming',
    color: 'gold',
    icon: 'mdi:finance',
    vision: 'Créer l\'infrastructure financière numérique de l\'Afrique.',
    futureUrl: 'https://finance.hydrasv.com'
  },
  {
    id: 'hsv-education',
    name: 'HSV EDUCATION',
    acronym: 'HSV-E',
    description: 'Plateforme éducative panafricaine pour former les talents tech de demain.',
    sector: 'Éducation & Formation',
    status: 'planned',
    color: 'green',
    icon: 'mdi:school',
    vision: 'Former 1 million de talents africains aux métiers du numérique d\'ici 2035.',
    futureUrl: 'https://education.hydrasv.com'
  }
]

export const VISION_TIMELINE: TimelineEvent[] = [
  { year: '2020', title: 'Fondation de HSV', description: 'Création de la corporation avec une vision panafricaine à long terme.' },
  { year: '2022', title: 'Lancement de HSV TECH', description: 'Première filiale opérationnelle dans les logiciels d\'entreprise.' },
  { year: '2024', title: 'Expansion continentale', description: 'Présence établie dans 25 pays africains, siège à Abidjan.' },
  { year: '2026', title: 'Création de HSV HEALTH et HSV AI', description: 'Entrée dans les secteurs de la santé et de l\'intelligence artificielle.' },
  { year: '2028', title: 'Lancement de HSV CLOUD', description: 'Mise en service du cloud souverain africain.' },
  { year: '2030', title: 'Déploiement de HSV FINANCE', description: 'Services financiers numériques panafricains.' },
  { year: '2035', title: 'HSV EDUCATION : 1 million de talents', description: 'Objectif de formation atteint, partenariats universitaires majeurs.' },
  { year: '2050', title: 'Leader technologique panafricain', description: 'Écosystème complet, présent dans tous les secteurs stratégiques.' },
  { year: '2070', title: 'Vision 2070', description: 'Avoir contribué à faire de l\'Afrique un continent numérique souverain et prospère.' }
]

export const STATISTICS: Statistic[] = [
  { id: 'countries', label: 'Pays de présence', value: 25, suffix: '' },
  { id: 'subsidiaries', label: 'Filiales créées', value: 6, suffix: '' },
  { id: 'talent', label: 'Talents mobilisés', value: 500, suffix: '+' },
  { id: 'partners', label: 'Partenaires stratégiques', value: 80, suffix: '+' }
]

export const NEWS_ARTICLES: NewsArticle[] = [
  {
    id: '1',
    title: 'HYDRA SILICON VALLEY ouvre son nouveau siège au Plateau, Abidjan',
    excerpt: 'Un immeuble emblématique pour incarner l’ambition technologique panafricaine.',
    category: 'Institutionnel',
    date: '2025-06-15',
    slug: 'nouveau-siege-abidjan'
  },
  {
    id: '2',
    title: 'Partenariat stratégique avec l’Union Africaine pour la transformation digitale',
    excerpt: 'HSV accompagnera les États membres dans leur stratégie de digitalisation.',
    category: 'Partenariats',
    date: '2025-05-20',
    slug: 'partenariat-ua'
  },
  {
    id: '3',
    title: 'HSV CLOUD : première infrastructure souveraine africaine',
    excerpt: 'Le projet entre en phase de déploiement avec un data center à Lagos.',
    category: 'Innovation',
    date: '2025-04-10',
    slug: 'hsv-cloud-deploiement'
  }
]

export const GOVERNANCE: GovernanceMember[] = [
  {
    id: 'ceo',
    name: 'Dr. Koffi Mensah',
    role: 'Fondateur & Président Directeur Général',
    bio: 'Visionnaire de la tech africaine, 20 ans d\'expérience en Silicon Valley et en Afrique. Ancien VP Engineering chez un grand cloud provider.'
  },
  {
    id: 'cto',
    name: 'Amina Diop',
    role: 'Directrice Générale Adjointe, Technologie',
    bio: 'Experte en architectures distribuées, ancienne lead engineer chez Google. Doctorat en informatique de l\'Université de Cape Town.'
  },
  {
    id: 'coo',
    name: 'Pierre Nkosi',
    role: 'Directeur Général Adjoint, Opérations & Expansion',
    bio: 'Spécialiste de la transformation digitale, 15 ans de conseil en stratégie auprès de gouvernements africains.'
  },
  {
    id: 'cfo',
    name: 'Fatima Sow',
    role: 'Directrice Financière',
    bio: 'Ancienne directrice des investissements chez un fonds panafricain. Expertise en levée de fonds et structuration financière.'
  }
]