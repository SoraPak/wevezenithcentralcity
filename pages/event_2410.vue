<template>
  <div class="event_list">
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
@media only screen and (max-width: 950px) {
  .event_list {
    padding-bottom: 12vw;
  }
}
</style>
