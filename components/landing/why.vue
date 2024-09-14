<template>
  <section class="why">
    <div class="bgTop"><img src="/images/landing/why/bg_top_s.png" alt=""></div>
    <div class="why_inner"> 
      <div class="bg"><span></span><span></span><span></span></div>

    </div>
  </section>
</template>

<style scoped>
  .why {
    background: #dce2f6;
    color: #000f3a;
    position: relative;
  }
  .why .bgTop {
    background: url("/images/landing/why/bg_top.png") no-repeat left bottom;
    background-size: 100% auto;
    position: absolute;
    width: 100%;
    top: -252px;
  }
  .why .bgTop img {
    width: 100%;
    height: auto;
  }
  .why_inner {
    width: 840px;
    margin: 0 auto;
    position: relative;
    height: 740px;
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
    top: -210px;
    right: -490px;
    width: 577px;
    height: 518px;
    background: url("/images/landing/why/bg01.png") no-repeat center center;
    background-size: 100% auto;
  }

  .bg span:nth-child(2) {
    bottom: 0;
    left: -420px;
    width: 594px;
    height: 594px;
    background: url("/images/landing/why/bg02.png") no-repeat center center;
    background-size: 100% auto;
  }

  .bg span:nth-child(3) {
    bottom: -20px;
    right: -900px;
    width: 529px;
    height: 623px;
    background: url("/images/landing/why/bg03.png") no-repeat center center;
    background-size: 100% auto;
  }

</style>