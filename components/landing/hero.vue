<template>
  <div class="hero">
    <!-- h1 class="logo"><img src="/images/full_logo_w.svg" width="244" alt="두산위브더제니스 센트럴시티"></h1 -->
    <h2 class="ttl">
      <img src="/images/landing/hero/ttl01.png" width="607" alt="대구 랜드마크의 자격">
      <img src="/images/landing/hero/ttl02.png" width="797" alt="오직, 제니스">
      <img src="/images/landing/hero/ttl03.png" width="830" alt="대구 또 하나의 랜드마크, 새로운 제니스가 옵니다">
    </h2>
    <div class="textBox1">
      <p class="text1"><img src="/images/simple_logo_w.svg" width="566" alt="두산위브더제니스 센트럴시티"></p>
      <p class="text2"><img src="/images/landing/hero/text02.png" width="565" alt="전용 84・115・143・191㎡ | 총 1,098세대"></p>
    </div>
  </div>
</template>
<style scoped>
.hero {
  background: url("/images/landing/hero/bg_main.png") no-repeat center bottom #001135;
  background-size: 1920px auto;
  /* height: 1500px; */
  height: 1170px;
  color: #ffffff;
  position: relative;
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
  width: 850px;
  height: 315px;
  /* bottom:998px; */
  bottom:738px;
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
  bottom:548px;
}
</style>
