<template>
  <section class="hero">
    <!-- h1 class="logo"><img src="/images/full_logo_w.svg" width="160" alt="두산위브더제니스 센트럴시티"></h1 -->
    <h1 class="ttl">
      <img class="from-left" ref="ttlRef01" src="/images/landing/hero/ttl01.png" width="425" alt="대구 랜드마크의 자격">
      <img class="fade-in" ref="ttlRef02" src="/images/landing/hero/ttl02.png" width="558" alt="오직, 제니스">
      <img class="from-right" ref="ttlRef03" src="/images/landing/hero/ttl03.png" width="581" alt="대구 또 하나의 랜드마크, 새로운 제니스가 옵니다">
    </h1>
    <div class="textBox1">
      <p class="text1"><img src="/images/simple_logo_w.svg" width="400" alt="두산위브더제니스 센트럴시티"></p>
      <p class="text2"><img src="/images/landing/hero/text02.png" width="395" alt="전용 84・115・143・191㎡ | 총 1,098세대"></p>
    </div>
    <ul class="terms">
      <li><img src="/images/landing/hero/list01.png" width="162" alt="학정 역 칠곡경대병원 역 더블역세권"></li>
      <li><img src="/images/landing/hero/list02.png" width="162" alt="중도금 무이자"></li>
      <li><img src="/images/landing/hero/list03.png" width="162" alt="전매 무제한"></li>
      <li><img src="/images/landing/hero/list04.png" width="162" alt="계약금 500만원"></li>
    </ul>
  </section>
</template>
<script setup>
import { ref } from 'vue';
import { useScrollAnimation } from '~/composables/useScrollAnimation';

const ttlRef01 = ref(null);
const ttlRef02 = ref(null);
const ttlRef03 = ref(null);

// 요소들이 스크롤될 때 애니메이션 적용
useScrollAnimation([ttlRef01, ttlRef02, ttlRef03]);
</script>

<style scoped>
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
.ttl img:first-child {
  margin-bottom: auto;
}
.ttl img:last-child {
  margin-top: auto;
}
.textBox1 {
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  /* bottom:806px; */
  top:335px;
}

.terms {
  position: absolute;
  left: 50%;
  top: 340px;
  transform: translate(-50%, 0);
  display: flex;
  justify-content: center;
  align-items: center;
}
.terms li {
  margin: 10px;
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
