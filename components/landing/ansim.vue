<template>
  <section class="ansim">
    <div class="ansim_inner">
      <div class="bg"><span></span><span></span><span></span></div>
      <h1 class="ttl"><img src="/images/landing/ansim/ttl.png" width="571" alt="할인 분양 걱정 NO! 후계약자와 동일한 혜택 보장!"></h1>
      <p class="text01"><img src="/images/landing/ansim/text01.png" width="600" alt="지금 바로 프리미엄 동호수 선택하세요"></p>
      <img class="img01" src="/images/landing/ansim/img01.png" width="496" alt="">
      <img class="spImg01" src="/images/landing/ansim/sp_img01.png" width="363" alt="">
      <dl class="section01">
        <dt><img src="/images/landing/ansim/sub_ttl.png" width="444" alt="계약조건 안심 보장제 실시!"></dt>
        <dd>분양정책 등의 변경으로 최초 공급계약체결 당시의 
        조건 대비 유리하게 변경될경우, 기존계약자에 대하여 
        변경된 계약조건으로 소급하여 혜택을 부여하는제도 
        </dd>
      </dl>
    </div>
  </section>
</template>

<style scoped>
  .ansim {
    background: #000f3a;
    color: #fff;
    position: relative;
  }
  .ansim_inner {
    max-width: 840px;
    margin: 0 auto;
    position: relative;
    height: 490px;
  }
  .bg {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
  }
  .bg span:nth-child(1),
  .bg span:nth-child(2),
  .bg span:nth-child(3) {
    display: block;
    position: absolute;
  }
  .bg span:nth-child(1) {
    top: -440px;
    right: -490px;
    width: 577px;
    height: 518px;
    background: url("/images/landing/ansim/bg01.png") no-repeat center center;
    background-size: 100% auto;
  }

  .bg span:nth-child(2) {
    bottom: 0;
    left: -420px;
    width: 594px;
    height: 594px;
    background: url("/images/landing/ansim/bg02.png") no-repeat center center;
    background-size: 100% auto;
  }

  .bg span:nth-child(3) {
    bottom: -390px;
    right: -900px;
    width: 872px;
    height: 621px;
    background: url("/images/landing/ansim/bg03.png") no-repeat center center;
    background-size: 100% auto;
  }


  .ttl, .text01, .img01, .spImg01 {
    position: absolute;
    z-index: 2;
  }
  .ttl {
    top: -520px;
  }
  .img01 {
    right: -100px;
    top: -597px;
  }
  .spImg01 {
    display: none;
  }
  .text01 {
    left: -57px;
    top: -365px;
  }
  .section01 {
    width: 622px;
    margin: 0 auto;
    margin-top: -170px;
    color: #606563;
    background: #fff;
    padding: 33px;
    border-radius: 30px;
    text-align: center;
    font-size: 25px;
    line-height: 160%;
    position: relative;
    word-break: keep-all;
  }





/* sp */
@media only screen and (max-width: 950px) {


  .ansim {

  }
  .ansim_inner {
    max-width: 100%;
    padding-top: 88vw;
    height: auto;
    padding-bottom: 34vw;
  }

  .bg span:nth-child(1) {
    top: -51vw;
    right: -136vw;
    width: 153vw;
    height: 100vw;
  }

  .bg span:nth-child(2) {
    bottom: 0;
    left: -44vw;
    width: 76vw;
    height: 76vw;
    top: 30vw;
  }

  .bg span:nth-child(3) {
    display: none;
  }


  .ttl {
    top: -21vw;
    left: 18vw;
  }
  .ttl img {
    width: 70vw;
  }
  .img01 {
    display: none;
  }
  .spImg01 {
    display: block;
    right: -7vw;
    top: 34vw;
    width: 100vw;
  }
  .text01 {
    left: 50%;
    transform: translate(-50%, 0);
    top: -1vw;
  }
  .text01 img {
    width: 96vw;
  }
  .section01 {
    width: 93vw;
    padding: 4vw;
    font-size: 3.8vw;
    position: relative;
    left: 50%;
    transform: translate(-50%, 0);
    /* top: 90vw; */
    z-index: 2;
    box-sizing: border-box;
    border-radius: 3vw;
    margin: 0;
  }
  .section01 dt img{
    width: 62vw;
  }



}
</style>