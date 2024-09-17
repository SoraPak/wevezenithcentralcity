<template>
  <section class="model_house">
    <div class="model_house_inner">
      <div class="bg"></div>
      <h1 class="ttl"><img src="/images/landing/model_house/ttl01.png" width="517" alt="모델하우스 방문 예약하고 특별한 선물을 받아가세요!"></h1>
      <img class="img01" src="/images/landing/model_house/img01.png" width="494" alt="">
      
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
    max-width: 840px;
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
  .img01 {
    position: absolute;
    left: -140px;
    top: -50px;

  }
  .text {
    position: absolute;
    right: -19px;
    top: 80px;
  }

  

/* sp */
@media only screen and (max-width: 950px) {

  .model_house::before {
    background-size: 100% auto;
    width: 101vw;
    height: 41vw;
    top: -21vw;    
  }
  .model_house_inner {
    max-width: 100%;
    height: auto;
    padding-top: 5vw;
    padding-bottom: 40vw;
  }
  .model_house_inner::before {
    top: -12vw;
    right: -136vw;
    width: 153vw;
    height: 100vw;
  }
  .ttl, .text {
    position: relative;
    text-align: center;
    left: 0;
    top: 0;
  }
  .ttl img, .text img {
    margin: 0 auto;
  }
  .ttl img {
    width: 77vw;
  }
  .img01 {
    position: relative;
    display: block;
    margin: 4vw auto;
    width: 90vw;
    left: auto;
    top: auto;
  }
  .text {
    margin-top: 5vw;
  }
  .text img {
    width: 77vw;
  }

}
</style>