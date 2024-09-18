<template>
  <ul class="sp_rNav">
    <li class="kakao"><a href="https://open.kakao.com/o/saZEcwPg" target="_blank">카톡상담/예약</a></li>
    <li class="call"><a href="tel:010-9357-0669" target="_blank">전화상담/예약</a></li>
  </ul>
</template>
<style scoped>
.sp_rNav {
  display: flex;
  display: block;
  position: fixed;
  bottom: 0;
  background: #fff;
  height: 13vw;
  z-index: 1001;
  width: 100vw;
  font-size: 4.3vw;
}
.sp_rNav li {
  flex: 1;
  display: flex;
}
.sp_rNav li a {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}
.sp_rNav li a::before {
  content: "";
  display: block;
  width: 10vw;
  height: 10vw;
  background-size: 100% auto;
  margin-right: 1.5vw;
}
.sp_rNav .kakao a {
  background: #fae100;
  color: #371d1e;
}
.sp_rNav .kakao a::before{
  background-image: url("/images/landing/r_nav/kakao.svg");
}

.sp_rNav .call a {
  background: #07299e;
  color: #fff;
}
.sp_rNav .call a::before{
  background-image: url("/images/landing/r_nav/call.svg");
}
</style>
