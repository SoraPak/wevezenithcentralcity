<template>
  <section id="giveaway" class="giveaway">
    <div class="giveaway_inner">
      <div class="bg"></div>
      <h1 id="event" class="ttl"><img loading="lazy" src="/images/landing/giveaway/ttl01.png" width="577" alt="박소라 과장 찾고 선물 받자"></h1>

      <div class="box">
        <img loading="lazy" src="/images/landing/giveaway/gift01.png" width="532" alt="">
        <div class="text">
          <img loading="lazy" src="/images/landing/giveaway/text01.png" width="524" alt="주말, 모델하우스에 박소라 과장을 찾아오시면 경품 추첨권을 드립니다!">
          <ul>
            <li>
              ※ 경품추첨은 매주 토,일 주말에만 진행 됩니다
            </li>
            <li>
              ※ 출발전 예약 필수(당일 예약 가능)
            </li>
            <li>
              ※ 경품 추첨권은 방문 한팀당 하나
            </li>
            <li>
              ※ 모델하우스 유닛 투어와 팀장의 상담 완료 시
            </li>
          </ul>
        </div>
      </div>
      
    </div>
  </section>
</template>

<style scoped>
  .giveaway {
    background: #000f3a;
    color: #fff;
    position: relative;
  }
  .giveaway::before {
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
  .giveaway_inner {
    max-width: 840px;
    margin: 0 auto;
    position: relative;
    /* height: 1120px; 
    halloween */
    height: 620px;
    z-index: 1;
  }
  .giveaway_inner::before {
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
    top: -50px;
  }
  .box {
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0);
    top: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .text {
    margin-left: -53px;
  }
  .text > ul {
    font-size: 18px;
    text-align: center;
    line-height: 140%;
    margin-top: 20px;
  }
  .text > ul li {
    margin-top: 5px;
  }


/* sp */
@media only screen and (max-width: 950px) {

  .giveaway::before {
    background-size: 100% auto;
    width: 101vw;
    height: 41vw;
    top: -21vw;    
  }
  .giveaway_inner {
    max-width: 100%;
    height: auto;
    padding-top: 5vw;
    padding-bottom: 40vw;
  }
  .giveaway_inner::before {
    top: -12vw;
    right: -136vw;
    width: 153vw;
    height: 100vw;
  }
  .ttl {
    top: 3vw;
  }
  .ttl img, .text img {
    margin: 0 auto;
  }
  .ttl img {
    width: 94vw;
  }

  
  .box {
    position: relative;
    display: block;
    width: 100%;
    top: 13vw;
  }
  .box img {
    display: block;
    margin: 0 auto;
    margin-bottom: -5vw;
  }
  .box > img:nth-child(1) {
    width: 100vw;
    height: auto;
  }
  .text {
    margin-left: 0;
  }
  .text > img:nth-child(1) {
    width: 80vw;
    height: auto;
    
  }
  .text > ul {
    font-size: 3.5vw;
    text-align: center;
    line-height: 160%;
    margin-top: 9vw;
  }
  .text > ul li {
    margin-top: 1vw;
  }

}
</style>