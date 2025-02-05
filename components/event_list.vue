<template>
  <section class="list" id="list">
    <h1 class="ttl">종료된 행사</h1>
    <ul>
      <!-- li>
      <nuxt-link to="/event/2501">
        <img src="/og_img_2501.png" width="100%" alt="">
      </nuxt-link>
      </li -->
      <li>
      <nuxt-link to="/event/2412_2">
        <img src="/og_img_2412_2.png" width="100%" alt="">
      </nuxt-link>
      </li>
      <li>
      <nuxt-link to="/event/2412">
        <img src="/og_img_2412.png" width="100%" alt="">
      </nuxt-link>
      </li>
      <li>
      <nuxt-link to="/event/2411">
        <img src="/og_img_2411.png" width="100%" alt="">
      </nuxt-link>
      </li>
      <li>
      <nuxt-link to="/event/2410">
        <img src="/og_img_2410.jpg" width="100%" alt="">
      </nuxt-link>
      </li>
      <li>
      <nuxt-link to="/event/24">
        <img src="/og_img_24.png" width="100%" alt="">
      </nuxt-link>
      </li>
      <li></li>
    </ul>
  </section>
</template>
<style scoped>
.list {
  max-width: 840px;
  margin: 0 auto;
  padding: 30px 0;
  position: relative;
  z-index: 1;
}
.list .ttl {
  text-align: center;
  font-size: 24px;
}
.list > ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  
}
.list > ul li {
  width: 32%;
  margin: 10px 0;
}
.list > ul li a {
  display: block;
}
.list > ul li img {
  display: block;
}
@media only screen and (max-width: 950px) {
  .list {
    border-top: .4vw solid #fff;
    padding: 5vw 0;
    box-sizing: border-box;
    margin: 0 5vw;
  }
  .list > ul {
    display: block;
  }
  .list > ul li {
    width: 100%;
    margin: 4vw 0;
  }
}
</style>