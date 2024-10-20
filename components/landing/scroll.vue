<template>
  <div class="scroll" ref="scrollRef">
    <img class="scrollText" src="/images/landing/hero/scrolIText.png" width="87" alt="">
    <img class="scrollImg" src="/images/landing/hero/scrollImg.png" width="82" alt="">
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const scrollRef = ref(null);

onMounted(() => {
  // 스크롤 시 .scroll 요소 빠르게 페이드 아웃
  const handleScroll = () => {
    const scrollElement = scrollRef.value;
    scrollElement.style.transition = 'opacity 0.3s ease-out'; // 빠른 페이드 아웃 (0.3초)
    scrollElement.style.opacity = 0; // 스크롤 시 즉시 투명하게
  };

  window.addEventListener('scroll', handleScroll);

  // 컴포넌트가 제거될 때 스크롤 이벤트 리스너 제거
  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
  });

  // 초기 페이드 인 애니메이션
  setTimeout(() => {
    scrollRef.value.classList.add('fade-in');
  }, 1600);
});
</script>

<style scoped>
.scroll {
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: fixed;
  z-index: 1;
  bottom: 50px;
  opacity: 0;
  pointer-events: none;
  transition: opacity 1s ease-in;
}

.scroll.fade-in {
  opacity: 0.8;
}

/* 공통 위아래 둥실 애니메이션 */
@keyframes floatVertical {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
}

/* scrollText와 scrollImg에 다른 애니메이션 딜레이 적용 */
.scrollText {
  animation: floatVertical 3s ease-in-out infinite;
  animation-delay: 0s;
}

.scrollImg {
  animation: floatVertical 3s ease-in-out infinite;
  animation-delay: 0.5s;
}
</style>
