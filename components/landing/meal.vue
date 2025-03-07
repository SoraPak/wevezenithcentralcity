<template>
  <section id="meal" ref="mealRef" class="meal off">
    <div class="meal_inner" ref="mealInnerRef">
      <div class="bg">
        <span class="bg-item"></span>
        <span class="bg-item"></span>
        <span class="bg-item"></span>
        <span class="bg-item"></span>
        <span class="bg-item"></span>
        <span class="bg-item"></span>
      </div>
      <div class="bg2">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <h1 class="ttl">
        <span class="ttlG1">
          <img src="/images/landing/meal/ttl01.png" width="402" alt="역시 제니스 프리미엄">
          <img src="/images/landing/meal/ttl02.png" width="187" alt="대구최초">
        </span>
        <span class="ttlG2">
          <img src="/images/landing/meal/ttl03.png" width="461" alt="조식,중식,석식 주는">
          <img src="/images/landing/meal/ttl04.png" width="381" alt="최고급 아파트">
        </span>
      </h1>
      <img class="sora" src="/images/landing/meal/sora.png" width="421" alt="">
      <p class="textG1">
        <img src="/images/landing/meal/text01.png" width="326" alt="매일 뭐 먹지?">
        <img src="/images/landing/meal/text02.png" width="148" alt="고민 끝!">
        <img src="/images/landing/meal/text03.svg" width="134" alt="엘지 아워홈">
      </p>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const mealRef = ref(null);
const mealInnerRef = ref(null);
let animationFrame = null;

const handleScroll = () => {
  if (!process.client) return;
  if (!mealRef.value || !mealInnerRef.value) return;

  const mealTop = mealRef.value.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (mealTop < windowHeight * 0.8) {
    mealRef.value.classList.remove("off");

    if (animationFrame) cancelAnimationFrame(animationFrame);
    animationFrame = requestAnimationFrame(() => {
      mealInnerRef.value.style.maxHeight = "1530px";

      // 애니메이션이 끝난 후 bg-item들에 class 추가
      setTimeout(() => {
        document.querySelectorAll(".bg-item").forEach((el, index) => {
          setTimeout(() => {
            el.classList.add("animate");
          }, index * 200); // 요소마다 애니메이션 딜레이 추가
        });
      }, 1500); // meal_inner 애니메이션이 끝난 후 실행
    });
  } else {
    if (animationFrame) cancelAnimationFrame(animationFrame);
    animationFrame = requestAnimationFrame(() => {
      mealInnerRef.value.style.maxHeight = "600px";
      document.querySelectorAll(".bg-item").forEach(el => el.classList.remove("animate"));
    });
  }
};

onMounted(() => {
  if (process.client) {
    mealInnerRef.value.style.maxHeight = "600px";
    window.addEventListener("scroll", handleScroll);
  }
});

onUnmounted(() => {
  if (process.client) {
    window.removeEventListener("scroll", handleScroll);
  }
});
</script>



<style scoped>
.off .meal_inner {
  min-height: 607px;
  opacity: 0;
  transition: max-height 1s ease-out, opacity 0.8s ease-out;
}
.meal {
  padding-top: 180px;
  background: #fff;
  overflow: hidden;
}
.meal_inner {
  min-height: 1530px;
  max-width: 840px;
  margin: 0 auto;
  position: relative;
  padding: 1px;
  opacity: 1;
  transition: max-height 1s ease-in, opacity 1s ease-in;
}
.bg, .bg2 {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
}
.bg2 {
  opacity: 0.6;
}

.bg2 > span {
  display: block;
  width: 400px;
  height: 400px;
  background-size: 100% auto;
  background-repeat: no-repeat;
  background-position: center center;
  position: absolute;
}

/* 초기 상태 */
.bg-item {
  display: block;
  width: 400px;
  height: 400px;
  background-size: 100% auto;
  background-repeat: no-repeat;
  background-position: center center;
  position: absolute;
  transform: translateY(50px) scale(0.7) rotate(0deg);
  opacity: 0;
  will-change: transform, opacity;
  transition: transform 1s ease-out, opacity 1s ease-out;
}

/* 나타날 때 애니메이션 */
.bg-item.animate {
  animation: slideRotate 1.2s ease-out forwards;
}

/* 개별 위치 */
.bg-item:nth-child(1) {
  background-image: url("/images/landing/meal/cf01.png");
  right: -270px;
  top: -170px;
}
.bg-item:nth-child(2) {
  background-image: url("/images/landing/meal/cf02.png");
  left: 280px;
  top: -130px;
}
.bg-item:nth-child(3) {
  background-image: url("/images/landing/meal/cf03.png");
  left: -240px;
}
.bg-item:nth-child(4) {
  background-image: url("/images/landing/meal/cf04.png");
  right: -160px;
  top: 310px;
}
.bg-item:nth-child(5) {
  background-image: url("/images/landing/meal/cf05.png");
  left: 219px;
  top: 360px;
}
.bg-item:nth-child(6) {
  background-image: url("/images/landing/meal/cf06.png");
  left: -140px;
  top: 420px;
}

@keyframes slideRotate {
  0% {
    transform: translateY(50px) scale(0.7) rotate(0deg);
    opacity: 0;
  }
  100% {
    transform: translateY(0) scale(1) rotate(360deg);
    opacity: 1;
  }
}

.bg2 > span {
  width: 175px;
  height: 175px;
}
.bg2 > span:nth-child(1) {
  background-image: url("/images/landing/meal/f01.png");
  left: -310px;
  top: 250px;
}
.bg2 > span:nth-child(2) {
  background-image: url("/images/landing/meal/f02.png");
  left: -210px;
  top: 460px;
}
.bg2 > span:nth-child(3) {
  background-image: url("/images/landing/meal/f03.png");
  left: 560px;
}
.bg2 > span:nth-child(4) {
  background-image: url("/images/landing/meal/f04.png");
  left: 870px;
  top: 150px;
}
.bg2 > span:nth-child(5) {
  background-image: url("/images/landing/meal/f05.png");
  top: 340px;
  left: 520px;
}
.bg2 > span:nth-child(6) {
  background-image: url("/images/landing/meal/f06.png");
  top: 590px;
  left: 880px;
}
.bg2 > span:nth-child(7) {
  background-image: url("/images/landing/meal/f07.png");
  top: 720px;
  left: 710px;
}
.bg2 > span:nth-child(8) {
  background-image: url("/images/landing/meal/f08.png");
  left: -290px;
  top: 780px;
}

.ttl {
  margin-top: 170px;
}
.ttlG1,
.ttlG2 {
  display: block;
  position: relative;
  text-align: center;
  display: flex;
  align-items: flex-start;
  align-content: flex-start;
  justify-content: center;
}
.ttlG2 {
  margin-top: -80px;
}
.ttlG1 > img:nth-child(1) {
  margin-top: 35px;
  margin-right: 10px;
}
.ttlG2 > img:nth-child(1) {
  margin-top: 65px;
  margin-right: 17px;
}
.sora {
  position: absolute;
  left: 40px;
  top: 460px;
}
.textG1 {
  position: absolute;
  top: 670px;
  left: 450px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.textG1 > img:nth-child(2) {
  margin-top: -19px;
}
.textG1 > img:nth-child(3) {
  transform: rotate(-8deg);
  margin-top: 5px;
}

/* sp */
@media only screen and (max-width: 950px) {
  .off.meal {
    margin-top: -40vw;
  }
  .off .meal_inner {
    min-height: 0;
  }
  .meal {
    padding-top: 0;
  }
  .meal_inner {
    min-height: 186vw;
  }
  .bg-item {
    width: 55vw;
    height: 55vw;
  }
  .bg-item:nth-child(1) {
    top: 58vw;
    right: -16vw;
    transform: rotate(-165deg);
  }
  .bg-item:nth-child(2) {
    left: 31vw;
    top: -20vw;
    transform: rotate(-15deg);
  }
  .bg-item:nth-child(3) {
    left: -12vw;
    top: -16vw;
  }
  .bg-item:nth-child(4) {
    right: -20vw;
    top: -15vw;
  }
  .bg-item:nth-child(5) {
    display: none;
  }
  .bg-item:nth-child(6) {
    left: -14vw;
    top: 72vw;
  }
  .bg2 > span {
    width: 21vw;
    height: 21vw;
  }
  .bg2 > span:nth-child(1) {
    left: 78vw;
    top: 107vw;
  }
  .bg2 > span:nth-child(2) {
    left: 53vw;
    top: 9vw;
  }
  .bg2 > span:nth-child(3) {
    left: -3vw;
    top: 58vw;
  }
  .bg2 > span:nth-child(4) {
    left: 82vw;
    top: 41vw;
  }
  .bg2 > span:nth-child(5) {
    top: 121vw;
    left: -1vw;
  }
  .bg2 > span:nth-child(6) {
    top: 130vw;
    left: 87vw;
  }
  .bg2 > span:nth-child(7) {
    left: 4vw;
    top: 144vw;
  }
  .bg2 > span:nth-child(8) {
    left: 1vw;
    top: 25vw;
  }
  .ttl {
    margin-top: 24vw;
  }
  .ttlG1 > img:nth-child(1) {
    width: 50vw;
    margin-top: 4vw;
    margin-right: 1vw;
  }
  .ttlG1 > img:nth-child(2) {
    width: 23vw;
  }
  .ttlG2 {
    flex-direction: column;
    margin-top: -21vw;
  }
  .ttlG2 > img:nth-child(1){
    width: 80vw;
    display: block;
    margin: 14vw auto 0;
  }
  .ttlG2 > img:nth-child(2){
    width: 69vw;
    display: block;
    margin: -6vw auto 0;
  }
  .sora {
    width: 70vw;
    top: 65vw;
    left: 15vw;
  }
  .textG1 {
    flex-direction: row;
    left: 21vw;
    top: 115vw;
    
  }
  .textG1 > img:nth-child(1) {
    width: 35vw;
    margin-top: 5vw;
    margin-right: 1vw;
  }
  .textG1 > img:nth-child(2) {
    width: 19vw;
  }
  .textG1 > img:nth-child(3) {
    position: absolute;
    bottom: -24vw;
    width: 20vw;
  }
}
</style>