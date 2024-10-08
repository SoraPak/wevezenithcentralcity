<template>
  <section id="halloween" class="halloween">
    <div class="halloween_inner">
      <img class="witch" loading="lazy" src="/images/landing/halloween/img_witch.png" width="158" alt="">
      <img class="bat01" loading="lazy" src="/images/landing/halloween/img_bat01.png" width="114" alt="">
      <img class="bat02" loading="lazy" src="/images/landing/halloween/img_bat02.png" width="60" alt="">
      <div ref="halloweenInnerAfterRef" class="halloween_inner_after"><img loading="lazy" src="/images/landing/halloween/bg_pumpkin.png" width="749" alt=""></div>
      <h1 class="ttl" ref="ttlRef"><img loading="lazy" src="/images/landing/halloween/ttl_h1.png" width="843" alt="HAPPY HALLOWEEN"></h1>
      <div class="event01">
        <h2 class="evnet01_ttl" ref="event01TtlRef"><img loading="lazy" src="/images/landing/halloween/ttl01.png" width="227" alt="핼러윈 이벤트1"></h2>
        <p class="evnet01_text" ref="event01TextRef"><img loading="lazy" src="/images/landing/halloween/text01.png" width="460" alt="쿠폰 저장 후 가계약 시, 박소라 과장이 정성껏 기른 의성 고구마 증정! (수량 소진 시 까지)"></p>
        <img class="evnet01_sweet"  ref="evnet01SweetRef" loading="lazy" src="/images/landing/halloween/img_sweet.png" width="170" alt="">
      </div>
      <div class="event02">
        <h2 class="evnet02_ttl" ref="event02TtlRef">
          <img loading="lazy" src="/images/landing/halloween/ttl02.png" width="227" alt="핼러윈 이벤트2">
          <img class="event02_ghost ghost1" loading="lazy" src="/images/landing/halloween/img_ghost.png" width="136" alt="">
          <img class="event02_ghost ghost2" loading="lazy" src="/images/landing/halloween/img_ghost.png" width="136" alt="">
          <img class="event02_ghost ghost3" loading="lazy" src="/images/landing/halloween/img_ghost.png" width="136" alt="">        </h2>
        <p class="evnet02_text" ref="event02TextRef"><img loading="lazy" src="/images/landing/halloween/text02.png" width="460" alt="쿠폰 저장 후 계약 시, 박소라 과장이 정성껏 기른 의성 호박 증정! (수량 소진 시 까지)"></p>
      </div>
      <a class="pumpkin">
        <div class="pumpkin_imgs" ref="pumpkinImgsRef">
          <img loading="lazy" src="/images/landing/halloween/img_pumpkin.png" width="536" alt="">
          <img loading="lazy" src="/images/landing/halloween/img_pumpkin_off.png" width="536" alt="">
        </div>
        <img class="coupon_img" loading="lazy" src="/images/landing/halloween/btn_coupon.png" width="381" alt="">
        <img class="coupon_img_sp" loading="lazy" src="/images/landing/halloween/btn_coupon_sp.png" alt="">
      </a>
      <img class="light" loading="lazy" src="/images/landing/halloween/bg_light.jpg" width="1344" alt="">
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const pumpkinImgsRef = ref(null);
const ttlRef = ref(null);
const event01TtlRef = ref(null);
const event01TextRef = ref(null);
const event02TtlRef = ref(null);
const event02TextRef = ref(null);
const halloweenInnerAfterRef = ref(null);
const evnet01SweetRef = ref(null);

onMounted(() => {
  const pumpkinImgs = pumpkinImgsRef.value.querySelectorAll('img');
  const ttlElement = ttlRef.value;
  const event01TtlElement = event01TtlRef.value;
  const event01TextElement = event01TextRef.value;
  const event02TtlElement = event02TtlRef.value;
  const event02TextElement = event02TextRef.value;
  const halloweenInnerAfterElement = halloweenInnerAfterRef.value;
  const evnet01SweetElement = evnet01SweetRef.value;

  // 뷰포트 높이를 기준으로 20vh를 계산하여 rootMargin에 적용
  const viewportHeight = window.innerHeight;
  const rootMarginValue = `0px 0px -${0.35 * viewportHeight}px 0px`; // 40vh -> px

  // pumpkin 애니메이션에만 rootMarginValue 적용
  const pumpkinObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // 깜빡이는 애니메이션 실행
        pumpkinImgs[1].classList.add('pumpkin-blink');

        // 깜빡임 애니메이션 후 은은하게 일렁이는 효과 시작
        setTimeout(() => {
          pumpkinImgs[1].classList.remove('pumpkin-blink');
          pumpkinImgs[1].classList.add('pumpkin-flicker');

          setInterval(() => {
            pumpkinImgs[1].classList.add('pumpkin-blink');
            setTimeout(() => {
              pumpkinImgs[1].classList.remove('pumpkin-blink');
            }, 1000);
          }, 8000);
          
        }, 1000);
      }
    });
  }, { threshold: 0.5, rootMargin: rootMarginValue });

  pumpkinObserver.observe(pumpkinImgsRef.value);

  // 다른 요소들에 대한 기본 observer
  const animateElements = [event01TtlElement, event01TextElement, event02TtlElement, event02TextElement, halloweenInnerAfterElement, evnet01SweetElement];
  
  const popupObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('popup-rise');
      }
    });
  }, { threshold: 0.5 });

  animateElements.forEach(el => {
    if (el) {
      popupObserver.observe(el);
    }
  });

  // ttl 애니메이션
  const ttlObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        ttlElement.classList.add('slide-in');
      }
    });
  }, { threshold: 0.5 });

  ttlObserver.observe(ttlRef.value);
});
</script>





<style scoped>

.pumpkin_imgs > img:last-child {
  opacity: 1; /* 꺼진 상태 */
  transition: opacity 0.1s ease-in-out;
}

/* 형광등 켜지는 리얼한 효과 */
.pumpkin-blink {
  animation: realBlink 1s ease-in-out 1 forwards; /* 1초 동안 깜빡이는 애니메이션 */
}


@keyframes realBlink {
  0% {
    opacity: 1; /* 꺼진 상태 */
  }
  10% {
    opacity: 0; /* 잠깐 켜짐 */
  }
  20% {
    opacity: 1; /* 다시 꺼짐 */
  }
  30% {
    opacity: 0; /* 켜짐 */
  }
  40% {
    opacity: 1; /* 꺼짐 */
  }
  50% {
    opacity: 0; /* 켜짐 */
  }
  60%, 75% {
    opacity: 1; /* 다시 꺼짐 */
  }
  100% {
    opacity: 0; /* 마지막에 완전히 켜짐 */
  }
}

/* 은은하게 일렁이는 효과 */
.pumpkin-flicker {
  animation: flicker 0.3s infinite ease-in-out; /* 은은한 일렁이는 효과 애니메이션 */
}

@keyframes flicker {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.1;
  }
  100% {
    opacity: 0;
  }
}

/* ttl 요소가 위에서 떨어지는 애니메이션 */
.slide-in {
  animation: slideDown 1.5s cubic-bezier(0.42, 0, 0.58, 1) forwards; /* 부드러운 애니메이션 */
}

@keyframes slideDown {
  0% {
    transform: translateY(-150%); /* 시작 위치를 더 위로 설정 */
    opacity: 0; /* 완전히 투명 */
  }
  60% {
    transform: translateY(20%); /* 빠르게 내려오다가 조금 튕김 */
    opacity: 1; /* 서서히 나타남 */
  }
  80% {
    transform: translateY(-10%); /* 살짝 올라감 */
    opacity: 1; /* 완전히 보임 */
  }
  100% {
    transform: translateY(0); /* 제자리 */
    opacity: 1; /* 완전히 보임 */
  }
}

/* 초기 상태에서 요소가 누워있는 상태 */
.evnet01_ttl, .evnet01_text, .evnet02_ttl, .evnet02_text, .halloween_inner_after, .evnet01_sweet {
  transform: rotateX(90deg); /* 초기 상태에서 종이가 눕혀져 있음 */
  opacity: 0;
  transform-origin: bottom; /* 아래에서부터 회전 */
  transition: none; /* 애니메이션 전까지 트랜지션 없음 */
}

/* 팝업북처럼 종이가 누워 있다가 일어서는 효과 */
.popup-rise {
  animation: popupRise 3.5s cubic-bezier(0.23, 1, 0.32, 1) forwards; /* 더 길게 느린 애니메이션 */
}

@keyframes popupRise {
  0% {
    transform: rotateX(90deg); /* 처음에 완전히 눕혀진 상태 */
    opacity: 0; /* 투명 */
  }
  30% {
    transform: rotateX(-15deg); /* 빠르게 일어섰다가 튕김 */
    opacity: 1; /* 서서히 나타남 */
  }
  60% {
    transform: rotateX(5deg); /* 살짝 뒤로 튕김 */
  }
  100% {
    transform: rotateX(0deg); /* 완전히 서 있는 상태 */
    opacity: 1; /* 완전히 보이는 상태 유지 */
  }
}




.light {
  position: absolute;
  z-index: 5;
  top:50%;
  left:50%;
  transform:translate(-50%,-50%);
  mix-blend-mode: screen;
  pointer-events: none;
  animation: flicker2 0.2s infinite ease-in-out;
}
@keyframes flicker2 {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.95;
  }
  100% {
    opacity: 1;
  }
}

/* 마녀가 부드럽게 날아가는 애니메이션 */
.witch {
  position: absolute;
  z-index: 1;
  right: -190px;
  top: 290px;
  animation: flyWitch 10s ease-in-out infinite; /* 5초 동안 애니메이션 반복 */
}

@keyframes flyWitch {
  0% {
    transform: translate(393px, 59px) translateY(0); /* 시작 위치, 흔들리지 않음 */
    opacity: 0; /* 완전히 투명 */
  }
  10% {
    opacity: 1; /* 서서히 나타남 */
  }
  40% {
    transform: translate(-367px, -231px) translateY(-20px); /* 중간 위치, 위로 살짝 흔들림 */
    opacity: 1; /* 중간에 완전히 보임 */
  }
  90% {
    opacity: 1; /* 사라지기 전까지 보임 */
  }
  100% {
    transform: translate(-1447px, -461px) translateY(0); /* 최종 위치, 다시 원래 위치로 */
    opacity: 0; /* 완전히 사라짐 */
  }
}



.bat01 {
  position: absolute;
  top: 401px;
  left: 261px;
}
.bat02 {
  position: absolute;
  left: 210px;
  top: 490px;
}
.halloween {
  color: #fff;
  background: url("/images/landing/halloween/bg.jpg") repeat-x center bottom #000f3a;
  background-size: 1844px auto;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: stretch;
  min-height: 1318px;
}
.halloween::before {
  content: "";
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  height: 100%;
  width: 100%;
  background: url("/images/landing/halloween/bg_castle.png") repeat-x center bottom;
  background-size: 2656px auto;
}
/* 
.halloween::after {
  content: "";
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  height: 100%;
  width: 100%;
  background: url("/images/landing/halloween/bg_DDDD.png") no-repeat center bottom;
  background-size: 1344px auto;
}
  */
.halloween_inner {
  max-width: 840px;
  width: 100%;
  position: relative;
}
.halloween_inner::before,
.halloween_inner_after {
  content: "";
  display: block;
  position: absolute;
}
.halloween_inner::before {
  width: 323px;
  height: 323px;
  background: url("/images/landing/halloween/bg_moon.png") no-repeat center center;
  background-size: 100% auto;
  right: -214px;
  top: 40px;

}
.halloween_inner_after {
  width: 749px;
  height: 515px;
  left: -283px;
  bottom: -37px;
}
.ttl {
  position: absolute;
  top: 120px;
  left: 0;
  right: 0;
  width: 100%;
  text-align: center;
  opacity: 0;
}
.event01 {
  text-align: center;
  width: 460px;
  position: absolute;
  right: 10px;
  top: 352px;
}
.evnet01_sweet {
  position: absolute;
  bottom: -120px;
  left: -6px;
}
.evnet01_text {
  position: relative;
  z-index: 1;
}
.event02 {
  text-align: center;
  width: 452px;
  position: absolute;
  top: 743px;
  left: 39px;
}
.evnet02_ttl {
  position: relative;
}
.evnet02_ttl img:first-child {
  margin: -8px 32px 8px 0;
  position: relative;
  z-index: 1;
}

/* 유령이 부드럽게 흔들리며 올라가는 애니메이션 (세 유령을 사용하여 교차 효과) */
.event02_ghost {
  position: absolute;
  left: 63px;
  top: -106px;
  opacity: 0;
  animation: ghostFloatSmooth 8s ease-in-out infinite; /* 8초 동안 부드러운 애니메이션 반복 */
}

.ghost1 {
  animation-delay: 0s; /* 첫 번째 유령 즉시 시작 */
}

.ghost2 {
  animation-delay: 2.67s; /* 두 번째 유령은 8초의 3분의 1인 2.67초 후에 시작 */
}

.ghost3 {
  animation-delay: 5.34s; /* 세 번째 유령은 8초의 3분의 2인 5.34초 후에 시작 */
}

@keyframes ghostFloatSmooth {
  0% {
    transform: translate(0, 0) rotate(0deg) scale(1); /* 처음 시작할 때 크기 변동 없음 */
    opacity: 0; /* 완전히 투명 */
  }
  15% {
    transform: translate(-10px, -40px) rotate(-1deg) scale(1); /* 살짝 왼쪽으로 이동하며 나타남 */
    opacity: 0.5; /* 점차 나타남 */
  }
  30% {
    transform: translate(20px, -80px) rotate(1deg) scale(1); /* 오른쪽으로 완만하게 이동 */
    opacity: 0.8; /* 거의 완전히 보임 */
  }
  45% {
    transform: translate(-30px, -140px) rotate(-1.5deg) scale(1); /* 다시 왼쪽으로 이동 */
    opacity: 1; /* 완전히 보임 */
  }
  60% {
    transform: translate(25px, -200px) rotate(1.5deg) scale(0.9); /* 오른쪽으로 부드럽게 이동하면서 살짝 작아짐 */
    opacity: 0.8; /* 조금씩 투명해짐 */
  }
  75% {
    transform: translate(-20px, -260px) rotate(-2deg) scale(0.8); /* 왼쪽으로 이동하면서 크기 작아짐 */
    opacity: 0.6; /* 점점 투명해짐 */
  }
  90% {
    transform: translate(30px, -320px) rotate(2deg) scale(0.7); /* 오른쪽으로 올라가며 더 작아짐 */
    opacity: 0.3; /* 거의 투명해짐 */
  }
  100% {
    transform: translate(50px, -380px) rotate(0deg) scale(0.6); /* 최종적으로 부드럽게 사라짐 */
    opacity: 0; /* 완전히 투명해짐 */
  }
}

.pumpkin {
  display: block;
  position: absolute;
  width: 536px;
  height: 606px;
  bottom: 35px;
  right: -166px;
  cursor: pointer;
}
.pumpkin_imgs{
  position: relative;
  z-index: 1;
  width: 536px;
  height: 536px;
}
.pumpkin_imgs > img {
  width: 100%;
  height: auto;
  position: absolute;
  top: 0;
  left: 0;
}
.coupon_img {
  position: absolute;
  bottom: 6px;
  left: -11px;
  transition: transform 0.3s ease;
}
.pumpkin:hover .coupon_img  {
  
  transform: scale(1.1);
}
.coupon_img_sp {
  display: none;
}


/* sp */
@media only screen and (max-width: 950px) {
  .halloween {
    margin-top: -43vw;
    min-height: 147vw;
    background: url(/images/landing/halloween/bg.jpg) repeat-x center top #000f3a;
    background-size: 200vw auto;
  }
  .halloween::before {
    background: url(/images/landing/halloween/bg_castle.png) repeat-x -109vw 35vw;
    background-size: 320vw auto;
    transform: scalex(-1);
  }
  .halloween_inner {
    max-width: 100%;
  }
  .halloween_inner::before {
    width: 43vw;
    height: 43vw;
    right: -21vw;
    top: -5vw;
  }

  .bat01 {
    width: 20vw;
    top: 0vw;
    left: 83vw;
  }
  .bat02 {
    left: 88vw;
    top: 15vw;
    width: 11vw;
  }

  /* 마녀가 부드럽게 날아가는 애니메이션 */
  .witch {
    position: absolute;
    right: -7vw;
    top: 34vw;
    width: 30vw;
    animation: flyWitch 5s ease-in-out infinite;  /* 5초 동안 애니메이션 반복 */
  }

  @keyframes flyWitch {
    0% {
      transform: translate(29vw, 8vw); /* 시작 위치, 흔들리지 않음 */
      opacity: 0; /* 완전히 투명 */
    }
    10% {
      opacity: 1; /* 서서히 나타남 */
    }
    40% {
      transform: translate(-21vw, -32vw); /* 중간 위치, 위로 살짝 흔들림 */
      opacity: 1; /* 중간에 완전히 보임 */
    }
    90% {
      opacity: 1; /* 사라지기 전까지 보임 */
    }
    100% {
      transform: translate(-121vw, -49vw); /* 최종 위치, 다시 원래 위치로 */
      opacity: 0; /* 완전히 사라짐 */
    }
  }

  
  .ttl {
    top: 10vw;
  }
  .ttl img {
    width: 100vw;
  }

  .event01 {
    width: 100%;
    left: 0;
    right: 0;
    top: 36vw;
  }
  .evnet01_ttl img {
    width: 35vw;
  }
  .evnet01_text img {
    width: 65vw;
    margin-left: -16vw;
    margin-top: 2vw;
  }
  .evnet01_sweet {
    width: 30vw;
    bottom: -20vw;
    left: 4vw;
  }
  .event02 {
    width: 100%;
    left: 0;
    right: 0;
    top: 91vw;
    z-index: 2;
  }

  .evnet02_ttl img:first-child {
    width: 35vw;
    margin-left: 56vw;
    margin-top: 1vw;
  }
  .evnet02_text img {
    width: 65vw;
    margin-left: 26vw;
  }
  .event02_ghost {
    width: 15vw;
    left: 79vw;
    top: -10vw;
    opacity: 0;
    animation: ghostFloatSmooth 8s ease-in-out infinite;
  }
  .ghost1 {
    animation-delay: 0s; /* 첫 번째 유령 즉시 시작 */
  }

  .ghost2 {
    animation-delay: 2.67s; /* 두 번째 유령은 8초의 3분의 1인 2.67초 후에 시작 */
  }

  .ghost3 {
    animation-delay: 5.34s; /* 세 번째 유령은 8초의 3분의 2인 5.34초 후에 시작 */
  }

  @keyframes ghostFloatSmooth {
    0% {
      transform: translate(0, 0) rotate(0deg) scale(1); /* 처음 시작할 때 크기 변동 없음 */
      opacity: 0; /* 완전히 투명 */
    }
    15% {
      transform: translate(-1vw, -5vw) rotate(-1deg) scale(1); /* 살짝 왼쪽으로 이동하며 나타남 */
      opacity: 0.5; /* 점차 나타남 */
    }
    30% {
      transform: translate(2.5vw, -9vw) rotate(1deg) scale(1);/* 오른쪽으로 완만하게 이동 */
      opacity: 0.8; /* 거의 완전히 보임 */
    }
    45% {
      transform: translate(-3vw, -17vw) rotate(-1.5deg) scale(1); /* 다시 왼쪽으로 이동 */
      opacity: 1; /* 완전히 보임 */
    }
    60% {
      transform: translate(4vw, -23vw) rotate(1.5deg) scale(0.9); /* 오른쪽으로 부드럽게 이동하면서 살짝 작아짐 */
      opacity: 0.8; /* 조금씩 투명해짐 */
    }
    75% {
      transform: translate(-2vw, -30vw) rotate(-2deg) scale(0.8); /* 왼쪽으로 이동하면서 크기 작아짐 */
      opacity: 0.6; /* 점점 투명해짐 */
    }
    90% {
      transform: translate(5vw, -35vw) rotate(2deg) scale(0.7); /* 오른쪽으로 올라가며 더 작아짐 */
      opacity: 0.3; /* 거의 투명해짐 */
    }
    100% {
      transform: translate(8vw, -40vw) rotate(0deg) scale(0.6); /* 최종적으로 부드럽게 사라짐 */
      opacity: 0; /* 완전히 투명해짐 */
    }
  }

  .pumpkin {
    width: 116vw;
    height: auto;
    left: -16vw;
    right: 0;
    bottom: auto;
    top: 118vw;
  }
  .pumpkin_imgs {
    transform: scaleX(-1);
    width: 80vw;
    height: 80vw;
  }
  .coupon_img {
    display: none;
  }
  .coupon_img_sp {
    display: block;
    width: 39vw;
    position: absolute;
    right: 11vw;
    bottom: 24vw;
    transform: rotate(12deg);
  }
  .halloween_inner_after {
    width: 73vw;
    height: 51vw;
    left: auto;
    right: -17vw;
    z-index: 1;
    top: 149vw;
    pointer-events: none;
  }
  .halloween_inner_after img {
    transform: scaleX(-1);
    width: 100%;
    height: auto;
  }
  .light {
    width: 250vw;
    top: 116vw;
  }
}
</style>