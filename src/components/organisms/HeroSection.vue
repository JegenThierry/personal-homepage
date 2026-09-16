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
          class="text-5xl font-bold uppercase leading-none tracking-tight light:text-zinc-950 sm:text-7xl lg:text-8xl dark:text-white"
        >
          Thierry<br />
          Jegen<span class="light:text-indigo-600 dark:text-indigo-500">_</span>
        </h1>

        <p
          class="mt-6 max-w-xl text-base leading-relaxed light:text-zinc-600 sm:text-lg dark:text-zinc-400"
        >
          Developer by profession, coffee addict by passion. Building software on a caffeine
          overdose.
        </p>

        <div class="mt-8 flex flex-wrap items-center gap-6 text-sm">
          <CyberLink :href="socials.codeberg.href" external>
            {{ socials.codeberg.label }}
          </CyberLink>
          <CyberLink :href="socials.instagram.href" external>
            {{ socials.instagram.label }}
          </CyberLink>
          <CyberLink :href="socials.email.href" external> contact me </CyberLink>
        </div>
      </div>

      <TerminalPanel title="// Loading coffee" :lines="readout" />
    </div>

    <div
      class="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-dashed light:border-zinc-300 pt-6 dark:border-zinc-700"
    >
      <StatusDot label="ONLINE // Caffeinated" />
      <p class="text-sm uppercase tracking-widest text-zinc-500">Software Developer</p>
    </div>
  </section>
</template>
