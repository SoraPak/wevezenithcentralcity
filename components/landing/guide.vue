<template>
  <section id="guide" class="guide">
    <div class="guide_inner">
      <h1 class="ttl"><img loading="lazy" src="/images/landing/guide/ttl01.png" width="648" alt="당신의 프리미엄 라이프를 안내할 분양팀 상담사"></h1>
      <p class="text" ref="textRef"><img loading="lazy" src="/images/landing/guide/text01.png" height="76" alt="카톡으로 예약 단디 하고 오이소~^^"></p>
      <div class="guideImgs">
        <img class="name03" ref="name03Ref" src="/images/landing/guide/name03.png" width="165" alt="신현주 팀장">
        <img class="img03" ref="img03Ref" src="/images/landing/guide/img03.png" width="449" alt="">
        <img class="name02" ref="name02Ref" src="/images/landing/guide/name02.png" width="165" alt="이서은 과장">
        <img class="img02" ref="img02Ref" src="/images/landing/guide/img02.png" width="361" alt="">
        <img class="name01" ref="name01Ref" src="/images/landing/guide/name01.png" width="165" alt="박소라 과장">
        <img class="img01" ref="img01Ref" src="/images/landing/guide/img01.png" width="420" alt="">
      </div>
      <div class="section01">
        <!-- div class="location">
          <img loading="lazy" src="/images/landing/guide/map.jpg" width="309" alt="">
          <div class="right">
            <dl>
              <dt>모델하우스</dt>
              <dd>대구광역시 북구 태전동 1213번지<br>(대구과학대 정문 앞 주차장)</dd>
            </dl>
            <a class="btMap" href="https://kko.to/P0aas7dXbe" target="_blank"> 카카오지도 <br>바로가기</a>
            <p class="tel"><img loading="lazy" src="/images/landing/guide/img_tel.png" width="438" alt="두산위브더제니스 센트럴시티 전화번호:15551924"></p>
          </div>
        </div -->
        <div class="left">
          <p class="tel"><img loading="lazy" src="/images/landing/guide/img_tel.png" width="410" alt="두산위브더제니스 센트럴시티 전화번호:15551924"></p>
          <p class="telText"><strong>일로 이사</strong> 오소!</p>
          <p class="comment">모델하우스는 <strong>사전예약 및 담당자 지정제</strong>로 운영되고 있습니다(당일예약 가능). 모델하우스 카운터에서 <strong>박소라 과장</strong>을 찾아주세요.<span style="display: inline-block; font-weight: bolder; font-size: 83%; color: #e20000;">박소라 과장 안 찾아오시면 선물이 제공 안되요ㅠㅠ</span></p>
        </div>
        <ul class="links">
          <li class="kakao"><a href="https://open.kakao.com/me/wevehj" target="_blank">카톡으로<br>모델하우스<br>투어 예약하기</a></li>
          <li class="call"><a href="tel:1555-1924" target="_blank">전화로<br>모델하우스<br>투어 예약하기</a></li>
        </ul>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const img01Ref = ref(null);
const img02Ref = ref(null);
const img03Ref = ref(null);
const textRef = ref(null);
const name01Ref = ref(null);
const name02Ref = ref(null);
const name03Ref = ref(null);

onMounted(() => {
  const viewportHeight = window.innerHeight;
  const rootMarginValue = `0px 0px -${0.1 * viewportHeight}px 0px`; // 동적으로 rootMargin 계산

  const options = {
    threshold: 0.1, // 요소가 10% 보이면 애니메이션 트리거
    rootMargin: rootMarginValue, // 계산된 rootMargin 값 사용
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
      }
    });
  }, options);

  // 요소들에 대해 옵저버 적용
  observer.observe(img01Ref.value);
  observer.observe(img03Ref.value);
  observer.observe(img02Ref.value);
  observer.observe(textRef.value);

  // 이름 애니메이션 순서 적용
  const nameObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
      }
    });
  }, options);

  // 순차적으로 이름 애니메이션 적용
  setTimeout(() => {
    nameObserver.observe(name03Ref.value);
  }, 1500);

  setTimeout(() => {
    nameObserver.observe(name01Ref.value);
  }, 1800);

  setTimeout(() => {
    nameObserver.observe(name02Ref.value);
  }, 2100);
});
</script>



<style scoped>



  .guide {
    background: #082379;
    color: #fff;
    position: relative;
    margin-top: 390px;  /* halloween */
  }
  .guide::before {
    content: "";
    position: absolute;
    background: url("/images/landing/guide/bg_top.png") no-repeat center bottom;
    background-size: 2688px auto;
    width: 2688px;
    height: 923px;
    top: -595px;
    left: 50%;
    transform: translate(-50%, 0);
    
  }
  .guide_inner {
    max-width: 840px;
    margin: 0 auto;
    position: relative;
    height: 730px;
  }

  .ttl{
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0);
    top: -410px;
  }
  .text {
    position: absolute;
    width: 100%;
    text-align: center;
    top: -233px;
    z-index: 1;
  }
  .guideImgs {
    position: absolute;
    left: 0;
    right: 0;
    top: 460px;
  }
  .guideImgs img {
    position: absolute;
  }
  .guideImgs .img02 {
    left: -57px;
    bottom: -68px;
  }
  .guideImgs .img03 {
    right: -75px;
    bottom: 0;
  }
  .guideImgs .img01 {
    right: 234px;
    bottom: 0;
  }
  .guideImgs .name01,
  .guideImgs .name02,
  .guideImgs .name03 {
    z-index: 1;
  }
  .guideImgs .name01 {
    bottom: 90px;
    right: -60px;
  }
  .guideImgs .name02{
    left: -70px;
    bottom: 90px;
  }
  .guideImgs .name03 {
    right: 224px;
    bottom: 160px;
  }

  .section01 {
    width: 100%;
    border: 3px solid #0d2161;
    margin: 0 auto;
    background: #fff;
    color: #082379;
    padding: 25px;
    position: absolute;
    border-radius: 25px;
    top: 400px;
    font-size: 22px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
  }

  /* 
    .location {
      display: flex;
      align-items: flex-start;
      position: relative;
    }
    .location dl {
      width: 340px;
      line-height: 140%;
    }
    .location dt {
      margin-bottom: 10px;
      padding-left: 15px;
      position: relative;
      font-weight: 600;
    }
    .location dt::before{
      content: "";
      display: block;
      width: 6px;
      height: 20px;
      background: #0d2161;
      position: absolute;
      top: 50%;
      left: 0;
      transform: translate(0, -50%);
    }
    .right {
      margin-left: 20px;
      flex: 1;
    }
    .btMap {
      font-size: 17px;
      color: #fff;
      background: #082379;
      height: 102px;
      width: 112px;
      display: flex;
      position: absolute;
      right: 0;
      top: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      line-height: 150%;
      transition: background-color 0.3s ease, transform 0.3s ease;
    }
    .btMap:hover {
      background-color: #0b35c0;
      transform: scale(1.1);
    }

  */
  .left {
    margin-right: 20px;
    flex: 1;
  }
  .tel {
    /* padding: 11px 0 9px;
    margin-top: 12px; */
    text-align: center;
  }
  .telText {
    text-align: center;
    line-height: 160%;
    position: relative;
    padding-bottom: 10px;
    font-size: 30px;
  }
  .telText > strong {
    color: #e20000;
  }
  .comment {
    text-align: center;
    border: 2px solid #092379;
    border-radius: 5px;
    padding: 10px 15px;
    font-size: 17px;
    line-height: 140%;
  }
  .comment > strong {
    background: #ffff6f;
    color: #ff008b;
  }
  /* 
  .telText:before {
    content: "";
    height: 3px;
    background-color: #092379;
    width: 90%;
    position: absolute;
    bottom: 0;
    left:50%;
    transform:translateX(-50%);
  } */
  .tel {
    flex: 1;
  }
  .links {
    display: flex;
  }
  .links li {
    flex: 1;
  }
  .links li a {
    width: 100%;
    display: flex;
    justify-items: center;
    align-items: center;
    text-align: center;
    font-size: 15px;
    font-weight: bold;
    line-height: 140%;
    flex-direction: column;
    padding: 10px;
    box-sizing: border-box;
    min-width: 160px;
    max-width: 200px;
  }
  .links li a::before {
    content: "";
    display: block;
    width: 50px;
    height: 50px;
    background-size: 100% auto;
  }


  .links .kakao a {
    background: #fae100;
    color: #371d1e;
  }
  .links .call {
    display: none;
  }
  .links .call a {
    background: #07299e;
    color: #fff;
  }
  .links .kakao a::before {
    background-image: url("/images/landing/r_nav/kakao.svg");
  }
  .links .call a::before {
    background-image: url("/images/landing/r_nav/call.svg");
  }
  


/* 초기 상태에서 보이지 않도록 opacity를 0으로 설정 */
.img01, .img03, .img02, .text {
  opacity: 0;
  transform: translateY(20vw) scale(0.6); /* 더 밑에서 시작하도록 설정 */
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

/* 탄력적으로 땅에서 솟아나는 애니메이션 */
@keyframes bounceUp {
  0% {
    transform: translateY(20vw) scale(0.6); /* 더 밑에서 시작, 작아진 상태 */
    opacity: 0; /* 투명하게 시작 */
  }
  50% {
    transform: translateY(-2vw) scale(1.1); /* 위로 튀어오르며 확대, 더 위로 튀어오름 */
    opacity: 1; /* 불투명하게 */
  }
  70% {
    transform: translateY(2vw) scale(0.9); /* 조금 내려오면서 축소 */
  }
  85% {
    transform: translateY(-1vw) scale(1.02); /* 살짝 위로 올라가며 확대 */
  }
  100% {
    transform: translateY(0) scale(1); /* 원래 위치로 돌아옴 */
    opacity: 1; /* 최종적으로 완전히 보이도록 설정 */
  }
}

/* 둥실둥실 움직이는 애니메이션 */
@keyframes float {
  0% {
    transform: translateY(0); /* 기본 위치 */
  }
  50% {
    transform: translateY(-1vw); /* 위로 살짝 올라감 */
  }
  100% {
    transform: translateY(0); /* 원래 위치로 돌아옴 */
  }
}

/* 애니메이션이 적용될 때 땅에서 튀어오르는 효과 */
.img01.animate {
  animation: bounceUp 1.2s cubic-bezier(0.22, 0.61, 0.36, 1.0) forwards;
}

.img03.animate {
  animation: bounceUp 1.2s 0.3s cubic-bezier(0.22, 0.61, 0.36, 1.0) forwards; /* 0.3초 딜레이 */
}

.img02.animate {
  animation: bounceUp 1.2s 0.6s cubic-bezier(0.22, 0.61, 0.36, 1.0) forwards; /* 0.6초 딜레이 */
}

.text.animate {
  animation: bounceUp 1.2s 0.9s cubic-bezier(0.22, 0.61, 0.36, 1.0) forwards, 
             float 2.5s infinite ease-in-out 1.7s; /* 나타난 후 둥실둥실 애니메이션 */
}

/* 초기 상태에서 보이지 않도록 설정 */
.name03, .name01, .name02 {
  opacity: 0;
  transform: translateX(10vw); /* 오른쪽에서 시작 */
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

/* 오른쪽에서 부드럽게 나타나는 애니메이션 */
@keyframes fadeInRight {
  0% {
    opacity: 0;
    transform: translateX(10vw); /* 오른쪽에서 시작 */
  }
  100% {
    opacity: 1;
    transform: translateX(0); /* 원래 위치로 */
  }
}


/* 각각의 애니메이션 효과 */
.name03.animate {
  animation: fadeInRight 1s 1.5s ease forwards; /* 1.5초 후에 애니메이션 시작 */
}

.name01.animate {
  animation: fadeInRight 1s 1.8s ease forwards; /* 1.8초 후에 애니메이션 시작 */
}

.name02.animate {
  animation: fadeInRight 1s 2.1s ease forwards; /* 2.1초 후에 애니메이션 시작 */
}


/* sp */
@media only screen and (max-width: 950px) {
  .guide {
    margin-top: 88vw;
  }

  .guide::before {
    background-size: 100% auto;
    width: 201vw;
    height: 34vw;
    top: -10vw;    
  }
  .guide_inner {
    max-width: 100%;
    height: auto;
    padding-bottom: 20vw;
    padding-top: 80vw;
  }

  .ttl{
    top: -35vw;
  }
  .ttl img{
    width: 90vw;
  }
  .text {
    top: -9vw;
  }
  .text img {
    height: 12vw;
  }
  .guideImgs {
    top: 97vw;
  }
  .guideImgs .img02 {
    left: -36px;
    bottom: 3vw;
    width: 49.8vw;
  }
  .guideImgs .img03 {
    right: -50px;
    bottom: 9vw;
    width: 64vw;
  }
  .guideImgs .img01 {
    right: 25vw;
    bottom: 5vw;
    width: 60vw;
  }
  .guideImgs .name01,
  .guideImgs .name02,
  .guideImgs .name03 {
    width: 24vw;
    opacity: 0; /* 처음에 보이지 않음 */
    transform: translateX(100px); /* 오른쪽에서 시작 */
  }

  .guideImgs .name01 {
    bottom: 27vw;
    right: 9vw;
  }
  .guideImgs .name02{
    left: 2vw;
    bottom: 27vw;
  }
  .guideImgs .name03 {
    right: 39vw;
    bottom: 21vw;
  }
  
  .section01 {
    width: 94vw;
    border: 0.6vw solid #0d2161;
    padding: 5vw;
    border-radius: 5vw;
    top: auto;
    font-size: 5vw;
    left: auto;
    position: relative;
    display: block;
  }
  /*
    .location {
      display: block;
    }
    .location > img {
      width: 100%;
    }
    .location dl {
      width: 100%;
    }
    .location dt {
      margin-bottom: 1vw;
      padding-left: 3vw;
    }
    .location dt::before{
      width: 1.5vw;
      height: 5vw;
    }
    .right {
      margin-left: 0;
    }
    .btMap {
      font-size: 4vw;
      height: 13vw;
      width: 100%;
      position: relative;
      margin-top: 2vw;
    }
    .btMap br {
      display: none;
    }
  
    .tel {
      padding: 3.2vw 0 2vw;
      border-top: 0.6vw solid #082379;
      border-bottom: 0.6vw solid #082379;
      margin-top: 3vw;
    }
    */

  .left {
    margin-right: 0;
  }  
  .tel {
    margin-bottom: 1vw;
  }
  .telText {
    font-size: 6vw;
    padding-bottom: 2vw;
  }
  .comment {
    border: 0.5vw solid #092379;
    border-radius: 1vw;
    padding: 2vw 3vw;
    font-size: 4.2vw;
  }
  /* 
  .telText:before {
    height: 0.5vw;
  } */
  .tel img {
    width: 100%;
  }


  .links {
    margin-top: 4vw;
  }
  .links li a {
    font-size: 4vw;
    padding: 10px;
    min-width: 100%;
    max-width: 100%;
  }
  .links li a::before {
    width: 10vw;
    height: 10vw;
  }

  .links li a {
    font-size: 4vw;
  }
  .links li a::before {
      width: 10vw;
      height: 10vw;
  }
  .links .call {
    display: block;
  }


}

</style>