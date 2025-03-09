<template>
  <section id="meal" ref="mealRef" class="meal off">
    <div class="meal_inner">
      <div class="bg">
        <span class="bg-item"></span>
        <span class="bg-item"></span>
        <span class="bg-item"></span>
        <span class="bg-item"></span>
        <span class="bg-item"></span>
        <span class="bg-item"></span>
      </div>
      <div class="bg2">
        <span class="bubble"></span>
        <span class="bubble"></span>
        <span class="bubble"></span>
        <span class="bubble"></span>
        <span class="bubble"></span>
        <span class="bubble"></span>
        <span class="bubble"></span>
        <span class="bubble"></span>
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
      <div class="sora">
        <img class="sora_img" src="/images/landing/meal/sora.png" alt="">
        <video
          ref="bgVideo"
          autoplay
          loop
          muted
          playsinline
          preload="auto"
          class="bg-video"
        >
          <source src="/images/landing/meal/steam.mp4" type="video/mp4" />
        </video>
        <!-- img class="sora_img2" src="/images/landing/meal/steam.jpg" alt="" -->

      </div>
      <p class="textG1">
        <img src="/images/landing/meal/text01.png" width="326" alt="매일 뭐 먹지?">
        <img src="/images/landing/meal/text02.png" width="148" alt="고민 끝!">
        <img src="/images/landing/meal/text03.svg" width="134" alt="엘지 아워홈">
      </p>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";

const mealRef = ref(null);

const handleIntersection = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      if (mealRef.value) {
        mealRef.value.classList.remove("off"); // ✅ height 애니메이션 실행

        // ✅ height 애니메이션이 끝난 후 약간 딜레이 후 풍선 효과 실행 (300ms 후)
        setTimeout(() => {
          document.querySelectorAll(".bubble").forEach((el, index) => {
            setTimeout(() => {
              el.classList.add("pop");
            }, index * 200); // 순차적으로 실행
          });
        }, 300);

        // ✅ height 애니메이션이 끝난 후 `.active` 추가 (1.5초 후)
        setTimeout(() => {
          mealRef.value.classList.add("active"); 

          // ✅ .bg-item 애니메이션 실행
          setTimeout(() => {
            document.querySelectorAll(".bg-item").forEach((el, index) => {
              setTimeout(() => {
                el.classList.add("animate");
              }, index * 200);
            });
          }, 300);

        }, 1500); 

        observer.unobserve(entry.target); // ✅ 한 번 실행 후 감지 중지
      }
    }
  });
};

onMounted(() => {
  if (process.client && mealRef.value) {
    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      threshold: 0.7, // 70% 보이면 실행
    });
    observer.observe(mealRef.value);
  }
});
</script>



<style scoped>
.off .meal_inner {
  max-height: 607px;
  opacity: 0;
  transition: max-height 1s ease-out, opacity 0.8s ease-out;
}
.meal {
  padding-top: 180px;
  background: #fff;
  overflow: hidden;
}
.meal_inner {
  height: 1530px;
  max-height: 1530px;
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

.bg2 {
  opacity: 0.6;
}

.bubble {
  display: block;
  background-size: 100% auto;
  background-repeat: no-repeat;
  background-position: center center;
  position: absolute;
  width: 175px;
  height: 175px;
  transform: scale(0); /* 초기 상태 */
  transition: transform 0.5s ease-out, opacity 0.5s ease-out;
}

/* 📌 부풀어 오르는 애니메이션 */
.bubble.pop {
  animation: bouncePop 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

/* 📌 풍선 효과 (파앗! 뽁뽁뽁) */
@keyframes bouncePop {
  0% {
    transform: scale(0);
    opacity: 0;
  }
  40% {
    transform: scale(1.3); /* 빠르게 커졌다가 */
    opacity: 1;
  }
  70% {
    transform: scale(0.9); /* 살짝 수축 */
  }
  100% {
    transform: scale(1); /* 정상 크기로 유지 */
  }
}


.bubble:nth-child(1) {
  background-image: url("/images/landing/meal/f01.png");
  left: -310px;
  top: 250px;
}
.bubble:nth-child(2) {
  background-image: url("/images/landing/meal/f02.png");
  left: -210px;
  top: 460px;
}
.bubble:nth-child(3) {
  background-image: url("/images/landing/meal/f03.png");
  left: 560px;
}
.bubble:nth-child(4) {
  background-image: url("/images/landing/meal/f04.png");
  left: 870px;
  top: 150px;
}
.bubble:nth-child(5) {
  background-image: url("/images/landing/meal/f05.png");
  top: 340px;
  left: 520px;
}
.bubble:nth-child(6) {
  background-image: url("/images/landing/meal/f06.png");
  top: 590px;
  left: 880px;
}
.bubble:nth-child(7) {
  background-image: url("/images/landing/meal/f07.png");
  top: 720px;
  left: 710px;
}
.bubble:nth-child(8) {
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
  width: 421px;
  position: absolute;
  left: 40px;
  top: 460px;
}
.sora > .sora_img {
  width: 100%;
  height: auto;
}
.sora > video,
.sora > .sora_img2 {
  position: absolute;
  left: -100px;
  top: -10px;
  width: 500px;
  mix-blend-mode: screen;
  z-index: 2;
  transition: opacity 1s ease-in-out, visibility 1s ease-in-out;

}
.sora > video,
.active .sora_img2 {
  opacity: 0;
  visibility: hidden;

}

.active .sora > video {
  opacity: 1;
  visibility: visible;
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
  .off .meal_inner {
    max-height: 34vw;
  }
  .meal {
    padding-top: 0;
  }
  .meal_inner {
    height: 186vw;
    max-height: 186vw;
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
  .sora > video,
  .sora > .sora_img2 {
    width: 83vw;
    left: -16vw;
    top: -4vw;
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