<template>
  <Head>
    <!-- 기본 설정 -->
    <Title>{{ title }}</Title>
    <Meta charset="utf-8" />
    <Meta name="viewport" content="width=device-width,initial-scale=1" />
    <Meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <Meta name="keywords" :content="keywords" />
    <Meta name="description" :content="description" />
    <Meta name="robots" content="index,follow" />

    <!-- Open Graph (Facebook, Kakao, LinkedIn) -->
    <Meta property="og:type" content="website" />
    <Meta property="og:site_name" content="학정역 두산위브더제니스 센트럴시티" />
    <Meta property="og:title" :content="title" />
    <Meta property="og:description" :content="description" />
    <Meta property="og:image" :content="image" />
    <Meta property="og:image:type" content="image/png" />
    <Meta property="og:image:width" content="1200" />
    <Meta property="og:image:height" content="622" />
    <Meta property="og:url" :content="url" />

    <!-- Twitter Card -->
    <Meta name="twitter:card" content="summary" />
    <Meta name="twitter:title" :content="title" />
    <Meta name="twitter:description" :content="description" />
    <Meta name="twitter:image" :content="image" />

    <!-- Google Site Verification -->
    <Meta name="google-site-verification" content="8XjrzoC28K-Keo7hRTrzehBGCffpPWP85oDamXsNgI0" />

    <!-- Canonical URL -->
    <Link rel="canonical" :href="url" />

    <!-- Favicon -->
    <Link rel="apple-touch-icon" sizes="180x180" href="/icon.svg" />
    <Link rel="icon" type="image/png" sizes="32x32" href="/icon.svg" />
    <Link rel="icon" type="image/png" sizes="16x16" href="/icon.svg" />
    <Link rel="shortcut icon" href="/icon.svg" />

    <!-- Google Tag Manager -->
    <Script hid="gtag" src="https://www.googletagmanager.com/gtag/js?id=G-L9HLE0RYGD" async />
    <Script hid="gtag-config" type="text/javascript" charset="utf-8">
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-L9HLE0RYGD');
    </Script>

    <!-- Boraware Script -->
    <Script hid="boraware-script" type="text/javascript">
      var protect_id = 'h574';
    </Script>
    <Script src="//script.boraware.kr/protect_script_v2.js" async />
  </Head>
</template>

<script setup>
defineProps({
  title: { type: String, default: "학정역 두산위브더제니스 센트럴시티" },
  description: { type: String, default: "학정역, 칠곡경대병원역 더블 역세권, 중도금 무이자, 전매 무제한, 계약금500만원! 모델하우스에서 박소라 과정을 찾아주시면 푸짐한 사은품 증정" },
  keywords: { type: String, default: "두산위브,제니스,학정동,학정역,분양,모델하우스,견본하우스,칠곡,대구" },
  image: { type: String, default: "https://xn--hu1bq8p65bh1h6oby7bg90c.kr/og_img_sora.png" },
  url: { type: String, default: "https://xn--hu1bq8p65bh1h6oby7bg90c.kr/" }
});
</script>
