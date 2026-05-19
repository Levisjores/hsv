<template>
  <span>
    <span v-if="prefix">{{ prefix }}</span>
    <span>{{ displayValue }}</span>
    <span v-if="suffix">{{ suffix }}</span>
  </span>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
const props = withDefaults(defineProps<{
  value: number
  suffix?: string
  prefix?: string
  duration?: number
}>(), {
  suffix: '',
  prefix: '',
  duration: 2000
})

const displayValue = ref(0)

const animate = () => {
  const start = performance.now()
  const from = 0
  const to = props.value

  const tick = (now: number) => {
    const elapsed = now - start
    const progress = Math.min(elapsed / props.duration, 1)
    // Easing out cubic
    const eased = 1 - Math.pow(1 - progress, 3)
    displayValue.value = Math.round(from + (to - from) * eased)

    if (progress < 1) {
      requestAnimationFrame(tick)
    }
  }

  requestAnimationFrame(tick)
}

onMounted(() => {
  // Observer pour déclencher l'animation au scroll
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animate()
          observer.disconnect()
        }
      })
    },
    { threshold: 0.5 }
  )

  // Observer l'élément parent
  const el = document.querySelector('[data-counter]')
  if (el) observer.observe(el)
})
</script>