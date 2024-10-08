<template>
  <section class="model_house">
    <div class="model_house_inner">
      <div class="bg"></div>
      <h1 class="ttl"><img loading="lazy" src="/images/landing/model_house/ttl01.png" width="517" alt="모델하우스 방문 예약하고 특별한 선물을 받아가세요!"></h1>
     
      <p class="text">
        <img loading="lazy" src="/images/landing/model_house/text01.png" width="738" alt="10월31 까지 박소라 과장을 지정하고
모델하우스를 방문하시면 상품권을 드립니다. 그냥오면 없음">
        <img loading="lazy" class="gift01" src="/images/landing/model_house/gift01.png" width="300" alt="">
        <img loading="lazy" class="gift02" src="/images/landing/model_house/gift02.png" width="320" alt="">
        <img loading="lazy" class="gift03" src="/images/landing/model_house/gift03.png" width="310" alt="">
        <img loading="lazy" class="gift04" src="/images/landing/model_house/gift04.png" width="280" alt="">
      </p>
      <ul class="text02">
        <li>
          ※ 네이버페이, 배달의민족, CU, 신세계 중 하나
        </li>
        <li>
          ※ 상품권 종류는 변경 될 가능성이있습니다 
        </li>
      </ul>
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
    height: 1120px; 
    /* halloween
    height: 620px;
    z-index: 1; */
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
    left: 50%;
    transform: translate(-50%, 0);
    top: -80px;
  }
  .img01 {
    position: absolute;
    left: -140px;
    top: -50px;

  }
  .text {
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0);
    top: 80px;
  }
  .gift01 {
    position: absolute;
    left: -330px;
    top: 0;
  }
  .gift02 {
    position: absolute;
    right: -360px;
    top: 20px;
  }
  .gift03 {
    position: absolute;
    left: -260px;
    bottom: -40px;
  }
  .gift04 {
    position: absolute;
    right: -240px;
    bottom: -30px;
  }
  .text02 {
    font-size: 21px;
    text-align: center;
    padding-top: 590px;
    line-height: 160%;
  }
  .text02 li {
    margin-top: 10px;
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
  .ttl {
    top: 0;
  }
  .ttl img, .text img {
    margin: 0 auto;
  }
  .ttl img {
    width: 84vw;
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
    top: 25vw;
    width: 100%
  }
  .gift01 {
    width: 35vw;
    left: 11vw;
    top: 0;
  }
  .gift02 {
    width: 38vw;
    right: 8vw;
    top: 2vw;
  }
  .gift03 {
    width: 37vw;
    left: 10vw;
    bottom: auto;
    top: 25vw;
  }
  .gift04 {
    width: 34vw;
    right: 10vw;
    bottom: auto;
    top: 25vw;
  }
  .text img:first-child {
    width: 77vw;
    position: absolute;
    top: 52vw;
    left: 50%;
    transform: translate(-50%, 0);
  }
  .text02 {
    font-size: 3.5vw;
    text-align: center;
    padding-top: 126vw;
    line-height: 160%;
  }
  .text02 li {
    margin-top: 1vw;
  }

}
</style>