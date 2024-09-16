<template>
  <div class="landingWrap">
    <r_nav />
    <hero />
    <point />
    <!-- location />
    <ansim />
    <why />
    <school_bus />
    <community />
    <reviews />
    <model_house />
    <guide / -->
  </div>
</template>

<style scoped>
.landingWrap {
  overflow: hidden;
}
</style>

<script setup>
  // 레이아웃을 비활성화
  definePageMeta({
    layout: false
  })

  // 섹션 컴포넌트들 불러오기

  import r_nav from '~/components/landing/r_nav.vue'
  import hero from '~/components/landing/hero.vue'
  import point from '~/components/landing/point.vue'
  import location from '~/components/landing/location.vue'
  import ansim from '~/components/landing/ansim.vue'
  import why from '~/components/landing/why.vue'
  import school_bus from '~/components/landing/school_bus.vue'
  import community from '~/components/landing/community.vue'
  import reviews from '~/components/landing/reviews.vue'
  import model_house from '~/components/landing/model_house.vue'
  import guide from '~/components/landing/guide.vue'
</script>