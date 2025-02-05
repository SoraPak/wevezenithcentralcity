<template>
  <div class="event_list">
    <p class="comment">종료된 행사입니다</p>
    <Xmas />
    <Event_list />
    <Event_nav />
  </div>
</template>

<script setup>
import { useHead } from '#imports';
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
