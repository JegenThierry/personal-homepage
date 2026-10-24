<script setup lang="ts">
import type { Technologies } from "@/data/technologies";

defineProps<{
  label: Technologies;
}>();
</script>

<template>
  <span
    class="border light:border-zinc-300 px-2 py-0.5 text-xs uppercase tracking-widest light:text-zinc-600 dark:border-zinc-700 dark:text-zinc-400"
  >
    {{ label }}
  </span>
</template>
