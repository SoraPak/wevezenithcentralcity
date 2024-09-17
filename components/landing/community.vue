<template>
  <section class="community">
    <h1 class="ttl">
      <img src="/images/landing/community/ttl.png" width="584" alt="입주민을 위한 고품격 커뮤니티 CLUB ZENITH">
    </h1>
    <img class="img01" src="/images/landing/community/img.jpg" width="885" alt="">

    <!-- Swiper 슬라이더 -->
    <swiper
      :slides-per-view="'auto'"
      :space-between="20"
      :loop="true"
      :autoplay="{ delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true }"
      :speed="2000"
      :centered-slides="true"
      :free-mode="true"
      class="imgListSwiper"
    >
      <!-- 원본 이미지 리스트 -->
      <swiper-slide v-for="(item, index) in items" :key="index" class="imgList">
        <img :src="item.imgSrc" :alt="item.altText">
        <span>{{ item.text }}</span>
      </swiper-slide>
    </swiper>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';

const items = ref([
  { imgSrc: '/images/landing/community/img01.jpg', text: '피트니스 센터, 웨이트 존, GX룸', altText: '피트니스 센터' },
  { imgSrc: '/images/landing/community/img02.jpg', text: '자녀들을 위한 키즈카페와 작은 도서관', altText: '키즈카페' },
  { imgSrc: '/images/landing/community/img03.jpg', text: '카페테리아와 휴게 라운지', altText: '카페테리아' },
  { imgSrc: '/images/landing/community/img04.jpg', text: '칠곡 최초의 온탕, 냉탕 사우나', altText: '온탕 냉탕 사우나' },
  { imgSrc: '/images/landing/community/img05.jpg', text: '실내 골프 연습장 및 스크린 골프', altText: '스크린 골프' }
]);
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

.tlt, .img01, .imgListSwiper {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

.tlt {
  top: -20px;
}

.img01 {
  top: 155px;
}

.imgListSwiper {
  top: 885px;
  width: 100%;
}

.swiper-slide {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: auto;
}

.swiper-slide img {
  display: block;
  width: 371px;
  margin-bottom: 10px;
}

.swiper-slide span {
  font-size: 16px;
  color: #000f3a;
}

/* sp */
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
  .imgListSwiper {
    top: 112vw;
    font-size: 3.4vw;
  }
  .swiper-slide img {
    width: 55vw;
  }
}
</style>
