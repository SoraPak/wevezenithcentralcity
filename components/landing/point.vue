<template>
  <section class="point">
    <div class="point_inner">
      <!-- h1 class="logo"><img src="/images/full_logo_w.svg" width="160" alt="두산위브더제니스 센트럴시티"></h1 -->
      <h1 class="point_ttl">
        <img class="fade-in" ref="ttlRef01" src="/images/logo.svg" width="400" alt="두산위브더제니스 센트럴시티">
        <img class="fade-in" ref="ttlRef02" src="/images/landing/point/ttl.png" width="645" alt="당신이 꿈꾸던 주거 공간">
      </h1>
      <div class="subConSet">
        <div class="subCon subCon1">
          <img class="from-left" ref="img01" src="/images/landing/point/img01.jpg" width="462" alt="">
          <dl>
            <dt><img class="from-right" ref="subConSet01" src="/images/landing/point/sub_ttl01.png" height="82" alt="대구 3호선 학정역 역세권로 4차 순환도로 인접"></dt>
            <dd class="fade-in" ref="text01">학정 역 초역세권에 위치하고,칠곡경대병원 역과 더불어 더블역세권을 자랑합니다. 4차 순환도로와도 가까워 교통이 매우 편리!</dd>
          </dl>
        </div>
        <div class="subCon subCon2">
          <dl>
            <dt><img class="from-left" ref="subConSet02" src="/images/landing/point/sub_ttl02.png" height="82" alt="팔거천 수변 산책로와 자연과 함께하는 힐링 라이프"></dt>
            <dd class="fade-in" ref="text02">가족과 함께 산책하거나 자전거를 타며 건강한 생활을 즐길 수 있습니다. 도시 속에서 자연을 누릴 수 있는 특별한 주거 환경을 경험해 보세요</dd>
          </dl>
          <img class="from-right" ref="img02" src="/images/landing/point/img02.jpg" width="462" alt="">
        </div>
        <div class="subCon subCon3">
          <img class="from-left" ref="img03" src="/images/landing/point/img03.jpg" width="462" alt="">
          <dl>
            <dt><img class="from-right" ref="subConSet03" src="/images/landing/point/sub_ttl03.png" height="44" alt="대규모 커뮤니티 시설"></dt>
            <dd class="fade-in" ref="text03">사우나, 피트니스, 실내 골프연습, 키즈카페, 도서관, 독서실, 카페테리아, 휴게라운지 등 다양한 커뮤니티 시설!</dd>
          </dl>
        </div>
        <div class="subCon subCon4">
          <dl>
            <dt><img class="from-left" ref="subConSet04" src="/images/landing/point/sub_ttl04.png" height="82" alt="1,098세대 대단지로 투자 가치와 프리미엄 생활 "></dt>
            <dd class="fade-in" ref="text04">대구의 새로운 랜드마크로 자리잡을 두산위브더제니스 센트럴시티 에서 프리미엄 라이프를 시작하세요!</dd>
          </dl>
          <img class="from-right" ref="img04" src="/images/landing/point/img04.jpg" width="462" alt="">
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { ref } from 'vue';
import { useScrollAnimation } from '~/composables/useScrollAnimation';

const ttlRef01 = ref(null);
const ttlRef02 = ref(null);
const subConSet01 = ref(null);
const subConSet02 = ref(null);
const subConSet03 = ref(null);
const subConSet04 = ref(null);
const img01 = ref(null);
const img02 = ref(null);
const img03 = ref(null);
const img04 = ref(null);
const text01 = ref(null);
const text02 = ref(null);
const text03 = ref(null);
const text04 = ref(null);

// 요소들이 스크롤될 때 애니메이션 적용
useScrollAnimation([ttlRef01, ttlRef02, subConSet01, subConSet02,subConSet03, subConSet04, img01, img02, img03, img04, text01, text02, text03, text04]);
</script>
<style scoped>
.point {
  color: #606563;
  position: relative;
  padding-bottom: 210px;
}
.point::before {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 100%;
  background: url("/images/landing/point/bg_bottom.png") no-repeat center bottom;
}
.point_inner {
  max-width: 840px;
  margin: 0 auto;
  position: relative;

  font-size: 16px;
  line-height: 175%;
}
.point_ttl {
  text-align: center;
  margin-top: 50px;
}
.point_ttl img:last-child {
  margin-top: 10px;
}
.subConSet {
  margin-top: 90px;
  word-break: keep-all;
}
.subCon {
  display: flex;
  align-items: flex-start;
}
.subCon > img {
  margin-top: -40px;
}
.subCon dt {
  margin-top: 15px;
  position: relative;
  z-index: 2;
}
.subCon dd {
  padding: 20px;
  padding-top: 10px;
}
.subCon1 {
  margin-top: 0;
}
.subCon1 dt{
  margin-left: -30px;
  margin-top: -10px;
}
.subCon2 dt{
  margin-right: -36px;
  margin-left: -36px;
}
.subCon3 dt{
  margin-left: -25px;
}
.subCon4 dt{
  margin-left: -22px;
  margin-right: -20px;
}




/* sp */
@media only screen and (max-width: 950px) {
  .point {
    padding-bottom: 10vw;
  }
  .point::before {
    background-size: 102vw auto;
  }
  .point_inner {
    max-width: 100%;
  }
  .point_ttl {
    margin-top: 7vw;
  }
  .point_ttl img:nth-child(1) {
    width: 57vw; 
  }
  .point_ttl img:nth-child(2) {
    width: 85vw;
    margin-top: 1.5vw;
  }
  .subConSet {
    margin-top: 10vw;
  }
  .subCon > img {
    margin-top: -5vw;
    width: 54vw;
  }
  .subCon dt {
    margin-top: 5vw;
  }
  .subCon dt img{
    height: 11.5vw;
  }
  .subCon3 dt img{
    height: 6.1vw;
  }
  .subCon dd {
    display: none;
  }
  .subCon1 dt {
    margin-left: -7vw;
    margin-top: 1vw;
  }
  .subCon2 dt {
    margin-left: -2vw;
    margin-right: -13vw;
  }
  .subCon3 dt {
    margin-left: -3vw;
  }
  .subCon4 dt {
    margin-left: -2vw;
    margin-right: -9vw;
  }



}
</style>