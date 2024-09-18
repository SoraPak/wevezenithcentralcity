<template>
  <div class="landingWrap">
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
}
.sp_reviews, .sp_rNav {
  display: none;
}


/* sp */
@media only screen and (max-width: 950px) {
  .reviews, .rNav{
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
</script>