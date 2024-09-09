<template>
  <div class="bodWrap">
    <header>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
        </ul>
      </nav>
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
