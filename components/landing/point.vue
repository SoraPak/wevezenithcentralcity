<template>
  <section class="point">
    <div class="point_inner">
      <h1 class="point_ttl">
        <img ref="pointTtlRef01" loading="lazy" src="/images/logo.svg" width="400" alt="두산위브더제니스 센트럴시티">
        <img ref="pointTtlRef02" loading="lazy" src="/images/landing/point/ttl.png" width="645" alt="당신이 꿈꾸던 주거 공간">
      </h1>
      <div class="subConSet">
        <div class="subCon subCon1">
          <img loading="lazy" ref="subCon1ImgRef" src="/images/landing/point/img01.jpg" width="462" alt="">
          <dl>
            <dt ref="subCon1DtRef"><img src="/images/landing/point/sub_ttl01.png" height="82" alt="대구 3호선 학정역 역세권로 4차 순환도로 인접"></dt>
            <dd ref="subCon1DdRef">학정 역 초역세권에 위치하고,칠곡경대병원 역과 더불어 더블역세권을 자랑합니다. 4차 순환도로와도 가까워 교통이 매우 편리!</dd>
          </dl>
        </div>
        <div class="subCon subCon2">
          <dl>
            <dt ref="subCon2DtRef"><img src="/images/landing/point/sub_ttl02.png" height="82" alt="팔거천 수변 산책로와 자연과 함께하는 힐링 라이프"></dt>
            <dd ref="subCon2DdRef">가족과 함께 산책하거나 자전거를 타며 건강한 생활을 즐길 수 있습니다. 도시 속에서 자연을 누릴 수 있는 특별한 주거 환경을 경험해 보세요</dd>
          </dl>
          <img loading="lazy" ref="subCon2ImgRef" src="/images/landing/point/img02.jpg" width="462" alt="">
        </div>
        <div class="subCon subCon3">
          <img loading="lazy" ref="subCon3ImgRef" src="/images/landing/point/img03.jpg" width="462" alt="">
          <dl>
            <dt ref="subCon3DtRef"><img src="/images/landing/point/sub_ttl03.png" height="44" alt="대규모 커뮤니티 시설"></dt>
            <dd ref="subCon3DdRef">사우나, 피트니스, 실내 골프연습, 키즈카페, 도서관, 독서실, 카페테리아, 휴게라운지 등 다양한 커뮤니티 시설!</dd>
          </dl>
        </div>
        <div class="subCon subCon4">
          <dl>
            <dt ref="subCon4DtRef"><img src="/images/landing/point/sub_ttl04.png" height="82" alt="1,098세대 대단지로 투자 가치와 프리미엄 생활 "></dt>
            <dd ref="subCon4DdRef">대구의 새로운 랜드마크로 자리잡을 두산위브더제니스 센트럴시티 에서 프리미엄 라이프를 시작하세요!</dd>
          </dl>
          <img loading="lazy" ref="subCon4ImgRef" src="/images/landing/point/img04.jpg" width="462" alt="">
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';

// 요소 레퍼런스
const pointTtlRef01 = ref(null);
const pointTtlRef02 = ref(null);
const subCon1ImgRef = ref(null);
const subCon1DtRef = ref(null);
const subCon1DdRef = ref(null);
const subCon2ImgRef = ref(null);
const subCon2DtRef = ref(null);
const subCon2DdRef = ref(null);
const subCon3ImgRef = ref(null);
const subCon3DtRef = ref(null);
const subCon3DdRef = ref(null);
const subCon4ImgRef = ref(null);
const subCon4DtRef = ref(null);
const subCon4DdRef = ref(null);

onMounted(() => {
  const options = { threshold: 0.1 };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
      }
    });
  }, options);

  observer.observe(pointTtlRef01.value);
  observer.observe(pointTtlRef02.value);
  observer.observe(subCon1ImgRef.value);
  observer.observe(subCon1DtRef.value);
  observer.observe(subCon1DdRef.value);
  observer.observe(subCon2ImgRef.value);
  observer.observe(subCon2DtRef.value);
  observer.observe(subCon2DdRef.value);
  observer.observe(subCon3ImgRef.value);
  observer.observe(subCon3DtRef.value);
  observer.observe(subCon3DdRef.value);
  observer.observe(subCon4ImgRef.value);
  observer.observe(subCon4DtRef.value);
  observer.observe(subCon4DdRef.value);
});
</script>

<style scoped>
/* 애니메이션 전 기본 상태 */
.point_ttl img, .subCon dd, .subCon1 > img, .subCon2 dt, .subCon3 > img, .subCon4 dt, .subCon1 dt, .subCon2 > img, .subCon3 dt, .subCon4 > img {
  opacity: 0;
  transform: translateY(100px); /* 기본 페이드 및 하단에서 올라오는 설정 */
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.subCon1 dt, .subCon2 > img, .subCon3 dt, .subCon4 > img {
  transform: translateX(100px); /* 오른쪽에서 나타남 */
}

.subCon1 > img, .subCon2 dt, .subCon3 > img, .subCon4 dt {
  transform: translateX(-100px); /* 왼쪽에서 나타남 */
}

/* 스크롤 시 애니메이션 */
.point .animate {
  opacity: 1;
  transform: translateY(0) translateX(0); /* 요소가 제자리에 표시됨 */
}


.point {
  background: #fff;
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
  padding-top: 50px;
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
  width: 100%;
  position: relative;
}
.subCon dl {
  flex: 1;
}
.subCon > img {
  margin-top: -40px;
}
.subCon dt {
  margin-top: 15px;
  position: relative;
  z-index: 2;
  flex: 1;
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
    padding-top: 7vw;
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
    width: 0;
    height: 0;
    overflow: hidden;
    visibility: hidden;
  }
  .subCon1 dt {
    margin-left: -7vw;
    margin-top: 1vw;
  }
  .subCon2 dt {
    margin-left: 0;
    margin-right: 0;
    position: absolute;
    left: -2.5vw;

  }
  .subCon3 dt {
    margin-left: -3vw;
  }
  .subCon4 dt {
    margin-left: 0;
    margin-right: 0;
    position: absolute;
    left: -2.5vw;
  }



}
</style>