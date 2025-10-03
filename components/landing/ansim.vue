<template>
  <section id="ansim" class="ansim">
    <div class="ansim_inner">
      <div class="bg"><span></span><span></span><span></span></div>
      <h1 class="ttl" ref="ttlRef"><img loading="lazy" src="/images/landing/ansim/ttl.png" width="445" alt="할인 기다리다 놓친다!! 후계약자와 동일한 혜택 보장!"></h1>
      <img class="logo" src="/images/full_logo_w.svg" width="219" alt="두산위브더제니스 센트럴시티" />
      <p class="text01" ref="text01Ref">
        <span class="siren sirenL">
          <img class="off" src="/images/landing/ansim/siren.png" alt="">
          <img class="on" src="/images/landing/ansim/siren_on.png" alt="">
        </span>
        <span class="siren sirenR">
          <img class="off" src="/images/landing/ansim/siren.png" alt="">
          <img class="on" src="/images/landing/ansim/siren_on.png" alt="">
        </span>
        <img loading="lazy" src="/images/landing/ansim/text01.png" width="616" alt="로얄동 매진임박">
      </p>
      <img class="img01" ref="img01Ref" src="/images/landing/ansim/img01.png" width="447" alt="">
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
   
    color: #fff;
    position: relative;
  }
  .ansim::before {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: -800px;
    pointer-events: none;
    background: url("/images/landing/ansim/bg_top.png") no-repeat center top;
    background-size: 2688px auto;
  }
  .ansim_inner {
    max-width: 840px;
    margin: 0 auto;
    position: relative;
    height: 490px;
    
  }
  .ansim_inner::after {
    content: "";
    display: block;
    width: 1444px;
    height: 1447px;
    background: url("/images/landing/ansim/bg_o.jpg") no-repeat center center;
    background-size: 100% auto;
    position: absolute;
    right: -620px;
    top: -870px;
    mix-blend-mode: screen;
    animation: rotateInfinite 70s linear infinite;
    pointer-events:none;
  }
  /* 회전 애니메이션 */
  @keyframes rotateInfinite {
    0% {
      transform: rotate(0deg); /* 시작 상태 */
    }
    100% {
      transform: rotate(360deg); /* 한 바퀴 회전 */
    }
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

  .logo {
    position: absolute;
    right: 0;
    top: -570px;
  }
  .ttl {
    top: -524px;
    left: 80px;
  }
  .img01 {
    right: -179px;
    top: -460px;
  }
  .spImg01 {
    display: none;
  }
  .text01 {
    left: -25px;
    top: -400px;
    width: 616px;
  }
  .siren {
    width: 157px;
    height: 157px;
    display: block;
    position: absolute;
  }
  .siren > img {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: auto;
  }
  .siren .off {
    opacity: 1; /* 기본적으로 꺼진 상태 */
    transition: opacity 0.3s ease;
  }

  .siren .on {
    opacity: 0; /* 기본적으로 켜지지 않은 상태 */
    transition: opacity 0.3s ease;
  }

  .sirenL {
    left: 0;
    top: 54px;
  }
  .sirenR {
    right: 0;
    top: 54px;
  }

  @keyframes sirenBlinkLeft {
    0%, 100% {
      opacity: 1; /* 불이 꺼진 상태 */
    }
    50% {
      opacity: 0; /* 불이 켜진 상태 */
    }
  }

  @keyframes sirenBlinkRight {
    0%, 100% {
      opacity: 0; /* 불이 켜진 상태 */
    }
    50% {
      opacity: 1; /* 불이 꺼진 상태 */
    }
  }

  .sirenL .off {
    animation: sirenBlinkLeft 1s infinite; /* 왼쪽 사이렌 교대로 깜빡이는 애니메이션 */
  }

  .sirenL .on {
    animation: sirenBlinkRight 1s infinite; /* 왼쪽 사이렌 교대로 깜빡이는 애니메이션 */
  }

  .sirenR .off {
    animation: sirenBlinkRight 1s infinite; /* 오른쪽 사이렌 교대로 깜빡이는 애니메이션 */
  }

  .sirenR .on {
    animation: sirenBlinkLeft 1s infinite; /* 오른쪽 사이렌 교대로 깜빡이는 애니메이션 */
  }

  .section01 {
    width: 622px;
    margin: 0 auto;
    color: #606563;
    background: #fff;
    padding: 33px;
    border-radius: 30px;
    text-align: center;
    font-size: 25px;
    line-height: 160%;
    position: relative;
    word-break: keep-all;
    z-index: 2;
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
  .ansim::before {
    background-size: 101vw auto;
    top: -36vw;
  }
  .ansim_inner {
    max-width: 100%;
    padding-top: 95vw;
    height: auto;
    padding-bottom: 34vw;
  }
  .ansim_inner::after {
    width: 300vw;
    height: 302vw;
    right: -124vw;
    top: -70vw;
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

  .logo {
    width: 29vw;
    top: 78vw;
    left: 4vw;
    z-index: 3;
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
    right: -3vw;
    top: 39vw;
    width: 100vw;
  }
  .text01 {
    left: 0;
    top: -1vw;
    text-align: center;
    width: 100%;
  }
  .text01 > img {
    width: 93vw;
  }
  .siren {
    width: 28vw;
    height: 28vw;
    display: block;
    position: absolute;
  }
  .sirenL {
    left: 0;
    top: 5vw;
  }
  .sirenR {
    right: 0;
    top: 5vw;
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