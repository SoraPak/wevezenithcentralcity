<template>
  <section id="location" class="location">
    <div class="location_inner">
      <h1 class="ttl fade-in" ref="ttlRef01"><img loading="lazy" src="/images/landing/location/ttl.png" width="358" alt="빨라진 교통 어디로든 빠르게"></h1>
      <img loading="lazy" class="img01" ref="img01Ref" src="/images/landing/location/img01.png" width="474" alt="">
      <!-- p class="img01Text"><a href="https://kko.to/DrTCNa27qH" target="_blank"><span>현장</span>대구광역시 학정동 732-1번지 일원</a></!-->
      <p class="text01 from-right" ref="text01"><img src="/images/landing/location/text01.png" height="90" alt="더블 역세권 학정역 도보 2분"></p>
      <p class="text02 from-right" ref="text02"><img src="/images/landing/location/text02.png" height="90" alt="대구 4차 순환도로 시내외 어디든 빠른 이동"></p>
      <p class="text03 from-left" ref="text03"><img src="/images/landing/location/text03.png" height="90" alt="구미IC,혁신도시,성서공단,동대구역 주요 거점 빠른 접근성"></p>
      <p class="text04 from-left" ref="text04"><img src="/images/landing/location/text04.png" height="90" alt="대구경북신공항 개발 향후 교통 및 인프라 확충"></p>
      <img loading="lazy" class="img02" ref="img02Ref" src="/images/landing/location/img02.png" width="394" alt="">
      <img loading="lazy" class="img03" ref="img03Ref" src="/images/landing/location/img03.png" width="183" alt="">
      <img loading="lazy" class="img04" ref="img04Ref" src="/images/landing/location/img04.png" width="140" alt="">
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useScrollAnimation } from '~/composables/useScrollAnimation';

const ttlRef01 = ref(null);
const text01 = ref(null);
const text02 = ref(null);
const text03 = ref(null);
const text04 = ref(null);
const img01Ref = ref(null);
const img02Ref = ref(null);
const img03Ref = ref(null);  // 추가
const img04Ref = ref(null);  // 추가

// 스크롤 애니메이션 적용
useScrollAnimation([ttlRef01, text01, text02, text03, text04]);

onMounted(() => {
  const options = {
    threshold: 0.1,
  };

  const delayedOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -600px 0px',  // 스크롤을 더 내린 후 트리거 되게끔 설정
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
      }
    });
  }, options);

  const delayedObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
      }
    });
  }, delayedOptions);

  if (img01Ref.value) observer.observe(img01Ref.value);
  if (img02Ref.value) observer.observe(img02Ref.value);
  
  // img03와 img04는 더 스크롤을 내려야 나타남
  if (img03Ref.value) delayedObserver.observe(img03Ref.value);  // 추가
  if (img04Ref.value) delayedObserver.observe(img04Ref.value);  // 추가
});
</script>




<style scoped>
.location {
  background: #0182e0;
  color: #fff;
  position: relative;
  padding-bottom: 785px;
}

.location::before {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: -1px;
  width: 100%;
  background: url("/images/landing/location/bg_bottom.png") no-repeat center bottom;
  background-size: 2688px auto;
}

.location_inner {
  max-width: 840px;
  margin: 0 auto;
  position: relative;
  height: 635px;
}

.ttl, .img01, .img02, .img03, .img04, .text01, .text02, .text03, .text04 {
  position: absolute;
  z-index: 1;
}

.ttl {
  top: -140px;
  right: -20px;
}

.img01 {
  left: -20px;
  top: -110px;
  z-index: 5;
}

/*
.img01Text {
  font-size: 20px;
  padding-top: 380px;
  width: 474px;
  text-align: center;
  margin-left: -20px;
  line-height: 140%;
}

.img01Text a {
  color: #fff;
  transition: color 0.3s ease, font-size 0.3s ease;
}

.img01Text a:hover {
  color: rgb(204, 216, 255);
  font-size: 110%;
}

.img01Text a > span {
  padding: 3px;
  background: #ffc600;
  color: #0182e0;
  border-radius: 3px;
  margin-right: 8px;
}
*/
.text01 {
  top: 15px;
  right: 0;
}

.text02 {
  top: 120px;
  right: 20px;
}

.img02 {
  top: 240px;
  right: 10px;
  z-index: 5;
}

.text03 {
  top: 400px;
  left: 20px;
}

.text04 {
  top: 506px;
  left: 0;
}

.img03 {
  right: 302px;
  top: 156px;
  z-index: 1;
}

.img04 {
  right: 190px;
  top: 160px;
  z-index: 0;
}

/* 풍선처럼 부풀어 오르는 애니메이션 */
.img01, .img02 {
  transform: scale(0.5); /* 초기 크기 */
  opacity: 0;
  transition: transform 0.6s ease, opacity 0.4s ease; /* 부드러운 전환 */
}

.img01.animate, .img02.animate {
  transform: scale(1); /* 풍선처럼 부풀어 오름 */
  opacity: 1; /* 나타남 */
}

@keyframes balloonGrow {
  0% {
    transform: scale(0.5); /* 시작 시 작게 */
    opacity: 0;
  }
  50% {
    transform: scale(1.1); /* 살짝 더 크게 */
    opacity: 1;
  }
  100% {
    transform: scale(1); /* 원래 크기로 */
  }
}

/* img03, img04 대각선에서 나타나는 애니메이션 */
.img03, .img04 {
  transform: translate(-150px, -150px) scale(0.8); /* 대각선 왼쪽 위에서 시작 */
  opacity: 0;
  transition: transform 0.8s ease-out, opacity 0.8s ease; /* 부드럽게 나타남 */
}

.img03.animate, .img04.animate {
  transform: translate(0, 0) scale(1); /* 원래 위치로 이동하면서 크기 원래대로 */
  opacity: 1;
  transition: transform 0.8s ease-out, opacity 0.8s ease; /* 나타나는 애니메이션 */
}

/* img03 부릉부릉 애니메이션 (빠르게) */
.img03.animate {
  animation: carShake03 0.25s infinite ease-in-out 1s; /* 빠른 속도로 부릉부릉 */
}

/* img04 부릉부릉 애니메이션 (느리게) */
.img04.animate {
  animation: carShake04 0.3s infinite ease-in-out 1s; /* 느린 속도로 부릉부릉 */
}

/* img03 부릉부릉 애니메이션 (위아래 자연스럽게) */
@keyframes carShake03 {
  0% {
    transform: translateY(0); /* 기본 상태 */
  }
  50% {
    transform: translateY(-2px); /* 살짝 위로 이동 */
  }
  100% {
    transform: translateY(0); /* 다시 원래 위치 */
  }
}

/* img04 부릉부릉 애니메이션 (위아래 자연스럽게, 느리게) */
@keyframes carShake04 {
  0% {
    transform: translateY(0); /* 기본 상태 */
  }
  50% {
    transform: translateY(2px); /* 좀 더 위로 이동 */
  }
  100% {
    transform: translateY(0); /* 다시 원래 위치 */
  }
}



/* sp (모바일) */
@media only screen and (max-width: 950px) {
  .location {
    padding-bottom: 0;
  }
  .location::before {
    background-size: 101vw auto;
  }
  .location_inner {
    height: 141vw;
    max-width: 100%;
  }
  .ttl {
    right: 2vw;
    top: 0vw;
  }
  .ttl img {
    width: 46vw;
  }
  .img01 {
    width: 66vw;
    top: 4vw;
    left: -8vw;
  }

  /* 
    .img01Text {
      font-size: 3vw;
      margin-left: 0;
      width: 40vw;
      padding: 72vw 0 0 1vw;
    }
    .img01Text a > span {
      padding: 0.5vw;
      border-radius: 1vw;
      margin-right: 1vw;
    }
  */
  .text01 img, .text02 img, .text03 img, .text04 img {
    height: 12vw;
  }

  .text01 {
    top: 22vw;
    right: -5vw;
  }
  .text02 {
    top: 37.3vw;
    right: -2vw;
  }
  .img02 {
    top: 56vw;
    right: -1vw;
    width: 59vw;
  }
  .text03 {
    top: 77vw;
    left: -1.5vw;
  }
  .text04 {
    top: 92.3vw;
    left: -4.5vw;
  }
  .img03 {
    right: 30vw;
    top: 44.9vw;
    width: 25vw;
  }
  .img04 {
    right: 14vw;
    top: 45vw;
    width: 20vw;
  }
}

</style>