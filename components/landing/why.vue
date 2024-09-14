<template>
  <section class="why">
    <div class="bgTop"><!-- img src="/images/landing/why/bg_top_s.png" alt="" --></div>
    <div class="why_inner"> 
      <div class="bg"><span></span><span></span><span></span></div>
      <h1 class="ttl">
        <img class="img01" src="/images/landing/why/ttl01.png" width="513" alt="">
        <img class="img02" src="/images/landing/why/ttl02.png" width="681" alt="">
      </h1>
      <img class="img01" src="/images/landing/why/img01.png" width="496" alt="">

    </div>
  </section>
</template>

<style scoped>

  .ttl {
    position: absolute;
    left: 50%;
    top: -110px;
    transform: translate(-50%, 0);
    width: 682px;
    text-align: center;
  }
  .ttl img{
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0);
  }
  .ttl img:first-child {
    top: 0;
  }
  .ttl img:last-child {
    top: 80px;
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
    width: 2688px;
    height: 735px;
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
    top: -90px;
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
    bottom: -20px;
    left: -360px;
    width: 529px;
    height: 623px;
    background: url("/images/landing/why/bg03.png") no-repeat center center;
    background-size: 100% auto;
  }

  .img01 {
    position: absolute;
  }

</style>