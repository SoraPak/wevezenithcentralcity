<template>
  <div class="bodWrap">
    <header>
      <h1 class="logo"><nuxt-link to="/"><img src="/images/logo.svg" alt="학정역 두산위브더제니스 센트럴시티"></nuxt-link></h1>
      <nav>
        <ul>
          <li><nuxt-link to="/about">사업개요</nuxt-link></li>
          <li><nuxt-link to="/location">입지여건</nuxt-link></li>
          <li><nuxt-link to="/complex">단지안내</nuxt-link></li>
          <li><nuxt-link to="/space">세대안내</nuxt-link></li>
        </ul>
      </nav>
      <div class="tel"><small>010)</small>8236.8942</div>
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
header{
  display:flex;
  justify-content: center;
  
  min-height: 80px;
  padding: 0 10px;
  border-bottom: 5px solid #084290;
}
main {
  flex: 1;
}
.logo {
  display: flex;
  margin-right: auto;
}
.logo a{
  display: flex;
  align-items: center;
}
.logo img{
  width: 200px;
  height: auto;

}
.tel {
  margin-left: auto;
  display: flex;
  align-items: center;
  font-size: 30px;
  font-weight: 600;
}
.tel small {
  font-size: 60%;
}
nav {
  display: flex;
  justify-content: center;
  flex: 1;
  text-align: center;
  margin: 0 10px;
  max-width: 500px;
}
nav a,
nav a:hover {
  color: #3b3838;
}
nav ul {
  display: flex;
  flex: 1;
}
nav ul li {
  display: flex;
  flex: 1;
  text-align: center;
}
nav ul li a{
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  align-items: center;
}
nav ul li a::before{
  content: "";
  display: block;
  width: 54px;
  height: 54px;
  background: #e06f6f;
}
</style>
