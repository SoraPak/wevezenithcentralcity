<template>
  <section class="model_house">
    <div class="model_house_inner">
      <div class="bg"></div>
      <h1 class="ttl"><img src="/images/landing/model_house/ttl01.png" width="517" alt="모델하우스 방문 예약하고 특별한 선물을 받아가세요!"></h1>
      <p class="text"><img src="/images/landing/model_house/text01.png" width="517" alt="9월 22일 까지 박소라 과장을 지정하고 모델하우스를 방문하시면 선물 추첨권을 드립니다!"></p>


    </div>
  </section>
</template>

<style scoped>
  .model_house {
    background: #000f3a;
    color: #fff;
    position: relative;
  }
  .model_house::before {
    content: "";
    position: absolute;
    background: url("/images/landing/model_house/bg_top.png") no-repeat center bottom;
    background-size: 2688px auto;
    width: 2688px;
    height: 971px;
    top: -335px;
    left: 50%;
    transform: translate(-50%, 0);
    
  }
  .model_house_inner {
    width: 840px;
    margin: 0 auto;
    position: relative;
    height: 860px;
  }
  .model_house_inner::before {
    content: "";
    position: absolute;
    position: absolute;
    top: 60px;
    right: -490px;
    width: 577px;
    height: 518px;
    background: url("/images/landing/ansim/bg01.png") no-repeat center center;
    background-size: 100% auto;

  }
  .ttl {
    position: absolute;
    right: 0;
    top: -80px;
  }
  .text {
    position: absolute;
    right: -31px;
    top: 80px;
  }
</style>