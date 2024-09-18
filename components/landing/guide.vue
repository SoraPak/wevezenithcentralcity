<template>
  <section class="guide">
    <div class="guide_inner">
      <h1 class="ttl"><img src="/images/landing/guide/ttl01.png" width="648" alt="당신의 프리미엄 라이프를 안내할 분양팀 상담사"></h1>
      <p class="text"><img src="/images/landing/guide/text01.png" width="403" alt="전화번호 단디 보고 오이소~^^"></p>
      <div class="guideImgs">
        <img class="name03" src="/images/landing/guide/name03.png" width="165" alt="신현주 팀장">
        <img class="img03" src="/images/landing/guide/img03.png" width="449" alt="">
        <img class="name02" src="/images/landing/guide/name02.png" width="165" alt="이지안 과장">
        <img class="img02" src="/images/landing/guide/img02.png" width="361" alt="">
        <img class="name01" src="/images/landing/guide/name01.png" width="165" alt="박소라 과장">
        <img class="img01" src="/images/landing/guide/img01.png" width="420" alt="">
      </div>
      <div class="section01">
        <div class="location">
          <img src="/images/landing/guide/map.jpg" width="309" alt="">
          <div class="right">
            <dl>
              <dt>모델하우스</dt>
              <dd>대구광역시 북구 태전동 1213번지<br>(대구과학대 정문 앞 주차장)</dd>
            </dl>
            <a class="btMap" href="https://kko.to/P0aas7dXbe" target="_blank"> 카카오지도 <br>바로가기</a>
            <p class="tel"><img src="/images/landing/guide/img_tel.png" width="438" alt="두산위브더제니스 센트럴시티 전화번호:01093570669"></p>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>



  .guide {
    background: #082379;
    color: #fff;
    position: relative;
  }
  .guide::before {
    content: "";
    position: absolute;
    background: url("/images/landing/guide/bg_top.png") no-repeat center bottom;
    background-size: 2688px auto;
    width: 2688px;
    height: 923px;
    top: -595px;
    left: 50%;
    transform: translate(-50%, 0);
    
  }
  .guide_inner {
    max-width: 840px;
    margin: 0 auto;
    position: relative;
    height: 840px;
  }

  .ttl{
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0);
    top: -410px;
  }
  .text {
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0);
    top: -233px;
    z-index: 1;
  }
  .guideImgs {
    position: absolute;
    left: 0;
    right: 0;
    top: 460px;
  }
  .guideImgs img {
    position: absolute;
  }
  .guideImgs .img02 {
    left: -57px;
    bottom: -68px;
  }
  .guideImgs .img03 {
    right: -75px;
    bottom: 0;
  }
  .guideImgs .img01 {
    right: 234px;
    bottom: 0;
  }
  .guideImgs .name01,
  .guideImgs .name02,
  .guideImgs .name03 {
    z-index: 1;
  }
  .guideImgs .name01 {
    bottom: 90px;
    right: -60px;
  }
  .guideImgs .name02{
    left: -70px;
    bottom: 90px;
  }
  .guideImgs .name03 {
    right: 224px;
    bottom: 160px;
  }

  .section01 {
    width: 100%;
    border: 3px solid #0d2161;
    margin: 0 auto;
    background: #fff;
    color: #082379;
    padding: 25px;
    position: absolute;
    border-radius: 25px;
    top: 400px;
    font-size: 22px;
    box-sizing: border-box;
  }
  .location {
    display: flex;
    align-items: flex-start;
    position: relative;
  }
  .location dl {
    width: 340px;
    line-height: 140%;
  }
  .location dt {
    margin-bottom: 10px;
    padding-left: 15px;
    position: relative;
    font-weight: 600;
  }
  .location dt::before{
    content: "";
    display: block;
    width: 6px;
    height: 20px;
    background: #0d2161;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translate(0, -50%);
  }
  .right {
    margin-left: 20px;
    flex: 1;
  }
  .btMap {
    font-size: 17px;
    color: #fff;
    background: #082379;
    height: 102px;
    width: 112px;
    display: flex;
    position: absolute;
    right: 0;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    line-height: 150%;
  }
  .tel {
    padding: 11px 0 9px;
    border-top: 3px solid #082379;
    border-bottom: 3px solid #082379;
    margin-top: 12px;
    text-align: center;
  }




  

/* sp */
@media only screen and (max-width: 950px) {



  .guide::before {
    background-size: 100% auto;
    width: 201vw;
    height: 34vw;
    top: -10vw;    
  }
  .guide_inner {
    max-width: 100%;
    height: 214vw;
  }

  .ttl{
    top: -35vw;
  }
  .ttl img{
    width: 90vw;
  }
  .text {
    top: -9vw;
  }
  .text img {
    width: 64vw;
  }
  .guideImgs {
    top: 97vw;
  }
  .guideImgs .img02 {
    left: -36px;
    bottom: 3vw;
    width: 49.8vw;
  }
  .guideImgs .img03 {
    right: -50px;
    bottom: 9vw;
    width: 64vw;
  }
  .guideImgs .img01 {
    right: 25vw;
    bottom: 5vw;
    width: 60vw;
  }
  .guideImgs .name01,
  .guideImgs .name02,
  .guideImgs .name03 {
    width: 24vw;
  }

  .guideImgs .name01 {
    bottom: 27vw;
    right: 2vw;
  }
  .guideImgs .name02{
    left: 2vw;
    bottom: 27vw;
  }
  .guideImgs .name03 {
    right: 40vw;
    bottom: 21vw;
  }
  
  .section01 {
    width: 94vw;
    border: 0.6vw solid #0d2161;
    padding: 5vw;
    border-radius: 5vw;
    top: 79vw;
    font-size: 5vw;
    left: 50%;
    transform: translate(-50%, 0);
  }
  .location {
    display: block;
  }
  .location > img {
    width: 100%;
  }
  .location dl {
    width: 100%;
  }
  .location dt {
    margin-bottom: 1vw;
    padding-left: 3vw;
  }
  .location dt::before{
    width: 1.5vw;
    height: 5vw;
  }
  .right {
    margin-left: 0;
  }
  .btMap {
    font-size: 4vw;
    height: 13vw;
    width: 100%;
    position: relative;
    margin-top: 2vw;
  }
  .btMap br {
    display: none;
  }
  .tel {
    padding: 3.2vw 0 2vw;
    border-top: 0.6vw solid #082379;
    border-bottom: 0.6vw solid #082379;
    margin-top: 3vw;
  }
  .tel img {
    width: 100%;
  }


}

</style>