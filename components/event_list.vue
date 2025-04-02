<template>
  <section class="list" id="list">
    <h1 class="ttl">종료된 행사</h1>
    <ul>
      <li v-for="event in eventList" :key="event.id">
        <nuxt-link :to="event.link" :style="{ backgroundImage: `url(${event.img})` }">
          <img src="/images/landing/event_list_space.png" width="100%" alt="">
        </nuxt-link>
      </li>
      <li></li>
    </ul>
  </section>
</template>
<script setup>
  const eventList = [
    { id: '2501', link: '/event/2501', img: '/og_img_2501.png' },
    { id: '2412_2', link: '/event/2412_2', img: '/og_img_2412_2.png' },
    { id: '2412', link: '/event/2412', img: '/og_img_2412.png' },
    { id: '2411', link: '/event/2411', img: '/og_img_2411.png' },
    { id: '2410', link: '/event/2410', img: '/og_img_2410.jpg' },
    { id: '24', link: '/event/24', img: '/og_img_24.png' }
  ];
</script>
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
  background-size: 100% auto;
}
.list > ul li img {
  display: block;
}
@media only screen and (max-width: 950px) {
  .list .ttl {
    font-size: 5vw;
  }
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