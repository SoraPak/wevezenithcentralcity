<template>
  <SeoMeta 
    title="크리스마스 행사 - 학정역 두산위브더제니스 센트럴시티"
    description="박소라 과장을 찾아오시면 푸짐한 크리스마스 선물이! 계약을 완료하시면 전자제품 추첨권 추가 증정!"
    image="https://xn--hu1bq8p65bh1h6oby7bg90c.kr/og_img_2412.png"
    url="https://xn--hu1bq8p65bh1h6oby7bg90c.kr/event/2412"
  />
  <div class="event_list">
    <p class="comment">종료된 행사입니다</p>
    <Xmas />
    <Event_list />
    <Event_nav />
  </div>
</template>

<script setup>
import { useHead } from '#imports';
import SeoMeta from '~/components/seometa.vue';
import Xmas from '~/components/landing/x-mas.vue';
import Event_nav from '~/components/event_nav.vue';
import Event_list from '~/components/event_list.vue';

useHead({
  style: [
    {
      children: `
        .gift {
          padding-top: 70px !important;
        }
        .gift::after {
          display: none !important;
        }
      
        @media only screen and (max-width: 950px) {
          .gift {
            padding-top: 29vw !important;
            margin-bottom: 0 !important;
          }
          .gift::before {
            height: 39vw !important;
            bottom: -6vw !important;
          }
          .gift_inner {
            padding-bottom: 26vw !important;
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
  color: #d51711;
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
