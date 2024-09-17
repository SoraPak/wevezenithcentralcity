<template>
  <section class="community">
    <h1 class="ttl">
      <img src="/images/landing/community/ttl.png" width="584" alt="입주민을 위한 고품격 커뮤니티 CLUB ZENITH">
    </h1>
    <img class="img01" src="/images/landing/community/img.jpg" width="885" alt="">

    <!-- 롤링 배너 -->
    <div class="rolling-container">
      <ul class="imgList" ref="imgListRef">
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

// 원본 아이템 리스트
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

onMounted(() => {
  const imgList = imgListRef.value;
  const itemWidth = imgList.children[0].clientWidth + 20; // 각 아이템의 너비 + 간격
  const totalItems = items.value.length;

  // 처음에는 가운데 실제 리스트를 보여줌 (복제 리스트의 중간 지점으로 시작)
  translateX = -(totalItems * itemWidth);
  imgList.style.transform = `translateX(${translateX}px)`;

  // 무한 롤링 구현
  interval = setInterval(() => {
    translateX -= 1; // 1px씩 왼쪽으로 이동
    imgList.style.transition = "transform 0.05s linear";
    imgList.style.transform = `translateX(${translateX}px)`;

    // 맨 끝에 도달하면 트랜지션 없이 처음으로 되돌아감
    if (Math.abs(translateX) >= totalItems * itemWidth * 2) {
      imgList.style.transition = "none"; // 트랜지션 제거
      translateX = -(totalItems * itemWidth); // 중간으로 복귀
      imgList.style.transform = `translateX(${translateX}px)`;

      setTimeout(() => {
        imgList.style.transition = "transform 0.05s linear"; // 다시 트랜지션 활성화
      }, 50);
    }
  }, 20); // 배너 이동 속도
});

onBeforeUnmount(() => {
  clearInterval(interval); // 컴포넌트가 해제될 때 인터벌 정리
});
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
}

.imgListItem img {
  width: 371px; /* 이미지의 너비를 고정 */
  margin-bottom: 10px;
}

.imgListItem span {
  font-size: 16px;
  color: #000f3a;
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
  .imgListItem img {
    width: 55vw;
    margin-bottom: 1vw;
  }
  .imgListItem span {
    font-size: 3.1vw;
  }
}
</style>
