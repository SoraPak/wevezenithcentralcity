<template>
  <section class="school_bus">
    <div class="school_bus_inner">
      <img loading="lazy" class="img01" ref="img01Ref" src="/images/landing/school_bus/img01.png" width="288" alt="">
      <img loading="lazy" class="img02" ref="img02Ref" src="/images/landing/school_bus/img02.png" width="380" alt="">
      <img loading="lazy" class="img03" ref="img03Ref" src="/images/landing/school_bus/img03.png" width="118" alt="">
      <img loading="lazy" class="img04" ref="img04Ref" src="/images/landing/school_bus/img03.png" width="92" alt="">
      <img loading="lazy" class="img05" ref="img05Ref" src="/images/landing/school_bus/img03.png" width="92" alt="">
      <h1 class="ttl">
        <img loading="lazy" ref="ttlImg01Ref" src="/images/landing/school_bus/ttl01.svg" width="472" alt="안심통학">
        <img loading="lazy" ref="ttlImg02Ref" src="/images/landing/school_bus/ttl02.svg" width="472" alt="셔틀버스 지원!">
      </h1>

      <p class="text01" ref="text01Ref"><img loading="lazy" src="/images/landing/school_bus/text01.svg" height="33" alt="(2년 지원 예정)"></p>
      <p class="text02" ref="text02Ref"><img loading="lazy" src="/images/landing/school_bus/text02.svg" width="342" alt="원스톱 안심통학을 위한 아파트 정문부터 학교까지 통학용 셔틀버스 지원"></p>
      <p class="text03">※학정지구 내 초등학교 신설 시 셔틀버스 지원계획이 변경 또는 취소될 수 있습니다. </p>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const ttlImg01Ref = ref(null);
const ttlImg02Ref = ref(null);
const text01Ref = ref(null);
const text02Ref = ref(null);
const img01Ref = ref(null);
const img02Ref = ref(null);
const img03Ref = ref(null);
const img04Ref = ref(null);
const img05Ref = ref(null);

onMounted(() => {
  const options = {
    threshold: 0.1, // 요소가 10% 보이면 애니메이션 트리거
    rootMargin: '0px 0px -300px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
      }
    });
  }, options);

  // 요소가 존재하는지 확인한 후 옵저버 설정
  if (ttlImg01Ref.value) observer.observe(ttlImg01Ref.value);
  if (ttlImg02Ref.value) observer.observe(ttlImg02Ref.value);
  if (text01Ref.value) observer.observe(text01Ref.value);
  if (text02Ref.value) observer.observe(text02Ref.value);
  if (img01Ref.value) observer.observe(img01Ref.value);
  if (img02Ref.value) observer.observe(img02Ref.value);
  if (img03Ref.value) observer.observe(img03Ref.value);
  if (img04Ref.value) observer.observe(img04Ref.value);
  if (img05Ref.value) observer.observe(img05Ref.value);
});
</script>


<style scoped>
/* 애니메이션 전 기본 상태 */
.ttl img, .text01, .text02, .img03, .img04, .img05 {
  opacity: 0;
  transform: translateY(-300px) rotate(-15deg); /* 회전 추가 */
  transition: opacity 0.6s, transform 0.6s;
}

.img01, .img02 {
  opacity: 0;
  transform: translateY(200px); /* 밑에서 위로 솟아오르는 애니메이션 */
  transition: opacity 0.6s, transform 0.6s;
}

/* 스크롤 시 애니메이션 클래스 */
.school_bus .animate {
  opacity: 1;
  transform: translateY(0) rotate(0deg); /* 회전 복구 */
  animation: dropBounce 0.8s cubic-bezier(0.22, 0.61, 0.36, 1) forwards;
}

.img01.animate, .img02.animate {
  animation: riseBounce 0.8s cubic-bezier(0.22, 0.61, 0.36, 1) forwards;
}

/* 구름이 떨어지면서 튕기는 애니메이션 */
@keyframes dropBounce {
  0% {
    transform: translateY(-300px) rotate(-15deg); /* 시작할 때 구름을 약간 회전 */
    opacity: 0;
  }
  50% {
    transform: translateY(20px) rotate(10deg); /* 구름이 부드럽게 튕김 */
    opacity: 1;
  }
  70% {
    transform: translateY(-10px) rotate(-5deg); /* 반동 효과 */
  }
  100% {
    transform: translateY(0) rotate(0deg); /* 원위치 */
  }
}

/* 구름이 둥실둥실 떠다니는 애니메이션 */
@keyframes cloudFloatUp {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-40px); /* 위로 올라가는 구름 */
  }
  100% {
    transform: translateY(0);
  }
}

@keyframes cloudFloatDown {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(40px); /* 아래로 내려가는 구름 */
  }
  100% {
    transform: translateY(0);
  }
}

/* 구름 3개의 애니메이션에 다른 속도와 딜레이 적용 */
.img03.animate {
  animation: dropBounce 0.8s cubic-bezier(0.22, 0.61, 0.36, 1) forwards, cloudFloatUp 8s ease-in-out infinite;
}

.img04.animate {
  animation: dropBounce 0.8s cubic-bezier(0.22, 0.61, 0.36, 1) forwards, cloudFloatDown 5s ease-in-out infinite;
  animation-delay: 0.2s; /* 애니메이션 딜레이 추가 */
}

.img05.animate {
  animation: dropBounce 0.8s cubic-bezier(0.22, 0.61, 0.36, 1) forwards, cloudFloatUp 4s ease-in-out infinite;
  animation-delay: 0.4s; /* 애니메이션 딜레이 추가 */
}





.school_bus {
  position: relative;
  background: url("/images/landing/school_bus/bg02.png") repeat-x center bottom;
  background-size: 1px auto;
  text-align: center;
  color: #000f3a;
}
.school_bus::before {
  content: "";
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  background: url("/images/landing/school_bus/bg_top.png") no-repeat center bottom;
  background-size: 2688px auto;
  width: 2688px;
  height: 156px;
  top: -155px;
}

.school_bus::after {
  content: "";
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  background: url("/images/landing/school_bus/bg_bottom.png") no-repeat center bottom;
  background-size: 2688px auto;
  width: 2688px;
  height: 184px;
  bottom: 0;
}
.school_bus_inner {
  height: 575px;
  max-width: 840px;
  margin: 0 auto;
  position: relative;
}
.ttl {
  font-size: 81px;
  text-align: center;
  line-height: 120%;
  color: #000f3a;
}
.ttl span:first-child {
  color: #fff;
}
.ttl span:last-child {
  color: #f5f210;
}
.img01, .img02, .img03, .img04, .img05 {
  position: absolute;
}
.img01 {
  right: -91px;
  top: -20px;
}
.img02 {
  left: -140px;
  bottom: 37px;
  z-index: 3;
}
.img03{
  left: -85px;
  top: -70px;
}
.img04{
  left: 130px;
  top: 10px;
}
.img05 {
  right: -139px;
  top: 70px;
}
.text01 {
  font-size: 28px;
  margin-top: 17px;
  font-weight: 400;
}

.text02 {
  font-size: 33px;
  font-weight: 600;
  line-height: 140%;
  margin-top: 40px;
}

.text03 {
  color: #fff;
  font-size: 13px;
  margin-right: 20px;
  margin-top: 10px;
}


/* sp */
@media only screen and (max-width: 950px) {

  .school_bus {
    background-size: 0.13vw auto;
  }
  .school_bus::before {
    background-size: 100% auto;
    width: 101vw;
    height: 6vw;
    top: -5.6vw;
  }
  .school_bus::after {
    background-size: 100% auto;
    width: 101vw;
    height: 7vw;
    bottom: 3.6vw;
  }
  .school_bus_inner {
    height: 115vw;
    max-width: 100%;
  }
  .ttl {
    font-size: 11.5vw;
    padding-top: 8vw;
    height: 25.5vw;
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
    margin-bottom: 3.5vw;
  }
  .ttl img{
    width: 70vw;
  }
  .ttl img:last-child{
    margin-top: auto;
  }
  .img01 {
    right: -8vw;
    top: 37vw;
    width: 41vw;
  }
  .img02 {
    left: -11vw;
    bottom: 1vw;
    width: 53vw;
  }
  .img03{
    left: -7vw;
    top: 3vw;
    width: 18vw;
  }
  .img04{
    left: 5vw;
    top: 37vw;
    width: 14vw;
    
  }
  .img05 {
    right: -7vw;
    top: 6vw;
    width: 14vw;
  }
  .text01 {
    font-size: 4.6vw;
    margin-top: 0;
  }
  .text01 img {
    height: 4.5vw;
  }
  .text02 {
    font-size: 4.8vw;
    margin: 1vw 22vw;
  }
  .text02 img {
    width: 48vw;
  }
  .text03 {
    font-size: 2.7vw;
    margin: 0 29vw 0 34vw;
    line-height: 160%;
    word-break: keep-all;
    position: absolute;
    bottom: 11vw;
  }


}
</style>