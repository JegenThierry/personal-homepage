<script setup lang="ts">
import SectionTag from '@/components/atoms/SectionTag.vue'
import StatusDot from '@/components/atoms/StatusDot.vue'
import CyberLink from '@/components/atoms/CyberLink.vue'
import TerminalPanel from '@/components/molecules/TerminalPanel.vue'
import { site, socials } from '@/data/site'

const readout = [
  { key: 'system.status', value: 'online' },
  { key: 'location', value: 'Luxembourg' },
  { key: 'domain', value: site.domain },
  { key: 'coffee.level', value: 'overflowing ☕' },
]
</script>

<template>
  <section id="profile" class="scroll-mt-24 pb-20 pt-28 sm:pt-36 lg:pb-28">
    <SectionTag number="01" label="profile" />

    <div class="mt-8 grid items-end gap-10 lg:grid-cols-2">
      <div>
        <h1
          class="text-5xl font-bold uppercase leading-none tracking-tight text-foreground sm:text-7xl lg:text-8xl"
        >
          Thierry<br />
          Jegen<span class="text-brand-primary">_</span>
        </h1>

        <p class="mt-6 max-w-xl text-base leading-relaxed text-foreground-muted sm:text-lg">
          Developer by profession, coffee addict by passion. Building software on a caffeine
          overdose.
        </p>

        <div class="mt-8 flex flex-wrap items-center gap-6 text-sm">
          <CyberLink v-for="social in socials" :key="social.label" :href="social.href" external>
            {{ social.label }}
          </CyberLink>
        </div>
      </div>

      <TerminalPanel title="// Loading coffee" :lines="readout" />
    </div>

    <div
      class="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-dashed border-border pt-6"
    >
      <StatusDot label="ONLINE // Caffeinated" />
      <p class="text-sm uppercase tracking-widest text-foreground-subtle">Software Developer</p>
    </div>
  </section>
</template>
