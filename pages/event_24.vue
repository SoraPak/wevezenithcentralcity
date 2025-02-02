<template>
  <div class="event_list">
    <p class="comment">종료된 이벤트입니다</p>
    <Giveaway />
    <Event_nav />
  </div>
</template>

<script setup>
import { useHead } from '#imports';
import Giveaway from '~/components/landing/giveaway.vue';
import Event_nav from '~/components/event_nav.vue';

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
