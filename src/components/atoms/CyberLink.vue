<script lang="ts" setup>
import { computed } from 'vue'
import { buildMailto } from '@/utils/email'
import type { MailAddress } from '@/utils/email'

const props = defineProps<{
  href: string
  mail?: MailAddress
}>()

const isExternal = computed(
  () =>
    !props.href.startsWith('mailto:') && !props.href.startsWith('#') && !props.href.startsWith('/'),
)

const target = computed(() => {
  if (props.mail) return buildMailto(props.mail)
  return props.href
})
</script>

<template>
  <a
    :href="target"
    :target="isExternal ? '_blank' : undefined"
    :rel="isExternal ? 'noopener noreferrer' : undefined"
    class="group inline-flex items-center gap-1 text-foreground-muted transition-colors duration-200 hover:text-brand-secondary"
  >
    <span aria-hidden="true" class="font-mono text-brand-secondary">[</span>
    <span
      class="underline decoration-border decoration-dashed underline-offset-4 group-hover:decoration-brand-secondary"
    >
      <slot />
    </span>
    <span aria-hidden="true" class="font-mono text-brand-secondary">]</span>
  </a>
</template>
