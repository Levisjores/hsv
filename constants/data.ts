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
    id: 'hsv-education',
    name: 'HSV EDUCATION',
    acronym: 'HSV-E',
    description: 'Plateforme d\'éducation en ligne et de formation professionnelle.',
    sector: 'Éducation & Formation',
    status: 'planned',
    color: 'gold',
    icon: 'mdi:school',
    vision: 'Révolutionner l\'accès à l\'éducation de qualité en Afrique.',
    futureUrl: 'https://education.hydrasv.com'
  },
  { 
    id: 'hsv-health',
    name: 'HSV HEALTH', 
    acronym: 'HSV-H', 
    description: 'Solutions de santé numérique et télémédecine.', 
    sector: 'Santé & Télémédecine', 
    status: 'planned', 
    color: 'gold', 
    icon: 'mdi:heart-pulse', 
    vision: 'Améliorer l\'accès aux soins de santé en Afrique grâce à la technologie.', 
    futureUrl: 'https://health.hydrasv.com'
  }, 
  { 
    id: 'hsv-agro', 
    name: 'HSV AGRO', 
    acronym: 'HSV-A', 
    description: 'Technologies pour l\'agriculture intelligente et l\'agroalimentaire.', 
    sector: 'Agriculture & Agroalimentaire', 
    status: 'planned', 
    color: 'gold', 
    icon: 'mdi:tractor', 
    vision: 'Transformer l\'agriculture africaine avec des solutions innovantes.', 
    futureUrl: 'https://agro.hydrasv.com' 
  },
  { 
    id: 'hsv-real-estate', 
    name: 'HSV REAL ESTATE', 
    acronym: 'HSV-RE', 
    description: 'Développement immobilier et hubs d\'innovation.', 
    sector: 'Immobilier & Hubs', 
    status: 'planned', 
    color: 'gold', 
    icon: 'mdi:home-city', vision: 'Créer des espaces de vie et de travail modernes en Afrique.', futureUrl: 'https://realestate.hydrasv.com' },
  { id: 'hsv-capital', 
    name: 'HSV CAPITAL', 
    acronym: 'HSV-C', 
    description: 'Investissements et services financiers pour l\'Afrique.', 
    sector: 'Investissements & Services Financiers', 
    status: 'planned', 
    color: 'gold', 
    icon: 'mdi:bank', 
    vision: 'Soutenir la croissance économique africaine à travers des investissements stratégiques.', 
    futureUrl: 'https://capital.hydrasv.com'  },
  { 
    id: 'hsv-energy', 
    name: 'HSV ENERGY', 
    acronym: 'HSV-EN', 
    description: 'Solutions d\'énergie renouvelable pour l\'Afrique.', 
    sector: 'Énergie Renouvelable', 
    status: 'planned', 
    color: 'gold', 
    icon: 'mdi:solar-panel', 
    vision: 'Promouvoir l\'adoption de l\'énergie propre en Afrique.', 
    futureUrl: 'https://energy.hydrasv.com' 
  }, 
  { 
    id: 'hsv-logistics', 
    name: 'HSV LOGISTICS', 
    acronym: 'HSV-L', 
    description: 'Logistique, transport et supply chain en Afrique.', 
    sector: 'Logistique & Transport', 
    status: 'planned', 
    color: 'gold', 
    icon: 'mdi:truck', 
    vision: 'Optimiser la logistique et le transport pour stimuler le commerce en Afrique.', 
    futureUrl: 'https://logistics.hydrasv.com' 
  },  
  { 
    id: 'hsv-media', 
    name: 'HSV MEDIA', 
    acronym: 'HSV-M', 
    description: 'Production de contenu et médias numériques pour l\'Afrique.', 
    sector: 'Médias & Divertissement', 
    status: 'planned', 
    color: 'gold', 
    icon: 'mdi:television-classic', 
    vision: 'Créer et diffuser du contenu africain de qualité pour le monde.', 
    futureUrl: 'https://media.hydrasv.com' 
  },  
  { 
    id: 'hsv-defence-security', 
    name: 'HSV DEFENCE & SECURITY', 
    acronym: 'HSV-DS', 
    description: 'Cybersécurité et sécurité privée pour l\'Afrique.', 
    sector: 'Défense & Sécurité', 
    status: 'planned', 
    color: 'gold', 
    icon: 'mdi:shield-lock', 
    vision: 'Protéger les entreprises et les citoyens africains contre les menaces numériques et physiques.', 
    futureUrl: 'https://defencesecurity.hydrasv.com' 
  },  
  { 
    id: 'hsv-insurance', 
    name: 'HSV INSURANCE', 
    acronym: 'HSV-IN', 
    description: 'Assurance et micro-assurance pour l\'Afrique.', 
    sector: 'Assurance & Micro-assurance', 
    status: 'planned', 
    color: 'gold', 
    icon: 'mdi:shield-check', 
    vision: 'Rendre l\'assurance accessible et abordable pour tous les Africains.', 
    futureUrl: 'https://insurance.hydrasv.com' 
  },  
  { 
    id: 'hsv-retail', 
    name: 'HSV RETAIL', 
    acronym: 'HSV-R', 
    description: 'Import/Export à grande échelle et e-commerce pour l\'Afrique.', 
    sector: 'Import/Export & E-commerce', 
    status: 'planned', 
    color: 'gold', 
    icon: 'mdi:shopping', 
    vision: 'Devenir le leader africain du commerce en ligne et de l\'import/export.', 
    futureUrl: 'https://retail.hydrasv.com' 
  },
  { 
    id: 'hsv-manufacturing', 
    name: 'HSV MANUFACTURING', 
    acronym: 'HSV-MF', 
    description: 'Transformation locale et création d\'industries en Afrique.', 
    sector: 'Manufacturing & Industrie', 
    status: 'planned', 
    color: 'gold', 
    icon: 'mdi:factory', 
    vision: 'Stimuler la production locale et créer des emplois industriels en Afrique.', 
    futureUrl: 'https://manufacturing.hydrasv.com' 
  },
  { 
    id: 'hsv-future-sectors', 
    name: 'SECTEURS FUTURS', 
    acronym: 'HSV-FS', 
    description: 'HSV se laisse guider par les tendances du marché, et s\'impose dans tous domaines néccéssitant une intervention moderne et ludique.', 
    sector: 'Secteurs Futurs', 
    status: 'planned', 
    color: 'gold', 
    icon: 'mdi:lightbulb-on-outline', 
    vision: 'Être à l\'avant-garde de l\'innovation en Afrique en explorant continuellement de nouveaux secteurs et opportunités.', 
    futureUrl: 'https://futuresectors.hydrasv.com' 
  } 
]

export const VISION_TIMELINE: TimelineEvent[] = [
  { year: '2026', title: 'Fondation de HSV', description: 'Création de la corporation avec une vision panafricaine à long terme.' },
  { year: '2026', title: 'Lancement de HSV TECH', description: 'Première filiale opérationnelle dans les logiciels d\'entreprise.' },
  { year: '2027-2028', title: 'Création de HSV EDUCATION', description: '' },
  { year: '2027-2028', title: 'Création de HSV HEALTH', description: 'Entrée dans les secteurs de la santé et de la Télémédecine.' },
  { year: '2029-2030', title: 'Création de HSV AGRO', description: 'Entrée dans le secteur de l\'agriculture et de l\'agroalimentaire.' },
  { year: '2029-2030', title: 'Création de HSV REAL ESTATE', description: 'Lancement de la filiale Immobilière et Hubs.' },
  { year: '2031+', title: 'Création de HSV CAPITAL', description: ' Lancement de HSV dans les investissements et Services financiers.' },
  { year: '2033+', title: 'Création de HSV ENERGY', description: 'Lancement de HSV dans le secteur de l\'énergie renouvellable.' },
  { year: '2034+', title: 'Création de HSV LOGISTICS', description: 'Déploiement d\'une filliale dans la logistique et le transport et Supply Chain.' },
  { year: '2035+', title: 'Création de HSV MEDIA', description: '' },
  { year: '2036+', title: 'Déploiement de HSV DEFENCE & SECURITY', description: 'Lancement de HSV dans la cybersécurité et Sécurité privée.' },
  { year: '2037+', title: 'Déploiement de HSV INSURANCE', description: 'L\'Assurance et la Micro-assurance au au centre de la progression chez HSV.' },
  { year: '2038+', title: 'Déploiement de HSV RETAIL', description: 'HSV se démarque dans le Import/Export a grande echelle et dans le E-commerce comme Leader Africain.' },
  { year: '2040+', title: 'Déploiement de HSV MANUFACTURING', description: 'Transformation locale et creation des industries et chaine de production au centre des préoccupations de HSV MANUFACTURING.' },
  { year: 'Post-2040', title: 'SECTEURS FUTURS', description: 'HSV se laisse guidé par les tendances du marché, et s\'impose dans tous domaines néccéssitant une intervention moderne et ludique' },
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
    title: 'HYDRA SILICON VALLEY ouvre son nouveau siège à, Yaoundé',
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
    name: 'ING. Prosper Patrick MVOGO',
    role: 'Fondateur & Chief Executive Officer',
    bio: 'Visionnaire de la tech africaine'
  },
  {
    id: 'ceo',
    name: 'ING. Bienvenu KUETCHE CHENDOU',
    role: 'Co-Fondateur & Chief Operating Officer',
    bio: 'Visionnaire de la tech africaine'
  },
  {
    id: 'cto',
    name: 'ING. Levis Jores NJIMI NJEUMEN',
    role: 'Directreur Technique & Chief Technology Officer',
    bio: 'ingénieur des travaux informatiques, admistrateur SR et Developpeur Web et Mobile'
  },
  {
    id: 'cto',
    name: 'ING. Moriane MAGUI',
    role: 'Responsable Communication & Marketing',
    bio: 'Spécialiste de la transformation digitale.'
  },
  {
    id: 'cfo',
    name: 'ING. William ALIMA ZOGO',
    role: 'Graphiste / Designer',
    bio: 'Graphiste pro, Concepteur UI/UX'
  }
]