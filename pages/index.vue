<template>
  <div class="landingWrap" ref="landingWrap">
    <r_nav class="rNav" />
    <sp_r_nav class="sp_rNav" />
    <hero />
    <point />
    <location />
    <ansim />
    <why />
    <school_bus />
    <community />
    <reviews class="reviews" />
    <sp_reviews class="sp_reviews" />
    <model_house />
    <guide />
  </div>
</template>

<style scoped>
.landingWrap {
  overflow: hidden;
  opacity: 0; /* 초기 상태에서 안 보이게 설정 */
  transition: opacity 0.5s ease-in-out; /* 페이드인 애니메이션 */
}

.sp_reviews, .sp_rNav {
  display: none;
}

/* sp */
@media only screen and (max-width: 950px) {
  .reviews, .rNav {
    display: none;
  }
  .sp_reviews {
    display: block;
  }
  .sp_rNav {
    display: flex;
  }
}
</style>

<script setup>
import { onMounted, nextTick, ref } from 'vue';

// 레이아웃을 비활성화
definePageMeta({
  layout: false
})

// 섹션 컴포넌트들 불러오기
import sp_r_nav from '~/components/landing/sp_r_nav.vue'
import r_nav from '~/components/landing/r_nav.vue'
import hero from '~/components/landing/hero.vue'
import point from '~/components/landing/point.vue'
import location from '~/components/landing/location.vue'
import ansim from '~/components/landing/ansim.vue'
import why from '~/components/landing/why.vue'
import school_bus from '~/components/landing/school_bus.vue'
import community from '~/components/landing/community.vue'
import reviews from '~/components/landing/reviews.vue'
import sp_reviews from '~/components/landing/sp_reviews.vue'
import model_house from '~/components/landing/model_house.vue'
import guide from '~/components/landing/guide.vue'

const landingWrap = ref(null);

// 화면 크기 변경을 감지하고 950px 이하로 전환될 때 페이지를 리로드하는 함수
const checkResponsiveAndReload = () => {
  let lastWidth = window.innerWidth;
  window.addEventListener('resize', () => {
    const currentWidth = window.innerWidth;
    if (lastWidth > 950 && currentWidth <= 950) {
      // 페이지를 리로드
      window.location.reload();
    }
    lastWidth = currentWidth;
  });
};

// 페이지 로드 시 페이드인 효과 적용
onMounted(() => {
  // 페이지가 로드되면 opacity를 1로 변경하여 페이드인 효과를 실행
  nextTick(() => {
    landingWrap.value.style.opacity = '1';
  });

  // 반응형 화면 전환 시 리로드 감지
  checkResponsiveAndReload();
});
</script>
