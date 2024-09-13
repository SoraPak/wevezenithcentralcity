<template>
  <section class="hero">
    <!-- h1 class="logo"><img src="/images/full_logo_w.svg" width="160" alt="두산위브더제니스 센트럴시티"></h1 -->
    <h1 class="ttl">
      <img src="/images/landing/hero/ttl01.png" width="425" alt="대구 랜드마크의 자격">
      <img src="/images/landing/hero/ttl02.png" width="558" alt="오직, 제니스">
      <img src="/images/landing/hero/ttl03.png" width="581" alt="대구 또 하나의 랜드마크, 새로운 제니스가 옵니다">
    </h1>
    <div class="textBox1">
      <p class="text1"><img src="/images/simple_logo_w.svg" width="400" alt="두산위브더제니스 센트럴시티"></p>
      <p class="text2"><img src="/images/landing/hero/text02.png" width="395" alt="전용 84・115・143・191㎡ | 총 1,098세대"></p>
    </div>
  </section>
</template>
<style scoped>
.hero {
  background: url("/images/landing/hero/bg_main.png") no-repeat center bottom #001135;
  background-size: 1344px auto;
  /* height: 1500px; */
  height: 840px;
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
</style>
