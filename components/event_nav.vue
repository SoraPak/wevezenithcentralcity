<template>
  <ul class="nav">
    <li v-if="!hideEventList"><nuxt-link to="/event_list#list">이벤트 목록</nuxt-link></li>
    <li><nuxt-link to="/">메인 페이지</nuxt-link></li>
  </ul>
</template>

<script setup>
defineProps({
  hideEventList: Boolean // true이면 "이벤트 목록"을 숨김
});
</script>

<style scoped>
.nav, .nav li {
  display: flex;
  justify-content: center;
}
.nav {
  width: 90%;
  margin: 0 auto;
  border-top: 2px solid #fff;
  padding: 20px 0;
  position: relative;
  z-index: 10;
}
.nav li {
  margin: 10px;
}
.nav a {
  border: 2px solid #fff;
  padding: 10px 20px;
  color: #fff;
  background-color: #000f3a;
}

/* sp */
@media only screen and (max-width: 950px) {
  .nav {
    width: 90%;
    margin: 0 auto;
    border-top: .4vw solid #fff;
    padding: 3vw 0 5vw;
  }
  .nav li {
    margin: 3vw;
  }
  .nav a {
    border: .4vw solid #fff;
    padding: 2vw 4vw;
    font-size: 4vw;
  }
}
</style>
