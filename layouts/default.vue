<template>
  <div class="bodWrap">
    <R_nav class="rNav" />
    <Sp_r_nav class="sp_rNav" />
    <main>
      <NuxtPage />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import { onMounted, nextTick } from 'vue';
import Sp_r_nav from '~/components/landing/sp_r_nav.vue';
import R_nav from '~/components/landing/r_nav.vue';
import Footer from '~/components/footer.vue';

const checkResponsiveAndReload = () => {
  let lastWidth = window.innerWidth;
  window.addEventListener('resize', () => {
    const currentWidth = window.innerWidth;
    if (lastWidth > 950 && currentWidth <= 950) {
      window.location.reload();
    }
    lastWidth = currentWidth;
  });
};

onMounted(() => {
  nextTick(() => {
    document.querySelector('.bodWrap').style.opacity = '1';
  });

  checkResponsiveAndReload();
});
</script>

<style scoped>
.bodWrap {
  display: flex;
  flex-direction: column;
  height: 100%;
  opacity: 0; /* 초기 상태에서 안 보이게 설정 */
  transition: opacity 0.5s ease-in-out; /* 페이드인 애니메이션 */
}
header {
  display: flex;
  justify-content: center;
  min-height: 80px;
  padding: 0 10px;
  border-bottom: 5px solid #084290;
}
main {
  flex: 1;
}
.sp_reviews, .sp_rNav {
  display: none;
}
@media only screen and (max-width: 950px) {
  .reviews, .rNav {
    display: none;
  }
  .sp_reviews {
    display: block;
  }
  .sp_rNav {
    display: flex;
  }
}
</style>
