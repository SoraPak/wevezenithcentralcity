<template>
  <section class="community">

      <h1 class="ttl"><img src="/images/landing/community/ttl.png" width="584" alt="입주민을 위한 고품격 커뮤니티 CLUB ZENITH"></h1>
      <img class="img01" src="/images/landing/community/img.jpg" width="885" alt="">
      <ol class="imgList">
        <li><img src="/images/landing/community/img01.jpg" width="371" alt="">피트니스 센터, 웨이트 존, GX룸</li>
        <li><img src="/images/landing/community/img02.jpg" width="371" alt="">자녀들을 위한 키즈카페와 작은 도서관</li>
        <li><img src="/images/landing/community/img03.jpg" width="371" alt="">카페테리아와 휴게 라운지</li>
        <li><img src="/images/landing/community/img04.jpg" width="371" alt="">칠곡 최초의 온탕, 냉탕 사우나</li>
        <li><img src="/images/landing/community/img05.jpg" width="371" alt="">실내 골프 연습장 및 스크린 골프</li>
      </ol>


  </section>
</template>

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
  .ttl, .img01, .imgList {
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0);
  }
  .ttl {
    top: -20px;
  }
  .img01 {
    top: 155px;
  }
  .imgList {
    top: 885px;
    display: flex;
    justify-content: center;
  }
  .imgList li{
    margin: 0 13px;
  }
</style>