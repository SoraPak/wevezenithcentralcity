<template>
  <section class="school_bus">
    <div class="school_bus_inner">
      <img class="img01" src="/images/landing/school_bus/img01.png" width="288" alt="">
      <img class="img02" src="/images/landing/school_bus/img02.png" width="380" alt="">
      <img class="img03" src="/images/landing/school_bus/img03.png" width="118" alt="">
      <img class="img04" src="/images/landing/school_bus/img03.png" width="92" alt="">
      <img class="img05" src="/images/landing/school_bus/img03.png" width="92" alt="">
      <h1 class="ttl">
        <img src="/images/landing/school_bus/ttl01.svg" height="76" alt="안심통학">
        <img src="/images/landing/school_bus/ttl02.svg" height="76" alt="셔틀버스 지원!">
      </h1>
      <p class="text01"><img src="/images/landing/school_bus/text01.svg" height="33" alt="(2년 지원 예정)"></p>
      <p class="text02"><img src="/images/landing/school_bus/text02.svg" width="342" alt="원스톱 안심통학을위한 아파트 정문부터 학교까지 통학용 셔틀버스지원"></p>
      <p class="text03">※학정지구 내 초등학교 신설시 셔틀버스 지원계획이 변경 또는 취소될 수 있습니다. </p>
      
    </div>
  </section>
</template>

<style scoped>
.school_bus {
  position: relative;
  background: url("/images/landing/school_bus/bg02.png") repeat-x center bottom;
  background-size: 1px auto;
  text-align: center;
  color: #000f3a;
}
.school_bus::before {
  content: "";
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  background: url("/images/landing/school_bus/bg_top.png") no-repeat center bottom;
  background-size: 2688px auto;
  width: 2688px;
  height: 156px;
  top: -155px;
}
.school_bus::after {
  content: "";
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  background: url("/images/landing/school_bus/bg_bottom.png") no-repeat center bottom;
  background-size: 2688px auto;
  width: 2688px;
  height: 184px;
  bottom: 0;
}
.school_bus_inner {
  height: 575px;
  max-width: 840px;
  margin: 0 auto;
  position: relative;
}
.ttl {
  font-size: 81px;
  text-align: center;
  line-height: 120%;
  color: #000f3a;
}
.ttl span:first-child {
  color: #fff;
}
.ttl span:last-child {
  color: #f5f210;
}
.img01, .img02, .img03, .img04, .img05 {
  position: absolute;
}
.img01 {
  right: -91px;
  top: -20px;
}
.img02 {
  left: -140px;
  bottom: 37px;
  z-index: 3;
}
.img03{
  left: -85px;
  top: -70px;
}
.img04{
  left: 130px;
  top: 10px;
}
.img05 {
  right: -139px;
  top: 70px;
}
.text01 {
  font-size: 28px;
  margin-top: 17px;
  font-weight: 400;
}
.text02 {
  font-size: 33px;
  font-weight: 600;
  line-height: 140%;
  margin-top: 40px;
}
.text03 {
  color: #fff;
  font-size: 13px;
  margin-right: 20px;
  margin-top: 10px;
}








/* sp */
@media only screen and (max-width: 950px) {

  .school_bus {
    background-size: 0.13vw auto;
  }
  .school_bus::before {
    background-size: 100% auto;
    width: 101vw;
    height: 6vw;
    top: -5.6vw;
  }
  .school_bus::after {
    background-size: 100% auto;
    width: 101vw;
    height: 7vw;
    bottom: 3.6vw;
  }
  .school_bus_inner {
    height: 115vw;
    max-width: 100%;
  }
  .ttl {
    font-size: 11.5vw;
    padding-top: 9vw;
  }
  .ttl img{
    height: 10vw;
  }
  .img01 {
    right: -8vw;
    top: 37vw;
    width: 41vw;
  }
  .img02 {
    left: -11vw;
    bottom: 1vw;
    width: 53vw;
  }
  .img03{
    left: -7vw;
    top: 3vw;
    width: 18vw;
  }
  .img04{
    left: 5vw;
    top: 140px;
    width: 14vw;
    
  }
  .img05 {
    right: -7vw;
    top: 6vw;
    width: 14vw;
  }
  .text01 {
    font-size: 4.6vw;
    margin-top: 0;
  }
  .text02 {
    font-size: 4.8vw;
    margin: 1vw 22vw;
  }
  .text03 {
    font-size: 2.7vw;
    margin: 0 29vw 0 34vw;
    line-height: 160%;
    word-break: keep-all;
    position: absolute;
    bottom: 11vw;
  }


}
</style>