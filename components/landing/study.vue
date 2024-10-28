<template>
  <section id="study" class="study">
    <div class="bg" :class="{ 'video-loaded': isVideoLoaded }">
      <img src="/images/landing/study/bg_space.png" width="100%" alt="" />
      <video
        ref="bgVideo"
        autoplay
        loop
        muted
        playsinline
        preload="auto"
        class="bg-video"
        @loadeddata="handleVideoLoad"
      >
        <source src="/images/landing/study/bg.mp4" type="video/mp4" />
      </video>
    </div>
    <div class="flag">
      <h1 class="ttls">
        <img class="ttl01" loading="lazy" src="/images/logo.svg" width="384" alt="두산위브더제니스 센트럴시티">
        <img class="ttl02" loading="lazy" src="/images/landing/study/ttl.png" width="624" alt="칠곡최초 교육 특화 아파트">
      </h1>
      <div class="medals">
        <img loading="lazy" src="/images/landing/study/medal.png" width="309" alt="">
      </div>
      <p class="text01">
        <img loading="lazy" src="/images/landing/study/text01.png" width="443" alt="">
        <img loading="lazy" src="/images/landing/study/jongro_logo.svg" width="437" alt="">
      </p>
      <dl class="event">
        <dt>종로엠스쿨 인적성 검사 실시</dt>
        <dd class="smr">
          <img loading="lazy" src="/images/landing/study/jongro.png" width="350" alt="">
          주말에 모델하우스에 방문하고 18만원 상당의 인적성 검사 받자!
        </dd>
        <dd><span class="subTtl">일시</span>24년 11월 2(토) ~ 3(일) <br><em>주말 단 이틀!</em></dd>
        <dd><span class="subTtl">대상</span>모델하우스 방문 고객 <br>(성별 연령 제한 없음)</dd>
        <dd><span class="subTtl">위치</span>두산위브더제니스 센트럴시티 <br>모델하우스</dd>
        <dd class="call">
          <span class="subTtl">방문예약</span>
          <a href="tel:1555-1924" target="_blank">
            <em><span>15</span>55-19<span>24</span></em>
          </a><br>
          <span class="subText">(<strong>일로이사</strong> 오소!)</span>
        </dd>
        <dd class="comment">
          ※ 모델하우스는 예약, 담당자 지정제로 운영되고 있습니다. 카운터에서 <em>박소라</em> 과장을 찾아주세요!
        </dd>
      </dl>
    </div>
    <div class="box">
      <div class="box_inner">
        <img class="img01" loading="lazy" src="/images/landing/study/img01.png" width="747" alt="">
        <p class="box_text01">
          <img loading="lazy" src="/images/landing/study/text02.png" width="137" alt="유・초・중・고">
          <img loading="lazy" src="/images/landing/study/text03.png" width="274" alt="입주민 수강료">
          <img loading="lazy" src="/images/landing/study/text04.png" width="242" alt="2년간">
          <img loading="lazy" src="/images/landing/study/text05.png" width="331" alt="50% 지원">
          <img loading="lazy" src="/images/landing/study/text06.png" width="186" alt="(자녀 수 무제한)">
        </p>
        <p class="box_text02">
          <img loading="lazy" src="/images/landing/study/text07.png" width="250" alt="두 과목 두 자녀 수강 시, 2년 간 1,440만 원 혜택!!">
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const isVideoLoaded = ref(false);

function handleVideoLoad() {
  isVideoLoaded.value = true;
}

onMounted(() => {
  const videoElement = document.querySelector('.bg-video');
  if (videoElement && videoElement.readyState >= 3) {
    isVideoLoaded.value = true;
  }
});
</script>




<style scoped>
.study {
  background-color:#082379;
  color: #fff;
  position: relative;
}
.study::before {
  content: "";
  display: block;
  background-image: url("/images/landing/study/flagpole.png"), url("/images/landing/study/flagpole_right.png");
  background-size: auto 100%, 100% 100%;
  background-repeat: no-repeat, no-repeat;
  background-position: left center, 1234px center;
  height: 76px;
  width: 100%;
  position: absolute;
  left: 0;
  top: -40px;
  right: 0;
  z-index: 5;
}
.bg {
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
}
.bg > img {
  position: relative;
  z-index: 3;
}
.bg-video {
  position: absolute;
  width: 100%;
  height: auto;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  mix-blend-mode: hard-light;
  opacity: 45%;
}
.bg::after {
  content: "";
  display: block;
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url("/images/landing/study/bg.jpg") no-repeat center top;
  background-size: 100% auto;
  mix-blend-mode: hard-light;
  opacity: 45%;
}
.bg.video-loaded::after {
  display: none;
}
.flag {
  background: url("/images/landing/study/bg01_bd.png") repeat-y center top;
  background-size: 100% auto;
  width: 878px;
  margin: 0 auto;
  position: relative;
  z-index: 4;
  padding-bottom: 60px;
}
.flag::after {
  content: "";
  display: block;
  width: 878px;
  height: 219px;
  bottom: -219px;
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  background: url("/images/landing/study/bg01_bt.png") no-repeat center top;
  background-size: 100% auto;
}
.ttls {
  text-align: center;
  padding: 90px 0 40px;
}
.ttl01 {
  background: #fff;
  border-radius: 5px;
  margin-bottom: 25px;
}
.medals {
  width: 568px;
  height: 376px;
  background: url("/images/landing/study/bay.png") no-repeat center center;
  background-size: 100% auto;
  margin: 0 auto;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}
.medals img {
  margin-bottom: 20px
}
.text01 {
  padding-top: 75px;
  padding-bottom: 30px;
  text-align: center;
}
.text01 > img:first-child {
  margin-bottom: 24px;
}
.event {
  width: 500px;
  background: #fff;
  color: #01114f;
  margin: 0 auto;
  border-radius: 10px;
  padding: 20px;
  border: 5px solid #db1983;
  font-size: 19px;
  line-height: 160%;
}
.event dt {
  background: #db1983;
  color: #fff;
  padding: 6px 12px;
  border-radius: 10px;
  margin-bottom: 10px;
  text-align: center;
}
.event dd {
  margin-bottom: 10px;
  margin-left: 3.2em;
  text-indent: -3.2em;
}
.event dd br {
  display: none;
}
.event dd:last-child {
  margin-bottom: 0;
}
.event em {
  position: relative;
  font-style: normal;
}
.event em::before {
  content: "";
  display: block;
  position: absolute;
  height: 10px;
  width: 100%;
  bottom: -3px;
  right: 0;
  background: #ffd84473;
  mix-blend-mode: darken;
}
.event .smr {
  margin-left: 0;
  text-indent: 0;
  font-size: 21px;
  font-weight: bold;
  word-break: keep-all;
  padding: 0 30px;
  text-align: center;
  color: #db1983;
}
.event .smr > img {
  display: block;
  margin: 20px auto 8px;
}
.event .call {
  margin-left: 4.7em;
  text-indent: -4.7em;
}
.event .call a {
  color: inherit;
  pointer-events: none;
}
.event .call em{
  font-size: 40px;
  font-weight: bold;
}
.event .call em:before {
  bottom: 3px;
}
.event .call em span {
  color: #db1983;
}
.event .call .subText {
  padding-left: 10px;
  font-size: 80%;
}
.event .call .subText strong {
  color: #db1983;
  
}
.event .comment {
  font-size: 80%;
  margin-left: 1.5em;
  text-indent: -1.5em;
  line-height: 150%;
}
.event .comment em{
  color: #db1983;
  font-weight: bold;
}
.subTtl {
  padding: 3px 7px;
  border-radius: 8px;
  border: 2px solid #01114f;
  font-weight: bold;
  font-size: 90%;
  margin-right: 10px;
}
.box {
  background: #b0bbe2;
  color: #01114f;
  position: relative;
  padding-bottom: 41px;
  max-width: 1344px;
  margin: 120px auto 0;
}
.box::after {
  content: "";
  display: block;
  width: 100%;
  max-width: 1344px;
  height: 395px;
  background: url("/images/landing/study/bg02.png") no-repeat center bottom;
  background-size: 100% auto;
  position: absolute;
  top: -395px;
}
.box_inner {
  max-width: 840px;
  margin: 0 auto;
  position: relative;
}
.img01 {
  position: relative;
  z-index: 4;
  margin-left: -110px;
  margin-top: 20px;
  margin-bottom: 20px;
  transform: rotate(2deg);
}
.box_text01 {
  width: 439px;
  position: absolute;
  right: 33px;
  top: 0;
  z-index: 4;
}
.box_text01 > img:nth-child(1) {
  position: absolute;
  top: -15px;
  left: 0;
}
.box_text01 > img:nth-child(2) {
  position: absolute;
  top: 25px;
  left: 0;
}
.box_text01 > img:nth-child(3) {
  position: absolute;
  top: 81px;
  left: 150px;
}
.box_text01 > img:nth-child(4) {
  position: absolute;
  top: 188px;
  right: -40px;
}
.box_text01 > img:nth-child(5) {
  position: absolute;
  top: 282px;
  right: -50px;
}
.box_text02 {
  position: absolute;
  right: -10px;
  top: 334px;
}

/* sp */
@media only screen and (max-width: 950px) {
  .study::before {
    height: 12vw;
    top: -7vw;
    left: -14vw;
    width: 130vw;
  }
  .flag {
    width: 90vw;
    padding-bottom: 4vw;
  }
  .flag::after {
    width: 90vw;
    height: 25vw;
    bottom: -25vw;
  }

  .bg {
    height: 170vw;
  }
  .bg > img {
    position: absolute;
    bottom: 0;
    width: 100%;
  }
  .bg-video {
    object-fit: cover;
    height: 170vw;
  }
  .bg::after {
    background-size: cover;
  }
  .ttls {
    padding: 9vw 0 4vw;
  }
  .ttl01 {
    width: 43vw;
    margin-bottom: 3vw;
  }
  .ttl02 {
    width: 67vw;
  }
  .medals {
    width: 62vw;
    height: 44vw;
  }
  .medals img {
    width: 32vw;
  }
  .text01 {
    padding-top: 6vw;
    padding-bottom: 4vw;
  }
  .text01 > img:first-child {
    width: 48vw;
    margin-bottom: 2vw;
  }
  .text01 > img:last-child {
    width: 48vw;
  }
  .event {
    width: 63vw;
    border: .8vw solid #db1983;
    padding: 3vw;
    border-radius: 3vw;
    font-size: 3.9vw;
    line-height: 140%;
  }
  .subTtl {
    border: .5vw solid #01114f;
    border-radius: 1.5vw;
    padding: .6vw 1.5vw;
  }
  .event dt {
    border-radius: 2vw;
  }
  .event dd br {
    display: inline-block;
  }
  .event em::before {
    height: 2vw;
    bottom: -.5vw;
  }
  .event .smr {
    padding: 0;
    font-size: 4.3vw;
  }
  .event .smr img {
    width: 90%;
  }
  .event .call a {
    pointer-events: auto;
  }
  .event .call em {
    font-size: 8vw;
  }
  .event .call em:before {
    bottom: 1vw;
  }
  .box {
    padding-bottom: 10.5vw;
    margin-top: 36vw;
  }
  .box::after {
    background: url("/images/landing/study/bg02_sp.png") no-repeat center bottom;
    background-size: 100% auto;
    height: 56vw;
    top: -56vw;
    z-index: 3;
  }
  .img01 {
    width: 98vw;
    margin-left: -25vw;
    margin-top: -23vw;
    margin-bottom: -11vw;
  }
  .box_text01 {
    width: 50vw;
    right: 3vw;
    top: -20vw;
  }
  .box_text01 > img:nth-child(1) {
    width: 17vw;
    left: 2vw;
    top: -3.2vw;
  }
  .box_text01 > img:nth-child(2) {
    width: 29vw;
    top: 2vw;
    left: 7vw;
  }
  .box_text01 > img:nth-child(3) {
    width: 25vw;
    top: 8vw;
    left: 13vw;
  }
  .box_text01 > img:nth-child(4) {
    width: 36vw;
    top: 20vw;
    left: 13vw;
  }
  .box_text01 > img:nth-child(5) {
    width: 24vw;
    top: 31vw;
    right: 0;
  }
  .box_text02 {
    top: 18vw;
    right: 2vw;
  }
  .box_text02 > img {
    width: 33vw;
  }
  
}
</style>