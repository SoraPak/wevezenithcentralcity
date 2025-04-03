<style scoped>
  @keyframes fall {
    0% {
      transform: translateY(-150px) translateX(0px) rotate(0deg);
      opacity: 0;
    }
    10% {
      opacity: 1;
    }
    100% {
      transform: translateY(1200px) translateX(200px) rotate(360deg);
      opacity: 0;
    }
  }

  @keyframes ffFall {
  0% {
    transform: translateY(-20vh) translateX(0) rotate(0deg) scale(1);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  30% {
    transform: translateY(30vh) translateX(10vw) rotate(45deg) scale(1.05);
  }
  60% {
    transform: translateY(70vh) translateX(-15vw) rotate(135deg) scale(1.1);
  }
  100% {
    transform: translateY(120vh) translateX(20vw) rotate(360deg) scale(1);
    opacity: 0;
  }
}

  .fSet, .ffSet  {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    pointer-events: none;
  }
  .fSet [class^="f_"] {
    position: absolute;
    width: 77px;
    height: 77px;
    background-size: 100% auto;
    background-position: center center;
    background-repeat: no-repeat;

    animation: fall linear infinite;
    animation-duration: calc(6s + var(--i, 0) * 1s); /* 속도 다양화 */
    animation-delay: calc(var(--i, 0) * 0.5s);       /* 시작 시간 차이 */
    animation-fill-mode: both;                       /* 시작 전 스타일 유지 */
    will-change: transform, opacity;                 /* 퍼포먼스 최적화 */
    opacity: 0; 
  }
  .fSet .f_01 {
    background-image: url("/images/landing/event(2504)/f01.png");
    left: 90px;
    top: 200px;
  }
  .fSet .f_02 {
    background-image: url("/images/landing/event(2504)/f02.png");
    left: 290px;
    top: 318px;
  }
  .fSet .f_03 {
    background-image: url("/images/landing/event(2504)/f03.png");
    left: -100px;
    top: 478px;
  }
  .fSet .f_04 {
    background-image: url("/images/landing/event(2504)/f04.png");
    right: 60px;
    top: 798px;
  }
  .fSet .f_05 {
    background-image: url("/images/landing/event(2504)/f05.png");
    right: 460px;
    top: 948px;
  }
  .fSet .f_06 {
    background-image: url("/images/landing/event(2504)/f06.png");
    right: -70px;
    top: 248px;
  }
  .fSet .f_07 {
    background-image: url("/images/landing/event(2504)/f06.png");
    left: 200px;
    top: -2px;
  }
  .fSet .f_08 {
    background-image: url("/images/landing/event(2504)/f01.png");
    right: -190px;
    top: 48px;
  }
  .fSet .f_09 {
    background-image: url("/images/landing/event(2504)/f02.png");
    right: -330px;
    top: 488px;
  }
  .fSet .f_10 {
    background-image: url("/images/landing/event(2504)/f03.png");
    right: -180px;
    top: 878px;
  }
  .fSet .f_11 {
    background-image: url("/images/landing/event(2504)/f04.png");
    left: -390px;
    top: 398px;
  }
  .fSet .f_12 {
    background-image: url("/images/landing/event(2504)/f05.png");
    left: -290px;
    top: 78px;
  }
  .fSet .f_13 {
    background-image: url("/images/landing/event(2504)/f06.png");
    left: 170px;
    top: 838px;
  }
  .fSet .f_14 {
    background-image: url("/images/landing/event(2504)/f01.png");
    right: -160px;
    top: 418px;
  }
  .ffSet {
    z-index: 2;
  }
  .ffSet [class^="f_"] {
    position: absolute;
    width: 245px;
    height: 245px;
    background-size: 100% auto;
    background-position: center center;
    background-repeat: no-repeat;

    animation: ffFall linear infinite;
    animation-duration: calc(8s + var(--j, 0) * 1.2s); /* 각자 다른 속도 */
    animation-delay: calc(var(--j, 0) * 0.7s);         /* 시작 시간 차이 */
    will-change: transform, opacity;
    opacity: 0;
  }
  .ffSet .f_01 {
    background-image: url("/images/landing/event(2504)/f_f01.png");
    left: -390px;
    top: -90px;
  }
  .ffSet .f_02 {
    background-image: url("/images/landing/event(2504)/f_f02.png");
    right: -30px;
    top: 198px;
  }
  .ffSet .f_03 {
    background-image: url("/images/landing/event(2504)/f_f03.png");
    left: 180px;
    top: 618px;
  }
  .ffSet .f_04 {
    background-image: url("/images/landing/event(2504)/f_f04.png");
    right: 10px;
    top: 858px;
  }
  /* sp */
  @media only screen and (max-width: 950px) {
    .fSet [class^="f_"] {
      width: 12vw;
      height: 12vw;
    }
    .fSet .f_01 {
      left: 15vw;
      top: 28vw;
    }
    .fSet .f_02 {
      left: 33vw;
      top: 74vw;
    }
    .fSet .f_03 {
      left: -3vw;
      top: 55vw;
    }
    .fSet .f_04 {
      right: -3vw;
      top: 70vw;
    }
    .fSet .f_05 {
      right: 80vw;
      top: 230vw;
    }
    .fSet .f_06 {
      right: 24vw;
      top: 130vw;
    }
    .fSet .f_07 {
      left: 40vw;
      top: -7vw;
    }
    .fSet .f_08 {
      right: 15vw;
      top: 12vw;
    }
    .fSet .f_09 {
      right: 14vw;
      top: 150vw;
    }
    .fSet .f_10 {
      right: 23vw;
      top: 240vw;
    }
    .fSet .f_11 {
      left: 10vw;
      top: 120vw;
    }
    .fSet .f_12 {
      left: 58vw;
      top: 46vw;
    }
    .fSet .f_13 {
      left: 24vw;
      top: 160vw;
    }
    .fSet .f_14 {
      right: 40vw;
      top: 204vw;
    }

    .ffSet [class^="f_"] {
      width: 34vw;
      height: 34vw;
    }

    .ffSet .f_01 {
      left: -16vw;
      top: -19vw;
    }
    .ffSet .f_02 {
      right: -15vw;
      top: 40vw;
    }
    .ffSet .f_03 {
      left: 20vw;
      top: 160vw;
    }
    .ffSet .f_04 {
      right: 20vw;
      top: 236vw;
    }
  }
</style>
<template>
  <section id="event" class="event2504">
    <span class="bgC01"></span>
    <span class="bgC02"></span>
    <div class="event2504_inner">
      <div class="fSet">
        <span class="f_01" style="--i: 0"></span>
        <span class="f_02" style="--i: 1"></span>
        <span class="f_03" style="--i: 2"></span>
        <span class="f_04" style="--i: 3"></span>
        <span class="f_05" style="--i: 4"></span>
        <span class="f_06" style="--i: 5"></span>
        <span class="f_07" style="--i: 6"></span>
        <span class="f_08" style="--i: 7"></span>
        <span class="f_09" style="--i: 8"></span>
        <span class="f_10" style="--i: 9"></span>
        <span class="f_11" style="--i: 10"></span>
        <span class="f_12" style="--i: 11"></span>
        <span class="f_13" style="--i: 12"></span>
        <span class="f_14" style="--i: 13"></span>
      </div>
      <span class="bgC01"></span>
      <span class="bgC02"></span>
      <div class="ffSet">
        <span class="f_01" style="--j: 0"></span>
        <span class="f_02" style="--j: 1"></span>
        <span class="f_03" style="--j: 2"></span>
        <span class="f_04" style="--j: 3"></span>
      </div>
      <h1 class="ttl">
        <span class="ttlT">
          <img loading="lazy" src="/images/landing/event(2504)/ttl01.png" width="116" alt="HELLO" />
          <img loading="lazy" src="/images/landing/event(2504)/ttl02.png" width="233" alt="Spring" />
        </span>
        <img class="ttlB" loading="lazy" src="/images/logo.svg" width="314" alt="두산위브더제니스 센트럴시티">
      </h1>
      <div class="sec01">
        <p class="text01"><img loading="lazy" src="/images/landing/event(2504)/sec01_text01.png" width="533" alt="박소라 과장 찾아오시면 행운의 경품 복권을 드립니다!!" /></p>
        <div class="textBox">
          <dl>
            <dt><span>배포 장소</span></dt>
            <dd>두산위브더제니스 센트럴시티 모델하우스</dd>
          </dl>
          <dl>
            <dt><span>배포 조건</span></dt>
            <dd>
              <ul>
                <li><span>방문예약</span> 하시고(필수!!) 팀장 <span>상담 완료 시</span></li>
                <li>방문 시 <span>“경품 복권 주세요”</span> 라고 말 씀 해 주세요!</li>
                <li>방문 팀 당 하나씩 제공(<span>가족단위방문 추천!</span>)</li>
              </ul>
            </dd>
          </dl>
        </div>
      </div>
      
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
      <p class="ps01_remark">※이미지는 참고용으로 실제와 다를 수 있으며, 사정에 따라 상품이 변경될 수 있습니다.</p>
      <nuxt-link to="/event_list#list" class="BtnEvent">종료된 행사 보기</nuxt-link>
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
    overflow: hidden; 
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
    z-index: 10;
  }

  .event2504 > .bgC01,
  .event2504 > .bgC02 {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    pointer-events: none;
  }
  .event2504 > .bgC01 {
    background: url("/images/landing/event(2504)/bg_c01.png") repeat-x center 40px;
    background-size: 2280px auto;
  }
  .event2504 > .bgC02 {
    background: url("/images/landing/event(2504)/bg_c02.png") repeat-x 20px bottom;
    background-size: 1980px auto;
  }
  .event2504_inner {
    position: relative;
    margin: 0 auto;
    max-width: 840px;
    padding: 30px 0;
  }
  .event2504_inner > .bgC01,
  .event2504_inner > .bgC02 {
    background: url("/images/landing/event(2504)/bg_f.png") no-repeat left top;
    background-size: 100% auto;
    width: 546px;
    height: 546px;
    position: absolute;
    pointer-events: none;
    
  }
  .event2504_inner > .bgC01 {
    left: -250px;
    top: -150px;
  }
  .event2504_inner > .bgC02 {
    transform: scaleX(-1) rotate(-20deg);
    right: -230px;
    top: -350px;
  }
  .ttl {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
  }
  .ttl .ttlT {
    display: flex;
    align-items: center;
  }
  .ttl .ttlT > img:first-child {
    margin-right: 20px;
  }
  .ttl .ttlB {
    background: #fff;
    padding: 0 2px;
    border-radius: 5px;
    margin-top: 10px;
  }
  .sec01 {
    position: relative;
  }
  .sec01 .text01 {
    text-align: center;
    margin-top: 30px;
  }
  .textBox {
    font-family: "Jua", sans-serif;
    font-size: 24px;
    background: #cb4a718c;
    padding: 24px;
    display: table;
    margin: 0 auto;
    border-radius: 15px;
    margin-top: 20px;
  }
  .textBox dl{
  display: table-row;
  line-height: 140%;

  }
  .textBox dt,
  .textBox dd {
    display: table-cell;
    padding-bottom: 30px;
  }
  .textBox dt {
    padding-right: 20px;
    white-space:nowrap

  }
  .textBox dl:last-child dt,
  .textBox dl:last-child dd {
    padding-bottom: 0;
  }
  .textBox dt span {
    background: #f9ffa1;
    color: #d15d81;

    padding: 5px 10px 2px;
    border-radius: 50px;
    line-height: 24px;
  }
  .textBox dd span {
    color: #f9ffa1;
  }
  .textBox dd li {
    margin-top: 6px;
    text-indent: -1.5rem;
    margin-left: 1.5rem;
  }
  .textBox dd li::before {
    content: "・";
    margin-right: 10px;
  }
  .textBox dd li:first-child {
    margin-top: 0;
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
    left: 10px;
    top: -53px;
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
    top: 70px;
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
    bottom: -5px;
    left: 0;
  }
  .ps01_06 {
    width: 221px;
    height: 177px;
    background: url("/images/landing/event(2504)/ps01_06.png") no-repeat center top;
    background-size: 100% auto;
    right: 130px;
    top: 49px;
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
    right: -37px;
    top: -36px;
    z-index: 1;
  }
  .ps01_07 > span {
    width: 100%;
    left: -130px;
    bottom: 111px;
  }

  .ps01_remark {
    font-size: 15px;
    text-align: center;
    width: 100%;
    margin-top: 296px;
    position: relative;
    z-index: 1;
    word-break: keep-all;
    line-height: 140%;
    color: #801c33;
  }

  .BtnEvent {
  border: 2px solid #801c33;
  padding: 10px 20px;
  color: #801c33;
  position: relative;
  z-index: 1;
  display: table;
  margin: 20px auto;
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
    top: -37vw;
    height: 50vw;
  }


  .event2504 > .bgC01 {
    background-size: 280vw auto;
    top: -4vw;
  }
  .event2504 > .bgC02 {
    background-size: 300vw auto;
    background-position: 98vw bottom;
  }
  .event2504_inner {
    max-width: 840px;
    padding: 10vw 0 15vw;
  }
  .event2504_inner > .bgC01,
  .event2504_inner > .bgC02 {
    width: 87vw;
    height: 87vw;
    
  }
  .event2504_inner > .bgC01 {
    left: -30vw;
    top: -40vw;
  }
  .event2504_inner > .bgC02 {
    right: -33vw;
    top: -61vw;
  } 

  .ttl .ttlT {
    flex-direction: column;
    
  }
  .ttl .ttlT > img:first-child {
    margin-right: 0;
    width: 22vw;
  }
  .ttl .ttlT > img:last-child {
    width: 43vw;
    margin-top: 2vw;
  }
  .ttl .ttlB {
    padding: 0 1vw;
    border-radius: 1.5vw;
    margin-top: 3vw;
    width: 57vw;
  }

  .sec01 .text01 {
    margin-top: 9vw;
  }
  .sec01 .text01 > img {
    width: 88vw;
  }


  .textBox {
    font-size: 4.3vw;
    padding: 4.5vw;
    margin: 5vw;
    border-radius: 3vw;
    word-break: keep-all;
  }

  .textBox dl,
  .textBox dt,
  .textBox dd {
    display: block;
  }

  .textBox dt,
  .textBox dd {
    padding-bottom: 3vw;
  }
  .textBox dt {
    padding-right: 2vw;
  }

  .textBox dl:last-child dt {
    padding-bottom: 3vw;
  }

  .textBox dt span {
    padding: 1vw 2vw .5vw;
    border-radius: 5vw;
    line-height: 4.3vw;
  }
  .textBox dd li {
    margin-top: 2vw;
    margin-left: 5vw;
    text-indent: -5vw;
  }
  .textBox dd li::before {
    margin-right: .5vw;
  }

  .ps01G {
    margin-top: -8vw;
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
    bottom: 14vw;
  }
  .ps01_06 {
    z-index: 1;
    width: 48vw;
    top: 43vw;
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

  .BtnEvent {
    border: .4vw solid #801c33;
    padding: 2vw 4vw;
    font-size: 4vw;
  }
}
</style>