<script setup lang="ts">
import { RouterView } from 'vue-router'
import PageWrapper from '@/components/templates/PageWrapper.vue'
import SiteHeader from '@/components/organisms/SiteHeader.vue'
import SiteFooter from '@/components/organisms/SiteFooter.vue'
</script>

<template>
  <PageWrapper>
    <template #header>
      <SiteHeader />
    </template>

    <RouterView />

    <template #footer>
      <SiteFooter />
    </template>
  </PageWrapper>
</template>
