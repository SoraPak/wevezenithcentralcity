<template>
  <ul ref="spRNav" class="sp_rNav" :class="{ 'animate': isMounted }">
    <li class="kakao"><a href="https://open.kakao.com/me/wevehj" target="_blank"><img loading="lazy" src="/images/landing/r_nav/text_kakao.svg" alt="카톡상담/예약"></a></li>
    
    <li class="call"><a href="tel:1555-1924" target="_blank"><img loading="lazy" src="/images/landing/r_nav/text_call.svg" alt="전화상담/예약"></a></li>
  </ul>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isMounted = ref(false)
const spRNav = ref(null)

const adjustSpRNavPosition = () => {
  const footer = document.querySelector('footer')
  if (footer && spRNav.value) {
    const footerRect = footer.getBoundingClientRect()
    const viewportHeight = window.innerHeight
    if (footerRect.top < viewportHeight) {
      // footer가 화면에 보이는 경우, bottom 값을 조정하여 겹치지 않게 함
      const overlapHeight = viewportHeight - footerRect.top
      spRNav.value.style.bottom = `${overlapHeight}px`
    } else {
      // footer가 보이지 않을 경우 기본 위치로 설정
      spRNav.value.style.bottom = '0'
    }
  }
}

onMounted(() => {
  isMounted.value = true
  window.addEventListener('scroll', adjustSpRNavPosition)
  window.addEventListener('resize', adjustSpRNavPosition)
  adjustSpRNavPosition()
})

onUnmounted(() => {
  window.removeEventListener('scroll', adjustSpRNavPosition)
  window.removeEventListener('resize', adjustSpRNavPosition)
})
</script>


<style scoped>
.sp_rNav {
  display: flex;
  position: fixed;
  bottom: -100%; /* 화면 아래에 숨김 */
  background: #fff;
  height: 13vw;
  z-index: 1001;
  width: 100vw;
  font-size: 4.3vw;
  transition: bottom 0.5s ease-in-out; /* 부드러운 슬라이드 효과 */
  transition: all 0.3s ease;
}

.sp_rNav.animate {
  bottom: 0; /* 애니메이션 후 원래 위치로 이동 */
}

.sp_rNav li {
  flex: 1;
  display: flex;
}

.sp_rNav li a {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.sp_rNav li a::before {
  content: "";
  display: block;
  width: 10vw;
  height: 10vw;
  background-size: 100% auto;
  margin-right: 1.5vw;
  margin-left: -3vw;
}

.sp_rNav .kakao a {
  background: #fae100;
  color: #371d1e;
}
.sp_rNav li img {
  width: 26vw;
}


/* 튀어오르는 애니메이션 정의 */
@keyframes bounce {
  0% {
    transform: translateY(0) scaleY(1); /* 처음 위치와 기본 크기 */
    animation-timing-function: ease-out; /* 빠르게 튀어오름 */
  }
  15% {
    transform: translateY(-30px) scaleY(1.1); /* 위로 튀어오를 때 height가 커짐 */
    animation-timing-function: ease-out; /* 높이 올라갈수록 느려짐 */
  }
  20% {
    transform: translateY(-30px) scaleY(1.1); /* 멈칫 */
    animation-timing-function: ease-in; /* 빠르게 떨어짐 */
  }
  35% {
    transform: translateY(0) scaleY(0.9); /* 내려올 때 height가 줄어듦 */
  }
  50% {
    transform: translateY(0) scaleY(1); /* 원래 위치와 크기로 돌아옴 */
  }
  100% {
    transform: translateY(0) scaleY(1); /* 마지막 프레임에서 3초 대기 */
  }
}


.sp_rNav .kakao a::before {
  background-image: url("/images/landing/r_nav/kakao.svg");
  animation: bounce 2s ease-in-out infinite; /* 애니메이션 적용 */
  display: block;
  width: 10vw;
  height: 10vw;
  background-size: 100% auto;
}

.sp_rNav .call a {
  background: #07299e;
  color: #fff;
}

.sp_rNav .call a::before {
  background-image: url("/images/landing/r_nav/call.svg");
}
</style>
