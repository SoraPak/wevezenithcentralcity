// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  router: {
    base: '/'
  },
  target: 'static', // 정적 사이트 빌드용 설정
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: [
    '~/assets/css/reset.css',
    '~/assets/css/common.css',
  ],
  build: {
    filenames: {
      app: ({ isDev }) => isDev ? '[name].js' : '[name].[contenthash].js',
      chunk: ({ isDev }) => isDev ? '[name].js' : '[name].[contenthash].js',
      css: ({ isDev }) => isDev ? '[name].css' : '[name].[contenthash].css',
      img: ({ isDev }) => isDev ? '[path][name].[ext]' : 'img/[name].[contenthash:7].[ext]',
      font: ({ isDev }) => isDev ? '[path][name].[ext]' : 'fonts/[name].[contenthash:7].[ext]',
      video: ({ isDev }) => isDev ? '[path][name].[ext]' : 'videos/[name].[contenthash:7].[ext]'
    }
  },
  generate: {
    dir: '.output/public',  // 정적 파일을 생성할 디렉토리 지정
    fallback: true // 404 페이지 생성을 위해 필요
  },
  nitro: {
    preset: 'static'
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
        { name: 'keywords', content: '두산위브,제니스,학정동,학정역,분양,모델하우스,견본하우스,칠곡,대구' },
        { name: 'description', content: '학정역, 칠곡경대병원역 더블 역세권, 중도금 무이자, 전매 무제한, 계약금500만원! 모델하우스에서 박소라 과정을 찾아주시면 푸짐한 사은품 증정' },
        { property: 'og:site_name', content: '학정역 두산위브더제니스 센트럴시티' },
        { property: 'og:title', content: '학정역 두산위브더제니스 센트럴시티' },
        { property: 'og:description', content: '학정역, 칠곡경대병원역 더블 역세권, 중도금 무이자, 전매 무제한, 계약금500만원! 모델하우스에서 박소라 과정을 찾아주시면 푸짐한 사은품 증정' },
        { property: 'og:image', content: 'https://xn--hu1bq8p65bh1h6oby7bg90c.kr/og_img_sora.png' },
        { property: 'og:image:type', content: 'image/png' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '622' },
        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:title', content: '학정역 두산위브더제니스 센트럴시티' },
        { name: 'twitter:description', content: '학정역, 칠곡경대병원역 더블 역세권, 중도금 무이자, 전매 무제한, 계약금500만원! 모델하우스에서 박소라 과정을 찾아주시면 푸짐한 사은품 증정' },
        { name: 'twitter:image', content: 'https://xn--hu1bq8p65bh1h6oby7bg90c.kr/og_img_sora.png' },
        { name: 'google-site-verification', content: '8XjrzoC28K-Keo7hRTrzehBGCffpPWP85oDamXsNgI0' },
        { name: 'robots', content: 'index,follow' }
      ],
      htmlAttrs: {
        lang: 'ko',
      },
      link: [
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/icon.svg' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/icon.svg' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/icon.svg' },
        { rel: 'shortcut icon', href: '/icon.svg' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'canonical', href: 'https://xn--hu1bq8p65bh1h6oby7bg90c.kr/' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap' },
      ],
      script: [
        // Google Tag Manager 스크립트 추가
        {
          hid: 'gtag',
          src: 'https://www.googletagmanager.com/gtag/js?id=G-L9HLE0RYGD',
          async: true
        },
        {
          hid: 'gtag-config',
          innerHTML: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-L9HLE0RYGD');
          `,
          type: 'text/javascript',
          charset: 'utf-8'
        }
      ],
      __dangerouslyDisableSanitizersByTagID: {
        'gtag-config': ['innerHTML']
      }
    }
  },
  modules: [
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
  ],
  sitemap: {
    hostname: 'https://xn--hu1bq8p65bh1h6oby7bg90c.kr',
    gzip: true,
    routes: []  // 필요시 추가 경로 지정 가능
  },
  robots: {
    UserAgent: '*',
    Disallow: '',
    Sitemap: 'https://xn--hu1bq8p65bh1h6oby7bg90c.kr/sitemap.xml'
  }
})
