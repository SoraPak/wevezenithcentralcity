<template>
  <section id="event" class="event2501">
    
    <div class="event2501_inner">
      <span class="b01"></span>
      <span class="b03"><span class="b02"></span></span>
      <span class="b04"></span>
      <h1 class="ttl">
        2025년 근하신년 을사년 새해 두산위브더제니스 센트럴시티
      </h1>
      <p class="sec01_text01"><img loading="lazy" src="/images/landing/event(2501)/sec01_text01.png" width="418" alt="박소라 과장 찾아오시면 행운의 경품 복권을 드립니다!" /></p>
      <p class="sec01_text02"><img loading="lazy" src="/images/landing/event(2501)/sec01_text02.png" width="298" alt="배포 장소: 두산위브더제니스 센트럴시티 모델하우스 | 배포 조건: 박소라 과장 찾아오셔서 팀장 상담 완료 시(예약필수)" /></p>
      <div class="ps01_01"></div>
      <div class="ps01_02"></div>
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
      
      <div class="sec02">
        <p class="sec02_text01"><img loading="lazy" src="/images/landing/event(2501)/sec02_text01.png" width="411" alt="신년맞이 방문자 경품 행사" /></p>
        <p class="sec02_text02"><img loading="lazy" src="/images/landing/event(2501)/sec02_text02.png" width="628" alt="2월 1일(토) 모델하우스 방문하시면 경품 추첨권을드려요!" /></p>
        <p class="sec02_text03"><img loading="lazy" src="/images/landing/event(2501)/sec02_text03.png" width="471" alt="추첨 일시: 2025년 2월 1・2일(토・일) 오후 3시(10분 전 추첨권 배포) | 배포 조건: 박소라 과장 찾아오셔서 팀장 상담 완료 시(예약필수)" /></p>
        <div class="ps02G">
          <div class="ps02_01">
            <span>삼성 TV</span>
          </div>
          <div class="ps02_02">
            <span>다이슨 에어랩</span>
          </div>
          <div class="ps02_03">
            <span>공기 청정기</span>
          </div>
          <div class="ps02_04">
            <span>LG세탁건조기</span>
          </div>
          <div class="ps02_05">
            <span>무선 청소기</span>
          </div>
          <div class="ps02_06">
            <span>다이슨<br> 헤어드라이기</span>
          </div>
          <div class="ps02_07">
            <span>신세계 상품권</span>
          </div>
        </div>
        <p class="ps02_remark">※이미지는 참고용으로 실제와 다를 수 있으며, 사정에 따라 상품이 변경될 수 있습니다.</p>
      </div>
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

  // .ps02G 내부의 [class^="ps02_"] 요소 관찰
  const ps02Elements = document.querySelectorAll('.ps02G [class^="ps02_"]');
  ps02Elements.forEach(el => {
    observer.observe(el);
  });
});

const isChirping = ref(false);

const chirpRandomly = () => {
  setTimeout(() => {
    isChirping.value = true;

    // 빠르게 두 번 짹짹 or 세 번 랜덤 짹짹
    const chirpPattern = Math.random();
    let chirpDuration = 150; // 기본 짹짹 지속 시간

    setTimeout(() => {
      isChirping.value = false;

      if (chirpPattern < 0.4) {
        // 짹! (한 번만)
        chirpRandomly();
      } else if (chirpPattern < 0.7) {
        // 짹! 짹! (빠르게 두 번)
        setTimeout(() => {
          isChirping.value = true;
          setTimeout(() => {
            isChirping.value = false;
            chirpRandomly();
          }, 120);
        }, 100);
      } else {
        // 짹! 짹! 짹! (세 번 랜덤 패턴)
        setTimeout(() => {
          isChirping.value = true;
          setTimeout(() => {
            isChirping.value = false;
            setTimeout(() => {
              isChirping.value = true;
              setTimeout(() => {
                isChirping.value = false;
                chirpRandomly();
              }, 100);
            }, 150);
          }, 120);
        }, 100);
      }
    }, chirpDuration);

  }, Math.random() * 1500 + 500); // 0.5~2초 랜덤 대기 후 짹짹
};

onMounted(chirpRandomly);
</script>

<style scoped>
/* 초기 상태: .ps01G 및 .ps02G 내부의 자식요소들은 투명하게 시작 */
.ps01G [class^="ps01_"],
.ps02G [class^="ps02_"] {
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

/* ps02G 내부 자식 (총 7개) – 원하는 순서에 따라 방향 지정 */
.ps02G > div:nth-child(1).in-view {
  animation: flyInLeft 1s forwards;
}
.ps02G > div:nth-child(2).in-view {
  animation: flyInRight 1s forwards;
}
.ps02G > div:nth-child(3).in-view {
  animation: flyInTop 1s forwards;
}
.ps02G > div:nth-child(4).in-view {
  animation: flyInBottom 1s forwards;
}
.ps02G > div:nth-child(5).in-view {
  animation: flyInLeft 1s forwards;
}
.ps02G > div:nth-child(6).in-view {
  animation: flyInRight 1s forwards;
}
.ps02G > div:nth-child(7).in-view {
  animation: flyInTop 1s forwards;
}


  .event2501 {
    background: url("/images/landing/event(2501)/bg.jpg") no-repeat center -70px #000f3a;
    background-size: 1500px auto;
    position: relative;
    padding-top: 130px;
  }
  .event2501::before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    height: 200px;
    width: 100%;
    background: url("/images/landing/event(2501)/bg.png") no-repeat center bottom;
    background-size: 2688px auto;
  }
  .event2501_inner {
    position: relative;
    margin: 0 auto;
    max-width: 840px;
  }
  .b01, .b02, .b03, .b04 {
    display: block;
    position: absolute;
  }
  .b01 {
    width: 254px;
    height: 138px;
    background: url("/images/landing/event(2501)/b01.png") no-repeat center top;
    background-size: 100% auto;
    left: -130px;
    top: 50px;
  }
  .b02 {
    width: 55px;
    height: 128px;
    background: url("/images/landing/event(2501)/b02.png") no-repeat center top;
    background-size: 100% auto;
    top: 195px;
    left: 1px;
    transform-origin: top center; /* 회전축을 위쪽 중심으로 설정 */
    animation: naturalLanternSwing 5s infinite alternate;
  }
  @keyframes naturalLanternSwing {
    0% { transform: rotate(0deg); }
    20% { transform: rotate(6deg); animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1); } /* 부드러운 시작 */
    40% { transform: rotate(-8deg); animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1); } /* 반대 방향으로 빠르게 */
    60% { transform: rotate(5deg); animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1); } /* 다시 느려짐 */
    80% { transform: rotate(-4deg); animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1); } /* 바람에 의해 살짝 변동 */
    100% { transform: rotate(0deg); animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1); } /* 원래 상태로 */
  }
  .b03 {
    width: 284px;
    height: 215px;
    background: url("/images/landing/event(2501)/b03.png") no-repeat center top;
    background-size: 100% auto;
    right: -190px;
    top: 50px;
  }
  .b04 {
    width: 99px;
    height: 99px;
    background: url("/images/landing/event(2501)/b04.png") no-repeat center top;
    background-size: 100% auto;
    left: 90px;
    top: 340px;
  }
  .ttl {
    width: 457px;
    height: 457px;
    background: url("/images/landing/event(2501)/ttl.png") no-repeat center top;
    background-size: 100% auto;
    margin: -20px auto;
    text-indent: -9999px;
  }
  .sec01_text01,
  .sec01_text02 {
    text-align: center;
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
  .ps01_01 {
    width: 271px;
    height: 244px;
    background: url("/images/landing/event(2501)/ps01_01.png") no-repeat center top;
    background-size: 100% auto;
    left: 20px;
    top: 566px;
  }
  .ps01_02 {
    width: 290px;
    height: 174px;
    background: url("/images/landing/event(2501)/ps01_02.png") no-repeat center top;
    background-size: 100% auto;
    right: 0;
    top: 600px;
  }
  .ps01G {
    position: relative;
    width: 100%;
    margin-top: 20px;
  }
  .ps01_03 {
    width: 242px;
    height: 184px;
    background: url("/images/landing/event(2501)/ps01_03.png") no-repeat center top;
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
    background: url("/images/landing/event(2501)/ps01_04.png") no-repeat center top;
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
    background: url("/images/landing/event(2501)/ps01_05.png") no-repeat center top;
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
    background: url("/images/landing/event(2501)/ps01_06.png") no-repeat center top;
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
    background: url("/images/landing/event(2501)/ps01_07.png") no-repeat center top;
    background-size: 100% auto;
    right: -97px;
    top: 114px;
  }
  .ps01_07 > span {
    width: 100%;
    left: -40px;
    bottom: 31px;
  }
  .ps01_08 {
    width: 150px;
    height: 111px;
    background: url("/images/landing/event(2501)/ps01_08.png") no-repeat center top;
    background-size: 100% auto;
    top: 519px;
    left: 95px;
    transition: background-image 0.1s ease-in-out;

  }
  .ps01_08.on {
    background-image: url("/images/landing/event(2501)/ps01_08_on.png");
  }

  .ps01_remark {
    font-size: 15px;
    text-align: center;
    width: 100%;
    margin-top: 326px;
    position: relative;
    z-index: 1;
    word-break: keep-all;
  }

  .sec02 {
    margin-top: 50px;
    padding-bottom: 80px;
    text-align: center;
  }
  .ps02G {
    position: relative;
  }
  .ps02_01 {
    width: 328px;
    height: 288px;
    background: url("/images/landing/event(2501)/ps02_01.png") no-repeat center top;
    background-size: 100% auto;
    left: -40px;
    top: 100px;
  }
  .ps02_02 {
    width: 154px;
    height: 255px;
    background: url("/images/landing/event(2501)/ps02_02.png") no-repeat center top;
    background-size: 100% auto;
    left: 180px;
    top: 40px;
    z-index: 1;
  }
  .ps02_02 > span {
    width: 120%;
  }
  .ps02_03 {
    width: 205px;
    height: 260px;
    background: url("/images/landing/event(2501)/ps02_03.png") no-repeat center top;
    background-size: 100% auto;
    left: 222px;
    top: 140px;
  }
  .ps02_03 > span {
    width: 100%;
    left: 0;
    bottom: 12px;
  }
  .ps02_04 {
    width: 338px;
    height: 409px;
    background: url("/images/landing/event(2501)/ps02_04.png") no-repeat center top;
    background-size: 100% auto;
    left: 340px;
    top: 10px;
  }
  .ps02_04 > span {
    text-align: center;
    bottom: 110px;
    left: 90px;
  } 
  .ps02_05 {
    width: 268px;
    height: 411px;
    background: url("/images/landing/event(2501)/ps02_05.png") no-repeat center top;
    background-size: 100% auto;
    right: 120px;
    top: 0;
  }
  .ps02_05 > span {
    width: 100%;
    top: 80px;
  }
  .ps02_06 {
    width: 160px;
    height: 253px;
    background: url("/images/landing/event(2501)/ps02_06.png") no-repeat center top;
    background-size: 100% auto;
    right: 70px;
    top: 160px;
    z-index: 1;
  }
  .ps02_06 > span {
    width: 100%;
    bottom: 40px;
    left: -10px;
  }
  .ps02_07 {
    width: 143px;
    height: 234px;
    background: url("/images/landing/event(2501)/ps02_07.png") no-repeat center top;
    background-size: 100% auto;
    right: -10px;
    top: 142px;
  }
  .ps02_07 > span {
    top: -30px;
  }
  .ps02_remark {
    font-size: 15px;
    text-align: center;
    width: 100%;
    margin-top: 406px;
    position: relative;
    z-index: 1;
    word-break: keep-all;
  }



/* sp */
@media only screen and (max-width: 950px) {
  .event2501 {
    background-size: 333vw auto;
    padding-top: 13vw;
    z-index: 3;
    background-position: center -41vw;
    margin-top: 6vw;
  }
  .event2501::before {
    background-size: 110vw;
    top: -42vw;
    height: 50vw;
  }
  .ttl {
    width: 85vw;
    height: 85vw;

    margin: -4vw auto;
  }
  .b01 {
    width: 44vw;
    left: -18vw;
    height: 24vw;
    top: 3vw;
  }
  .b02 {
    width: 12vw;
    height: 28vw;
    top: 41vw;
    left: 0vw;
  }
  .b03 {
    width: 60vw;
    right: -38vw;
    height: 70vw;
    top: 11vw;
  }
  .b04 {
    width: 20vw;
    height: 20vw;
    left: 75vw;
    top: 115vw;
  }
  .sec01_text01 > img {
    width: 75vw;
  }
  .sec01_text02 > img {
    width: 60vw;
  }
  [class^="ps01_"] > span, [class^="ps02_"] > span {
    font-size: 3.8vw;
  }
  .ps01_01 {
    width: 50vw;
    height: 43vw;
    top: 115vw;
    left: -10vw;
  }
  .ps01_02 {
    display: none;
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
  }
  .ps01_07 > span {
    bottom: 7vw;
    left: -9vw;
  }
  .ps01_08 {
    width: 30vw;
    height: 23vw;
    left: -9vw;
    top: 95.5vw;
  }
  .ps01_08 > span {
  }
  .ps01_remark {
    font-size: 3vw;
    margin-top: 82vw;
    padding: 0 2vw;
    width: auto;
  }
  .ps02G {
    margin-top: 3vw;
  }
  .sec02 {
    margin-top: 6vw;
    padding-bottom: 21vw;
  }
  .sec02_text01 > img {
    width: 73vw;
  }
  .sec02_text02 {
    position: relative;
    height: 7.5vw;
    left: 1.5vw;
    width: 97vw;
    overflow: hidden;
    margin-top: -1vw;
  }
  .sec02_text02 > img {
    width: 128%;
    position: absolute;
    left: -27vw;
  }
  .sec02_text03 > img {
    width: 97vw;
  }
  .ps02_01 {
    width: 60vw;
    height: 47vw;
    left: -12vw;
    top: 16vw;
  }
  .ps02_01 > span {
    left: 17vw;
    top: -1vw;
  }
  .ps02_02 {
    z-index: 2;
    width: 24vw;
    height: 40vw;
    left: 18vw;
    top: 5vw;
  }
  .ps02_03 {
    width: 38vw;
    height: 41vw;
    left: 16vw;
    top: 30vw;
    z-index: 1;
  }
  .ps02_03 > span {
    bottom: -3vw;
  }
  .ps02_04 {
    left: 30vw;
    width: 65vw;
    top: 3vw;
    height: 66vw;
  }
  .ps02_04 > span {
    left: 17vw;
    bottom: 43vw;
    z-index: 2;
  }
  .ps02_05 {
    width: 45vw;
    height: 64vw;
    right: 14vw;
    top: 15vw;
    z-index: 1;
  }
  .ps02_05 > span {
    width: 20vw;
    text-align: center;
    top: -8vw;
    left: 25vw;
  }
  .ps02_06 {
    width: 25vw;
    height: 39vw;
    right: -2vw;
    top: 37vw;
  }
  .ps02_06 > span {
    bottom: 0vw;
    left: -5vw;
  }
  .ps02_07 {
    width: 24vw;
    height: 36vw;
    right: -2vw;
    top: 7vw;
  }
  .ps02_07 > span {
    top: -6vw;
    right: 0vw;
    width: 20vw;
  }
  .ps02_remark {
    font-size: 3vw;
    margin-top: 82vw;
    padding: 0 2vw;
    width: auto;
  }
}
</style>