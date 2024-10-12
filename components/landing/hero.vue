<template>
  <section id="top" class="hero" ref="heroRef">
    <h1 class="ttl">
      <img ref="img1" src="/images/landing/hero/ttl01.png" width="425" alt="대구 랜드마크의 자격">
      <img ref="img2" src="/images/landing/hero/ttl02.png" width="558" alt="오직, 제니스">
      <img ref="img3" src="/images/landing/hero/ttl03.png" width="581" alt="대구 또 하나의 랜드마크, 새로운 제니스가 옵니다">
    </h1>
    <div class="textBox1">
      <p class="text1"><img src="/images/simple_logo_w.svg" width="370" alt="두산위브더제니스 센트럴시티"></p>
      <p class="text2"><img src="/images/landing/hero/text02.png" width="365" alt="전용 84・115・143・191㎡ | 총 1,098세대"></p>
    </div>
    <ul class="terms">
      <li v-for="(item, index) in termsList" :key="index" :ref="el => addToTermsRefs(el, index)">
        <img width="152" :src="item.imgSrc" :alt="item.altText" />
      </li>
    </ul>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const heroRef = ref(null);
const img1 = ref(null);
const img2 = ref(null);
const img3 = ref(null);
const termsItems = ref([]);

const termsList = [
  { imgSrc: "/images/landing/hero/list01.png", altText: "학정 역 칠곡경대병원 역 더블역세권" },
  { imgSrc: "/images/landing/hero/list02.png", altText: "중도금 무이자" },
  { imgSrc: "/images/landing/hero/list03.png", altText: "전매 무제한" },
  { imgSrc: "/images/landing/hero/list04.png", altText: "계약금 500만원" }
];

// termsItems 배열에 요소를 추가하는 함수
const addToTermsRefs = (el, index) => {
  if (el) {
    termsItems.value[index] = el;
  }
};

onMounted(() => {
  const options = {
    threshold: 0.2, // 요소가 20% 보이면 애니메이션 트리거
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // 애니메이션을 트리거
        setTimeout(() => img1.value.classList.add('animate'), 0); // img1 애니메이션 바로 시작
        setTimeout(() => img3.value.classList.add('animate'), 400); // img3 애니메이션 약간의 지연 후 시작
        setTimeout(() => img2.value.classList.add('animate'), 1000); // img2 애니메이션 img1, img3 후에 시작
        setTimeout(() => {
          termsItems.value.forEach((item, index) => {
            setTimeout(() => {
              item.classList.add('animate');

              // 첫 번째 terms li 요소의 애니메이션 중간 시점에 흔들림 트리거
              if (index === 0) {
                setTimeout(() => {
                  // 애니메이션 중간 시점에 body 흔들림 추가
                  document.body.classList.add('shake');
                  setTimeout(() => {
                    document.body.classList.remove('shake'); // 흔들림 애니메이션 종료 후 클래스 제거
                  }, 500); // 흔들림 지속 시간 (500ms)
                }, 600); // 첫 번째 li 애니메이션이 시작된 후 500ms 후에 트리거
              }
            }, 200 * index); // terms 리스트 항목들이 차례대로 나타남
          });
        }, 1600); // img2 애니메이션이 끝난 후 terms 애니메이션 시작

        // 애니메이션 실행 후 observer 해제
        observer.unobserve(heroRef.value);
      }
    });
  }, options);

  observer.observe(heroRef.value);
});

</script>





<style>
@keyframes bodyShake {
  0%, 100% {
    transform: translate(0, 0);
  }
  10% {
    transform: translate(-10px, 0);
  }
  20% {
    transform: translate(10px, 0);
  }
  30% {
    transform: translate(-10px, 0);
  }
  40% {
    transform: translate(10px, 0);
  }
  50% {
    transform: translate(-10px, 0);
  }
  60% {
    transform: translate(10px, 0);
  }
  70% {
    transform: translate(-10px, 0);
  }
  80% {
    transform: translate(10px, 0);
  }
  90% {
    transform: translate(-10px, 0);
  }
}

body.shake {
  animation: bodyShake 0.5s ease-in-out;
}
</style>



<style scoped>
/* 초기 상태: 애니메이션 전 모든 요소는 투명하게 시작 */
.ttl img {
  opacity: 0;
  transform: translateX(0);
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
}

/* 첫 번째 이미지: 왼쪽에서 슬라이드 인 */
.ttl img:nth-child(1) {
  transform: translateX(-100px); /* 왼쪽에서 시작 */
}

.ttl img:nth-child(1).animate {
  opacity: 1;
  transform: translateX(0); /* 제자리로 이동 */
}

/* 세 번째 이미지: 오른쪽에서 슬라이드 인 */
.ttl img:nth-child(3) {
  transform: translateX(100px); /* 오른쪽에서 시작 */
}

.ttl img:nth-child(3).animate {
  opacity: 1;
  transform: translateX(0); /* 제자리로 이동 */
}

/* 두 번째 이미지: 페이드인 애니메이션 */
.ttl img:nth-child(2) {
  opacity: 0;
}

.ttl img:nth-child(2).animate {
  opacity: 1;
  transform: translateX(0); /* 페이드인되며 등장 */
}


/* terms 리스트 항목들: 풍선처럼 부풀어오르는 애니메이션 */
.terms li {
  opacity: 0;
  transform: scale(0); /* 크기를 0으로 시작 */
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.terms li.animate {
  opacity: 1;
  animation: dynamicBalloonPop 1s cubic-bezier(0.25, 0.75, 0.5, 1.25) forwards;
}

/* terms li들이 차례대로 등장하도록 delay를 설정 */
.terms li:nth-child(1).animate {
  transition-delay: 0.2s;
}

.terms li:nth-child(2).animate {
  transition-delay: 0.4s;
}

.terms li:nth-child(3).animate {
  transition-delay: 0.6s;
}

.terms li:nth-child(4).animate {
  transition-delay: 0.8s;
}

/* 풍선처럼 생동감 있게 부풀어오르는 애니메이션 */
@keyframes dynamicBalloonPop {
  0% {
    transform: scale(0); /* 완전히 작게 시작 */
  }
  50% {
    transform: scale(1.3); /* 더 크게 부풀어오름 */
  }
  70% {
    transform: scale(0.9); /* 살짝 작아졌다가 */
  }
  100% {
    transform: scale(1); /* 최종 크기로 돌아옴 */
  }
}


.hero {
  background: url("/images/landing/hero/bg_main.jpg") no-repeat center bottom #001135;
  background-size: 1344px auto;
  /* height: 1500px; */
  height: 1014px;
  color: #ffffff;
  position: relative;
}
.hero::before {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 100%;
  background: url("/images/landing/hero/bg_bottom.png") no-repeat center bottom;
  
}
@media only screen and (max-width: 1344px) {
  .hero::before {
    background-size: 1344px auto;
  }
}
.logo {
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  bottom:1338px;
}
.ttl {
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  height: 220px;
  top:80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.ttl img:nth-child(1) {
  margin-bottom: auto;
}
.ttl img:nth-child(3){
  margin-top: auto;
}
.textBox1 {
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  /* bottom:806px; */
  top:345px;
}

.terms {
  position: absolute;
  left: 50%;
  top: 350px;
  transform: translate(-50%, 0);
  display: flex;
  justify-content: center;
  align-items: center;
}
.terms li {
  margin: 11px;
}

/* sp */
@media only screen and (max-width: 950px) {

  .hero {
    background-size: 740px auto;
    background-size: 227vw auto;
    height: 157vw;
  }
  .hero::before {
    background-size: 101vw auto;
  }
  .ttl {
    height: 110px;
    height: 29vw;
    top: 16vw;
  }
  .ttl img:nth-child(1) {
    width: 215px;
    width: 57.3vw;
    height: auto;
  }
  .ttl img:nth-child(2) {
    width: 282px;
    width: 75vw;
    height: auto;
  }
  .ttl img:nth-child(3) {
    width: 295px;
    width: 78.5vw;
    height: auto;
  }
  .textBox1 {
    top: 210px;
    top: 52vw;
  }
  .text1 img {
    width: 198px;
    width: 53vw;
  }
  .text2 img {
    width: 198px;
    width: 52.5vw;
  }
  .terms {
    display: flex;
    top: 56vw;
  }
  .terms li {
    margin: 1.2vw;
  }
  .terms img {
    width: 21.5vw;
  }
  
}
</style>
