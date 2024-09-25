<template>
  <section class="ansim">
    <div class="ansim_inner">
      <div class="bg"><span></span><span></span><span></span></div>
      <h1 class="ttl" ref="ttlRef"><img loading="lazy" src="/images/landing/ansim/ttl.png" width="571" alt="할인 분양 걱정 NO! 후계약자와 동일한 혜택 보장!"></h1>
      <p class="text01" ref="text01Ref"><img loading="lazy" src="/images/landing/ansim/text01.png" width="600" alt="지금 바로 프리미엄 동호수 선택하세요"></p>
      <img class="img01" ref="img01Ref" src="/images/landing/ansim/img01.png" width="496" alt="">
      <img class="spImg01" ref="spImg01Ref" src="/images/landing/ansim/sp_img01.png" width="363" alt="">
      <dl class="section01" ref="section01Ref">
        <dt><img loading="lazy" src="/images/landing/ansim/sub_ttl.png" width="444" alt="계약조건 안심 보장제 실시!"></dt>
        <dd>분양정책 등의 변경으로 최초 공급계약체결 당시의 조건 대비 유리하게 변경될경우, 기존계약자에 대하여 변경된 계약조건으로 소급하여 혜택을 부여하는 제도</dd>
      </dl>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const ttlRef = ref(null);
const text01Ref = ref(null);
const img01Ref = ref(null);
const spImg01Ref = ref(null);
const section01Ref = ref(null);

onMounted(() => {
  const options = {
    threshold: 0.1, // 요소가 10% 보이면 애니메이션 트리거
    rootMargin: '0px 0px -300px 0px' // 화면 하단에서 300px 정도 더 내려가면 트리거
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
      }
    });
  }, options);

  observer.observe(ttlRef.value);
  observer.observe(text01Ref.value);
  observer.observe(img01Ref.value);
  observer.observe(spImg01Ref.value);
  observer.observe(section01Ref.value);
});

</script>

<style scoped>
  .ansim {
    background: #000f3a;
    color: #fff;
    position: relative;
  }
  .ansim_inner {
    max-width: 840px;
    margin: 0 auto;
    position: relative;
    height: 490px;
  }
  .ttl, .text01, .img01, .spImg01, .section01 {
    opacity: 0;
    transform: translateY(-50px);
    transition: opacity 0.6s ease-out, transform 0.6s ease-out;
  }

  .bg {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
  }
  .bg span:nth-child(1),
  .bg span:nth-child(2),
  .bg span:nth-child(3) {
    display: block;
    position: absolute;
  }
  .bg span:nth-child(1) {
    top: -620px;
    right: -600px;
    width: 577px;
    height: 518px;
    background: url("/images/landing/ansim/bg01.png") no-repeat center center;
    background-size: 100% auto;
    animation: randomMovement1 40s infinite cubic-bezier(0.42, 0.0, 0.58, 1.0);
  }

  .bg span:nth-child(2) {
    bottom: 0;
    left: -420px;
    width: 594px;
    height: 594px;
    background: url("/images/landing/ansim/bg02.png") no-repeat center center;
    background-size: 100% auto;
    animation: randomMovement2 80s infinite cubic-bezier(0.42, 0.0, 0.58, 1.0);
  }

  .bg span:nth-child(3) {
    bottom: -100px;
    right: -900px;
    width: 872px;
    height: 621px;
    background: url("/images/landing/ansim/bg03.png") no-repeat center center;
    background-size: 100% auto;
    animation: randomMovement3 45s infinite cubic-bezier(0.42, 0.0, 0.58, 1.0);
  }


  /* 확대된 범위로 애니메이션 수정 */
  @keyframes randomMovement1 {
    0% { transform: translate(0, 0); }
    20% { transform: translate(100px, -50px); }
    40% { transform: translate(-120px, 80px); }
    60% { transform: translate(90px, -100px); }
    80% { transform: translate(-50px, 50px); }
    100% { transform: translate(0, 0); }
  }

  @keyframes randomMovement2 {
    0% { transform: translate(0, 0); }
    20% { transform: translate(-80px, 100px); }
    40% { transform: translate(120px, -60px); }
    60% { transform: translate(-100px, 90px); }
    80% { transform: translate(50px, -50px); }
    100% { transform: translate(0, 0); }
  }

  @keyframes randomMovement3 {
    0% { transform: translate(0, 0); }
    20% { transform: translate(75px, -120px); }
    40% { transform: translate(-90px, 80px); }
    60% { transform: translate(50px, 50px); }
    80% { transform: translate(-50px, -100px); }
    100% { transform: translate(0, 0); }
  }


  .ttl, .text01, .img01, .spImg01 {
    position: absolute;
    z-index: 2;
  }
  .ttl {
    top: -520px;
  }
  .img01 {
    right: -100px;
    top: -597px;
  }
  .spImg01 {
    display: none;
  }
  .text01 {
    left: -57px;
    top: -365px;
  }
  .section01 {
    width: 622px;
    margin: 0 auto;
    margin-top: -170px;
    color: #606563;
    background: #fff;
    padding: 33px;
    border-radius: 30px;
    text-align: center;
    font-size: 25px;
    line-height: 160%;
    position: relative;
    word-break: keep-all;
  }

  
  /* 애니메이션 클래스 추가 */
  .animate {
    opacity: 1;
    transform: translateY(0);
    animation: dropBounce 0.8s cubic-bezier(0.22, 0.61, 0.36, 1) forwards;
  }
  @keyframes dropBounce {
    0% {
      transform: translateY(-200px); /* 더 높은 곳에서 시작 */
    }
    60% {
      transform: translateY(30px); /* 튕김 효과 */
    }
    80% {
      transform: translateY(-10px); /* 반동 */
    }
    100% {
      transform: translateY(0); /* 원위치 */
    }
  }
  /* 반복적인 지진 흔들림 애니메이션 */
  @keyframes shake {
    0% { transform: translate(0, 0); }
    10% { transform: translate(-5px, 0); }
    20% { transform: translate(5px, 0); }
    30% { transform: translate(-5px, 0); }
    40% { transform: translate(5px, 0); }
    50% { transform: translate(0, 0); }
  }

  .img01.animate, .spImg01.animate {
    animation: dropBounce 0.8s cubic-bezier(0.22, 0.61, 0.36, 1) forwards,
              shake 0.7s ease-in-out 1s infinite; /* 지진 효과 추가 */
  }





/* sp */
@media only screen and (max-width: 950px) {


  .ansim {

  }
  .ansim_inner {
    max-width: 100%;
    padding-top: 88vw;
    height: auto;
    padding-bottom: 34vw;
  }

  .bg span:nth-child(1) {
    top: -51vw;
    right: -136vw;
    width: 153vw;
    height: 100vw;
  }

  .bg span:nth-child(2) {
    bottom: 0;
    left: -44vw;
    width: 76vw;
    height: 76vw;
    top: 30vw;
  }

  .bg span:nth-child(3) {
    display: none;
  }


  .ttl {
    top: -21vw;
    left: 18vw;
  }
  .ttl img {
    width: 70vw;
  }
  .img01 {
    display: none;
  }
  .spImg01 {
    display: block;
    right: -7vw;
    top: 34vw;
    width: 100vw;
  }
  .text01 {
    left: 0;
    top: -1vw;
    text-align: center;
    width: 100%;
  }
  .text01 img {
    width: 88vw;
  }
  .section01 {
    width: 93vw;
    padding: 4vw;
    font-size: 3.8vw;
    position: relative;
    z-index: 2;
    box-sizing: border-box;
    border-radius: 3vw;
    margin: 0 auto;
  }
  .section01 dt img{
    width: 62vw;
  }



}
</style>