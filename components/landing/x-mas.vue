<style scoped>
.x-mas {
  
  background-color: #0a4d2a;
  position: relative;
  margin-bottom: -170px;
}
.gift {
  background: url("/images/landing/x-mas/bg.jpg") repeat center center #fff;
  background-size: 600px auto;
  padding-top: 30px;
  position: relative;
  max-width: 2114px;
  margin: 0 auto;
}
.gift_bg1,
.gift_bg2 {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 1466px;
  background: url("/images/landing/x-mas/deco_bg.png") repeat-y center top;
  background-size: 100% auto;
}
.gift_bg1 {
  right: -920px;
}
.gift_bg2 {
  transform: scaleX(-1);
  left: -920px;
}
.gift::before,
.gift::after{
  content: "";
  width: 100vw;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 0;
  right: 0;
  height: 438px;
  background: url("/images/landing/x-mas/bt_bg.png") repeat-x center bottom;
  background-size: auto 100%;
  z-index: 1;
}
.gift::after {
  transform: scaleY(-1) translateX(-50%);
  top: -60px;
  bottom: auto;
}
.gift_inner {
  max-width: 840px;
  margin: 0 auto;
  position: relative;
  padding-bottom: 450px;
}
.gift_ttl {
  position: relative;
}
.gift_ttl > img {
  position: relative;
  z-index: 2;
  left: 50%;
  transform: translateX(-50%);
}
.gift_ttl > img:nth-child(2) {
  margin-top: -70px;
}
.gift_mainText {
  position: relative;
  margin-top: -105px;
  z-index: 3;
}
.gift_mainText > img {
  position: relative;
  left: 50%;
  transform: translateX(-50%);
}
.gift_layout {
  display: flex;
  align-items: start;
  justify-content: center;
  margin-top: 60px;
  position: relative;
  z-index: 3;
}
.gift_layout > img {
  margin-top: -20px;
}
.gift_layout .lft{
  margin-right: 40px;
  margin-top: 0;
  text-align: center;
}
.gift_text {
  margin-bottom: 20px;
  position: relative;
}
.gift_text::before {
  content: "";
  display: block;
  width: 244px;
  height: 335px;
  background: url("/images/landing/x-mas/text02_no.png") no-repeat center center;
  background-size: 100% auto;
  position: absolute;
  right: -630px;
  bottom: 25px;
}
.gift_text > img {
  position: relative;
}
.couponBtn {
  cursor: pointer;
  display: inline-block;
}
.gift_layout2 {
  display: flex;
  align-items: start;
  justify-content: center;
  margin-top: 70px;
  position: relative;
  z-index: 2;
}
.gift_layout2 > img {
  margin-top: -40px;
  margin-left: -100px;
}
/*
.gift_layout2_img {
  width: 270px;
  padding: 6px;
  background: #fff;
  border-radius: 50%;
}
.gift_layout2_img > img {
  display: block;
} */
.gift_layout2 .right{
  text-align: center;
}
.gift_text2 {
  margin-top: -30px;
  margin-bottom: 20px;
  position: relative;
}
.gift_text2::before {
  content: "";
  display: block;
  width: 226px;
  height: 437px;
  background: url("/images/landing/x-mas/text_no.png") no-repeat center center;
  background-size: 100% auto;
  position: absolute;
  left: -500px;
  bottom: 46px;
}

.gift_text2 > img {
  position: relative;
  z-index: 1;
}
.couponBtn2 {
  cursor: pointer;
  display: inline-block;
}
.gift_ttl02 {
  text-align: center;
  margin-top: 30px;
  position: relative;
  z-index: 2;
}
.gift_layout3 {
  display: flex;
  align-items: start;
  margin-top: -100px;
}
.gift_layout3 .lft {
  position: relative;
  margin-left: -97px;

}
.gift_layout3 .lft > img {
  position: relative;
  z-index: 1;
}
.gift_layout3 .lft::after {
  content: "";
  display: block;
  width: 1000px;
  height: 1000px;
  background: url("/images/landing/x-mas/layout3_bg.png") no-repeat center center;
  background-size: 100% auto;
  position: absolute;
  top: -320px;
  left: -200px;
  mix-blend-mode: multiply;
  opacity: 40%;
  animation: rotateInfinite 70s linear infinite;

}
.gift_layout3 .right{
  margin-top: 110px;
  margin-left: -35px;
  position: relative;
}
.gift_text03 {
  position: relative;
}
.gift_text03::before {
  content: "";
  display: block;
  width: 249px;
  height: 477px;
  background: url("/images/landing/x-mas/text03_no.png") no-repeat center center;
  background-size: 100% auto;
  position: absolute;
  left: -598px;
    bottom: 225px;
  z-index: 2;
}
.gift_text03_2 {
  position: relative;
  z-index: 2;
  margin-top: 30px;
}
.gift_text03_2 > img {
 display: block;
 margin: 0 auto; 
}
.gift_text03_2 .sp {
  display: none;
}
 /* 회전 애니메이션 */
 @keyframes rotateInfinite {
    0% {
      transform: rotate(0deg); /* 시작 상태 */
    }
    100% {
      transform: rotate(360deg); /* 한 바퀴 회전 */
    }
  }
.gift_layout3 .right > img {
  position: absolute;
  z-index: 2;
}
.gift_ul {
  font-size: 18px;
  text-align: center;
  line-height: 140%;
  margin-top: 20px;
  color: #040b20;
  position: relative;
  z-index: 2;
  text-shadow: rgb(255, 255, 255) 2px 0px 0px, rgb(255, 255, 255) 1.75517px 0.958851px 0px, rgb(255, 255, 255) 1.0806px 1.68294px 0px, rgb(255, 255, 255) 0.141474px 1.99499px 0px, rgb(255, 255, 255) -0.832294px 1.81859px 0px, rgb(255, 255, 255) -1.60229px 1.19694px 0px, rgb(255, 255, 255) -1.97998px 0.28224px 0px, rgb(255, 255, 255) -1.87291px -0.701566px 0px, rgb(255, 255, 255) -1.30729px -1.5136px 0px, rgb(255, 255, 255) -0.421592px -1.95506px 0px, rgb(255, 255, 255) 0.567324px -1.91785px 0px, rgb(255, 255, 255) 1.41734px -1.41108px 0px, rgb(255, 255, 255) 1.92034px -0.558831px 0px;
}
.gift_ul li {
  margin-top: 5px;
}
.popupCon_body > p {
  margin-bottom: 10px;
}
.coupon {
  height: 80vh;
  display: block;
}
.couponPopup_comment {
  margin-bottom: 10px;
}
.couponPopup_img {
  height: 80vh;
  display: block;
}
  /* sp */
@media only screen and (max-width: 950px) {
  .x-mas {
    background-size: 209vw auto;
    background-position: -60vw top;
    margin-top: -18vw;
    margin-bottom: -9vw;
  }
  .gift {
    padding-top: 0;
    margin-bottom: 17vw;
    position: relative;
  }
  .gift::before,
  .gift::after {
    height: 59vw;
  }
  .gift::after {
    top: -9vw;
  }
  .gift_bg1,
  .gift_bg2 {
    width: 140vw;
  }
  .gift_bg1 {
    right: -104vw;
  }
  .gift_bg2 {
    transform: scaleX(-1);
    left: -104vw;
  }
  .gift_inner {
    padding-bottom: 47vw;
  }
  
  
  .gift_ttl {
    width: 95vw;
  }
  .gift_ttl > img {
    width: 100%;
  }
  .gift_ttl > img:nth-child(1) {
    width: 70vw;
    margin-bottom: 13vw;
  }
  .gift_ttl::before {
    width: 120vw;
    height: 88vw;
    top: -29vw;
    left: -16vw;
  }
  .gift_ttl::after {
    display: none;
  }
  .gift_mainText {
    margin-top: -12vw;
  }
  .gift_mainText > img {
    width: 122vw;
  }
  .gift_layout {
    display: block;
    margin-top: 2vw;
    position: relative;
  }
  .gift_layout > img {
    width: 65vw;
    display: block;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: -63vw;
  }
  .gift_layout .lft{
    margin-right: 0;
    margin-top: 75vw;
  }
  .gift_text {
    margin-bottom: 2vw;
  }
  .gift_text::before {
    width: 28vw;
    height: 38vw;
    right: 2vw;
    bottom: 68vw;
    z-index: 1;
  }
  .gift_text > img {
    width: 58vw;
  }
  .couponBtn {
    position: absolute;
    left: 0;
    right: 0;
    bottom: -22vw;
  }
  .couponBtn > img {
    width: 70vw;
  }

  .gift_layout2 {
    display: block;
    margin-top: -3vw;
    position: relative;
  }
  .gift_layout2 > img {
    width: 76vw;
    display: block;
    margin: 0 auto;
    margin-bottom: 4vw;
  }
  .gift_layout2 .right{
    margin-left: 0;
  }
  .gift_layout2_img {
    position: absolute;
    padding: 1.2vw;
    width: 50vw;
    top: 28vw;
    left: 50%;
    transform: translateX(-50%);
  }
  .gift_text2 {
    margin-top: 0;
    margin-bottom: 3vw;
  }
  .gift_text2::before {
    width: 26vw;
    height: 50vw;
    left: 3vw;
    bottom: 55vw;
    top: -83vw;
  }
  .gift_text2 > img {
    width: 70vw;
  }
  .couponBtn2 > img {
    width: 70vw;
  }

  .gift_ttl02 {
    margin-top: 28vw;
  }
  .gift_ttl02 > img {
    width: 75vw;
  }
  .gift_layout3 {
    display: block;
    margin-top: 23vw;
    position: relative;
  }
  .gift_layout3 .lft {
    margin-right: 0;
  }
  .gift_layout3 .lft > img {
    width: 103vw;
    left: 26vw;
  }
  .gift_layout3 .right{
    margin-top: 0;
    margin-right: 0;
    position: relative;
    left: 0;
    right: 0;
    width: 100vw;
  }
  .gift_layout3 .right > img {
    width: 75vw;
    left: 11vw;
  }
  .gift_text03 {
    text-align: center;
    margin-top: -6vw;
    margin-bottom: -14vw;
    margin-left: 18vw;
    z-index: 1;
  }
  .gift_text03 > img {
    width: 60vw;
  }
  .gift_layout3 .right::after {
    width: 170vw;
    height: 170vw;
    top: -54vw;
    left: -38vw;
  }
  .gift_ul {
    font-size: 3.9vw;
    text-align: center;
    line-height: 160%;
    color: #040b20;
    margin-top: 7vw;
  }
  .gift_ul li {
    margin-top: 1vw;
  }
  
  .couponPopup_comment {
    margin-bottom: 2vw;
  }
  .couponPopup_img {
    width: 100%;
    height: auto;
  }
  .gift_text03_2 {
    margin-top: 2vw;
  }
  .gift_text03_2 .pc {
    display: none;
  }
  .gift_text03_2 .sp {
    display: block;
    width: 90vw;
  }
}
</style>
<template>
  
  <section class="x-mas">
    
    <div class="gift">
      <div class="gift_bg1"></div>
      <div class="gift_bg2"></div>
      <div class="gift_inner">
        <h1 id="x-mas_gift" class="gift_ttl">
          <img src="/images/landing/x-mas/ttl_sub.png"width="756" alt="Happy New year">
          <img src="/images/landing/x-mas/ttl.png" width="1002" alt="박소라 과장이 국수세트 X 스타벅스 기프트카드 드려요!">
        </h1>
        <p class="gift_mainText">
          <img src="/images/landing/x-mas/main_text.png" width="1049" alt="박소라 과장을 찾아주신 고객님들께 감사의 마음을 담아 준비한 특별 선물! 선물쿠폰 다운 받고 모델 하우스 방문 하실 때 안내카운터와 박소라 과장에게 제시 해 주세요.">
        </p>
        <div class="gift_layout2">
          <img src="/images/landing/x-mas/starbucks_gift.png" width="477" alt="">
          <div class="right">
            <p class="gift_text2">
              <img src="/images/landing/x-mas/text.png" width="461" alt="박소라 과장과 유닛 투어 후 신현주 팀장과 상담까지 완료하면 스타벅스 기프트카드 증정">
            </p>
            <a @click="showPopup('coupon2')" class="couponBtn2">
              <img src="/images/landing/x-mas/btn02.png" width="390" alt="쿠폰 다운로드">
            </a>
          </div>
        </div>
        <div class="gift_layout">
          <div class="lft">
            <p class="gift_text">
              <img src="/images/landing/x-mas/text02.png" width="378" alt="직계 가족 1인 이상 동반하여 방문하신 분께 국수세트 증정!">
            </p>
            <a @click="showPopup('coupon')" class="couponBtn">
              <img src="/images/landing/x-mas/btn.png" width="381" alt="쿠폰 다운로드">
            </a>
          </div>
          <img src="/images/landing/x-mas/img.png" width="412" alt="">
        </div>
        
        <div class="gift_layout3">
          <div class="lft">
            <img loading="lazy" src="/images/landing/x-mas/cake.png" width="561" alt="">
          </div>
          <div class="right">
            <p class="gift_text03">
              <img loading="lazy" src="/images/landing/x-mas/text03.png" width="410" alt=" 11월 23일 오후 2시부터 모델하우스에서 박소라 과장을 찾아 계약을 완료하시면 황금열쇠를 선물로 드립니다!">
            </p>
          </div>
        </div>
        <p class="gift_text03_2">
          <img class="pc" loading="lazy" src="/images/landing/x-mas/text03_2.png" width="100%" alt="">
          <img class="sp" loading="lazy" src="/images/landing/x-mas/text03_2_sp.png" alt="준비물: 인감도장 ,인감증명서 1통(용도 아파트계약용) ,주민등록등본 1통 ,신분증">
        </p>
        <ul class="gift_ul">
          <li>
            ※ 출발전 예약 필수(당일 예약 가능)
          </li>
          <li>
            ※ 경품은 방문 한 팀당 각각 한 개씩 제공
          </li>
          <li>
            ※ 사은품은 수량한정으로 소진 시 다른 상품으로 대체 될 수 있음<br>(스타벅스 기프트카드: 12월 15일까지 선착순)
          </li>
        </ul>
      </div>
      <!-- div class="gift_btBg"></div>
      <div class="gift_btBg2"></div -->
      </div>
  </section>

  <!-- 팝업 정의 -->
  <Popup class="couponPopup" ref="coupon">
    <p class="couponPopup_comment">아래 쿠폰을 저장 해 주세요</p>
    <img :src="couponImageSrc" @error="handleImageError('couponImageSrc')" class="couponPopup_img" loading="lazy" alt="국수세트쿠폰">
  </Popup>
  <Popup class="couponPopup" ref="coupon2">
    <p class="couponPopup_comment">아래 쿠폰을 저장 해 주세요</p>
    <img :src="couponImageSrc2" @error="handleImageError('couponImageSrc2')" class="couponPopup_img" loading="lazy" alt="스타벅스쿠폰">
  </Popup>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Popup from '~/components/landing/popup.vue';

const coupon = ref(null);
const coupon2 = ref(null);

const couponImageSrc = ref('');
const couponImageSrc2 = ref('');

// URL에서 cfrom 파라미터를 확인하고 이미지명을 설정하는 함수
const setCouponImages = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const cfromParam = urlParams.get('cfrom') || 'web'; // cfrom이 없으면 기본값 'web'

  // 이미지 경로 설정
  couponImageSrc.value = `/images/landing/x-mas/coupons/noodle/2412-01-${cfromParam}.png`;
  couponImageSrc2.value = `/images/landing/x-mas/coupons/starbucks/2412-01-${cfromParam}.png`;
};

// 이미지 로드 실패 시 기본값으로 복구
const handleImageError = (imageRef) => {
  if (imageRef === 'couponImageSrc') {
    couponImageSrc.value = '/images/landing/x-mas/coupons/noodle/2412-01-web.png';
  } else if (imageRef === 'couponImageSrc2') {
    couponImageSrc2.value = '/images/landing/x-mas/coupons/starbucks/2412-01-web.png';
  }
};

onMounted(() => {
  setCouponImages();
});

const showPopup = (popupId) => {
  if (popupId === 'coupon' && coupon.value) {
    coupon.value.openPopup();
  } else if (popupId === 'coupon2' && coupon2.value) {
    coupon2.value.openPopup();
  }
};
</script>