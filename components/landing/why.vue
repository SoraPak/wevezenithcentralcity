<template>
  <section class="why">
    <div class="bgTop"></div>
    <div class="why_inner"> 
      <div class="bg"><span></span><span></span><span></span></div>
      <h1 class="ttl">
        <img loading="lazy" class="ttl01" ref="ttl01Ref" src="/images/landing/why/ttl01.png" width="513" alt="내집마련 기회, 지금이 적기!">
        <img loading="lazy" class="ttl02" ref="ttl02Ref" src="/images/landing/why/ttl02.png" width="681" alt="왜 두산위브더제니스 센트럴시티인가?">
        <img loading="lazy" class="spTtl02" ref="spTtl02Ref" src="/images/landing/why/sp_ttl02.png" width="179" alt="왜 두산위브더제니스 센트럴시티인가?">
      </h1>
      <img loading="lazy" class="img01" src="/images/landing/why/img01.png" width="675" alt="박소라 과장">
      <img loading="lazy" class="spImg01" src="/images/landing/why/sp_img01.png" width="208" alt="박소라 과장">
      <div class="pList">
        <dl v-for="(item, index) in pListItems" :key="index" :ref="el => pListItemsRef[index] = el">
          <dt>{{ item.title }}</dt>
          <dd>{{ item.content }}</dd>
        </dl>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const ttl01Ref = ref(null);
const ttl02Ref = ref(null);
const spTtl02Ref = ref(null);
const pListItemsRef = ref([]); // ref 배열 초기화

const pListItems = [
  { title: "계약금 5%로, 입주 때까지 추가 목돈 無", content: "후분양과는 달리 선분양이기 때문에 입주 때까지 자금 준비에 여유가 있어 부담이 적고, 중도금 무이자 단지로 추가 부담이 없음" },
  { title: "입주시기(2027년), 대구 부동산 호황 전망", content: "최근 인허가 및 착공 물량 급감으로 희소가치가 높아져 2~3년 뒤 집값이 오를 수 있고, 지역의 준공 후 미분양도 소진 될 전망" },
  { title: "대구에서 미래 개발비전이 가장 풍부한 곳", content: "학정지구단위 계획과 공항프런트 개발 발표, 대구경북신공항 및 50사단 이전 시 수혜가 예상되는 대구의 큰 비전이 모이는 곳" },
  { title: "희소가치 높은 1,000세대 이상 대단지 프리미엄", content: "대단지 아파트는 그 규모만큼 풍부한 부대시설과 우수한 상품성 및 상징성으로 지역 내 시세를 리딩하는 프리미엄 아파트가 된다!" },
  { title: "검증된 두산위브더제니스의 브랜드파워", content: "대구의 랜드마크이자 대구 상위 1%를 위한 최고급 아파트로 인정받는 브랜드로, 향후 칠곡 내에서도 랜드마크의 자부심을 선사할 것이다" }
];

onMounted(() => {
  const options = {
    threshold: 0.2, // 요소가 20% 보이면 애니메이션 트리거
    rootMargin: '0px 0px -200px 0px',
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
      }
    });
  }, options);

  // Observe each element for the animation
  observer.observe(ttl01Ref.value);  // .ttl01 요소를 감지하여 애니메이션 적용
  observer.observe(ttl02Ref.value);  // .ttl02 요소를 감지하여 애니메이션 적용
  observer.observe(spTtl02Ref.value);  // .spTtl02 요소 감지

  // pListItems 요소들에도 적용
  pListItemsRef.value.forEach(item => observer.observe(item)); // 배열로 설정된 각 요소를 observe
});
</script>

<style scoped>
  .ttl02, .spTtl02, .pList dl {
    opacity: 0;
    transform: translateX(-50px); /* 기본적으로 왼쪽에서 시작 */
    transition: opacity 0.6s ease-out, transform 0.6s ease-out;
  }

  /* .ttl01 오른쪽에서 왼쪽으로 나타나는 애니메이션 */
  .ttl01 {
    opacity: 0;
    transform: translateX(100px); /* 오른쪽에서 시작 */
    transition: opacity 0.6s ease-out, transform 0.6s ease-out;
  }

  .ttl01.animate {
    opacity: 1;
    transform: translateX(0); /* 왼쪽으로 이동하여 제자리 */
  }

  /* 풍선처럼 부풀어오르는 애니메이션 */
  .ttl02.animate, .spTtl02.animate {
    opacity: 1;
    transform: scale(1); /* 원래 크기로 돌아옴 */
    animation: balloonPop 0.8s ease-out forwards;
  }

  @keyframes balloonPop {
    0% {
      transform: scale(0.5);
    }
    60% {
      transform: scale(1.1); /* 살짝 더 부풀어오름 */
    }
    100% {
      transform: scale(1); /* 원래 크기로 */
    }
  }

  /* 왼쪽에서 오른쪽으로 나타나는 애니메이션 */
  .pList dl.animate {
    opacity: 1;
    transform: translateX(0); /* 왼쪽에서 원래 위치로 */
  }

  /* 배경 요소들에 대해 부드럽게 더 넓은 범위로 맴도는 애니메이션 */
  .bg span:nth-child(1), 
  .bg span:nth-child(2), 
  .bg span:nth-child(3) {
    animation: floatAround1 20s infinite cubic-bezier(0.25, 1, 0.5, 1);
  }

  /* 각각의 배경 요소들에 대해 다른 애니메이션을 적용하여 제각각 움직이게 함 */
  .bg span:nth-child(2) {
    animation: floatAround2 25s infinite cubic-bezier(0.25, 1, 0.5, 1);
  }

  .bg span:nth-child(3) {
    animation: floatAround3 30s infinite cubic-bezier(0.25, 1, 0.5, 1);
  }

  /* 첫 번째 배경 요소의 애니메이션 */
  @keyframes floatAround1 {
    0% {
      transform: translate(0, 0) rotate(0deg) scale(1);
    }
    50% {
      transform: translate(40px, -20px) rotate(10deg) scale(1.1); /* 더 넓은 범위로 이동하고 회전 */
    }
    100% {
      transform: translate(0, 0) rotate(0deg) scale(1);
    }
  }

  /* 두 번째 배경 요소의 애니메이션 */
  @keyframes floatAround2 {
    0% {
      transform: translate(0, 0) rotate(0deg) scale(1);
    }
    50% {
      transform: translate(-35px, 30px) rotate(-8deg) scale(1.08); /* 더 넓은 범위로 이동하고 회전 */
    }
    100% {
      transform: translate(0, 0) rotate(0deg) scale(1);
    }
  }

  /* 세 번째 배경 요소의 애니메이션 */
  @keyframes floatAround3 {
    0% {
      transform: translate(0, 0) rotate(0deg) scale(1);
    }
    50% {
      transform: translate(30px, -40px) rotate(7deg) scale(1.1); /* 더 넓은 범위로 이동하고 회전 */
    }
    100% {
      transform: translate(0, 0) rotate(0deg) scale(1);
    }
  }




  .why {
    background: #dce2f6;
    color: #000f3a;
    position: relative;
  }
  .why .bgTop {
    background: url("/images/landing/why/bg_top.png") no-repeat left bottom;
    background-size: 100% auto;
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0);
    width: 2688px;
    height: 735px;
    top: -252px;
  }
  .why .bgTop img {
    width: 100%;
    height: auto;
  }

  .why_inner {
    max-width: 840px;
    margin: 0 auto;
    position: relative;
    height: 680px;
    padding-top: 210px;
  }
  .bg {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
  }
  .bg span:nth-child(1),
  .bg span:nth-child(2),
  .bg span:nth-child(3) {
    display: block;
    position: absolute;
  }
  .bg span:nth-child(1) {
    top: 70px;
    right: -490px;
    width: 577px;
    height: 518px;
    background: url("/images/landing/why/bg01.png") no-repeat center center;
    background-size: 100% auto;
  }

  .bg span:nth-child(2) {
    bottom: -290px;
    right: -340px;
    width: 594px;
    height: 594px;
    background: url("/images/landing/why/bg02.png") no-repeat center center;
    background-size: 100% auto;
  }

  .bg span:nth-child(3) {
    bottom: 60px;
    left: -690px;
    width: 809px;
    height: 623px;
    background: url(/images/landing/why/bg03.png) no-repeat center center;
    background-size: 100% auto;
  }

  .ttl {
    position: absolute;
    left: -270px;
    top: -110px;
    width: 682px;
    text-align: center;
  }
  .ttl img {
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0);
  }
  .ttl .ttl01 {
    top: 0;
  }
  .ttl .ttl02 {
    top: 80px;
  }

  .ttl .spTtl02 {
    display: none;
  }

  .img01 {
    position: absolute;
    left: -330px;
    top: 90px;
  }
  .spImg01 {
    display: none;
  }
  .pList {
    position: absolute;
    top: 165px;
    left: 330px;
    width: 650px;
  }

  .pList dt{
    font-size: 27px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  .pList dl {
    position: relative;
    margin-top: 25px;
  }
  .pList dl::before {
    position: absolute;
    font-size: 60px;
    font-weight: 600;
    color: #bc9167;
    padding-top: 10px;
    left: -60px;
  }
  .pList dl:nth-child(2),
  .pList dl:nth-child(4) {
    margin-left: 50px;
  }

  .pList dl:nth-child(3) {
    margin-left: 80px;
  }

  .pList dl:nth-child(1)::before {
    content: "1.";
  }
  .pList dl:nth-child(2)::before {
    content: "2.";
  }
  .pList dl:nth-child(3)::before {
    content: "3.";
  }
  .pList dl:nth-child(4)::before {
    content: "4.";
  }
  .pList dl:nth-child(5)::before {
    content: "5.";
  }


  /* sp */
@media only screen and (max-width: 950px) {


  .why {

  }
  .why .bgTop {
    top: -28vw;
    height: 28vw;
    width: 101vw;
  }

  .why_inner {
    max-width: 100%;
    height: auto;
    padding-top: 25vw;
    padding-bottom: 32vw;
  }
  .bg span:nth-child(1) {
    top: 31vw;
    right: -60vw;
    width: 84vw;
    height: 76vw;
  }

  .bg span:nth-child(2) {
    bottom: 20vw;
    right: -28vw;
    width: 74vw;
    height: 74vw;
  }

  .bg span:nth-child(3) {
    bottom: -41vw;
    left: -40vw;
    width: 110vw;
    height: 165vw;
  }

  .ttl {
    top: -18vw;
    left: 35vw;
    width: 0;
  }
  .ttl .ttl01 {
    width: 68vw;
  }
  .ttl .ttl02 {
    display: none;
  }
  .ttl .spTtl02 {
    display: block;
    top: 12vw;
    left: 11vw;
    width: 48vw;
  }

  .img01 {
    display: none;
  }
  .spImg01 {
    display: block;
    width: 57.8vw;
    position: absolute;
    top: -32vw;
    left: -16vw;
  }
  .pList {
    position: relative;
    top: 18vw;
    left: 0;
    width: auto;
    padding: 0 5vw;
    word-break: keep-all;
  }

  .pList dt{
    margin-bottom: 1vw;
    font-size: 4.5vw;
    line-height: 130%;
  }
  .pList dd {
    font-size: 3.8vw;
    line-height: 140%;
  }
  .pList dd br {
    display: none;
  }
  .pList dl {
    margin-top:3vw;
    padding-left: 12vw;
  }
  .pList dl::before {
    font-size: 11vw;
    padding-top: 2vw;
    left: 0;
  }
  .pList dl:nth-child(2),
  .pList dl:nth-child(3),
  .pList dl:nth-child(4) {
    margin-left: 0;
  }
}

</style>