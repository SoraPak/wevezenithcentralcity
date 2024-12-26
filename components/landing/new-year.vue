<template>
  
  <section id="giveaway" class="newYear">
    <div class="newYear_bg01"></div>
    <div class="newYear_bg02"></div>
    <div class="newYear_inner">
      <div class="newYear_inner_bg01"></div>
      <div class="newYear_inner_bg02"></div>
      <h1 class="ttl">
        <span class="ttl_cld">
          <img src="/images/landing/new-year/rcl.png" alt="">
          <img src="/images/landing/new-year/gcl.png" alt="">
        </span>
        <span class="ttl_g">
          <img src="/images/landing/new-year/logo.png" alt="두산위브더제니스 센트럴시티">
          <img src="/images/landing/new-year/ttl01.png" alt="신년운세">
          <img src="/images/landing/new-year/ttl02.png" alt="X">
          <img src="/images/landing/new-year/ttl03.png" alt="타로점">
          <img src="/images/landing/new-year/ttl04.png" alt="8만원 상당">
        </span>
        <span class="ttl_bg">
          <img src="/images/landing/new-year/cloud01.png" alt="">
          <img src="/images/landing/new-year/cloud02.png" alt="">
          <img src="/images/landing/new-year/mount.png" alt="">
          <img src="/images/landing/new-year/cloud03.png" alt="">
        </span>
        <span class="ttl_cir">
          <img src="/images/landing/new-year/rcir01.png" alt="">
          <img src="/images/landing/new-year/rcir02.png" alt="">
          <img src="/images/landing/new-year/gcir02.png" alt="">
          <img src="/images/landing/new-year/gcir03.png" alt="">
        </span>
      </h1>
      <p class="comment">
        박소라 과장을 찾아오시면 <br>8만 원 상당의 새해 운세와 타로 점이 무료!<br>
        새해 행운, 지금 모델하우스에서 만나보세요!
      </p>
      <div class="details">
        <dl>
          <dt>기간: </dt>
          <dd>12월 한달 토・일 오후 1~5시</dd>
        </dl>
        <dl>
          <dt>대상: </dt>
          <dd>두산위브더제니스 센트럴시티<br>모델하우스 방문자 (예약필수)</dd>
        </dl>
      </div>
      <p class="comment02">운세만 보고 가셔도 됩니다!!</p>
      <p class="call">
        <img src="/images/landing/new-year/call.png" alt="">
        <span>박소라<small>과장</small></span>
      </p>
      
    </div>
    <div class="newYear_bg03"></div>
  </section>

</template>

<style scoped>
.newYear {
  position: relative;
  min-height: 200px;
}
.newYear::before {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 50%;
  background-color: #5cab8a;
}
.newYear::after {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 50%;
  background-color: #99423c
}
.newYear_bg01, .newYear_bg02 {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  z-index: 2;
}
.newYear_bg03 {
  display: block;
  position: absolute;
  height: 226px;
  width: 100%;
  background: url("/images/landing/community/bg_bottom.png") no-repeat center bottom;
  background-size: auto 100%;
  top: -1px;
  z-index: 2;
  transform: scale(-1);
}
.newYear_bg01 {
  background: url("/images/landing/new-year/bg01.png") no-repeat center center;
  background-size: 100% 100%;
}
.newYear_bg02 {
  background: url("/images/landing/new-year/bg02.png") repeat center center;
  background-size: 960px auto;
  opacity: 0.5%;
}
.newYear_inner {
  max-width: 840px;
  margin: 0 auto;
  position: relative;
  z-index: 3;
  padding-top: 150px;
  padding-bottom: 50px;
}
.newYear_inner_bg01,
.newYear_inner_bg02 {
  position: absolute;
  mix-blend-mode: overlay;
  background-blend-mode: overlay;
  z-index: 2;
}
.newYear_inner_bg01 {
  width: 117px;
  height: 117px;
  background: url("/images/landing/new-year/rcir01.png") no-repeat center center;
  background-size: 100% auto;
  right: -60px;
  top: 480px;
  opacity: .8;
}
.newYear_inner_bg02 {
  width: 117px;
  height: 117px;
  background: url("/images/landing/new-year/gcir01.png") no-repeat center center;
  background-size: 100% auto;
  top: 70px;
  opacity: .7;
}
.ttl {
  width: 474px;
  height: 474px;
  margin: 0 auto;
  position: relative;
}
.ttl::after {
  content: "";
  position: absolute;
  display: block;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: url("/images/landing/new-year/circle_bg.png") no-repeat center center;
  background-size: 100% auto;
  z-index: -1;
}
.ttl_cld {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  z-index: -2;
}
.ttl_cld > img {
  position: absolute;
  height: 15%;
  width: auto;
}
.ttl_cld > img:nth-child(1) {
  right: -50%;
  top: 44%;
}
.ttl_cld > img:nth-child(2) {
  left: -55%;
  top: 66%;
}
.ttl_g {
  position: relative;
  z-index: 3;
}
.ttl_g > img {
  display: block;
  margin: 0 auto;
}
.ttl_g > img:nth-child(1) {
  width: 30%;
  padding-top: 6%;
}
.ttl_g > img:nth-child(2) {
  padding-top: 2.5%;
  width: 71%;
}
.ttl_g > img:nth-child(3) {
  width: 15%;
  margin-top: -6%;
  position: relative;
}
.ttl_g > img:nth-child(4) {
  width: 71%;
  margin-top: -1.5%;
}
.ttl_g > img:nth-child(5) {
  width: 34%;
  position: absolute;
  right: -3%;
  top: 47%;
  z-index: -1;
}

.ttl_bg {
  display: block;
  border: 1px solid #5ba687;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  border-radius: 50%;
  overflow: hidden;
}
.ttl_bg > img {
  position: absolute;
}
.ttl_bg > img:nth-child(1) {
  width: 100%;
  height: auto;
  bottom: 7%;
  left: 4%;
}
.ttl_bg > img:nth-child(2) {
  width: 100%;
  height: auto;
  bottom: 10%;
}
.ttl_bg > img:nth-child(3) {
  width: 130%;
  height: auto;
  left: 50%;
  transform: translateX(-50%);
  bottom: -5%;
}
.ttl_bg > img:nth-child(4) {
  width: 56%;
  height: auto;
  right: 0;
  bottom: 5%;
}
.ttl_cir {
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  mix-blend-mode: overlay;
}
.ttl_cir > img {
  position: absolute;
}
.ttl_cir > img:nth-child(1) {
  width: 26%;
  right: 0;
  top: -1%;
}
.ttl_cir > img:nth-child(2) {
  width: 12%;
  right: -3%;
  bottom: 20%;
  opacity: .7;
}
.ttl_cir > img:nth-child(3) {
  width: 11%;
  left: 6%;
  top: 10%;
}
.ttl_cir > img:nth-child(4) {
  width: 26%;
  left: 1%;
  bottom: 0;
}
.comment {
  font-size: 30px;
  line-height: 140%;
  margin-top: 30px;
  text-align: center;
  color: #deff00;
}
.details {
  display: table;
  margin: 0 auto;
  font-weight: bold;
  font-size: 30px;
  line-height: 140%;
  margin-top: 30px;
}
.details > dl {
  display: table-row;
}
.details dt,
.details dd {
  display: table-cell;
  padding: 5px 0;
}
.comment02 {
  font-size: 40px;
  font-weight: 800;
  color: #001558;
  display: table;
  padding: 15px;
  background-color: #fece00;
  margin: 20px auto;
}
.call {
  display: table;
  position: relative;
  margin: 40px auto;
}
.call > img {
  width: 496px;
  height: auto;
}
.call > span {
  display: table;
  color: #fff;
  background-color: #001558;
  font-weight: 800;
  font-size: 37px;
  line-height: 45px;
  padding: 5px 15px;
  border-radius: 13px;
  position: absolute;
  right: 0;
  bottom: -34px;
}
.call small {
  padding-left: 10px;
}

/* sp */
@media only screen and (max-width: 950px) {
  .newYear_inner {
    padding-top: 34vw;
    padding-bottom: 24vw;
  }
  .newYear_bg01, .newYear_bg02 {
    left: -40vw;
    right: -40vw;
  }
  .newYear_bg03 {
    height: 59vw;
    top: -1vw;
  }
  .newYear_inner_bg01 {
    width: 21vw;
    height: 21vw;
    top: 96vw;
    right: -9vw;
  }
  .newYear_inner_bg02 {
    width: 21vw;
    height: 21vw;
    left: -7vw;
    top: 22vw;
  }
  .ttl {
    width: 76vw;
    height: 76vw;
  }
  .comment {
    font-size: 5.3vw;
    margin-top: 6vw;
  }
  .details {
    font-size: 5vw;
    margin-top: 3vw;
  }
  .comment02 {
    font-size: 7vw;
    padding: 3vw;
    margin: 5vw auto;
  }
  .call {
    margin: 5vw auto;
  }
  .call > img {
    width: 85vw;
  }
  .call > span {
    font-size: 6vw;
    padding: 0vw 3vw;
    bottom: -7vw;
  }
}
</style>

