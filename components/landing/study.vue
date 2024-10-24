<template>
  <section id="study" class="study">
    <div class="flag">
      <h1 class="ttls">
        <img class="ttl01" loading="lazy" src="/images/logo.svg" width="384" alt="두산위브더제니스 센트럴시티">
        <img class="ttl02" loading="lazy" src="/images/landing/study/ttl.png" width="624" alt="교육 특화 아파트">
      </h1>
      <div class="medals">
        <img loading="lazy" src="/images/landing/study/medal.png" width="309" alt="">
      </div>
      <p class="text01">
        <img loading="lazy" src="/images/landing/study/text01.png" width="443" alt="">
        <img loading="lazy" src="/images/landing/study/jongro_logo.svg" width="437" alt="">
      </p>
    </div>
    <div class="box">
      <div class="box_inner">
        <img class="img01" loading="lazy" src="/images/landing/study/img01.png" width="747" alt="">
        <p class="box_text01">
          <img loading="lazy" src="/images/landing/study/text02.png" width="137" alt="유・초・중・고">
          <img loading="lazy" src="/images/landing/study/text03.png" width="274" alt="입주민 수강료">
          <img loading="lazy" src="/images/landing/study/text04.png" width="242" alt="2년간">
          <img loading="lazy" src="/images/landing/study/text05.png" width="331" alt="50% 지원">
          <img loading="lazy" src="/images/landing/study/text06.png" width="186" alt="(자녀 수 무제한)">
        </p>
        <p class="box_text02">
          <img loading="lazy" src="/images/landing/study/text07.png" width="270" alt="두 자녀시 2년간 720만원 혜택!!">
        </p>
      </div>
    </div>
  </section>
</template>


<style scoped>
.study {
  background-color:#082379;
  color: #fff;
  position: relative;
}
.flag {
  background: url("/images/landing/study/bg01_bd.png") repeat-y center top;
  background-size: 100% auto;
  width: 878px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
}
.flag::after {
  content: "";
  display: block;
  width: 878px;
  height: 219px;
  bottom: -219px;
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  background: url("/images/landing/study/bg01_bt.png") no-repeat center top;
  background-size: 100% auto;
}
.ttls {
  text-align: center;
  padding: 50px 0 40px;
}
.ttl01 {
  background: #fff;
  border-radius: 5px;
  margin-bottom: 25px;
}
.medals {
  width: 568px;
  height: 376px;
  background: url("/images/landing/study/bay.png") no-repeat center center;
  background-size: 100% auto;
  margin: 0 auto;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}
.medals img {
  margin-bottom: 20px
}
.text01 {
  padding-top: 75px;
  padding-bottom: 30px;
  text-align: center;
}
.text01 > img:first-child {
  margin-bottom: 24px;
}
.box {
  background: #b0bbe2;
  color: #01114f;
  position: relative;
  padding-bottom: 41px;
  max-width: 1344px;
  margin: 120px auto 0;
}
.box::after {
  content: "";
  display: block;
  width: 100%;
  max-width: 1344px;
  height: 395px;
  background: url("/images/landing/study/bg02.png") no-repeat center bottom;
  background-size: 100% auto;
  position: absolute;
  top: -395px;
}
.box_inner {
  max-width: 840px;
  margin: 0 auto;
  position: relative;
}
.img01 {
  position: relative;
  z-index: 2;
  margin-left: -110px;
  margin-top: 20px;
  margin-bottom: 20px;
  transform: rotate(2deg);
}
.box_text01 {
  width: 439px;
  position: absolute;
  right: 33px;
  top: 0;
  z-index: 2;
}
.box_text01 > img:nth-child(1) {
  position: absolute;
  top: -5px;
  left: 0;
}
.box_text01 > img:nth-child(2) {
  position: absolute;
  top: 35px;
  left: 0;
}
.box_text01 > img:nth-child(3) {
  position: absolute;
  top: 93px;
  left: 150px;
}
.box_text01 > img:nth-child(4) {
  position: absolute;
  top: 203px;
  right: -40px;
}
.box_text01 > img:nth-child(5) {
  position: absolute;
  top: 300px;
  right: -50px;
}
.box_text02 {
  position: absolute;
  right: -10px;
  top: 350px;
}

/* sp */
@media only screen and (max-width: 950px) {
  .flag {
    width: 90vw;
  }
  .flag::after {
    width: 90vw;
    height: 25vw;
    bottom: -25vw;
  }
  .ttls {
    padding: 9vw 0 4vw;
  }
  .ttl01 {
    width: 43vw;
    margin-bottom: 3vw;
  }
  .ttl02 {
    width: 67vw;
  }
  .medals {
    width: 62vw;
    height: 44vw;
  }
  .medals img {
    width: 32vw;
  }
  .text01 {
    padding-top: 6vw;
    padding-bottom: 4vw;
  }
  .text01 > img:first-child {
    width: 48vw;
    margin-bottom: 2vw;
  }
  .text01 > img:last-child {
    width: 48vw;
  }
  .box {
    padding-bottom: 10.5vw;
    margin-top: 36vw;
  }
  .box::after {
    background: url("/images/landing/study/bg02_sp.png") no-repeat center bottom;
    background-size: 100% auto;
    height: 56vw;
    top: -56vw;
  }
  .img01 {
    width: 98vw;
    margin-left: -25vw;
    margin-top: -23vw;
    margin-bottom: -11vw;
  }
  .box_text01 {
    width: 50vw;
    right: 3vw;
    top: -20vw;
  }
  .box_text01 > img:nth-child(1) {
    width: 17vw;
    left: -5vw;
    top: -2.2vw;
  }
  .box_text01 > img:nth-child(2) {
    width: 29vw;
    top: 3vw;
    left: 3vw;
  }
  .box_text01 > img:nth-child(3) {
    width: 25vw;
    top: 9.5vw;
    left: 13vw;
  }
  .box_text01 > img:nth-child(4) {
    width: 36vw;
    top: 21.5vw;
    left: 13vw;
  }
  .box_text01 > img:nth-child(5) {
    width: 24vw;
    top: 32.5vw;
    right: 0;
  }
  .box_text02 {
    top: 19vw;
    right: 2vw;
  }
  .box_text02 > img {
    width: 33vw;
  }
  
}
</style>