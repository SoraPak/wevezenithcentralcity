export default defineNuxtRouteMiddleware((to) => {
  let ogImage = 'https://xn--hu1bq8p65bh1h6oby7bg90c.kr/og_img_sora.png';

  // query parameter 값을 기반으로 동적으로 OG 이미지 설정
  if (to.query.section === 'study') {
    ogImage = 'https://xn--hu1bq8p65bh1h6oby7bg90c.kr/og_img_study.png';
  }

  useHead({
    meta: [
      {
        property: 'og:image',
        content: ogImage,
      },
    ],
  });
});
