<template>
  <section id="popupHalloween" class="popup halloween">
    <div class="popup_content">
      <p>
        <span>할로윈 이벤트가 시작되었어요</span>
        <a href="#halloween">쿠폰받으러 가기</a>
      </p>
      <div class="popup_footer">
        <span>더이상 안보기</span>
        <button>닫기</button>
      </div>

    </div>
  </section>
</template>

<style scoped>
  /* 
    .popup::before{
      content: "";
      display: block;
      background: #00000091;
      position: fixed;
      width: 100%;
      height: 100%;
      left: 0;
      right: 0;
      bottom: 0;
      top: 0;
      z-index: 1000;
    }
  */
  .popup_content {
    position: fixed;
    z-index: 1000;
    bottom: 0;
    color: #fff;
    background: url("/images/landing/halloween/bg.jpg") repeat-x center -500px #000f3a;
    background-size: 1844px auto;
    width: 100%;
    max-width: 840px;
    left: 50%;
    transform: translate(-50%, 0);

  }
</style>