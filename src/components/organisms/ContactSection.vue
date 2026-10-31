<script setup lang="ts">
import SectionHeader from '@/components/molecules/SectionHeader.vue'
import ContactRow from '@/components/molecules/ContactRow.vue'
import { socials } from '@/data/site'
</script>

<template>
  <section id="contact" class="scroll-mt-24 py-20">
    <SectionHeader number="05" label="contact" title="Brew a conversation." note="signal out" />

    <div class="mt-10 border-t border-dashed border-border">
      <ContactRow v-for="link in socials" :key="link.label" :link="link" />
    </div>
  </section>
</template>
