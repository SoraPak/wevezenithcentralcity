<style scoped>
.fall {
  background: url("/images/landing/fall/bg.jpg") repeat-x center top #000f3a;
  background-size: 1485px auto;
  position: relative;
  margin-top: -360px;
}
.gift {
  padding-top: 378px;
  margin-bottom: 30px;
  position: relative;

}
.gift_inner {
  max-width: 840px;
  margin: 0 auto;
  position: relative;
}
.gift_btBg {
  position: absolute;
  width: 100%;
  height: 710px;
  background: url("/images/landing/fall/deco_bt.png") repeat-x center bottom;
  background-size: auto 100%;
  bottom: -230px;
  pointer-events: none;
  z-index: 1;
}
.gift_btBg2 {
  position: absolute;
  width: 100%;
  height: 710px;
  background: url("/images/landing/fall/deco_bt.png") repeat-x -47% bottom;
  background-size: auto 100%;
  bottom: -265px;
  transform: scaleX(-1);
  pointer-events: none;
  z-index: 1;
}
.gift_ttl {
  position: relative;
  width: 700px;
  margin: 0 auto;
}
.gift_ttl > img {
  position: relative;
  z-index: 2;
}
.gift_ttl::before {
  content: "";
  display: block;
  width: 762px;
  height: 482px;
  background: url("/images/landing/fall/deco01.png") no-repeat center center;
  background-size: 100% auto;
  position: absolute;
  left: -580px;
  top: -70px;
}
.gift_ttl::after {
  content: "";
  display: block;
  width: 351px;
  height: 360px;
  background: url("/images/landing/fall/deco02.png") no-repeat center center;
  background-size: 100% auto;
  position: absolute;
  right: -280px;
  top: -160px;
}
.gift_mainText {
  text-align: center;
  position: relative;
  margin-top: 30px;
  z-index: 3;
}
.gift_layout {
  display: flex;
  align-items: start;
  justify-content: center;
  margin-top: 100px;
  position: relative;
}
.gift_layout > img {
  margin-top: -20px;
}
.gift_layout .lft{
  margin-right: 40px;
  margin-top: 95px;
  text-align: center;
}
.gift_text {
  margin-bottom: 20px;
  position: relative;
}
.gift_text::before {
  content: "";
  display: block;
  width: 269px;
  height: 212px;
  background: url("/images/landing/fall/text02_no.png") no-repeat center center;
  background-size: 100% auto;
  position: absolute;
  right: -110px;
  bottom: 145px;
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
  margin-top: 100px;
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
  width: 274px;
  height: 228px;
  background: url("/images/landing/fall/text_no.png") no-repeat center center;
  background-size: 100% auto;
  position: absolute;
  left: -180px;
  bottom: 50px;
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
  margin-top: 40px;
}
.gift_layout3 .lft {
  margin-right: -150px;
  position: relative;
  z-index: 3;
}
.gift_layout3 .right{
  margin-top: -100px;
  margin-right: -50px;
  position: relative;
}
.gift_layout3 .right::after {
  content: "";
  display: block;
  width: 1000px;
  height: 1000px;
  background: url("/images/landing/fall/layout3_bg.png") no-repeat center center;
  background-size: 100% auto;
  position: absolute;
  top: -290px;
  left: -290px;
  mix-blend-mode: plus-lighter;
  opacity: 60%;
  animation: rotateInfinite 70s linear infinite;
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
  .fall {
    background-size: 329vw auto;
    background-position: -60vw top;
    margin-top: -88vw;
  }
  .gift {
    padding-top: 70vw;
    margin-bottom: 3vw;
    position: relative;
  }
  .gift_btBg {
    height: 160vw;
    bottom: -45vw;
  }
  .gift_btBg2 {
    display: none;
  }
  .gift_ttl {
    width: 95vw;
  }
  .gift_ttl > img {
    width: 100%;
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
    margin-top: 4vw;
  }
  .gift_mainText > img {
    width: 98vw;
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
    width: 34vw;
    height: 28vw;
    right: 2vw;
    bottom: 80vw;
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
    margin-top: 1vw;
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
    width: 34vw;
    height: 28vw;
    right: 8vw;
    left: auto;
    bottom: 55vw
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
    margin-top: 3vw;
    position: relative;
  }
  .gift_layout3 .lft {
    margin-right: 0;
  }
  .gift_layout3 .right{
    margin-top: 0;
    margin-right: 0;
    position: absolute;
    left: 0;
    right: 0;
    top: -71vw;
    width: 100%;
  }
  .gift_layout3 .right > img {
    width: 75vw;
    left: 11vw;
  }
  .gift_text03 {
    text-align: center;
    margin-top: 74vw;
  }
  .gift_text03 > img {
    width: 80vw;
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
  
  <div class="fall">
    
    <section class="gift">
      <div class="gift_inner">
        <h1 id="fall_gift" class="gift_ttl">
          <img src="/images/landing/fall/ttl.png" width="700" alt="11월의 맛!! 박소라 과장이 국수세트 X 스타벅스 기프트카드 드려요!">
        </h1>
        <p class="gift_mainText">
          <img src="/images/landing/fall/main_text.png" width="766" alt="박소라 과장을 찾아주신 고객님들께 감사의 마음을 담아 준비한 특별 선물! 선물쿠폰 다운 받고 모델 하우스 방문 하실 때 안내카운터와 박소라 과장에게 제시 해 주세요.">
        </p>
        <div class="gift_layout2">
          <img src="/images/landing/fall/starbucks_gift.png" width="477" alt="">
          <div class="right">
            <p class="gift_text2">
              <img src="/images/landing/fall/text.png" width="461" alt="박소라 과장과 유닛 투어 후 신현주 팀장과 상담까지 완료하면 스타벅스 기프트카드 증정">
            </p>
            <a @click="showPopup('coupon2')" class="couponBtn2">
              <img src="/images/landing/fall/btn02.png" width="390" alt="쿠폰 다운로드">
            </a>
          </div>
        </div>
        <div class="gift_layout">
          <div class="lft">
            <p class="gift_text">
              <img src="/images/landing/fall/text02.png" width="378" alt="직계 가족 1인 이상 동반하여 방문하신 분께 국수세트 증정!">
            </p>
            <a @click="showPopup('coupon')" class="couponBtn">
              <img src="/images/landing/fall/btn.png" width="381" alt="쿠폰 다운로드">
            </a>
          </div>
          <img src="/images/landing/fall/img.png" width="412" alt="">
        </div>
        
        <h1 id="golden_key" class="gift_ttl02">
          <img loading="lazy" src="/images/landing/fall/ttl02.png" width="510" alt="계약하면 황금열쇠 드려요!">
        </h1>
        <div class="gift_layout3">
          <div class="lft">
            <p class="gift_text03">
              <img loading="lazy" src="/images/landing/fall/text03.png" width="585" alt=" 11월 23일 오후 2시부터 모델하우스에서 박소라 과장을 찾아 계약을 완료하시면 황금열쇠를 선물로 드립니다!">
            </p>
          </div>
          <div class="right"><img loading="lazy" src="/images/landing/fall/golden_key.png" width="459" alt=""></div>
        </div>
        <p class="gift_text03_2">
          <img class="pc" loading="lazy" src="/images/landing/fall/text03_2.png" width="100%" alt="">
          <img class="sp" loading="lazy" src="/images/landing/fall/text03_2_sp.png" alt="준비물: 인감도장 ,인감증명서 1통(용도 아파트계약용) ,주민등록등본 1통 ,신분증">
        </p>
        <ul class="gift_ul">
          <li>
            ※ 출발전 예약 필수(당일 예약 가능)
          </li>
          <li>
            ※ 경품은 방문 한 팀당 각각 한 개씩 제공
          </li>
          <li>
            ※ 사은품은 수량한정으로 소진 시 다른 상품으로 대체 될 수 있음<br>(스타벅스 기프트카드: 12월 15일까지 선착순 / 황금열쇠: 11월 30일까지 선착순)
          </li>
        </ul>
      </div>
      <div class="gift_btBg"></div>
      <div class="gift_btBg2"></div>
    </section>
    <F_guide />
  </div>

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
import F_guide from '~/components/landing/f_guide.vue';

const coupon = ref(null);
const coupon2 = ref(null);

const couponImageSrc = ref('');
const couponImageSrc2 = ref('');

// URL에서 cfrom 파라미터를 확인하고 이미지명을 설정하는 함수
const setCouponImages = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const cfromParam = urlParams.get('cfrom') || 'web'; // cfrom이 없으면 기본값 'web'

  // 이미지 경로 설정
  couponImageSrc.value = `/images/landing/fall/coupons/noodle/2412-01-${cfromParam}.png`;
  couponImageSrc2.value = `/images/landing/fall/coupons/starbucks/2412-01-${cfromParam}.png`;
};

// 이미지 로드 실패 시 기본값으로 복구
const handleImageError = (imageRef) => {
  if (imageRef === 'couponImageSrc') {
    couponImageSrc.value = '/images/landing/fall/coupons/noodle/2412-01-web.png';
  } else if (imageRef === 'couponImageSrc2') {
    couponImageSrc2.value = '/images/landing/fall/coupons/starbucks/2412-01-web.png';
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