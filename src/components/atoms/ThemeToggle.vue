<script setup lang="ts">
import { useColorMode, useCycleList } from '@vueuse/core'
import { computed, watchEffect } from 'vue'
import IconMonitor from '@/components/atoms/icons/IconMonitor.vue'
import IconMoon from '@/components/atoms/icons/IconMoon.vue'
import IconSun from '@/components/atoms/icons/IconSun.vue'

const mode = useColorMode({ emitAuto: true })

const { state, next } = useCycleList(['auto', 'light', 'dark'] as const, {
  initialValue: mode,
})

watchEffect(() => {
  mode.value = state.value
  const isDark =
    state.value === 'dark' ||
    (state.value === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches)
  document.documentElement.classList.toggle('dark', isDark)
  document.documentElement.classList.toggle('light', !isDark)
})

const icons = { auto: IconMonitor, light: IconSun, dark: IconMoon }
const icon = computed(() => icons[state.value])
</script>

<template>
  <button
    type="button"
    :aria-label="`Theme: ${state}. Activate to switch mode.`"
    :title="`theme :: ${state}`"
    class="flex h-8 w-8 cursor-pointer items-center justify-center text-foreground-subtle transition-colors hover:text-brand-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-emphasis"
    @click="next()"
  >
    <component :is="icon" class="h-4 w-4" />
  </button>
</template>
