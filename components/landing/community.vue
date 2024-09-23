<template>
  <section class="community">
    <h1 class="ttl">
      <img src="/images/landing/community/ttl.png" width="584" alt="입주민을 위한 고품격 커뮤니티 CLUB ZENITH">
    </h1>
    <img class="img01" src="/images/landing/community/img.jpg" width="885" alt="">

    <!-- 롤링 배너 -->
    <div class="rolling-container" @mouseenter="stopRolling" @mouseleave="startRolling">
      <ul class="imgList" ref="imgListRef" @mousedown="isMobile ? startDrag : null" @mousemove="isMobile ? onDrag : null" @mouseup="isMobile ? endDrag : null" @mouseleave="isMobile ? endDrag : null" @touchstart="startDrag" @touchmove="onDrag" @touchend="endDrag">
        <li v-for="(item, index) in itemsToShow" :key="index" class="imgListItem">
          <img :src="item.imgSrc" :alt="item.altText">
          <span>{{ item.text }}</span>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const items = ref([
  { imgSrc: '/images/landing/community/img01.jpg', text: '피트니스 센터, 웨이트 존, GX룸', altText: '피트니스 센터' },
  { imgSrc: '/images/landing/community/img02.jpg', text: '자녀들을 위한 키즈카페와 작은 도서관', altText: '키즈카페' },
  { imgSrc: '/images/landing/community/img03.jpg', text: '카페테리아와 휴게 라운지', altText: '카페테리아' },
  { imgSrc: '/images/landing/community/img04.jpg', text: '칠곡 최초의 온탕, 냉탕 사우나', altText: '온탕 냉탕 사우나' },
  { imgSrc: '/images/landing/community/img05.jpg', text: '실내 골프 연습장 및 스크린 골프', altText: '스크린 골프' }
]);

// 아이템 리스트를 복제하여 양쪽에 추가 (3배로 늘려서 무한 롤링 효과)
const itemsToShow = ref([...items.value, ...items.value, ...items.value]);

const imgListRef = ref(null);
let translateX = 0;
let interval;
let isDragging = false;
let startX = 0;
let currentTranslateX = 0;
let isMobile = ref(false); // 모바일 환경 여부를 판단하는 변수

onMounted(() => {
  isMobile.value = window.innerWidth <= 950; // 화면 크기가 950px 이하일 경우 모바일로 간주

  const imgList = imgListRef.value;
  const itemWidth = imgList.children[0].clientWidth + 20; // 각 아이템의 너비 + 간격
  const totalItems = items.value.length;

  // 처음에는 가운데 실제 리스트를 보여줌 (복제 리스트의 중간 지점으로 시작)
  translateX = -(totalItems * itemWidth);
  imgList.style.transform = `translateX(${translateX}px)`;

  // 모바일 및 PC에서 롤링 시작
  startRolling();
});

onBeforeUnmount(() => {
  stopRolling(); // 컴포넌트 해제 시 롤링 정지
});

function startRolling() {
  const imgList = imgListRef.value;
  const itemWidth = imgList.children[0].clientWidth + 20;
  const totalItems = items.value.length;

  interval = setInterval(() => {
    translateX -= 1; // 1px씩 왼쪽으로 이동
    imgList.style.transition = "transform 0.05s linear";
    imgList.style.transform = `translateX(${translateX}px)`;

    // 끝에 도달하면 트랜지션 없이 처음으로 이동
    if (Math.abs(translateX) >= totalItems * itemWidth * 2) {
      imgList.style.transition = "none";
      translateX = -(totalItems * itemWidth);
      imgList.style.transform = `translateX(${translateX}px)`;

      setTimeout(() => {
        imgList.style.transition = "transform 0.05s linear";
      }, 50);
    }
  }, 20); // 일정한 속도로 이동
}

function stopRolling() {
  clearInterval(interval); // 롤링 멈추기
}

// 스와이프 관련 기능 (모바일에서만 동작)
function startDrag(event) {
  if (!isMobile.value) return; // PC에서는 스와이프 기능을 동작하지 않음

  isDragging = true;
  startX = event.type.includes('touch') ? event.touches[0].clientX : event.clientX;
  currentTranslateX = translateX;
  stopRolling(); // 드래그 중에는 롤링 멈춤
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
  startRolling(); // 드래그 끝나면 롤링 다시 시작
}

function correctPosition() {
  const imgList = imgListRef.value;
  const itemWidth = imgList.children[0].clientWidth + 20;
  const totalItems = items.value.length;

  // 리스트의 양쪽 끝에 복제된 아이템들이 있으므로 복제 영역을 넘어갈 경우 자연스럽게 원본 영역으로 이동
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

.ttl, .img01 {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

.ttl {
  top: -20px;
}

.img01 {
  top: 155px;
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
    top: 0;
  }
  .ttl img {
    width: 81vw;
  }
  .img01 {
    top: 25vw;
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
