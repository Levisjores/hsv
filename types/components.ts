// Types pour les composants UI

export interface SectionTitleProps {
  title: string
  subtitle?: string
  alignment?: 'left' | 'center'
  variant?: 'gold' | 'dark'
}

export interface ServiceCardProps {
  service: import('./index').Service
  index?: number
}

export interface StatisticCardProps {
  statistic: import('./index').Statistic
  animated?: boolean
}

export interface FilialeCardProps {
  filiale: import('./index').Filiale
}

export interface CTASectionProps {
  title: string
  description: string
  primaryLabel: string
  primaryTo: string
  secondaryLabel?: string
  secondaryTo?: string
  variant?: 'gold' | 'dark' | 'creme'
}