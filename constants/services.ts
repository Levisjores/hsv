import type { Service, Filiale, Statistic, Testimonial, TeamMember } from '~/types'

export const SERVICES: Service[] = [
  {
    id: 'dev',
    title: 'Développement Logiciel',
    description: 'Solutions logicielles sur mesure, de la conception à la mise en production. Expertise en architectures modernes, microservices, et applications cloud-native.',
    icon: 'mdi:code-braces',
    category: 'core',
    features: ['Applications web & mobile', 'Architecture microservices', 'DevOps & CI/CD', 'Quality assurance']
  },
  {
    id: 'cloud',
    title: 'Cloud & Infrastructure',
    description: 'Infrastructure cloud évolutive et sécurisée. Migration, optimisation et gestion complète de votre environnement cloud.',
    icon: 'mdi:cloud-outline',
    category: 'core',
    features: ['Migration cloud', 'Infrastructure as Code', 'Monitoring 24/7', 'Optimisation coûts']
  },
  {
    id: 'cyber',
    title: 'Cybersécurité',
    description: 'Protection avancée de vos actifs numériques. Audit, pentesting, et mise en place de stratégies de sécurité robustes.',
    icon: 'mdi:shield-check-outline',
    category: 'core',
    features: ['Audit de sécurité', 'Pentesting', 'SOC', 'Conformité RGPD']
  },
  {
    id: 'ia',
    title: 'Intelligence Artificielle',
    description: 'Solutions IA sur mesure pour automatiser, prédire et optimiser vos processus métier.',
    icon: 'mdi:robot-outline',
    category: 'core',
    features: ['Machine Learning', 'NLP & Chatbots', 'Computer Vision', 'Analytique prédictive']
  },
  {
    id: 'saas',
    title: 'Solutions SaaS',
    description: 'Plateformes SaaS clé en main, conçues pour évoluer avec votre activité.',
    icon: 'mdi:cloud-check-outline',
    category: 'products',
    features: ['Plateformes multi-tenant', 'Abonnements & billing', 'Tableaux de bord', 'API RESTful']
  },
  {
    id: 'digital',
    title: 'Transformation Digitale',
    description: 'Accompagnement stratégique pour digitaliser vos processus et créer de nouveaux modèles d\'affaires.',
    icon: 'mdi:sync',
    category: 'consulting',
    features: ['Audit digital', 'Stratégie numérique', 'Conduite du changement', 'Formation']
  },
  {
    id: 'vote',
    title: 'Systèmes de Vote Électronique',
    description: 'Solutions de vote électronique sécurisées et transparentes pour élections et assemblées générales.',
    icon: 'mdi:vote-outline',
    category: 'products',
    features: ['Vote en ligne sécurisé', 'Blockchain vérification', 'Résultats en temps réel', 'Audit trail complet']
  },
  {
    id: 'fintech',
    title: 'Plateformes Financières',
    description: 'Plateformes financières robustes pour mobile money, banking et services financiers digitaux.',
    icon: 'mdi:bank-outline',
    category: 'products',
    features: ['Mobile money', 'Core banking', 'Paiement en ligne', 'Conformité bancaire']
  },
  {
    id: 'consulting',
    title: 'Consulting IT',
    description: 'Conseil stratégique en technologies pour aligner votre IT avec vos objectifs business.',
    icon: 'mdi:lightbulb-outline',
    category: 'consulting',
    features: ['Stratégie IT', 'Architecture', 'Sélection technologies', 'Due diligence']
  }
]

export const FILIALES: Filiale[] = [
  {
    id: 'hsv-tech',
    name: 'HSV TECH',
    acronym: 'HSV-T',
    description: 'Solutions logicielles enterprise pour le marché africain et international.',
    sector: 'Logiciels',
    status: 'active',
    color: 'gold',
    icon: 'mdi:code-tags'
  },
  {
    id: 'hsv-health',
    name: 'HSV HEALTH',
    acronym: 'HSV-H',
    description: 'Technologies pour la santé : télémédecine, dossiers patients, logistique médicale.',
    sector: 'Santé',
    status: 'planned',
    color: 'green',
    icon: 'mdi:heart-pulse'
  },
  {
    id: 'hsv-cloud',
    name: 'HSV CLOUD',
    acronym: 'HSV-C',
    description: 'Infrastructure cloud souveraine africaine, souveraineté des données garantie.',
    sector: 'Cloud',
    status: 'upcoming',
    color: 'gold',
    icon: 'mdi:server'
  },
  {
    id: 'hsv-ai',
    name: 'HSV AI',
    acronym: 'HSV-AI',
    description: 'Centre d\'excellence en intelligence artificielle, recherche et solutions IA.',
    sector: 'IA',
    status: 'planned',
    color: 'green',
    icon: 'mdi:brain'
  },
  {
    id: 'hsv-finance',
    name: 'HSV FINANCE',
    acronym: 'HSV-F',
    description: 'Technologies financières : mobile money, banking, trading, blockchain.',
    sector: 'FinTech',
    status: 'upcoming',
    color: 'gold',
    icon: 'mdi:finance'
  },
  {
    id: 'hsv-education',
    name: 'HSV EDUCATION',
    acronym: 'HSV-E',
    description: 'Plateforme éducative panafricaine, formation tech, certifications.',
    sector: 'Éducation',
    status: 'planned',
    color: 'green',
    icon: 'mdi:school'
  }
]

export const STATISTICS: Statistic[] = [
  { id: 'projects', label: 'Projets livrés', value: 150, suffix: '+' },
  { id: 'countries', label: 'Pays africains', value: 25, suffix: '' },
  { id: 'experts', label: 'Experts', value: 500, suffix: '+' },
  { id: 'partners', label: 'Partenaires', value: 50, suffix: '+' }
]

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Dr. Aminata Koné',
    role: 'Directrice Générale',
    company: 'Banque Atlantique',
    content: 'HYDRA SILICON VALLEY a transformé notre infrastructure IT. Leur approche allie expertise mondiale et compréhension fine des réalités africaines.',
    image: ''
  },
  {
    id: 't2',
    name: 'Jean-Marc Dubois',
    role: 'CTO',
    company: 'Orange Africa',
    content: 'Une équipe d\'exception qui a su livrer une plateforme complexe dans les délais. Leur rigueur technique est impressionnante.',
    image: ''
  },
  {
    id: 't3',
    name: 'Fatima Ouedraogo',
    role: 'Ministre déléguée',
    company: 'Gouvernement du Burkina Faso',
    content: 'Le système de vote électronique développé par HSV a permis des élections transparentes et sécurisées. Un partenaire de confiance.',
    image: ''
  }
]

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'ceo',
    name: 'Dr. Koffi Mensah',
    role: 'Fondateur & CEO',
    bio: 'Visionnaire de la tech africaine, 20 ans d\'expérience en Silicon Valley et en Afrique.',
    image: ''
  },
  {
    id: 'cto',
    name: 'Amina Diop',
    role: 'Directrice Technique',
    bio: 'Experte en architectures distribuées, ancienne lead engineer chez Google.',
    image: ''
  },
  {
    id: 'coo',
    name: 'Pierre Nkosi',
    role: 'Directeur des Opérations',
    bio: 'Spécialiste de la transformation digitale, 15 ans de conseil en stratégie.',
    image: ''
  }
]