<template>
  <div class="bodWrap">
    <header>
      <h1>두산위브더제니스 센트럴시티</h1>
      <nav>
        <ul>
          <li><nuxt-link to="/about">사업개요</nuxt-link></li>
          <li><nuxt-link to="/location">입지여건</nuxt-link></li>
          <li><nuxt-link to="/complex">단지안내</nuxt-link></li>
          <li><nuxt-link to="/space">세대안내</nuxt-link></li>
        </ul>
      </nav>
      <div><span>010</span>9357.0669</div>
    </header>
    <main>
      <NuxtPage />
    </main>
    <footer>
      <p>Copyright © 2024 My Website</p>
    </footer>
  </div>
</template>

<style scoped>
.bodWrap {
  display: flex;
  flex-direction: column;
  height: 100%;
}
main {
  flex: 1;
}
</style>
