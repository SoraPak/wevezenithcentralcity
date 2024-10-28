// plugins/dynamic-og-image.client.ts
export default defineNuxtPlugin(() => {
  if (process.client) {
    function updateOgImage() {
      const hash = window.location.hash;
      const ogImageMeta = document.getElementById('dynamic-og-image');

      // 기본 OG 이미지
      let newImage = "https://학정역두산위브.kr/og_img_sora.png";

      // 특정 해시 값에 따라 OG 이미지 변경
      if (hash === "#study") {
        newImage = "https://학정역두산위브.kr/og_img_study.png";
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
});
