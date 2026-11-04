<script setup lang="ts">
import SectionTag from '@/components/atoms/SectionTag.vue'
import StatusDot from '@/components/atoms/StatusDot.vue'
import CyberLink from '@/components/atoms/CyberLink.vue'
import GridTexture from '@/components/atoms/GridTexture.vue'
import TerminalPanel from '@/components/molecules/TerminalPanel.vue'
import { site, socials } from '@/data/site'

const readout = [
  { key: 'system.status', value: 'online' },
  { key: 'location', value: 'Luxembourg' },
  { key: 'domain', value: site.domain },
  { key: 'coffee.level', value: 'overflowing' },
]
</script>

<template>
  <section id="profile" class="scroll-mt-20 pb-20 pt-10 sm:pt-14 lg:pb-24">
    <div class="relative overflow-hidden panel p-6 sm:p-10 lg:p-14">
      <GridTexture glow />

      <div class="relative">
        <SectionTag label="profile" />

        <div class="mt-8 grid items-end gap-10 lg:grid-cols-2">
          <div>
            <h1
              class="font-display text-5xl font-bold uppercase leading-[0.9] tracking-[-0.03em] text-foreground sm:text-7xl lg:text-8xl"
            >
              Thierry<br />
              Jegen<span class="text-brand-primary">_</span>
            </h1>

            <p class="mt-6 max-w-xl text-base leading-relaxed text-foreground-muted sm:text-lg">
              Developer by profession, coffee addict by passion. Building software on a caffeine
              overdose.
            </p>

            <div class="mt-8 flex flex-wrap items-center gap-6 text-sm">
              <CyberLink
                v-for="link in socials"
                :key="link.label"
                :href="link.href"
                :mail="link.parts"
              >
                {{ link.label }}
              </CyberLink>
            </div>
          </div>

          <TerminalPanel title="// Loading coffee" :lines="readout" />
        </div>

        <div
          class="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-dashed border-border pt-6"
        >
          <StatusDot label="ONLINE // Caffeinated" />
          <p class="text-mono-meta text-foreground-subtle">Software Developer</p>
        </div>
      </div>
    </div>
  </section>
</template>
