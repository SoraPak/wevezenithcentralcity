<template>
  <SeoMeta 
    title="행사 - 학정역 두산위브더제니스 센트럴시티"
    description="두산위브더제니스 센트럴시티 행사"
    image="https://xn--hu1bq8p65bh1h6oby7bg90c.kr/og_img_event_list.png"
    url="https://xn--hu1bq8p65bh1h6oby7bg90c.kr/event/event_list"
  />
  <div class="event_list">
    <p class="comment">종료된 행사입니다</p>
    <Event_2501 />
    <Event_list />
    <Event_nav />
  </div>
</template>

<script setup>
import { useHead } from '#imports';
import SeoMeta from '~/components/seometa.vue';
import Event_2501 from '~/components/landing/event_2501.vue';
import Event_nav from '~/components/event_nav.vue';
import Event_list from '~/components/event_list.vue';
useHead({
  style: [
    {
      children: `
        .event2501 {
          background-position: center -150px !important;
        }
        .event2501::before {
          display: none !important;
        }
        .event2501_inner {
          margin-top: -100px !important;
        }
        @media only screen and (max-width: 950px) {
          .event2501 {
            margin-top: 0 !important;
            background-position: center -50vw !important;
          }
          .event2501_inner {
            margin-top: -12vw !important;
          }
          .sec02 {
            padding-bottom: 12vw !important;
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
