<template>
  <SeoMeta 
    title="행사 - 학정역 두산위브더제니스 센트럴시티"
    description="박소라 과장 찾고 선물 받자! 지금바로 모델하우스 예약!"
    image="https://xn--hu1bq8p65bh1h6oby7bg90c.kr/og_img_24.png"
    url="https://xn--hu1bq8p65bh1h6oby7bg90c.kr/event/24"
  />
  <div class="event_list">
    <p class="comment">종료된 행사입니다</p>
    <Giveaway />
    <Event_list />
    <Event_nav />
  </div>
</template>

<script setup>
import { useHead } from '#imports';
import SeoMeta from '~/components/seometa.vue';
import Giveaway from '~/components/landing/giveaway.vue';
import Event_nav from '~/components/event_nav.vue';
import Event_list from '~/components/event_list.vue';

useHead({
  style: [
    {
      children: `
        .giveaway {
          margin-top: 130px !important;
        }
      
        @media only screen and (max-width: 950px) {
          .giveaway {
            margin-top: 10vw !important;
          }
          .giveaway_inner {
            padding-bottom: 20vw !important;
          }
        }
      `
    }
  ]
});
</script>
<style scoped>
.event_list {
  overflow: hidden;
  flex: 1;
  
}
.comment {
  position: absolute;
  z-index: 10;
  text-align: center;
  width: 100%;
  font-size: 25px;
  color: #fffe00;
  padding: 20px;
  box-sizing: border-box;
}
@media only screen and (max-width: 950px) {
  .event_list {
    padding-bottom: 12vw;
  }
  .comment {
    padding: 3vw;
    font-size: 5vw;
  }
}
</style>
