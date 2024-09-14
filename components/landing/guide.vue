<template>
  <section class="guide">
    <div class="guide_inner">



    </div>
  </section>
</template>

<style scoped>
  .guide {
    background: #082379;
    color: #fff;
    position: relative;
  }
  .guide::before {
    content: "";
    position: absolute;
    background: url("/images/landing/guide/bg_top.png") no-repeat center bottom;
    background-size: 2688px auto;
    width: 2688px;
    height: 923px;
    top: -595px;
    left: 50%;
    transform: translate(-50%, 0);
    
  }
  .guide_inner {
    width: 840px;
    margin: 0 auto;
    position: relative;
    height: 490px;
  }
</style>