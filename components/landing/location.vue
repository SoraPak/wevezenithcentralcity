<template>
  <section class="location">
    <div class="location_inner">
      <h1 class="ttl"><img src="/images/landing/location/ttl.png" width="358" alt="빨라진 교통 어디로든 빠르게"></h1>
      <img class="img01" src="/images/landing/location/img01.png" width="474" alt="">
      <p class="text01"><img src="/images/landing/location/text01.png" height="90" alt="더블 역세권 학정역 도보 2분"></p>
      <p class="text02"><img src="/images/landing/location/text02.png" height="90" alt="대구 4차 순환도로 시내외 어디든 빠른 이동"></p>
      <p class="text03"><img src="/images/landing/location/text03.png" height="90" alt="구미IC,혁신도시,성서공단,동대구역 주요 거점 빠른 접근성"></p>
      <p class="text04"><img src="/images/landing/location/text04.png" height="90" alt="대구경북신공항 개발 향후 교통 및 인프라 확충"></p>
      <img class="img02" src="/images/landing/location/img02.png" width="394" alt="">
      <img class="img03" src="/images/landing/location/img03.png" width="183" alt="">
      <img class="img04" src="/images/landing/location/img04.png" width="140" alt="">
    </div>
  </section>
</template>

<style scoped>
  .location {
    background: #0182e0;
    color: #fff;
    position: relative;
    padding-bottom: 785px;
  }
  .location::before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: -1px;
    width: 100%;
    background: url("/images/landing/location/bg_bottom.png") no-repeat center bottom;
    background-size: 2688px auto;
  }
  /*
  @media only screen and (max-width: 1344px) {
    .location {
      padding-bottom: 405px;
    }
    .location::before {
      background-size: 1344px auto;
    }
  }*/
  .location_inner {
    width: 840px;
    margin: 0 auto;
    position: relative;
    height: 635px;
  }
  .ttl, .img01, .img02, .img03, .img04, .text01, .text02, .text03, .text04 {
    position: absolute;
    z-index: 1;
  }
  .ttl {
    top: -140px;
    right: -20px;
  }
  .img01 {
    left: -20px;
    top: -110px;
  }
  .text01 {
    top: 15px;
    right: 0;
  }
  .text02 {
    top: 120px;
    right: 20px;
  }
  .img02 {
    top: 240px;
    right: 10px;
  }
  .text03 {
    top: 400px;
    left: 20px;
  }
  .text04 {
    top: 506px;
    left: 0;
  }
  .img03 {
    right: 302px;
    top: 156px;
    z-index: 0;
  }
  .img04 {
    right: 190px;
    top: 160px;
    z-index: 0;
  }
</style>