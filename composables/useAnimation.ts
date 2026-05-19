/**
 * Composable pour les animations réutilisables
 * Animations premium, sobres et fluides
 */
export function useAnimation() {
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    enter: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
    }
  }

  const fadeIn = {
    initial: { opacity: 0 },
    enter: {
      opacity: 1,
      transition: { duration: 0.8, ease: 'easeOut' }
    }
  }

  const scaleIn = {
    initial: { opacity: 0, scale: 0.95 },
    enter: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }
    }
  }

  const staggerChildren = (staggerDelay = 0.1) => ({
    enter: {
      transition: {
        staggerChildren: staggerDelay
      }
    }
  })

  const slideInLeft = {
    initial: { opacity: 0, x: -30 },
    enter: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
    }
  }

  return {
    fadeInUp,
    fadeIn,
    scaleIn,
    staggerChildren,
    slideInLeft
  }
}