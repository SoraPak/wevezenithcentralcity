<template>
  <section class="community">
    <h1 class="ttl" ref="ttlRef">
      <img loading="lazy" src="/images/landing/community/ttl.png" width="584" alt="입주민을 위한 고품격 커뮤니티 CLUB ZENITH">
    </h1>
    <img loading="lazy" ref="img01Ref" class="img01" src="/images/landing/community/img.jpg" width="885" alt="">

    <!-- 롤링 배너 -->
    <div class="rolling-container" @mouseenter="stopRolling" @mouseleave="startRolling">
      <ul class="imgList" ref="imgListRef" @mousedown="isMobile ? startDrag : null" @mousemove="isMobile ? onDrag : null" @mouseup="isMobile ? endDrag : null" @mouseleave="isMobile ? endDrag : null" @touchstart="startDrag" @touchmove="onDrag" @touchend="endDrag">
        <li v-for="(item, index) in itemsToShow" :key="index" class="imgListItem">
          <img loading="lazy" :src="item.imgSrc" :alt="item.altText">
          <span>{{ item.text }}</span>
        </li>
      </ul>
    </div>
  </section>
</template>


<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const ttlRef = ref(null);
const img01Ref = ref(null); // img01 요소에 대한 참조 추가
const imgListRef = ref(null);
const items = ref([
  { imgSrc: '/images/landing/community/img01.jpg', text: '피트니스 센터, 웨이트 존, GX룸', altText: '피트니스 센터' },
  { imgSrc: '/images/landing/community/img02.jpg', text: '자녀들을 위한 키즈카페와 작은 도서관', altText: '키즈카페' },
  { imgSrc: '/images/landing/community/img03.jpg', text: '카페테리아와 휴게 라운지', altText: '카페테리아' },
  { imgSrc: '/images/landing/community/img04.jpg', text: '칠곡 최초의 온탕, 냉탕 사우나', altText: '온탕 냉탕 사우나' },
  { imgSrc: '/images/landing/community/img05.jpg', text: '실내 골프 연습장 및 스크린 골프', altText: '스크린 골프' }
]);

const itemsToShow = ref([...items.value, ...items.value, ...items.value]);

let translateX = 0;
let interval;
let isDragging = false;
let startX = 0;
let currentTranslateX = 0;
let isMobile = ref(false);

onMounted(() => {
  isMobile.value = window.innerWidth <= 950;

  const imgList = imgListRef.value;
  const itemWidth = imgList.children[0].clientWidth + 20;
  const totalItems = items.value.length;

  translateX = -(totalItems * itemWidth);
  imgList.style.transform = `translateX(${translateX}px)`;

  // 롤링 배너 시작
  startRolling();

  // Intersection Observer를 이용하여 .ttl 및 .img01 애니메이션 트리거
  const options = {
    threshold: 0.1, // 요소가 10% 보일 때 트리거 (이전보다 더 낮은 비율)
    rootMargin: '0px 0px -300px 0px', // 요소가 화면에 더 늦게 들어올 때 트리거되도록 설정
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (entry.target === ttlRef.value) {
          entry.target.classList.add('animate-down');
          observer.unobserve(entry.target); // 애니메이션 이후에 관찰 중지 (한번만 실행되도록)
        }
        if (entry.target === img01Ref.value) {
          entry.target.classList.add('animate-drop');
          observer.unobserve(entry.target); // 애니메이션 이후에 관찰 중지 (한번만 실행되도록)
        }
      }
    });
  }, options);

  // 요소가 존재하는지 확인 후 관찰 시작
  if (ttlRef.value) {
    observer.observe(ttlRef.value);
  }
  if (img01Ref.value) {
    observer.observe(img01Ref.value);
  }
});

onBeforeUnmount(() => {
  stopRolling();
});

function startRolling() {
  const imgList = imgListRef.value;
  const itemWidth = imgList.children[0].clientWidth + 20;
  const totalItems = items.value.length;

  interval = setInterval(() => {
    translateX -= 1;
    imgList.style.transition = "transform 0.05s linear";
    imgList.style.transform = `translateX(${translateX}px)`;

    if (Math.abs(translateX) >= totalItems * itemWidth * 2) {
      imgList.style.transition = "none";
      translateX = -(totalItems * itemWidth);
      imgList.style.transform = `translateX(${translateX}px)`;

      setTimeout(() => {
        imgList.style.transition = "transform 0.05s linear";
      }, 50);
    }
  }, 20);
}

function stopRolling() {
  clearInterval(interval);
}

function startDrag(event) {
  if (!isMobile.value) return;

  isDragging = true;
  startX = event.type.includes('touch') ? event.touches[0].clientX : event.clientX;
  currentTranslateX = translateX;
  stopRolling();
}

function onDrag(event) {
  if (!isDragging) return;

  const currentX = event.type.includes('touch') ? event.touches[0].clientX : event.clientX;
  const deltaX = currentX - startX;

  translateX = currentTranslateX + deltaX;
  imgListRef.value.style.transform = `translateX(${translateX}px)`;
}

function endDrag() {
  isDragging = false;
  correctPosition();
  startRolling();
}

function correctPosition() {
  const imgList = imgListRef.value;
  const itemWidth = imgList.children[0].clientWidth + 20;
  const totalItems = items.value.length;

  if (translateX > -(totalItems * itemWidth)) {
    imgList.style.transition = "none";
    translateX = -(totalItems * itemWidth * 2) + (translateX + totalItems * itemWidth);
    imgList.style.transform = `translateX(${translateX}px)`;

    setTimeout(() => {
      imgList.style.transition = "transform 0.05s linear";
    }, 50);
  }

  if (Math.abs(translateX) >= totalItems * itemWidth * 2) {
    imgList.style.transition = "none";
    translateX = -(totalItems * itemWidth);
    imgList.style.transform = `translateX(${translateX}px)`;

    setTimeout(() => {
      imgList.style.transition = "transform 0.05s linear";
    }, 50);
  }
}
</script>




<style scoped>
.community {
  position: relative;
  height: 1330px;
  background: #fff;
  color: #000f3a;
}

.community::before {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url("/images/landing/community/bg_bottom.png") no-repeat center bottom;
  background-size: 2688px auto;
}

.ttl {
  opacity: 0;
  transform: translateY(-100px); /* 위에서 시작 */
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.ttl.animate-down {
  opacity: 1;
  transform: translateY(0); /* 제자리로 이동 */
}

.img01 {
  opacity: 0;
  transform: translateY(-200px); /* 위에서 시작 */
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
}

.img01.animate-drop {
  opacity: 1;
  animation: dropAndShake 1s ease-out forwards;
}

/* 위에서 떨어지면서 양옆으로 흔들리는 애니메이션 */
@keyframes dropAndShake {
  0% {
    transform: translateY(-200px);
  }
  60% {
    transform: translateY(20px);
  }
  75% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }

  /* 흔들림 효과 추가 */
  70% {
    transform: translateY(20px) rotate(3deg);
  }
  80% {
    transform: translateY(10px) rotate(-3deg);
  }
  90% {
    transform: translateY(5px) rotate(2deg);
  }
  100% {
    transform: translateY(0) rotate(0);
  }
}


.img01 {
  display: block;
  margin: 10px auto 0;
}

.ttl {
  margin-top: -20px;
  text-align: center;
}

/* 롤링 배너 스타일 */
.rolling-container {
  position: absolute;
  top: 885px;
  width: 100%;
  overflow: hidden;
}

.imgList {
  display: flex;
  transition: transform 0.05s linear;
  line-height: 120%;
  
}

.imgListItem {
  display: flex;
  flex-direction: column;
  margin-right: 20px; /* 간격 조절 */
  flex-shrink: 0; /* 아이템이 줄어들지 않도록 설정 */
  width: 371px;
}

.imgListItem img {
  width: 371px; /* 이미지의 너비를 고정 */
  margin-bottom: 10px;
}

.imgListItem span {
  font-size: 16px;
  color: #000f3a;
  word-break:keep-all;
}

/* 반응형 설정 */
@media only screen and (max-width: 950px) {
  .community {
    height: 161vw;
  }
  .community::before {
    background-size: 101vw auto;
  }
  .ttl {
    margin-top: 0;
    padding-top: 3vw;
  }
  .ttl img {
    width: 81vw;
  }
  .img01 {
    margin-top: 3vw;
    width: 100vw;
  }
  .rolling-container {
    top: 112vw;
  }
  .imgListItem {
    margin-right: 2vw;
    width: 55vw;
  }
  .imgListItem img {
    width: 55vw;
    margin-bottom: 1vw;
  }
  .imgListItem span {
    font-size: 3.1vw;
  }
}
</style>
