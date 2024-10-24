<template>
  <div class="landingWrap" ref="landingWrap">
    <R_nav class="rNav" />
    <Sp_r_nav class="sp_rNav" />
    <Hero />
    <Point />
    <Location />
    <Ansim />
    <Why />
    <Study />
    <School_bus />
    <Community />
    <Reviews class="reviews" />
    <Sp_reviews class="sp_reviews" />
    <Model_house />
    <Halloween />
    <Guide />
    <G_footer />
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
import { useRouter } from 'nuxt/app';

// 레이아웃을 비활성화
definePageMeta({
  layout: false
})

// 섹션 컴포넌트들 불러오기
import Sp_r_nav from '~/components/landing/sp_r_nav.vue'
import R_nav from '~/components/landing/r_nav.vue'
import Hero from '~/components/landing/hero.vue'
import Point from '~/components/landing/point.vue'
import Location from '~/components/landing/location.vue'
import Ansim from '~/components/landing/ansim.vue'
import Why from '~/components/landing/why.vue'
import Study from '~/components/landing/study.vue'
import School_bus from '~/components/landing/school_bus.vue'
import Community from '~/components/landing/community.vue'
import Reviews from '~/components/landing/reviews.vue'
import Sp_reviews from '~/components/landing/sp_reviews.vue'
import Model_house from '~/components/landing/model_house.vue'
import Guide from '~/components/landing/guide.vue'
import Halloween from '~/components/landing/halloween.vue'
import G_footer from '~/components/footer.vue'

const landingWrap = ref(null);
const router = useRouter();  // Nuxt의 useRouter 사용

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

// 화면 크기와 URL 해시(#reviews)를 체크하고 리다이렉트 처리
const checkHashAndRedirect = () => {
  if (window.location.hash === '#reviews') {
    // 화면 크기가 950px 이하일 때
    if (window.innerWidth <= 950) {
      router.push({ hash: '#reviews_sp' });  // #reviews_sp로 리다이렉트
    }
  }

  if (window.location.hash === '#reviews_sp') {
    // 화면 크기가 950px 이상일 때
    if (window.innerWidth > 950) {
      router.push({ hash: '#reviews' });  // #reviews로 리다이렉트
    }
  }

  // 화면 크기 변화 감지 시 다시 체크
  window.addEventListener('resize', () => {
    if (window.location.hash === '#reviews' && window.innerWidth <= 950) {
      router.push({ hash: '#reviews_sp' });
    } else if (window.location.hash === '#reviews_sp' && window.innerWidth > 950) {
      router.push({ hash: '#reviews' });
    }
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

  // 페이지가 로드될 때 해시(#reviews 또는 #reviews_sp)를 체크하여 리다이렉트 처리
  checkHashAndRedirect();
});
</script>
