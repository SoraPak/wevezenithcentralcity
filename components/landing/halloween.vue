<template>
  <section id="halloween" class="halloween">
    <div class="halloween_inner">
      <h1 class="ttl"><img loading="lazy" src="/images/landing/halloween/ttl_h1.png" width="843" alt="HAPPY HALLOWEEN"></h1>
      <div class="event01">
        <h2 class="evnet01_ttl"><img loading="lazy" src="/images/landing/halloween/ttl01.png" width="227" alt="핼러윈 이벤트1"></h2>
        <p class="evnet01_text"><img loading="lazy" src="/images/landing/halloween/text01.png" width="460" alt="쿠폰 저장 후 가계약 시, 박소라 과장이 정성껏 기른 의성 고구마 증정! (수량 소진 시 까지)"></p>
        <img class="evnet01_sweet" loading="lazy" src="/images/landing/halloween/img_sweet.png" width="170" alt="">
      </div>
      <div class="event02">
        <h2 class="evnet02_ttl">
          <img loading="lazy" src="/images/landing/halloween/ttl02.png" width="227" alt="핼러윈 이벤트2">
          <img class="event02_ghost" loading="lazy" src="/images/landing/halloween/img_ghost.png" width="136" alt="">
        </h2>
        <p class="evnet02_text"><img loading="lazy" src="/images/landing/halloween/text02.png" width="452" alt="쿠폰 저장 후 계약 시, 박소라 과장이 정성껏 기른 의성 호박 증정! (수량 소진 시 까지)"></p>
      </div>
      <a class="pumpkin">
        <div class="pumpkin_imgs" ref="pumpkinImgsRef">
          <img loading="lazy" src="/images/landing/halloween/img_pumpkin.png" width="536" alt="">
          <img loading="lazy" src="/images/landing/halloween/img_pumpkin_off.png" width="536" alt="">
        </div>
        <img class="coupon_img" loading="lazy" src="/images/landing/halloween/btn_coupon.png" width="381" alt="">
      </a>
      <img class="light" loading="lazy" src="/images/landing/halloween/bg_light.jpg" width="1344" alt="">
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const pumpkinImgsRef = ref(null);

onMounted(() => {
  const pumpkinImgs = pumpkinImgsRef.value.querySelectorAll('img');

  const options = {
    threshold: 0.5, // 화면에 50% 이상 보일 때 트리거
    rootMargin: '0px 0px -500px 0px' // 화면 하단에서 트리거
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // 깜빡이는 애니메이션 실행
        pumpkinImgs[1].classList.add('pumpkin-blink');

        // 깜빡임 애니메이션 후 은은하게 일렁이는 효과 시작
        setTimeout(() => {
          pumpkinImgs[1].classList.remove('pumpkin-blink');
          pumpkinImgs[1].classList.add('pumpkin-flicker'); // 일렁이는 애니메이션 추가

          // 간헐적으로 pumpkin-blink 클래스를 추가하고 제거하여 깜빡이는 효과 주기
          setInterval(() => {
            pumpkinImgs[1].classList.add('pumpkin-blink'); // 깜빡임 시작
            setTimeout(() => {
              pumpkinImgs[1].classList.remove('pumpkin-blink'); // 깜빡임 종료
            }, 1000); // 1초 후 깜빡임 종료
          }, 4000); // 8초마다 깜빡임 발생
          
        }, 1000); // 초기 깜빡임 애니메이션 후 1초 후에 시작
      }
    });
  }, options);

  observer.observe(pumpkinImgsRef.value);
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
  85% {
    opacity: 0; /* 마지막에 꺼졌다가 */
  }
  100% {
    opacity: 0; /* 마지막에 완전히 켜짐 */
  }
}

/* 은은하게 일렁이는 효과 */
.pumpkin-flicker {
  animation: flicker 2s infinite ease-in-out; /* 은은한 일렁이는 효과 애니메이션 */
}

@keyframes flicker {
  0% {
    opacity: 0;
  }
  30% {
    opacity: 0;
  }
  50% {
    opacity: 0.3;
  }
  80% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}





.light {
  position: absolute;
  top:50%;
  left:50%;
  transform:translate(-50%,-50%);
  mix-blend-mode: screen;
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
.halloween_inner::after {
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
.halloween_inner::after {
  width: 749px;
  height: 515px;
  background: url("/images/landing/halloween/bg_pumpkin.png") no-repeat center center;
  background-size: 100% auto;
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
}
.event02_ghost {
  position: absolute;
  left: 63px;
  top: -106px;
}
.event02_ghost {
  position: absolute;
}
.pumpkin {
  display: block;
  position: absolute;
  width: 536px;
  bottom: 95px;
  right: -166px;
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
  bottom: -60px;
  left: -11px;
}
</style>