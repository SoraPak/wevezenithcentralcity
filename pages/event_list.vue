<template>
  <div class="eventList">
    <Event_2501 />
    <section class="list" id="list">
      <h1 class="ttl">종료된 이벤트</h1>
      <ul>
        <li>
        <nuxt-link to="/event_2501">
          <img src="/og_img_2501.png" width="100%" alt="">
        </nuxt-link>
        </li>
        <li>
        <nuxt-link to="/event_2412_2">
          <img src="/og_img_2412_2.png" width="100%" alt="">
        </nuxt-link>
        </li>
        <li>
        <nuxt-link to="/event_2412">
          <img src="/og_img_2412.png" width="100%" alt="">
        </nuxt-link>
        </li>
        <li>
        <nuxt-link to="/event_2411">
          <img src="/og_img_2411.png" width="100%" alt="">
        </nuxt-link>
        </li>
        <li>
        <nuxt-link to="/event_2410">
          <img src="/og_img_2410.jpg" width="100%" alt="">
        </nuxt-link>
        </li>
        <li>
        <nuxt-link to="/event_24">
          <img src="/og_img_24.png" width="100%" alt="">
        </nuxt-link>
        </li>
      </ul>
    </section>
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
  border-top: 2px solid #fff;
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
import Event_2501 from '~/components/landing/event_2501.vue';
import Event_nav from '~/components/event_nav.vue';

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