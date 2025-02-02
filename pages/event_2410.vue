<template>
  <div class="event_list">
    <p class="comment">종료된 이벤트입니다</p>
    <Halloween />
  </div>
</template>

<script setup>
import { useHead } from '#imports';
import Halloween from '~/components/landing/halloween.vue';

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
