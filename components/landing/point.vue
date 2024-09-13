<template>
  <section class="point">
    <div class="point_inner">
      <!-- h1 class="logo"><img src="/images/full_logo_w.svg" width="160" alt="두산위브더제니스 센트럴시티"></h1 -->
      <h1 class="point_ttl">
        <img src="/images/logo.svg" width="400" alt="두산위브더제니스 센트럴시티">
        <img src="/images/landing/point/ttl.png" width="645" alt="당신이 꿈꾸던 주거 공간">
      </h1>
      <div class="subConSet">
        <div class="subCon subCon1">
          <img src="/images/landing/point/img01.png" width="462" alt="">
          <dl>
            <dt><img src="/images/landing/point/sub_ttl01.png" width="401" alt="대구 3호선 학정역 역세권로 4차 순환도로 인접"></dt>
            <dd>학정 역 초역세권에 위치하고,칠곡경대병원 역과 더불어 더블역세권을 자랑합니다. 4차 순환도로와도 가까워 교통이 매우 편리!</dd>
          </dl>
        </div>
        <div class="subCon subCon2">
          <dl>
            <dt><img src="/images/landing/point/sub_ttl02.png" width="450" alt="팔거천 수변 산책로와 자연과 함께하는 힐링 라이프"></dt>
            <dd>가족과 함께 산책하거나 자전거를 타며 건강한 생활을 즐길 수 있습니다. 도시 속에서 자연을 누릴 수 있는 특별한 주거 환경을 경험해 보세요</dd>
          </dl>
          <img src="/images/landing/point/img02.png" width="462" alt="">
        </div>
        <div class="subCon subCon3">
          <img src="/images/landing/point/img03.png" width="462" alt="">
          <dl>
            <dt><img src="/images/landing/point/sub_ttl03.png" width="302" alt="대규모 커뮤니티 시설"></dt>
            <dd>사우나, 피트니스, 실내 골프연습, 키즈카페, 도서관, 독서실, 카페테리아, 휴게라운지 등 다양한 커뮤니티 시설!</dd>
          </dl>
        </div>
        <div class="subCon subCon4">
          <dl>
            <dt><img src="/images/landing/point/sub_ttl04.png" width="420" alt="1,098세대 대단지로 투자 가치와 프리미엄 생활 "></dt>
            <dd>대구의 새로운 랜드마크로 자리잡을 두산위브더제니스 센트럴시티 에서 프리미엄 라이프를 시작하세요!</dd>
          </dl>
          <img src="/images/landing/point/img04.png" width="462" alt="">
        </div>
      </div>
    </div>
  </section>
</template>
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
  width: 840px;
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
</style>