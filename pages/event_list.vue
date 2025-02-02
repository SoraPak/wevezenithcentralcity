<template>
  <div class="event_list">
    <Event_2501 />
  </div>
</template>

<script setup>
import { useHead } from '#imports';
import Event_2501 from '~/components/landing/event_2501.vue';

useHead({
  style: [
    {
      children: `
        .event2501::before {
          display: none !important;
        }
        .event2501_inner {
          margin-top: -100px !important;
        }
        @media only screen and (max-width: 950px) {
          .event2501 {
            margin-top: 0 !important;
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
@media only screen and (max-width: 950px) {
  .event_list {
    padding-bottom: 12vw;
  }
}
</style>
