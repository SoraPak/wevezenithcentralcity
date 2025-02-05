<template>
  <div class="event_list">
    <p class="comment">종료된 행사입니다</p>
    <Fall />
    <Event_nav />
  </div>
</template>

<script setup>
import { useHead } from '#imports';
import Fall from '~/components/landing/fall.vue';
import Event_nav from '~/components/event_nav.vue';

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
