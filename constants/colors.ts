// Palette officielle HSV - source unique de vérité
export const HSV_COLORS = {
  gold: '#C9A84C',
  goldLight: '#E8D08A',
  goldDark: '#8B6914',
  green: {
    deep: '#1B5E20',
    medium: '#2E7D32',
    light: '#66BB6A'
  },
  noir: {
    logo: '#1A1A1A',
    texte: '#333333'
  },
  brun: {
    dore: '#6B6050'
  },
  sable: {
    dore: '#D4C9A8'
  },
  creme: '#F4F1EC',
  blanc: '#FFFFFF'
} as const

export const GRADIENT_PREMIUM = 'bg-gradient-to-r from-gold-dark via-gold to-gold-light'
export const BORDER_GOLD = 'border-gold/30'
export const HEXAGON_PATTERN = 'opacity-5'