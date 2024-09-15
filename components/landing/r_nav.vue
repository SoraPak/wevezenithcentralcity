<template>
 <div class="rNav">
    <div class="section01">
      <img src="/images/landing/r_nav/text01.png" width="75" alt="선착순 분양중">
    </div>
    <div class="section02">
      <p class="telNo"><span>010)</span><span>9357</span><span>0669</span></p>
    </div>
  </div>
</template>
<style scoped>
.rNav {
  border: 1px solid #b5eeff4d;
  position: fixed;
  right: calc((100vw - 840px) / 2 - 320px); /* 840px 본문을 기준으로 오른쪽 정렬 */
  top: 100px;
  width: 130px;
  background-color: #000f3a;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 2px;
  z-index: 1000;
  min-height: 565px;
  overflow: hidden;
}
.section01 {
  background: url("/images/landing/r_nav/bg.png") no-repeat center center;
  background-size: 178px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 178px;
  height: 212px;
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translate(-50%, 0);
}
.section02 {
  position: absolute;
  width: 100%;
  top: 190px;
  background: url("/images/landing/r_nav/img01.png") no-repeat center 115px;
  background-size: 287px auto;
  height: 700px;
}
.telNo {
  position: absolute;
  font-size: 39px;
  color: #f5f210;
  font-weight: bold;
  left: 50%;
  transform: translate(-50%, 0);
}
.telNo span:nth-child(1){
  font-size: 60%;
}
.telNo span:nth-child(2){
  margin-top: 8px;
}
.telNo span:nth-child(3){
  margin-top: 12px;
}

.telNo span {
  display: block;
}
</style>
