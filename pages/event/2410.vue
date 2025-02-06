<template>
  <SeoMeta 
    title="할로윈행사 - 학정역 두산위브더제니스 센트럴시티"
    description="박소라 과장 찾아 계약하면 할로윈(핼러윈)선물이 팡팡!"
    image="https://xn--hu1bq8p65bh1h6oby7bg90c.kr/og_img_2410.jpg"
    url="https://xn--hu1bq8p65bh1h6oby7bg90c.kr/event/2410"
  />
  <div class="event_list">
    <p class="comment">종료된 행사입니다</p>
    <Halloween />
    <Event_list />
    <Event_nav />
  </div>
</template>

<script setup>
import { useHead } from '#imports';
import SeoMeta from '~/components/seometa.vue';
import Halloween from '~/components/landing/halloween.vue';
import Event_nav from '~/components/event_nav.vue';
import Event_list from '~/components/event_list.vue';

useHead({
  style: [
    {
      children: `
        main {
          display: flex !important;
        }
        .halloween {
          margin-bottom: 60px !important;
          margin-top: -60px;
        }
      
        @media only screen and (max-width: 950px) {
          .halloween {
            margin-top: 0 !important;
            min-height: 187vw !important;
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
