<template>
  <SeoMeta 
    title="새해운세 방문자 행사 - 학정역 두산위브더제니스 센트럴시티"
    description="박소라 과장을 찾아오시면 8만 원 상당의 새해 운세 타로 점이 무료!"
    image="https://xn--hu1bq8p65bh1h6oby7bg90c.kr/og_img_2412_2.png"
    url="https://xn--hu1bq8p65bh1h6oby7bg90c.kr/event/2412_2"
  />
  <div class="event_list">
    <p class="comment">종료된 행사입니다</p>
    <Event_con />
    <Event_list />
    <Event_nav />
  </div>
</template>

<script setup>
import { useHead } from '#imports';
import SeoMeta from '~/components/seometa.vue';
import Event_con from '~/components/landing/new-year.vue';
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
