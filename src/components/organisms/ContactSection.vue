<script setup lang="ts">
import SectionHeader from '@/components/molecules/SectionHeader.vue'
import ContactRow from '@/components/molecules/ContactRow.vue'
import { socials } from '@/data/site'
</script>

<template>
  <section id="contact" class="scroll-mt-20 py-14 lg:py-16">
    <SectionHeader label="contact" title="Brew a conversation" :divider="false" />

    <div class="mt-10 border border-border bg-surface">
      <ContactRow v-for="link in socials" :key="link.label" :link="link" />
    </div>
  </section>
</template>
