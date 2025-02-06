<template>
  <SeoMeta 
    title="행사 - 학정역 두산위브더제니스 센트럴시티"
    description="두산위브더제니스 센트럴시티 행사"
    image="https://xn--hu1bq8p65bh1h6oby7bg90c.kr/og_img_event_list.png"
    url="https://xn--hu1bq8p65bh1h6oby7bg90c.kr/event_list"
  />
  <div class="eventList">
    <Event_2501 />
    <Event_list />
    <Event_nav :hideEventList="true" />
  </div>
</template>
<style scoped>
.eventList {
  overflow: hidden;
}
.list {
  max-width: 840px;
  margin: 0 auto;
  padding: 30px 0;
}
.list .ttl {
  text-align: center;
  font-size: 24px;
}
.list > ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  
}
.list > ul li {
  width: 32%;
  background-color: #fff;
  margin: 10px 0;
}
.list > ul li a {
  display: block;
}
.list > ul li img {
  display: block;
}
@media only screen and (max-width: 950px) {
  .eventList {
    padding-bottom: 12vw;
  }
  .list {
    border-top: .4vw solid #fff;
    padding: 5vw 0;
    box-sizing: border-box;
    margin: 0 5vw;
  }
  .list > ul {
    display: block;
  }
  .list > ul li {
    width: 100%;
    margin: 4vw 0;
  }
}
</style>

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