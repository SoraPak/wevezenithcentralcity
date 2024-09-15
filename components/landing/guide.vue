<template>
  <section class="guide">
    <div class="guide_inner">
      <h1 class="ttl"><img src="/images/landing/guide/ttl01.png" width="648" alt="당신의 프리미엄 라이프를 안내할 분양팀 상담사"></h1>
      <p class="text"><img src="/images/landing/guide/text01.png" width="403" alt="전화번호 단디 보고 오이소~^^"></p>
      <div class="guideImgs">
        <img src="/images/landing/guide/img03.png" width="449" alt="박소라 과장">
        <img src="/images/landing/guide/img02.png" width="361" alt="이지안 과장">
        <img src="/images/landing/guide/img01.png" width="420" alt="신현주 팀장">
      </div>
      <div class="section01">
        <div class="location">
          <img src="/images/landing/guide/map.jpg" width="309" alt="">
          <div class="right">
            <dl>
              <dt>모델하우스</dt>
              <dd>대구광역시 북구 태전동 1213번지<br>(대구과학대 정문 앞 주차장)</dd>
            </dl>
            <a class="btMap" href="https://kko.to/P0aas7dXbe" target="_blank">카카오지도<br>바로가기</a>
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
    width: 840px;
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
  .guideImgs img:nth-child(2) {
    left: -57px;
    bottom: -68px;
  }
  .guideImgs img:nth-child(1) {
    right: -75px;
    bottom: 0;
  }
  .guideImgs img:nth-child(3) {
    right: 234px;
    bottom: 0;
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
  }

</style>