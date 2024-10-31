<template>
  <section id="reviews_sp" class="reviews">
    <h1 class="ttl">
      <img loading="lazy" src="/images/landing/reviews/ttl01.svg" alt="지금 바로 두산위브더제니스 센트럴시티와 함께">
      <img loading="lazy" src="/images/landing/reviews/ttl02.svg" alt="프리미엄 라이프를 준비하세요!">
    </h1>
    <div class="pagination">
      <span v-for="(dot, index) in reviews.length" :key="index" :class="{ active: currentSlide === index }">.</span>
    </div>
    <div class="reviewCon" ref="reviewCon" :class="{ 'fade-in': isLoaded }">
      <swiper
        :slides-per-view="1.2"
        :space-between="10"
        :centeredSlides="true"
        :loop="true"
        :pagination="{ clickable: true }"
        @slideChange="onSlideChange"
        @swiper="updateSlideHeights"
      >
        <swiper-slide v-for="(review, index) in reviews" :key="index">
          <div class="item" ref="slides">
            <dl>
              <dt>{{ review.title }}</dt>
              <dd>
                <div class="text">
                  <p v-for="(content, i) in review.content" :key="i">{{ content }}</p>
                </div>
                <p class="name" v-html="review.author"></p>
                <img :src="review.img" width="166" :alt="review.title" />
              </dd>
            </dl>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';
import { ref, onMounted, nextTick } from 'vue';

// 리뷰 데이터
const reviews = ref([
  {
    title: "선착순 동호수 없어진 이유, 이젠 놓치지 않을 거예요!",
    content: [
      "8월에 박소라 과장님의 문자를 받고 모델하우스를 방문했습니다. 지금 수성구에 살면서 주거지를 두산위브더제니스 센트럴시티와 명덕 e편한세상 사이에서 고민했는데, 원했던 동호수가 순식간에 분양되었더군요. 그래도 다른 동호수로 계약을 마치고 나니 기분이 좋습니다!",
      "범어동 두산위브더제니스가 2009년 완공된 아파트임에도 여전히 수성구 대장 자리를 지키는 걸 보면서, 학정동 신도시의 두산위브더제니스가 그 가치를 이어갈 거라는 확신이 들었습니다. 특히 학정동 신축 제니스 평단가가 범어동 제니스보다 반값 수준이라 지금 이 기회를 또 놓치면 대구광역시에서 제니스 급의 프리미엄 아파트를 이 가격에 살 수 없을거란 생각이 들었습니다.",
      "또한, 8월 상담 때는 없었던 종로엠스쿨 교육특화 사업과 조식 서비스까지 예정되어 있다고 하니 더욱 기대가 큽니다. 계약을 마친 지금, 2027년 새로운 시작을 준비하며 설레는 마음으로 기다립니다!",
    ],
    author: "수성4가 60대 김**",
    img: "/images/landing/reviews/img11.png"
  },
  {
    title: "리모델링 대신 신축! 미래가치 보고 바로 계약",
    content: [
      "제가 지금 살고 있는 아파트가 30년 가까이 되다 보니 리모델링도 고민했지만 비용이 상당히 부담스러워 쉽지 않더군요. 게다가 주차 공간 문제, 단열과 방음 같은 근본적인 문제는 리모델링으로도 해결되지 않는 한계가 있기에 더욱 고민이 됐어요. 리모델링에 많은 비용을 투자한다고 해도, 그게 장기적으로 가치 보존이 될지도 불확실하다는 생각이 들었죠.",
      "그러던 중 방문한 모델하우스에서 두산위브의 최상위 브랜드 아파트라는 점에서 확신이 생겼습니다. 최신 설계와 기술이 적용되어 시간이 지나도 가치를 유지할 수 있고, 프리미엄 브랜드가 제공하는 삶의 질과 투자 매력은 리모델링한 낡은 아파트와는 비교할 수 없다는 생각이 들었습니다.",
      "게다가 입지와 다양한 조건, 개발 호재까지 모두 좋아서 큰 고민 없이 계약했습니다. 퇴근후 가볍게 들러 보러 모델하우스 들어갔다가 좋은 분을 만나 인연이 된것 같아 마음이 푸근합니다~~감사드리고 입주시까지 자문 부탁드립니다^^",
    ],
    author: "태전동 50대 권**",
    img: "/images/landing/reviews/img10.png"
  },
  {
    title: "공원과 키즈카페까지! 아이들에게 딱 맞는 아파트 계약 성공!",
    content: [
      "박소라 과장님의 홈페이지를 보고 모델하우스를 방문하게 됐어요. 지금 5살 된 첫째와 곧 태어날 둘째를 위해, 층간소음 스트레스 없이 키울 수 있는 필로티 2층을 선택했습니다.",
      "여긴 정말 아이들 키우기 최적의 환경인 것 같아요! 키즈카페가 단지 안에 있어서 언제든 안전하게 놀 수 있고, 작은 도서관과 독서실은 학습 공간으로 딱이겠더라고요. 게다가 팔거천 수변공원이랑 공원들이 단지 주변에 있어서 아이들이 자연 속에서 마음껏 뛰어놀 수 있는 점도 정말 마음에 들었어요.",
      "차 없는 지상공간 덕분에 자전거나 스쿠터 타기도 안전해서 부모로서 걱정이 확 줄었고요. 그리고 커뮤니티 시설도 다양해서 아이들이 즐겁게 생활할 수 있을 것 같아요.",
      "이런 환경은 두 아이를 안전하게 키우고 싶은 저에게 최적의 선택이었고, 고민 없이 바로 2층으로 계약했어요! 두산위브더제니스 센트럴시티는 아이들을 키우기 위한 안전하고 행복한 공간을 제공하는 아파트라, 부모님들께 적극 추천합니다!"
    ],
    author: "태전동 30대 유**",
    img: "/images/landing/reviews/img08.png"
  },
  {
    title: "할로윈 더 특별했던 계약! 지금 바로 두산위브더제니스로!",
    content: [
      "저는 홈페이지를 보고 모델하우스를 예약하게 됐어요. 직장을 마치고 방문했는데, 박소라 과장님이 할로윈 복장을 하고 계셔서 처음부터 분위기가 정말 즐겁고 따뜻했어요! 🎃",
      "할로윈 이벤트를 준비했다며 계약 후 깜짝 호박 선물도 받았답니다. 여러 모델하우스를 다녀봤지만, 이렇게 특색 있는 이벤트는 처음이라 정말 인상 깊었어요.",
      "제가 이번에 계약한 아파트는 가족들과 함께 살 집으로, 3년 뒤 입주하면 편리한 교통과 완벽한 생활환경 속에서 가족들과 더 행복한 삶을 누릴 생각에 벌써부터 가슴이 벅차네요. 🏡 물론 앞으로 주택자금 마련을 차근차근 준비하면서 열심히 살아갈 계획이에요. 미래가 더 기대되는 아파트입니다! 😊",
      "즐겁고 특별한 경험을 하며 계약할 수 있어 너무 만족해요. 고민 중이신 분들, 꼭 모델하우스 방문해보세요!"
    ],
    author: "남산동 30대 박**",
    img: "/images/landing/reviews/img09.png"
  },
  {
    title: "30년 만에 새 아파트로 갈아탔어요!",
    content: [
      "저는 90년대 초 칠곡 2지구 개발 때 구암동 미래타운에 입주해서 30년 동안 큰 불편 없이 살아왔습니다. 그동안 리모델링을 하며 계속 살고 있었지만, 아무래도 아파트가 점점 노후화되다 보니 새 아파트로 갈아타야겠다는 생각이 들었죠. 그래서 얼마 전 두산위브더제니스 센트럴시티 모델하우스에서 신현주 팀장 상담을 받고, 정말 고민 없이 계약을 결정했습니다!",
      "무엇보다 1,000세대가 넘는 대단지라는 안정감이 좋았고, 특히 1층 필로티 설계 덕분에 동선이 훨씬 자유롭고 편리해졌다는 점이 마음에 쏙 들었어요. 그리고 농촌 기술원 이전 후 칠곡 4지구가 새롭게 형성되면 이곳이 정말 새로운 주거 타운으로 자리 잡을 거라는 기대감도 컸습니다.",
      "저는 33C타입 고층으로 계약했는데, 시뮬레이션 해보니 전망도 잘 나올것 같고 공간 활용도 뛰어나더라고요. 지금 살고 있는 곳과 비교해보면 확실히 더 업그레이드된 느낌이 들었어요.",
      "새 아파트에서의 삶이 벌써부터 기대됩니다! 오랜만에 새 집으로 이사 가는 기분, 정말 설레네요. 😊"
    ],
    author: "구암동 60대 신**",
    img: "/images/landing/reviews/img07.png"
  },
  {
    title: "분양가 고민? 모델하우스를 방문하고 해답을 찾았습니다!",
    content: [
      "오랫동안 기다려왔던 학정역 초역세권이라 관심은 많았지만, 사실 비싼 분양가 때문에 고민이 있었어요. 그런데 오늘 모델하우스를 방문하고 상담을 받고 나니 모든 걱정이 사라졌습니다.",
      "상담 중 알게 된 사실인데, 최근 철강, 콘크리트 등 건축 자재비가 크게 올랐다고 해요. 이 아파트는 그만큼 높은 품질을 보장하기 때문에 가격이 비싸다고만 느껴지지 않았어요.",
      "게다가 대구경북 통합 신공항 개발 같은 대형 개발 호재가 있다고 하니 확신이 생기더라고요. 2027년 이후 대구에서 새 아파트 공급이 거의 없을 거라는 이야기도 들었고요.",
      "계약 후에는 마음이 한결 편해졌고, 이제 2027년 입주가 기다려지네요! 망설이고 계신 분들, 꼭 모델하우스 방문해보세요. 저처럼 안심하게 될 거예요!"
    ],
    author: "읍내동 60대<br>대성떡방앗간",
    img: "/images/landing/reviews/img06.png"
  },
  {
    title: "의료 접근성 완전 좋아요!",
    content: [
      "나이 드신 부모님을 모시고 살고 있습니다. 부모님 건강이 제일 중요한데, 두산위브더제니스 센트럴시티는 칠곡경북대학교병원이 바로 옆에 있어서 정말 안심이 되더라고요.",
      "저희 부모님은 나이가 드셔서 정기적으로 병원을 다니셔야 하는데, 여기 살면 걸어서도 대학 병원에 갈 수 있을 정도로 가까워서 너무 편리할 것 같아요. 칠곡경북대학교병원은 대형 의료기관이라, 부모님뿐만 아니라 온 가족이 믿고 다닐 수 있겠다는 생각이 들었어요.",
      "이 아파트라면 부모님이 갑자기 몸이 불편하실 때도 병원에 금방 갈 수 있어서 걱정 없이 살 수 있을 것 같아요. "
    ],
    author: "태전동 50대 신**",
    img: "/images/landing/reviews/img01.png"
  },
  {
    title: "역세권 새 아파트로 갈아타기 딱!",
    content: [
      "대구 칠곡에서 30년 정도 살고 있는 **이편한 주민이에요. 지금 아파트도 너무 만족하면서 살고 있긴 한데 팔거역까지 걸어서 15분 정도 걸리는 게 좀 불편하더라고요. 그래서 항상 자가용을 끌고 다니는데, 대구 시내 주차가 어려워서 시내에는 잘 안 가게 되네요.",
      "역세권에 살면 서문시장에도 자주 갈 수 있을 텐데, 주차 문제 때문에 발길이 잘 안 가더 라고요. 또 지금 살고 있는 아파트도 15년 정도로 좀 낡아서 새 아파트로 갈아탈까 고민 중이었거든요. 그런데 두산위브더제니스 센트럴시티는 학정역 바로 옆에 있는 역세권 아파트고, 고급 새 아파트라 관심이 확 생기더 라고요!",
      "역세권에 새 아파트까지 완벽한 조건이니, 고민이 점점 기울고 있어요."
    ],
    author: "읍내동 60대 박**",
    img: "/images/landing/reviews/img03.png"
  },
  {
    title: "안심보장제로 걱정 없이 믿고 계약!!",
    content: [
      "모델하우스 딱 들어갔을 때 깔끔한 분위기랑 세련된 외관이 눈에 확 들어오더라고요. 사전 예약하고 갔더니 신현주 팀장님이 친절하게 맞아주셨어요.",
      "요즘 미계약 물량으로 할인 분양하는 곳이 많아 일찍 계약하면 손해일까 걱정됐는데, 안심보장제 덕분에 걱정이 싹 사라짐! 후계약자와 동일한 조건으로 혜택이 보장된다고 하니 믿고 계약했습니다."
    ],
    author: "구암동 30대 김**",
    img: "/images/landing/reviews/img05.png"
  },
  {
    title: "아이 키우기 좋은 아파트, 학교 걱정도 없어요!",
    content: [
      "초등학생 아이를 키우는 엄마 입장에서 모델하우스를 다녀왔는데, 솔직히 단점도 있지만 장점이 너무 커서 고민이 해결됐어요! 주변에 초등학교가 가까이 없다는 게 조금 아쉽긴 했지만, 스쿨버스가 제공된다고 해서 안심됐어요. 아이가 안전하게 학교를 오갈 수 있는 점은 엄마들한테 정말 중요한 부분이잖아요?",
      "그리고 단지 자체가 지상에 차가 없는 설계라서 아이들이 아파트 내에서 안전하게 뛰어놀 수 있어요. 요즘 이런 안전한 환경은 정말 큰 장점인것 같아요. 더불어 팔거천 근린공원이 바로 옆에 있어서 아이랑 산책도 하고 자연 속에서 마음껏 뛰어놀 수 있겠더라고요! 주말엔 가족끼리 운암지 서리지에서 자연을 느끼며 힐링할 생각하니 벌써 기대돼요.",
      "아이 키우기 좋은 안전하고 자연친화적인 아파트를 찾으시는 분들께 꼭 추천하고 싶어요! 😊"
    ],
    author: "도남동 40대 윤**",
    img: "/images/landing/reviews/img02.png"
  },
  {
    title: "운동도 사우나도 한 번에, 이건 진짜 딱이네!",
    content: [
      "저는 운동을 정말 좋아하는데요, 살고 있는 아파트에도 골프장이랑 헬스클럽 같은 운동 커뮤니티 시설이 있긴 한데, 사우나가 없어서 자주 이용하게 되진 않더라고요. 운동 후에 땀 흘리고 나면 사우나에서 시원하게 씻는 게 필수인데, 그게 안 되니깐 아무래도 이용 빈도가 떨어지더라고요.",
      "그런데 두산위브더제니스 센트럴시티는 제가 딱 원하는 조건을 다 갖추고 있어요! 골프장도 넓고 쾌적하게 되어있고, 무엇보다 사우나 시설이 너무 잘 돼 있는것같더라고요. 사우나가 있어서 운동 후에도 바로 씻고 개운하게 하루를 마무리할 수 있으니 정말 자주 이용하게 될 것 같아요.",
      "운동을 좋아하는 사람들에게는 이런 시설이 얼마나 중요한지 아실 거예요. 여기라면 골프도 치고, 헬스도 하고, 사우나까지 즐기면서 건강하고 활기찬 생활을 이어갈 수 있을 것 같습니다."
    ],
    author: "동천동 30대 박**",
    img: "/images/landing/reviews/img04.png"
  }
]);

// 현재 슬라이드 인덱스 저장
const currentSlide = ref(0);
const slides = ref([]);
const reviewCon = ref(null);
const isLoaded = ref(false); // 로딩 완료 상태

// 슬라이드 변경시 호출
const onSlideChange = (swiper) => {
  currentSlide.value = swiper.realIndex;
};

// 슬라이드 높이 동기화 (vw 단위로 설정)
const updateSlideHeights = () => {
  nextTick(() => {
    let maxHeightPx = 0;

    // 모든 슬라이드의 높이 중 최대값 계산
    slides.value.forEach((slide) => {
      const heightPx = slide.offsetHeight;
      if (heightPx > maxHeightPx) {
        maxHeightPx = heightPx;
      }
    });

    // 최대 높이를 vw 단위로 변환 (100vw = window.innerWidth)
    let maxHeightVw = (maxHeightPx / window.innerWidth) * 100;

    // 10vw를 뺀 최종 높이
    maxHeightVw = Math.max(maxHeightVw + 14, 0); // 최소값을 0으로 제한

    // 최대 높이로 모든 슬라이드 높이 설정 (vw 단위)
    slides.value.forEach((slide) => {
      slide.style.height = `${maxHeightVw}vw`;
    });
  });
};

// 페이지가 로드된 후 슬라이드 높이 동기화
onMounted(() => {
  updateSlideHeights();
  isLoaded.value = true; // 로딩 완료 후 페이드인 시작
});
</script>


<style scoped>
.reviews {
  background: #be9167;
  color: #fff;
  padding-top: 14vw;
  padding-bottom: 13vw;
}

.ttl {
  width: 90vw;
  height: 20vw;
  text-align: center;
  border-top: 0.6vw solid #fff;
  border-bottom: 0.6vw solid #fff;
  position: relative;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 0;
}
.ttl img {
  width: 88vw;
}
.ttl img:last-child {
  margin-top: 2.4vw;
}

.ttl::before {
  content: "";
  display: block;
  width: 55vw;
  height: 12vw;
  background: url(/images/landing/reviews/ttl_deco.svg) no-repeat center bottom;
  background-size: 100% auto;
  position: absolute;
  top: -13.5vw;
  left: 50%;
  transform: translate(-50%, 0);
}

.ttl span:first-child {
  font-size: 4.5vw;
  white-space: nowrap;
}

.ttl span:last-child {
  font-size: 7vw;
  white-space: nowrap;
  margin-top: 8vw;
}

.reviewCon {
  width: 100%;
  margin: 5vw auto 0;
  opacity: 0; /* 초기 상태에서 보이지 않음 */
  transition: opacity 1s ease-in-out; /* 페이드인 애니메이션 */
}

.reviewCon.fade-in {
  opacity: 1; /* 로딩 완료 후 나타남 */
}
.reviewCon dl {
  background: #fff;
  color: #000f3a;
  padding: 5vw;
  border-radius: 5vw;
  font-size: 4vw;
  line-height: 160%;
  word-break: keep-all;
  position: relative;
  margin: 26vw 0;
}

.reviewCon dl:first-child {
  margin-top: 0;
}

.reviewCon dl img {
  position: absolute;
  right: 6vw;
  bottom: -22vw;
  margin: 0 4vw;
  width: 36vw;
}

.reviewCon p,
.reviewCon .text {
  margin-top: 3vw;
}

.reviewCon p:first-child {
  margin-top: 0;
}

.reviewCon dt {
  font-weight: 800;
  font-size: 5vw;
  line-height: 140%;
}

.reviewCon dd .name {
  font-weight: 600;
}

/* 하단 네비게이션 점 스타일 */
.pagination {
  text-align: center;
}

.pagination span {
  font-size: 13vw;
  margin: 0 1vw;
  color: #fff;
  opacity: 0.5;
}

.pagination .active {
  font-size: 20vw;
  opacity: 1;
}
</style>
