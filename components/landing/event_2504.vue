<template>
  <section id="event" class="event2504">
    <span class="bgC01"></span>
    <span class="bgC02"></span>
    <div class="event2504_inner">
      <span class="bgC01"></span>
      <span class="bgC02"></span>
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
    z-index: 2;
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

  .ttl {
    position: relative;
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
    margin-top: 4vw;
  }
  .sec01 .text01 > img {
    width: 85vw;
  }


  .textBox {
    font-size: 4.3vw;
    padding: 4.5vw;
    margin: 5vw;
    border-radius: 3vw;
    word-break: keep-all;
  }

  .textBox dt,
  .textBox dd {
    padding-bottom: 3vw;
  }
  .textBox dt {
    padding-right: 2vw;
  }

  .textBox dt span {
    padding: 1vw 2vw .5vw;
    border-radius: 5vw;
    line-height: 4.3vw;
  }
  .textBox dd li {
    margin-top: 2vw;
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

  .BtnEvent {
    border: .4vw solid #801c33;
    padding: 2vw 4vw;
    font-size: 4vw;
  }
}
</style>