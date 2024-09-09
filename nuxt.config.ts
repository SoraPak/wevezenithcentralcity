export default defineNuxtConfig({
  nitro: {
    prerender: {
      routes: ['/'] // 특정 경로만 사전 렌더링
    }
  },
  target: 'static', // 정적 사이트 빌드용 설정
  generate: {
    fallback: true,
    dir: '.output/public' // 빌드 결과물을 저장할 디렉토리 명시
  },
  app: {
    baseURL: '/',
    head: {
      title: '학정역 두산위브더제니스 센트럴시티',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width,initial-scale=1' },
        { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
        { property: 'og:type', content: 'website' },
        { name: 'keywords', content: '두산위브,제니스,학정역,분양,모델하우스,견본하우스' },
        { name: 'description', content: '대구 랜드마크의 자격 오직, 제니스!' },
        { property: 'og:site_name', content: '학정역 두산위브더제니스 센트럴시티' },
        { property: 'og:title', content: '학정역 두산위브더제니스 센트럴시티' },
        { property: 'og:description', content: '대구 랜드마크의 자격 오직, 제니스!' },
        { property: 'og:image', content: '/og_img.png' },
        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:title', content: '학정역 두산위브더제니스 센트럴시티' },
        { name: 'twitter:description', content: '대구 랜드마크의 자격 오직, 제니스!' },
        { name: 'twitter:image', content: '/og_img.png' },
      ],
      link: [
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/icon.svg' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/icon.svg' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/icon.svg' },
        { rel: 'shortcut icon', href: '/icon.svg' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Montserrat&display=swap' },
      ]
    }
  }
})
