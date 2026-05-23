// Types institutionnels HYDRA SILICON VALLEY

export interface Filiale {
  id: string
  name: string
  acronym: string
  description: string
  sector: string
  status: 'active' | 'planned' | 'upcoming'
  color: 'gold' | 'green'
  icon: string
  vision: string
  futureUrl?: string
}

export interface TimelineEvent {
  year: string
  title: string
  description: string
}

export interface Statistic {
  id: string
  label: string
  value: number
  suffix: string
  prefix?: string
}

export interface NewsArticle {
  id: string
  title: string
  excerpt: string
  category: string
  date: string
  image?: string
  slug: string
}

export interface GovernanceMember {
  id: string
  name: string
  role: string
  bio: string
  image?: string
}

export interface ContactFormData {
  firstName: string
  lastName: string
  email: string
  organization: string
  subject: string
  message: string
}

export interface NavItem {
  label: string
  to: string
  external?: boolean
  children?: NavItem[]
}