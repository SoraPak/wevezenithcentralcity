<template>
  <SeoMeta 
    title="행사 - 학정역 두산위브더제니스 센트럴시티"
    description="박소라 과장을 찾아주신 고객님들께 감사의 마음을 담아 준비한 특별 선물! 선물쿠폰 다운 받고 모델 하우스 방문 하실 때 안내카운터와 박소라 과장에게 제시 해 주세요."
    image="https://xn--hu1bq8p65bh1h6oby7bg90c.kr/og_img_2411.png"
    url="https://xn--hu1bq8p65bh1h6oby7bg90c.kr/event/2411"
  />
  <div class="event_list">
    <p class="comment">종료된 행사입니다</p>
    <Fall />
    <Event_list />
    <Event_nav />
  </div>
</template>

<script setup>
import { useHead } from '#imports';
import SeoMeta from '~/components/seometa.vue';
import Fall from '~/components/landing/fall.vue';
import Event_nav from '~/components/event_nav.vue';
import Event_list from '~/components/event_list.vue';

useHead({
  style: [
    {
      children: `
        .fall {
          margin-top: -310px !important;
          background-position: center 410px !important;
        }
      
        @media only screen and (max-width: 950px) {
          .fall {
            margin-top: -58vw !important;
            background-position: center 44vw !important;
            background-size: 280vw auto !important;
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
