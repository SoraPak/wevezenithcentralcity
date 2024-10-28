<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
import { useHead } from "#app";

useHead({
  meta: [
    { property: 'og:image', content: 'https://xn--hu1bq8p65bh1h6oby7bg90c.kr/og_img_sora.png', id: 'dynamic-og-image' }
  ]
});
</script>
