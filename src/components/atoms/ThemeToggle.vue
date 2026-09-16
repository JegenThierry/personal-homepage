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
})

const icons = { auto: IconMonitor, light: IconSun, dark: IconMoon }
const icon = computed(() => icons[state.value])
</script>

<template>
  <button
    type="button"
    :aria-label="`Theme: ${state}. Activate to switch mode.`"
    :title="`theme :: ${state}`"
    class="flex cursor-pointer h-8 w-8 items-center justify-center text-zinc-500 transition-colors light:hover:text-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 dark:hover:text-indigo-300"
    @click="next()"
  >
    <component :is="icon" class="h-4 w-4" />
  </button>
</template>
