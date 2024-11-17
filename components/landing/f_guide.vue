<template>
  <section id="guide" class="guide">
    <div class="guide_inner">
      <h1 class="ttl"><img loading="lazy" src="/images/landing/guide/ttl01.png" width="648" alt="당신의 프리미엄 라이프를 안내할 분양팀 상담사"></h1>
      <p class="text" ref="textRef"><img loading="lazy" src="/images/landing/fall/text01.png" height="76" alt="카톡으로 예약 단디 하고 오이소~^^"></p>
      <div class="guideImgs">
        <a @click="showPopup('popup3')">
          <div class="name03" ref="name03Ref">
            <img src="/images/landing/guide/name03.png" width="109" alt="박소라 과장">
          </div>
          <img class="img03" ref="img03Ref" src="/images/landing/guide/img03.png" width="449" alt="">
        </a>
        <a @click="showPopup('popup2')">
          <div class="name02" ref="name02Ref">
            <img src="/images/landing/guide/name02.png" width="109" alt="이서은 과장">
          </div>
          <img class="img02" ref="img02Ref" src="/images/landing/guide/img02.png" width="361" alt="">
        </a>
        <a @click="showPopup('popup1')">
          <div class="name01" ref="name01Ref">
            <img src="/images/landing/guide/name01.png" width="115" alt="신현주 팀장">
          </div>
          <img class="img01" ref="img01Ref" src="/images/landing/guide/img01.png" width="420" alt="">
        </a>
      </div>
      <div class="section01">
        <div class="left">
          <p class="tel"><img loading="lazy" src="/images/landing/guide/img_tel.png" width="410" alt="두산위브더제니스 센트럴시티 전화번호:15551924"></p>
          <p class="telText"><strong>일로 이사</strong> 오소!</p>
          <p class="comment">모델하우스는 <strong>사전예약 및 담당자 지정제</strong>로 운영되고 있습니다(당일예약 가능). 모델하우스 카운터에서 <strong>박소라 과장</strong>을 찾아주세요.<span style="display: inline-block; font-weight: bolder; font-size: 83%; color: #e20000;">그냥 오시면 선물이 제공 안되요ㅠㅠ</span></p>
        </div>
        <ul class="links">
          <li class="kakao"><a href="https://open.kakao.com/me/wevehj" target="_blank">카톡으로<br>모델하우스<br>투어 예약하기</a></li>
          <li class="call"><a href="tel:1555-1924" target="_blank">전화로<br>모델하우스<br>투어 예약하기</a></li>
        </ul>
      </div>

    </div>
  </section>
  <!-- 팝업 정의 -->
  <Popup class="guidePopup  guidePopup1" ref="popup1">
    <div class="main">
      <p class="mainSTtl"><img loading="lazy" src="/images/landing/guide/popupTtl.svg" width="200" alt="고것좀 알고 잡다"></p>
      <h1 class="mainTtl">신현주 <small>팀장</small></h1>
      <img class="weveLogo" loading="lazy" src="/images/logo.svg" width="200" alt="">
      <ul class="contact">
        <li><a href="tel:010-9357-0669">010 9357 0669</a></li>
        <li><a href="mailto:a01093570669@gmail.com?subject=[두산위브더제니스 문의]">a01093570669@gmail.com</a></li>
      </ul>
      <ul class="career">
        <li><i></i>대구과학대학교 부동산학과 졸업</li>
        <li><i></i><strong class="indent">2003</strong> 대구대학교 부동산 자산관리사 수료</li>
        <li><i></i><strong class="indent">2004</strong> 대구대학교 부동산 투자상담사 수료</li>
        <li><i></i><strong class="indent">2009</strong> 부동산 권리 분석사 자격증 취득</li>
        <li><i></i><strong class="indent">2009</strong> 부동산 경매사 자격증 취득</li>
      </ul>
      <img class="mainImg" src="/images/landing/guide/pop01_img01.png" width="700" alt="">
    </div>
    
    <div class="itd">
      <p>안녕하세요, 신현주 팀장입니다.</p>

      <p>저는 1995년 보성명가타운을 시작으로 <strong>약 30년간 전국의 다양한 분양 시장에서 활동해온</strong> 분양 베테랑입니다. 여러 경제 위기를 겪으면서도 언제나 고객님께 최적의 분양 솔루션을 제공하기 위해 노력해왔습니다.</p>

      <p>IMF와 글로벌 금융 위기로 시장이 큰 타격을 입었을 때도, 저는 빠르게 변화에 적응하며 새로운 기회를 찾아냈습니다. 당시 분양 시장이 침체되면서 아파트 분양은 어려웠지만, 틈새시장으로 빌라에 대한 수요가 생기기 시작했죠. 저는 이 기회를 포착해 빌라 분양으로 눈을 돌려 기획, 광고, 금융 상담을 새로 공부하며, 고객들의 다양한 니즈에 맞춘 맞춤형 분양 전략을 개발했습니다. 그간 서울, 부산, 울산, 포항, 안동, 인천, 대구 등 전국 각지에서 많은 분들과 인연을 맺고 고객님께는 합리적이고 가치 있는 선택을 제안드릴 수 있었습니다.</p>

      <p>30년간 쌓아온 전문 지식과 경험을 바탕으로 고객님이 가진 걱정이나 고민을 누구보다 잘 이해하고 있습니다. 상담을 통해 모든 궁금증을 명쾌하게 해결해드리고, 내 집 마련에 대한 확신을 드리는 것이 저의 목표입니다.</p>

      <p>두산위브더제니스 센트럴시티는 두산위브의 최상위 하이브랜드로, 최신 설계와 고급 마감재, 수려한 조경, 넉넉한 주차공간, 프리미엄 커뮤니티 시설까지 갖춘 최고의 품질을 자랑합니다. 저는 <strong>잔여 동호수 조회부터 고객님의 니즈에 맞춘 추천, 계약까지</strong> 든든한 파트너가 되어드리고 있으며, 맞춤형 상담과 세심한 배려로 고객님이 꿈꾸는 이상적인 집을 찾을 수 있도록 늘 준비되어 있습니다.</p>

      <p>고객의 입장에서 깊이 고민하고, 마음을 이해하는 상담을 원하신다면, 저 신현주 팀장을 찾아주세요. 고객님의 꿈을 현실로 만들어드리겠습니다! <strong>두산위브더제니스 센트럴시티로 오셔서 모두 대박 나세요~~!!</strong></p>
      <img class="popup_img01" src="/images/landing/guide/popupImg01.jpg" width="600" alt="">
    </div>
  </Popup>

  <Popup ref="popup2">
    <h1 class="popup_ttl">
      <img loading="lazy" src="/images/landing/guide/popupTtl.svg" width="510" alt="고것좀 알고 잡다">
      <span class="subTtl">이서은 <small>과장</small></span>
    </h1>
    coming soon..
  </Popup>

  <Popup class="guidePopup guidePopup3" ref="popup3">
    <div class="main">
      <p class="mainSTtl"><img loading="lazy" src="/images/landing/guide/popupTtl.svg" width="200" alt="고것좀 알고 잡다"></p>
      <h1 class="mainTtl">박소라 <small>과장</small></h1>
      <img class="weveLogo" loading="lazy" src="/images/logo.svg" width="200" alt="">
      <ul class="contact">
        <li><a href="tel:1555-1924">1555-1924</a></li>
        <li><a href="mailto:pak.sora@keio.jp?subject=[두산위브더제니스 문의]">pak.sora@keio.jp</a></li>
      </ul>
      <ul class="career">
        <li><i></i>게이오기주쿠대학 대학원 Keio University <br>미디어디자인 연구과 졸업 (일본)
          <dl class="career_subDl">
            <dt>논문:</dt>
            <dd>
              Design of 'Ticketcaptor Akira': An e-ticket <br>System Considering Post-use Value
              <ul class="career_buts">
                <li class="career_but"><a href="https://koara.lib.keio.ac.jp/xoonips/modules/xoonips/detail.php?koara_id=KO40001001-00002023-1043" target="_blank">논문보기</a></li>
                <li class="career_but"><a href="https://docs.google.com/presentation/d/1DM3jHFJXZ5Cd7vXvqXmXNTBjUZDrRdtG-C4_4nFqy2U/edit?usp=sharing" target="_blank">발표자료</a></li>
              </ul>
            </dd>
          </dl>
          <ul class="career_subUl">
            <li>네트워크 미디어 프로젝트</li>
            <li>서비스디자인코스 수료(36호)</li>
            <li>SecCap10(보안전문가 인정) 정보보안 실천적 인재육성코스</li>
          </ul>
        </li>
        <li><i></i><strong>2008~2010</strong> iDEACROSS INC. (일본)
          <ul class="career_subUl">
            <li>개발부 | 디자이너 &amp; 마크업 엔지니어</li>
          </ul>
        </li>
        <li><i></i><strong>2011~2012</strong> sonicmoov Co.,Ltd. (일본)
          <ul class="career_subUl">
            <li>솔루션사업부 | 디자이너 &amp; 마크업 엔지니어</li>
          </ul>
        </li>
        <li><i></i><strong>2013~2022</strong> DeNA Co.,Ltd. (일본)
          <ul class="career_subUl">
            <li>한국전략실 | 디자이너 &amp; 프론트엔드 엔지니어</li>
            <li>게임사업본부 | 프론트엔드 엔지니어</li>
            <li>오픈플랫폼사업본부 | 프론트엔드 엔지니어</li>
            <li>디자인본부 엔지니어링그룹 | 프론트엔드 엔지니어</li>
            <li>디자인본부 마케팅디자인부 | 디자이너</li>
          </ul>
        </li>

      </ul>
      <img class="mainImg" src="/images/landing/guide/pop02_img01.png" width="700" alt="">
    </div>
    
    <div class="itd">
      <p>안녕하세요, 박소라 과장입니다.</p>
      <p>저는 대구 칠곡에서 초, 중, 고를 졸업하고 일본에서 오랫동안 웹개발자로 활동해 왔습니다. 2024년에 한국에 돌아와 신현주 팀장님의 권유로 두산위브더제니스에서 분양 업무를 시작하게 되었죠. 처음 경험하는 분양 업계이지만, 저는 <strong>스스로 기획 한 것을 디자인, 구현(개발)까지 혼자서 모두 소화할 수 있는 기술력</strong>을 바탕으로 광고 영업에 힘을 쏟고 보람도 느끼고 있습니다.</p>
      <p>모델하우스를 방문하시면 단지의 입지, 커뮤니티 시설, 모형 조감도 등을 안내해드리고, 고객님께 꼭 맞는 유닛 투어를 도와드리며, 신현주 팀장님께 연결하여 고객님이 필요한 정보를 꼼꼼히 상담 받으실 수 있도록 돕고 있습니다.</p>
      <p>제가 가진 기술을 통해 이 아파트의 진정한 가치를 고객님께 전달하고, 최고의 선택을 하실 수 있도록 최선을 다하겠습니다.</p>
    </div>
  </Popup>
</template>
<style>
.guidePopup .popupCon {
  width: 100%;
  max-width: 800px;
  color: #131313;
}
</style>
<style scoped>
.popup_ttl {
  width: 100%;
  max-width: 420px;
  margin: 0 auto;
}
.popup_ttl > img{
  display: block;
}
.popup_ttl .subTtl {
  display: block;
  margin-top: -36px;
  font-size: 30px;
}
.popup_ttl .subTtl small {
  font-size: 70%;
}
.main {
  text-align: left;
  position: relative;
  margin-top: 10px;
}
.mainSTtl {
  text-align: center;
  width: 340px;
  margin-bottom: -20px;
}
.mainTtl {
  font-size: 68px;
  font-weight: 800;
  color: #013287;
  line-height: 120%;
  margin-left: 20px;
}
.weveLogo {
  margin-left: 20px;
}
.contact {
  display: flex;
  font-size: 13px;
  margin-left: 20px;
  line-height: 140%;
}
.contact li {
  margin-right: 10px;
  position: relative;
  padding-left: 20px;
}
.contact li::before {
  content: "";
  display: block;
  width: 17px;
  height: 17px;
  background: url("/images/common/ic_call.svg") no-repeat center center;
  background-size: 100% auto;
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
}
.contact li:last-child {
  margin-right: 0;
}
.contact li:last-child::before {
  background-image: url("/images/common/ic_mail.svg");
}
.contact a {
  color: #131313;
  pointer-events: none;
}
.contact a:hover {
  color: #d90000;
}
.mainImg {
  position: absolute;
  right: -130px;
  top: -30px;
}
.career {
  text-align: left;
  position: relative;
  padding-left: 27px;
  margin: 20px;
  color: #000c38;
  word-break: keep-all;
  width: 550px;
  box-sizing: border-box;
  line-height: 140%;
}
.career a {
  color: #000c38;
  text-decoration: underline;
}
.career a:hover {
  text-decoration: none;
}
.career::before {
  position: absolute;
  top: -5px;
  left: 9px;
  bottom: 0;
  content: "";
  display: block;
  width: 2px;
  background: #aaa;
}
.career > li {
  margin-top: 10px;
}
.career >  li:has(.indent) {
  margin-left: 3em;
  text-indent: -3em;
}
.career >  li:nth-child(even) {
  color: #013287;
}

.career i {
  box-sizing: border-box;
  width: 20px;
  height: 20px;
  background: #000c38;
  display: block;
  position: absolute;
  left: 0;
  border-radius: 50%;
}
.career i::after {
  content: "";
  display: block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.career > li:nth-child(even) i{
  background: #013287;
}
.career_subDl {
  display: flex;
  font-size: 80%;
  line-height: 130%;
}
.career_subDl dt {
  margin-right: 10px;
}
.career_subUl {
  font-size: 80%;
  line-height: 130%;
  margin-top: 8px;
}
.career_subUl li {
  margin-top: 4px;
  margin-left: 1em;
  text-indent: -1em;
}
.career_subUl li::before {
  content: "・";
}
.career_buts {
  display: flex;
  margin-top: 6px;
  font-size: 90%;
}
.career_but {
  margin-right: 10px;
}
.career_but:last-child {
  margin-right: 0
}
.career_but a {
  display: block;
  background: #082379;
  color: #fff;
  padding: 5px 10px;
  border-radius: 3px;
  text-decoration: none;
}
.itd {
  padding: 30px;
  margin: 10px;
  margin-top: 30px;
  line-height: 180%;
  text-align: left;
  background: #be9167;
  color: #fff;
  border-radius: 1px;
  font-size: 16px;
  border-radius: 10px;
  position: relative;
}
.itd p {
  margin-top: 20px;
}
.itd strong {
  color: #f3ff1e;
}

.itd p:first-child {
  margin-top: 0;
}
.popup_img01 {
  transform: rotate(-8deg) translateX(-50%);
  position: relative;
  left: 50%;
}
/* sp */
@media only screen and (max-width: 950px) {
  .popup_ttl {
    width: 100%;
  }
  .popup_ttl img {
    width: 100%;
  }
  .main {
    margin-top: 2vw;
  }
  .mainSTtl {
    width: 100%;
    margin-bottom: -5vw;
  }
  .mainSTtl img {
    width: 61vw;
  }
  .mainTtl {
    margin: 0;
    text-align: center;
    font-size: 18vw;
    margin-bottom: -3vw;
  }
  .mainTtl small {
    font-size: 60%;
  }
  .weveLogo {
    margin: 0 auto;
    display: block;
    width: 46vw;
  }
  .contact {
    margin: 3vw;
    margin-bottom: 7vw;
    display: block;
    font-size: 3.5vw;
  }
  .contact li {
    margin-right: 0;
    padding-left: 5vw;
  }
  .contact li::before {
    width: 4vw;
    height: 4vw;
  }
  .contact a {
    pointer-events: auto;
  }
  .career {
    margin: 3vw;
    margin-bottom: 14vw;
    font-size: 4.5vw;
    padding-left: 6vw;
    width: 78vw;
  }
  .career::before {
    top: -2vw;
    left: 2.1vw;
    width: .6vw;
  }
  .career br{
    display: none;
  }
  .career > li {
    margin-top: 2vw;
  }
  .career i {
    width: 4.4vw;
    height: 4.4vw;
  }
  .career i::after {
    width: 2.2vw;
    height: 2.2vw;
  }
  .career_subDl {
    margin-top: 1vw;
  }
  .career_subDl dt{
    margin-right: 1vw;
  }
  
  .career_subUl {
    margin-top: 2vw;
  }
  .career_subUl li {
    margin-top: 1vw;
  }
  .career_buts {
    display: flex;
    margin-top: 1vw;
  }
  .career_but {
    margin-right: 3vw;
  }
  .career_but:last-child {
    margin-right: 0
  }
  .career_but a {
    padding: 2vw 3vw;
    border-radius: 1.5vw;
  }
  .mainImg {
    width: 160vw;
    right: 48vw;
    position: inherit;
  }
  .itd{
    padding: 5vw;
    margin: 2vw;  
    font-size: 4.3vw;
    border-radius: 2vw;
    margin-top: -180vw;
  }
  .popup_img01 {
    width: 102vw;
    margin-top: -3vw;
  }
}
</style>


<script setup>
import Popup from '~/components/landing/popup.vue';
import { ref, onMounted } from 'vue';

// 팝업 레퍼런스 설정
const popup1 = ref(null);
const popup2 = ref(null);
const popup3 = ref(null);

// 팝업을 여는 함수
const showPopup = (popupId) => {
  if (popupId === 'popup1' && popup1.value) {
    popup1.value.openPopup();
  } else if (popupId === 'popup2' && popup2.value) {
    popup2.value.openPopup();
  } else if (popupId === 'popup3' && popup3.value) {
    popup3.value.openPopup();
  }
};

const img01Ref = ref(null);
const img02Ref = ref(null);
const img03Ref = ref(null);
const textRef = ref(null);
const name01Ref = ref(null);
const name02Ref = ref(null);
const name03Ref = ref(null);

onMounted(() => {
  const viewportHeight = window.innerHeight;
  const rootMarginValue = `0px 0px -${0.1 * viewportHeight}px 0px`; // 동적으로 rootMargin 계산

  const options = {
    threshold: .05, // 요소가 5% 보이면 애니메이션 트리거
    rootMargin: rootMarginValue, // 계산된 rootMargin 값 사용
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
      }
    });
  }, options);

  // 요소들에 대해 옵저버 적용
  observer.observe(img01Ref.value);
  observer.observe(img03Ref.value);
  observer.observe(img02Ref.value);
  observer.observe(textRef.value);

  // 이름 애니메이션 순서 적용
  const nameObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
      }
    });
  }, options);

  // 순차적으로 이름 애니메이션 적용
  setTimeout(() => {
    nameObserver.observe(name03Ref.value);
  }, 0);

  setTimeout(() => {
    nameObserver.observe(name01Ref.value);
  }, 300);

  setTimeout(() => {
    nameObserver.observe(name02Ref.value);
  }, 500);
});
</script>



<style scoped>
 /* 회전 애니메이션 */
 @keyframes rotateInfinite {
    0% {
      transform: rotate(0deg); /* 시작 상태 */
    }
    100% {
      transform: rotate(360deg); /* 한 바퀴 회전 */
    }
  }
  .guide {
    background: #082379;
    color: #fff;
    position: relative;
    margin-top: 520px;
  }
  .guide::before {
    content: "";
    position: absolute;
    background: url("/images/landing/guide/bg_top.png") no-repeat center bottom;
    background-size: 2688px auto;
    width: 2688px;
    height: 923px;
    top: -844px;
    left: 50%;
    transform: translate(-50%, 0);
    
  }
  .guide_inner {
    max-width: 840px;
    margin: 0 auto;
    position: relative;
    height: 730px;
  }

  .ttl{
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0);
    top: -410px;
    z-index: 2;
  }
  .text {
    position: absolute;
    width: 100%;
    text-align: center;
    top: -233px;
    z-index: 1;
  }
  .guideImgs {
    position: absolute;
    left: 0;
    right: 0;
    top: 460px;
  }
  .guideImgs > a {
    cursor: pointer;
  }
  .guideImgs > a:hover > img[class*='img'] {
    transform: scale(1.1);
  }  
  .guideImgs > a:hover img[class*='img']{
    z-index: 3;
  }
  .guideImgs > a:hover div[class*='name']{
    z-index: 4;
  }
  .guideImgs img {
    position: absolute;
  }
  .guideImgs .img02 {
    left: -57px;
    bottom: -68px;
  }
  .guideImgs .img03 {
    right: -75px;
    bottom: 0;
  }
  .guideImgs .img01 {
    right: 234px;
    bottom: 0;
  }
  .guideImgs .name01,
  .guideImgs .name02,
  .guideImgs .name03 {
    position: absolute;
    z-index: 1;
    width: 152px;
    height: 152px;
  }
  .guideImgs .name01 {
    right: 331px;
    bottom: 160px;
  }
  .guideImgs .name02{
    left: -70px;
    bottom: 90px;
  }
  .guideImgs .name03 {
    bottom: 90px;
    right: -60px;
  }

  .guideImgs .name01::after,
  .guideImgs .name02::after,
  .guideImgs .name03::after {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-size: 100% auto;
    background-repeat: no-repeat;
    background-position: center center;
    animation: rotateInfinite 30s linear infinite;
  }
  .guideImgs .name01::after {
    background-image: url("/images/landing/guide/ring01.png");
  }
  .guideImgs .name02::after {
    background-image: url("/images/landing/guide/ring02.png");
  }
  .guideImgs .name03::after {
    background-image: url("/images/landing/guide/ring03.png");
  }

  .guideImgs .name01 > img,
  .guideImgs .name02 > img,
  .guideImgs .name03 > img {
    display: block;
    position: relative;
    margin: 42px auto 0;
  }

  .guideImgs .name01::before,
  .guideImgs .name02::before,
  .guideImgs .name03::before {
    content: "";
    display: block;
    width: 34px;
    height: 34px;
    background: url("/images/landing/guide/arrow.png") no-repeat center center;
    background-size: 100% auto;
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
  }

  .section01 {
    width: 100%;
    border: 3px solid #0d2161;
    margin: 0 auto;
    background: #fff;
    color: #082379;
    padding: 25px;
    position: absolute;
    border-radius: 25px;
    top: 400px;
    font-size: 22px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    z-index: 10;
  }
  .left {
    margin-right: 20px;
    flex: 1;
  }
  .tel {
    text-align: center;
  }
  .telText {
    text-align: center;
    line-height: 160%;
    position: relative;
    padding-bottom: 10px;
    font-size: 30px;
  }
  .telText > strong {
    color: #e20000;
  }
  .comment {
    text-align: center;
    border: 2px solid #092379;
    border-radius: 5px;
    padding: 10px 15px;
    font-size: 17px;
    line-height: 140%;
  }
  .comment > strong {
    background: #ffff6f;
    color: #ff008b;
  }
  .tel {
    flex: 1;
  }
  .links {
    display: flex;
  }
  .links li {
    flex: 1;
  }
  .links li a {
    width: 100%;
    display: flex;
    justify-items: center;
    align-items: center;
    text-align: center;
    font-size: 15px;
    font-weight: bold;
    line-height: 140%;
    flex-direction: column;
    padding: 10px;
    box-sizing: border-box;
    min-width: 160px;
    max-width: 200px;
  }
  .links li a::before {
    content: "";
    display: block;
    width: 50px;
    height: 50px;
    background-size: 100% auto;
  }


  .links .kakao a {
    background: #fae100;
    color: #371d1e;
  }
  .links .call {
    display: none;
  }
  .links .call a {
    background: #07299e;
    color: #fff;
  }
  .links .kakao a::before {
    background-image: url("/images/landing/r_nav/kakao.svg");
  }
  .links .call a::before {
    background-image: url("/images/landing/r_nav/call.svg");
  }
  


/* 초기 상태에서 보이지 않도록 opacity를 0으로 설정 */
.img01, .img03, .img02, .text {
  opacity: 0;
  transform: translateY(20vw) scale(0.6); /* 더 밑에서 시작하도록 설정 */
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

/* 탄력적으로 땅에서 솟아나는 애니메이션 */
@keyframes bounceUp {
  0% {
    transform: translateY(20vw) scale(0.6); /* 더 밑에서 시작, 작아진 상태 */
    opacity: 0; /* 투명하게 시작 */
  }
  50% {
    transform: translateY(-2vw) scale(1.1); /* 위로 튀어오르며 확대, 더 위로 튀어오름 */
    opacity: 1; /* 불투명하게 */
  }
  70% {
    transform: translateY(2vw) scale(0.9); /* 조금 내려오면서 축소 */
  }
  85% {
    transform: translateY(-1vw) scale(1.02); /* 살짝 위로 올라가며 확대 */
  }
  100% {
    transform: translateY(0) scale(1); /* 원래 위치로 돌아옴 */
    opacity: 1; /* 최종적으로 완전히 보이도록 설정 */
  }
}

/* 둥실둥실 움직이는 애니메이션 */
@keyframes float {
  0% {
    transform: translateY(0); /* 기본 위치 */
  }
  50% {
    transform: translateY(-1vw); /* 위로 살짝 올라감 */
  }
  100% {
    transform: translateY(0); /* 원래 위치로 돌아옴 */
  }
}

/* 애니메이션이 적용될 때 땅에서 튀어오르는 효과 */
.img01.animate {
  animation: bounceUp 1.2s cubic-bezier(0.22, 0.61, 0.36, 1.0) forwards;
}

.img03.animate {
  animation: bounceUp 1.2s 0.3s cubic-bezier(0.22, 0.61, 0.36, 1.0) forwards; /* 0.3초 딜레이 */
}

.img02.animate {
  animation: bounceUp 1.2s 0.6s cubic-bezier(0.22, 0.61, 0.36, 1.0) forwards; /* 0.6초 딜레이 */
}

.text.animate {
  animation: bounceUp 1.2s 0.9s cubic-bezier(0.22, 0.61, 0.36, 1.0) forwards, 
             float 2.5s infinite ease-in-out 1.7s; /* 나타난 후 둥실둥실 애니메이션 */
}

/* 초기 상태에서 보이지 않도록 설정 */
.name03, .name01, .name02 {
  opacity: 0;
  transform: translateX(10vw); /* 오른쪽에서 시작 */
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

/* 오른쪽에서 부드럽게 나타나는 애니메이션 */
@keyframes fadeInRight {
  0% {
    opacity: 0;
    transform: translateX(10vw); /* 오른쪽에서 시작 */
  }
  100% {
    opacity: 1;
    transform: translateX(0); /* 원래 위치로 */
  }
}


/* 각각의 애니메이션 효과 */
.name03.animate {
  animation: fadeInRight 1s 1.5s ease forwards; /* 1.5초 후에 애니메이션 시작 */
}

.name01.animate {
  animation: fadeInRight 1s 1.8s ease forwards; /* 1.8초 후에 애니메이션 시작 */
}

.name02.animate {
  animation: fadeInRight 1s 2.1s ease forwards; /* 2.1초 후에 애니메이션 시작 */
}


/* sp */
@media only screen and (max-width: 950px) {
  .guide {
    margin-top: 38vw;
  }

  .guide::before {
    background-size: 100% auto;
    width: 201vw;
    height: 34vw;
    top: -17vw;    
  }
  .guide_inner {
    max-width: 100%;
    height: auto;
    padding-bottom: 20vw;
    padding-top: 80vw;
  }

  .ttl{
    top: -35vw;
  }
  .ttl img{
    width: 90vw;
  }
  .text {
    top: -9vw;
  }
  .text img {
    height: 12vw;
  }
  .guideImgs {
    top: 97vw;
  }
  .guideImgs .img02 {
    left: -13vw;
    bottom: 3vw;
    width: 49.8vw;
  }
  .guideImgs .img03 {
    right: -15vw;
    bottom: 9vw;
    width: 64vw;
  }
  .guideImgs .img01 {
    right: 25vw;
    bottom: 5vw;
    width: 60vw;
  }

  .guideImgs .name01,
  .guideImgs .name02,
  .guideImgs .name03 {
    opacity: 0; /* 처음에 보이지 않음 */
    transform: translateX(100px); /* 오른쪽에서 시작 */
    width: 30vw;
    height: 30vw;
  }
  .guideImgs .name01 {
    right: 37vw;
    bottom: 27vw;
  }
  .guideImgs .name02{
    left: -2.5vw;
    bottom: 20vw;
  }
  .guideImgs .name03 {
    bottom: 20vw;
    right: 2vw;
  }
  .guideImgs .name01 > img,
  .guideImgs .name02 > img,
  .guideImgs .name03 > img {
    margin: 8vw auto 0;
  }

  .guideImgs .name03 > img {
    width: 22vw;
  }
  .guideImgs .name01 > img {
    width: 23vw;
  }
  .guideImgs .name02 > img {
    width: 22vw;
  }

  .guideImgs .name01::before,
  .guideImgs .name02::before,
  .guideImgs .name03::before {
    width: 8vw;
    height: 8vw;
    bottom: 3.5vw;
  }

  .section01 {
    width: 94vw;
    border: 0.6vw solid #0d2161;
    padding: 5vw;
    border-radius: 5vw;
    top: auto;
    font-size: 5vw;
    left: auto;
    position: relative;
    display: block;
  }
  .left {
    margin-right: 0;
  }  
  .tel {
    margin-bottom: 1vw;
  }
  .telText {
    font-size: 6vw;
    padding-bottom: 2vw;
  }
  .comment {
    border: 0.5vw solid #092379;
    border-radius: 1vw;
    padding: 2vw 3vw;
    font-size: 4.2vw;
  }
  .tel img {
    width: 100%;
  }
  .links {
    margin-top: 4vw;
  }
  .links li a {
    font-size: 4vw;
    padding: 10px;
    min-width: 100%;
    max-width: 100%;
  }
  .links li a::before {
    width: 10vw;
    height: 10vw;
  }

  .links li a {
    font-size: 4vw;
  }
  .links li a::before {
      width: 10vw;
      height: 10vw;
  }
  .links .call {
    display: block;
  }
}

</style>