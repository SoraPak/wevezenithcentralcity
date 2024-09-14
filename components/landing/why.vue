<template>
  <section class="why">
    <div class="bgTop"></div>
    <div class="why_inner"> 
      <div class="bg"><span></span><span></span><span></span></div>
      <h1 class="ttl">
        <img class="img01" src="/images/landing/why/ttl01.png" width="513" alt="내집마련 기회, 지금이 적기!">
        <img class="img02" src="/images/landing/why/ttl02.png" width="681" alt="왜 두산위브더제니스 센트럴시티인가?">
      </h1>
      <img class="img01" src="/images/landing/why/img01.png" width="675" alt="">
      <div class="pList">
        <dl>
          <dt>계약금 5%로, 입주 때까지 추가 목돈 無</dt>
          <dd>
            후분양과는 달리 선분양이기 때문에 입주 때까지 자금 준비에<br>
            여유가 있어 부담이 적고, 중도금 무이자 단지로 추가 부담이 없음
          </dd>
        </dl>
        <dl>
          <dt>입주시기(2027년), 대구 부동산 호황 전망</dt>
          <dd>
            최근 인허가 및 착공 물량 급감으로 희소가치가높아져 2~3년뒤<br>
            집값이 오를 수 있고 지역의 준공 후 미분양도 소진 될 전망
          </dd>
        </dl>
        <dl>
          <dt>대구에서 미래 개발비전이 가장 풍부한 곳</dt>
          <dd>
            학정지구단위 계획과 공항프런트 개발 발표, 대구경북신공항 및<br>
            50사단 이전시 수혜가 예상되는 대구의 큰 비전이 모이는 곳
          </dd>
        </dl>
        <dl>
          <dt>희소가치 높은 1,000세대 이상 대단지 프리미엄</dt>
          <dd>
            대단지 아파트는 그규모만큼 풍부한 부대시설과 우수한 상품성 및<br>
            상징성으로 지역 내 시세를 리딩하는 프리미엄 아파트가 된다!!
          </dd>
        </dl>
        <dl>
          <dt>검증된 두산위브더제니스의 브랜드파워</dt>
          <dd>
            대구의 랜드마크이자 대구 상위1%를 위한 최고급 아파트로 인정받는<br>
            브랜드로 향후 칠곡 내에서도 랜드마크의 자부심을 선사할 것이다
          </dd>
        </dl>
      </div>
      
    </div>
  </section>
</template>

<style scoped>

  .why {
    background: #dce2f6;
    color: #000f3a;
    position: relative;
  }
  .why .bgTop {
    background: url("/images/landing/why/bg_top.png") no-repeat left bottom;
    background-size: 100% auto;
    position: absolute;
    width: 2688px;
    height: 735px;
    top: -252px;
  }
  .why .bgTop img {
    width: 100%;
    height: auto;
  }

  .why_inner {
    width: 840px;
    margin: 0 auto;
    position: relative;
    height: 740px;
    padding-top: 210px;
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
    top: 70px;
    right: -490px;
    width: 577px;
    height: 518px;
    background: url("/images/landing/why/bg01.png") no-repeat center center;
    background-size: 100% auto;
  }

  .bg span:nth-child(2) {
    bottom: -290px;
    right: -340px;
    width: 594px;
    height: 594px;
    background: url("/images/landing/why/bg02.png") no-repeat center center;
    background-size: 100% auto;
  }

  .bg span:nth-child(3) {
    bottom: -20px;
    left: -360px;
    width: 529px;
    height: 623px;
    background: url("/images/landing/why/bg03.png") no-repeat center center;
    background-size: 100% auto;
  }

  .ttl {
    position: absolute;
    left: 50%;
    top: -110px;
    transform: translate(-50%, 0);
    width: 682px;
    text-align: center;
  }
  .ttl img{
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0);
  }
  .ttl img:first-child {
    top: 0;
  }
  .ttl img:last-child {
    top: 80px;
  }

  .img01 {
    position: absolute;
    left: -330px;
    top: 90px;
  }
  .pList {
    position: absolute;
    top: 165px;
    left: 330px;
    width: 650px;
  }

  .pList dt{
    font-size: 28px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  .pList dl {
    position: relative;
    margin-top: 25px;
  }
  .pList dl::before {
    position: absolute;
    font-size: 60px;
    font-weight: 600;
    color: #bc9167;
    padding-top: 10px;
    left: -60px;
  }
  .pList dl:nth-child(2),
  .pList dl:nth-child(4) {
    margin-left: 50px;
  }

  .pList dl:nth-child(3) {
    margin-left: 80px;
  }

  .pList dl:nth-child(1)::before {
    content: "1.";
  }
  .pList dl:nth-child(2)::before {
    content: "2.";
  }
  .pList dl:nth-child(3)::before {
    content: "3.";
  }
  .pList dl:nth-child(4)::before {
    content: "4.";
  }
  .pList dl:nth-child(5)::before {
    content: "5.";
  }

</style>