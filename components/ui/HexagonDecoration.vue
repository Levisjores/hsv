<template>
  <div class="hexagon-decoration" :style="hexagonStyle">
    <svg :width="size" :height="size * 0.87" viewBox="0 0 100 87" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 0L100 25V75L50 100L0 75V25L50 0Z"
            :stroke="strokeColor"
            :stroke-width="strokeWidth"
            stroke-opacity="0.3"
            fill="none" />
    </svg>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { HSV_COLORS } from '~/constants/colors'

const props = withDefaults(defineProps<{
  size?: number
  strokeColor?: string
  strokeWidth?: number
}>(), {
  size: 100,
  strokeColor: HSV_COLORS.gold,
  strokeWidth: 1
})

const hexagonStyle = computed(() => ({
  width: `${props.size}px`,
  height: `${props.size * 0.87}px`
}))
</script>