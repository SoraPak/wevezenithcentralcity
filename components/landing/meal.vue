<template>
  <section id="meal" class="meal">
    <div class="meal_inner">
      <div class="bg">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div class="bg2">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <h1 class="ttl">
        <span class="ttlG1">
          <img src="/images/landing/meal/ttl01.png" width="402" alt="">
          <img src="/images/landing/meal/ttl02.png" width="187" alt="187">
        </span>
        <span class="ttlG2">
          <img src="/images/landing/meal/ttl03.png" width="461" alt="">
          <img src="/images/landing/meal/ttl04.png" width="381" alt="">
        </span>
      </h1>
      <img class="sora" src="/images/landing/meal/sora.png" width="421" alt="">
      <p class="textG1">
        <img src="/images/landing/meal/text01.png" width="326" alt="">
        <img src="/images/landing/meal/text02.png" width="148" alt="">
        <img src="/images/landing/meal/text03.svg" width="134" alt="">
      </p>
    </div>

  </section>
</template>

<style scoped>
.meal {
  padding-top: 180px;
  background: #fff;
}
.meal_inner {
  min-height: 1530px;
  max-width: 840px;
  margin: 0 auto;
  position: relative;
  padding: 1px;
}
.bg, .bg2 {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
}
.bg2 {
  display: none;
}
.bg > span,
.bg2 > span {
  display: block;
  width: 400px;
  height: 400px;
  background-size: 100% auto;
  background-repeat: no-repeat;
  background-position: center center;
  position: absolute;
}
.bg > span:nth-child(1) {
  background-image: url("/images/landing/meal/cf01.png");
  right: -270px;
  top: -170px;
}
.bg > span:nth-child(2) {
  background-image: url("/images/landing/meal/cf02.png");
  left: 280px;
  top: -130px;
}
.bg > span:nth-child(3) {
  background-image: url("/images/landing/meal/cf03.png");
  left: -240px;
}
.bg > span:nth-child(4) {
  background-image: url("/images/landing/meal/cf04.png");
  right: -160px;
  top: 310px;
}
.bg > span:nth-child(5) {
  background-image: url("/images/landing/meal/cf05.png");
  left: 219px;
  top: 360px;
}
.bg > span:nth-child(6) {
  background-image: url("/images/landing/meal/cf06.png");
  left: -140px;
  top: 420px;

}

.bg2 > span {
  width: 175px;
  height: 175px;
}
.bg2 > span:nth-child(1) {
  background-image: url("/images/landing/meal/f01.png");
}
.bg2 > span:nth-child(2) {
  background-image: url("/images/landing/meal/f02.png");
}
.bg2 > span:nth-child(3) {
  background-image: url("/images/landing/meal/f03.png");
}
.bg2 > span:nth-child(4) {
  background-image: url("/images/landing/meal/f04.png");
}
.bg2 > span:nth-child(5) {
  background-image: url("/images/landing/meal/f05.png");
}
.bg2 > span:nth-child(6) {
  background-image: url("/images/landing/meal/f06.png");
}
.bg2 > span:nth-child(7) {
  background-image: url("/images/landing/meal/f07.png");
}
.bg2 > span:nth-child(8) {
  background-image: url("/images/landing/meal/f08.png");
}

.ttl {
  margin-top: 170px;
}
.ttlG1,
.ttlG2 {
  display: block;
  position: relative;
  text-align: center;
  display: flex;
  align-items: flex-start;
  align-content: flex-start;
  justify-content: center;
}
.ttlG2 {
  margin-top: -80px;
}
.ttlG1 > img:nth-child(1) {
  margin-top: 35px;
  margin-right: 10px;
}
.ttlG2 > img:nth-child(1) {
  margin-top: 65px;
  margin-right: 17px;
}
.sora {
  position: absolute;
  left: 40px;
  top: 460px;
}
.textG1 {
  position: absolute;
  top: 670px;
  left: 450px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.textG1 > img:nth-child(2) {
  margin-top: -19px;
}
.textG1 > img:nth-child(3) {
  transform: rotate(-8deg);
  margin-top: 5px;
}

/* sp */
@media only screen and (max-width: 950px) {
  .meal {
    padding-top: 0;
  }
  .meal_inner {
    min-height: 186vw;
  }
  .bg > span {
    width: 55vw;
    height: 55vw;
  }
  .bg > span:nth-child(1) {
    top: 58vw;
    right: -16vw;
    transform: rotate(-165deg);
  }
  .bg > span:nth-child(2) {
    left: 31vw;
    top: -20vw;
    transform: rotate(-15deg);
  }
  .bg > span:nth-child(3) {
    left: -12vw;
    top: -16vw;
  }
  .bg > span:nth-child(4) {
    right: -20vw;
    top: -15vw;
  }
  .bg > span:nth-child(5) {
    display: none;
  }
  .bg > span:nth-child(6) {
    left: -14vw;
    top: 72vw;

  }
  .ttl {
    margin-top: 24vw;
  }
  .ttlG1 > img:nth-child(1) {
    width: 50vw;
    margin-top: 4vw;
    margin-right: 1vw;
  }
  .ttlG1 > img:nth-child(2) {
    width: 23vw;
  }
  .ttlG2 {
    flex-direction: column;
    margin-top: -21vw;
  }
  .ttlG2 > img:nth-child(1){
    width: 80vw;
    display: block;
    margin: 14vw auto 0;
  }
  .ttlG2 > img:nth-child(2){
    width: 69vw;
    display: block;
    margin: -6vw auto 0;
  }
  .sora {
    width: 70vw;
    top: 65vw;
    left: 15vw;
  }
  .textG1 {
    flex-direction: row;
    left: 21vw;
    top: 115vw;
    
  }
  .textG1 > img:nth-child(1) {
    width: 35vw;
    margin-top: 5vw;
    margin-right: 1vw;
  }
  .textG1 > img:nth-child(2) {
    width: 19vw;
  }
  .textG1 > img:nth-child(3) {
    position: absolute;
    bottom: -24vw;
    width: 20vw;
  }
}
</style>