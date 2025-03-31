<template>
  <section id="event" class="event2504">
    
    <div class="event2504_inner">
      <h1 class="ttl">
       <span class="ttlT">
        <img loading="lazy" src="/images/landing/event(2504)/ttl01.png" width="152" alt="HELLO" />
        <img loading="lazy" src="/images/landing/event(2504)/ttl02.png" width="305" alt="Spring" />
       </span>
       <!-- img loading="lazy" src="/images/images/logo.svg" width="384" alt="두산위브더제니스 센트럴시티" / -->
      </h1>
      <div class="ps01G">
        <div class="ps01_03">
          <span>온누리 상품권</span>
        </div>
        <div class="ps01_04">
          <span>각티슈 세트</span>
        </div>
        <div class="ps01_05">
          <span>공기 청정기</span>
        </div>
        <div class="ps01_06">
          <span>라면세트</span>
        </div>
        <div class="ps01_07">
          <span>리빙세트</span>
        </div>
        
      </div>
      <div class="ps01_08" :class="{ on: isChirping }"></div>
      <p class="ps01_remark">※이미지는 참고용으로 실제와 다를 수 있으며, 사정에 따라 상품이 변경될 수 있습니다.</p>
      
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  // IntersectionObserver 옵션: 요소가 50% 이상 보일 때 trigger
  const observerOptions = {
    threshold: 0.5
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        // 애니메이션 실행 후 더 이상 관찰하지 않습니다.
        obs.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // .ps01G 내부의 [class^="ps01_"] 요소 관찰
  const ps01Elements = document.querySelectorAll('.ps01G [class^="ps01_"]');
  ps01Elements.forEach(el => {
    observer.observe(el);
  });
});

</script>

<style scoped>
/* 초기 상태: .ps01G 자식요소들은 투명하게 시작 */
.ps01G [class^="ps01_"]{
  opacity: 0;
}

/* 애니메이션 keyframes 정의 */
@keyframes flyInLeft {
  0% {
    transform: translateX(-100px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes flyInRight {
  0% {
    transform: translateX(100px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes flyInTop {
  0% {
    transform: translateY(-100px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes flyInBottom {
  0% {
    transform: translateY(100px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

/* ps01G 내부 자식 (총 5개) – 원하는 순서에 따라 방향 지정 */
.ps01G > div:nth-child(1).in-view {
  animation: flyInLeft 1s forwards;
}
.ps01G > div:nth-child(2).in-view {
  animation: flyInRight 1s forwards;
}
.ps01G > div:nth-child(3).in-view {
  animation: flyInTop 1s forwards;
}
.ps01G > div:nth-child(4).in-view {
  animation: flyInBottom 1s forwards;
}
.ps01G > div:nth-child(5).in-view {
  animation: flyInLeft 1s forwards;
}



  .event2504 {
    background: url("/images/landing/event(2504)/bg.jpg") no-repeat center;
    background-size: 100% 100%;
    position: relative;
    padding-top: 130px;
  }
  .event2504::before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    height: 200px;
    width: 100%;
    background: url("/images/landing/event(2504)/bg.png") no-repeat center bottom;
    background-size: 2688px auto;
  }
  .event2504_inner {
    position: relative;
    margin: 0 auto;
    max-width: 840px;
  }

  @keyframes naturalLanternSwing {
    0% { transform: rotate(0deg); }
    20% { transform: rotate(6deg); animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1); } /* 부드러운 시작 */
    40% { transform: rotate(-8deg); animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1); } /* 반대 방향으로 빠르게 */
    60% { transform: rotate(5deg); animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1); } /* 다시 느려짐 */
    80% { transform: rotate(-4deg); animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1); } /* 바람에 의해 살짝 변동 */
    100% { transform: rotate(0deg); animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1); } /* 원래 상태로 */
  }
  [class^="ps01_"], [class^="ps02_"] {
    position: absolute;
  }
  [class^="ps01_"] > span, [class^="ps02_"] > span {
    word-break: keep-all;
    position: absolute;
    text-align: center;
    color: #b91210;
    font-weight: bolder;
    font-size: 20px;
    line-height: 120%;
    z-index: 2;
    text-shadow: rgb(255, 255, 255) 2px 0px 0px, rgb(255, 255, 255) 1.75517px 0.958851px 0px, rgb(255, 255, 255) 1.0806px 1.68294px 0px, rgb(255, 255, 255) 0.141474px 1.99499px 0px, rgb(255, 255, 255) -0.832294px 1.81859px 0px, rgb(255, 255, 255) -1.60229px 1.19694px 0px, rgb(255, 255, 255) -1.97998px 0.28224px 0px, rgb(255, 255, 255) -1.87291px -0.701566px 0px, rgb(255, 255, 255) -1.30729px -1.5136px 0px, rgb(255, 255, 255) -0.421592px -1.95506px 0px, rgb(255, 255, 255) 0.567324px -1.91785px 0px, rgb(255, 255, 255) 1.41734px -1.41108px 0px, rgb(255, 255, 255) 1.92034px -0.558831px 0px;
  }
  .ps01G {
    position: relative;
    width: 100%;
    margin-top: 20px;
  }
  .ps01_03 {
    width: 242px;
    height: 184px;
    background: url("/images/landing/event(2504)/ps01_03.png") no-repeat center top;
    background-size: 100% auto;
    left: -70px;
    top: 80px;
  }
  .ps01_03 > span {
    bottom: 30px;
    left: -10px;
  }
  .ps01_04 {
    width: 280px;
    height: 159px;
    background: url("/images/landing/event(2504)/ps01_04.png") no-repeat center top;
    background-size: 100% auto;
    left: 130px;
    top: 130px;
    z-index: 1;
  }
  .ps01_04 > span {
    width: 100%;
    bottom: 30px;
    left: -10px;
  }
  .ps01_05 {
    width: 188px;
    height: 262px;
    background: url("/images/landing/event(2504)/ps01_05.png") no-repeat center top;
    background-size: 100% auto;
    left: 352px;
    top: -13px;
  }
  .ps01_05 > span {
    width: 100%;
    bottom: -10px;
    left: 0;
  }
  .ps01_06 {
    width: 221px;
    height: 177px;
    background: url("/images/landing/event(2504)/ps01_06.png") no-repeat center top;
    background-size: 100% auto;
    right: 120px;
    top: 140px;
    z-index: 1;
  }
  .ps01_06 > span {
    width: 100%;
    left: 0;
    bottom: 31px;
  }
  .ps01_07 {
    width: 260px;
    height: 175px;
    background: url("/images/landing/event(2504)/ps01_07.png") no-repeat center top;
    background-size: 100% auto;
    right: -97px;
    top: 114px;
  }
  .ps01_07 > span {
    width: 100%;
    left: -40px;
    bottom: 31px;
  }

  .ps01_remark {
    font-size: 15px;
    text-align: center;
    width: 100%;
    margin-top: 326px;
    position: relative;
    z-index: 1;
    word-break: keep-all;
    line-height: 140%;
  }



/* sp */
@media only screen and (max-width: 950px) {
  .event2504 {
    background-size: 333vw auto;
    padding-top: 13vw;
    z-index: 3;
    background-position: center -41vw;
    margin-top: 16vw;
  }
  .event2504::before {
    background-size: 110vw;
    top: -42vw;
    height: 50vw;
  }
  [class^="ps01_"] > span, [class^="ps02_"] > span {
    font-size: 3.8vw;
  }
  .ps01_03 {
    z-index: 1;
    left: -19vw;
    width: 56vw;
    height: 39vw;
    top: 21vw;
  }
  .ps01_03 > span {
    bottom: auto;
    top: -2vw;
    left: 20vw;
  }
  .ps01_04 {
    z-index: 1;
    width: 59vw;
    left: -10vw;
    height: 31vw;
    top: 47vw;
  }
  .ps01_04 > span {
    bottom: 4vw;
    left: 0;
  }
  .ps01_05 {
    width: 45vw;
    height: 61vw;
    left: 26vw;
    top: 0;
  }
  .ps01_05 > span {
    bottom: 13vw;
  }
  .ps01_06 {
    z-index: 1;
    width: 48vw;
    top: 38vw;
    right: -7vw;
    height: 36vw;
  }
  .ps01_06 > span {
    bottom: 3vw;
  }
  .ps01_07 {
    width: 54vw;
    height: 34vw;
    right: -12vw;
    top: 11vw;
    z-index: -1;
  }
  .ps01_07 > span {
    bottom: 7vw;
    left: -9vw;
  }
  .ps01_remark {
    font-size: 3vw;
    margin: 84vw auto 0;
    padding: 0 2vw;
    width: 80vw;
  }
}
</style>