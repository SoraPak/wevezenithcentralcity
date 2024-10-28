<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<script setup>
if (process.client) {
  function updateOgImage() {
    const hash = window.location.hash;
    const ogImageMeta = document.getElementById('dynamic-og-image');

    // 기본 OG 이미지
    let newImage = "https://xn--hu1bq8p65bh1h6oby7bg90c.kr/og_img_sora.png";

    // 특정 해시 값에 따라 OG 이미지 변경
    if (hash === "#study") {
      newImage = "https://xn--hu1bq8p65bh1h6oby7bg90c.kr/og_img_study.png";
    }

    // meta 태그 업데이트
    if (ogImageMeta) {
      ogImageMeta.setAttribute("content", newImage);
    }
  }

  // 페이지 로드 시와 해시 변경 시 업데이트
  window.addEventListener('load', updateOgImage);
  window.addEventListener('hashchange', updateOgImage);
}
</script>

<template #head>
  <meta property="og:image" content="https://xn--hu1bq8p65bh1h6oby7bg90c.kr/og_img_sora.png" id="dynamic-og-image" />
</template>