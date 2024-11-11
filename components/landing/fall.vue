<style scoped>
.fall {
  background: url("/images/landing/fall/bg.jpg") repeat-x center top #102274;
  background-size: 1554px auto;
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
  bottom: -223px;
  pointer-events: none;
  z-index: 1;
}
.gift_btBg2 {
  position: absolute;
  width: 100%;
  height: 710px;
  background: url("/images/landing/fall/deco_bt.png") repeat-x -47% bottom;
  background-size: auto 100%;
  bottom: -293px;
  transform: scaleX(-1);
  pointer-events: none;
  z-index: 1;
}
.gift_ttl {
  position: relative;
  width: 610px;
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
  right: -370px;
  top: -160px;
}
.gift_layout {
  display: flex;
  align-items: start;
  justify-content: center;
  margin-top: 50px;
  position: relative;
}
.gift_layout > img {
  margin-top: -20px;
}
.gift_layout .lft{
  margin-right: 40px;
  text-align: center;
}
.gift_text {
  margin-bottom: 20px;
}
.couponBtn {
  cursor: pointer;
}
.gift_layout2 {
  display: flex;
  align-items: start;
  justify-content: center;
  margin-top: 35px;
  position: relative;
  z-index: 2;
}
.gift_layout2_img {
  width: 270px;
  padding: 6px;
  background: #fff;
  border-radius: 50%;
}
.gift_layout2_img > img {
  display: block;
}
.gift_layout2 .right{
  margin-left: 40px;
  text-align: center;
}
.gift_text2 {
  margin-top: -30px;
  margin-bottom: 20px;
}
.couponBtn2 {
  cursor: pointer;
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
    background-size: 337vw auto;
    background-position: -80vw top;
    margin-top: -88vw;
  }
  .gift {
    padding-top: 70vw;
    margin-bottom: 3vw;
    position: relative;
  }
  .gift_btBg {
    height: 100vw;
    bottom: -37vw;
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
  .gift_layout {
    display: block;
    margin-top: 2vw;
    position: relative;
  }
  .gift_layout > img {
    width: 65vw;
    display: block;
    margin: 0 auto;
  }
  .gift_layout .lft{
    margin-right: 0;
  }
  .gift_text {
    margin-bottom: 2vw;
  }
  .gift_text > img {
    width: 65vw;
  }
  .couponBtn {
    position: absolute;
    left: 0;
    right: 0;
    bottom: -14vw;
  }
  .couponBtn > img {
    width: 70vw;
  }

  .gift_layout2 {
    display: block;
    margin-top: 18vw;
    position: relative;
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
  .couponBtn {
    position: absolute;
  }
  .gift_text2 {
    margin-top: 0;
    margin-bottom: 60vw;
  }
  .gift_text2 > img {
    width: 70vw;
  }
  .couponBtn2 > img {
    width: 70vw;
  }

  .gift_ul {
    font-size: 3.9vw;
    text-align: center;
    line-height: 160%;
    margin-top: 1vw;
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
}
</style>
<template>
  
  <div class="fall">
    
    <section id="fall_gift" class="gift">
      <div class="gift_inner">
        <h1 class="gift_ttl">
          <img loading="lazy" src="/images/landing/fall/ttl.png" width="700" alt="11월의 맛!! 박소라 과장이 국수세트 X 스타벅스 쿠폰 드려요!">
        </h1>
        <div class="gift_layout">
          <div class="lft">
            <p class="gift_text">
              <img loading="lazy" src="/images/landing/fall/text.png" width="425" alt="쿠폰 다운받고 모델하우스에 오셔서 박소라 과장을 찾아주세요! 박소라 과장과 함께하는 특별한 만남으로 국수 선물 세트까지 챙겨가세요">
            </p>
            <a @click="showPopup('coupon')" class="couponBtn">
              <img loading="lazy" src="/images/landing/fall/btn.png" width="381" alt="쿠폰 다운로드">
            </a>
          </div>
          <img loading="lazy" src="/images/landing/fall/img.png" width="412" alt="">
        </div>
        <div class="gift_layout2">
          <div class="gift_layout2_img"><img loading="lazy" src="/images/landing/fall/logo_starbucks.svg" width="100%" alt=""></div>
          <div class="right">
            <p class="gift_text2">
              <img loading="lazy" src="/images/landing/fall/text02.png" width="483" alt="지금 오시면 스타벅스 쿠폰까지 추가 증정! 따뜻한 선물과 함께 특별한 기회를 놓치지 마세요!!">
            </p>
            <a @click="showPopup('coupon2')" class="couponBtn2">
              <img loading="lazy" src="/images/landing/fall/btn02.png" width="390" alt="쿠폰 다운로드">
            </a>
          </div>
        </div>
        <ul class="gift_ul">
          <li>
            ※ 출발전 예약 필수(당일 예약 가능)
          </li>
          <li>
            ※ 경품은 방문 한 팀당 각각 한 개씩 제공
          </li>
          <li>
            ※ 모델하우스 유닛 투어와 팀장의 상담 완료 시
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
  <img :src="couponImageSrc" class="couponPopup_img" loading="lazy" alt="국수세트쿠폰">
</Popup>
<Popup class="couponPopup" ref="coupon2">
  <p class="couponPopup_comment">아래 쿠폰을 저장 해 주세요</p>
  <img :src="couponImageSrc2" class="couponPopup_img" loading="lazy" alt="스타벅스쿠폰">
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
  couponImageSrc.value = `/images/landing/fall/coupons/noodle/2411-03-${cfromParam}.png`;
  couponImageSrc2.value = `/images/landing/fall/coupons/starbucks/2411-03-${cfromParam}.png`;
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