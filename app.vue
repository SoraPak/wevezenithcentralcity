<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
import { useHead } from "#app";

useHead({
  meta: [
    { property: 'og:image', content: 'https://학정역두산위브.kr/og_img_sora.png', id: 'dynamic-og-image' }
  ]
});
</script>
