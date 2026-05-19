// Types globaux HYDRA SILICON VALLEY

export interface Service {
  id: string
  title: string
  description: string
  icon: string
  category: string
  features: string[]
}

export interface Filiale {
  id: string
  name: string
  acronym: string
  description: string
  sector: string
  status: 'active' | 'planned' | 'upcoming'
  color: string
  icon: string
}

export interface TeamMember {
  id: string
  name: string
  role: string
  bio: string
  image: string
}

export interface Statistic {
  id: string
  label: string
  value: number
  suffix: string
  prefix?: string
}

export interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  content: string
  image: string
}

export interface ContactFormData {
  name: string
  email: string
  company: string
  subject: string
  message: string
}

export interface NavItem {
  label: string
  to: string
  external?: boolean
  children?: NavItem[]
}