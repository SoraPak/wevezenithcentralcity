<template>
  <div ref="rNavRef" class="rNav">
    <div class="section01">
      <img loading="lazy" src="/images/landing/r_nav/text01.png" width="75" alt="선착순 분양중">
    </div>
    <div class="section02">
      <p class="telNo"><a href="tel:1555-1924" target="_blank"><span>Tel:</span><span>1555</span><span>1924</span></a></p>
    </div>
    <div class="section03">
      <a class="kakaoBut" href="https://open.kakao.com/me/wevehj" target="_blank">
        
        <span><img loading="lazy" src="/images/landing/r_nav/kakao.svg" width="45" alt=""></span>
        톡상담/예약
      </a>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const rNavRef = ref(null);
const footerRef = ref(null);

onMounted(() => {
  // footer 컴포넌트를 선택
  const footerElement = document.querySelector('footer');

  if (!footerElement) {
    console.warn('Footer element not found');
    return;
  }

  const options = {
    root: null,
    threshold: 0.1, // footer의 10%가 화면에 보일 때 트리거
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        rNavRef.value.classList.add('min');
      } else {
        rNavRef.value.classList.remove('min');
      }
    });
  }, options);

  // footer 요소 관찰 시작
  observer.observe(footerElement);
});
</script>

<style scoped>
.rNav {
  border: 1px solid #b5eeff4d;
  position: fixed;
  right: calc((100vw - 840px) / 2 - 300px); /* 840px 본문을 기준으로 오른쪽 정렬 */
  top: 100px;
  width: 130px;
  background-color: #000f3a;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 2px;
  z-index: 1000;
  min-height: 675px;
  overflow: hidden;
  transition: all 0.3s ease;
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
  z-index: 2;
}
.section02 {
  position: absolute;
  width: 100%;
  bottom: 103px;
  background: url("/images/landing/r_nav/img01.png") no-repeat center 115px;
  background-size: 287px auto;
  height: 376px;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.section03 {
  position: absolute;
  width: 100%;
  bottom: -10px;
  height: 150px;
  background-color: #0f308c;
}
.kakaoBut {
  color: #fae100;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 35px;
  overflow: visible; /* 이미지가 버튼 밖으로 튀어나가도록 설정 */
}

/* 튀어오르는 애니메이션 정의 */
@keyframes bounce {
  0% {
    transform: translateY(0) scaleY(1); /* 처음 위치와 기본 크기 */
    animation-timing-function: ease-out; /* 빠르게 튀어오름 */
  }
  15% {
    transform: translateY(-30px) scaleY(1.1); /* 위로 튀어오를 때 height가 커짐 */
    animation-timing-function: ease-out; /* 높이 올라갈수록 느려짐 */
  }
  20% {
    transform: translateY(-30px) scaleY(1.1); /* 멈칫 */
    animation-timing-function: ease-in; /* 빠르게 떨어짐 */
  }
  35% {
    transform: translateY(0) scaleY(0.9); /* 내려올 때 height가 줄어듦 */
  }
  50% {
    transform: translateY(0) scaleY(1); /* 원래 위치로 돌아옴 */
  }
  100% {
    transform: translateY(0) scaleY(1); /* 마지막 프레임에서 4초 대기 */
  }
}

.kakaoBut > span {
  background-color: #fae100;
  border-radius: 13px;
  display: flex;
  width: 62px;
  height: 62px;
  margin-bottom: 5px;
  transition: background-color 0.3s ease, transform 0.3s ease;
}
.kakaoBut > span:hover {
  background-color: #fff069;
  transform: scale(1.1);

}

.kakaoBut img {
  width: 62px;
  height: 62px;
  border-radius: 13px;
  animation: bounce 2s ease-in-out infinite; /* 1.5초 애니메이션, 4초 대기 */
  position: relative; /* 튀어오름 애니메이션을 위해 relative 사용 */
  z-index: 2; /* 이미지가 위로 튀어나오도록 z-index 설정 */
  animation-play-state: running;
}
.kakaoBut:hover img {
  animation: none;
}

.telNo {
  position: absolute;
  font-size: 39px;
  color: #f5f210;
  font-weight: bold;
  left: 50%;
  transform: translate(-50%, 0);
}
.telNo a {
  color: #f5f210;
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

.rNav.min{
  top: auto;
  bottom: 0;
  right: 0;
  min-height: 135px;
  background: #0f308c;
}
.rNav.min .section01 {
  display: none;
}
.rNav.min .section02 {
  display: none;
}


@media only screen and (max-width: 1450px) {
  .rNav {
    right: 0;
  }
}
@media only screen and (max-height: 860px) {
  .rNav {
    top: auto;
    bottom: 0;
  }
}
@media only screen and (max-height: 680px) {
  .rNav {
    min-height: 495px;
  }
  .section01 {
    display: none;
  }
}
@media only screen and (max-height: 500px) {
  .rNav {
    min-height: 255px;
    background: #0f308c;
  }
  .section02 {
    bottom: -143px;
    background: none;
  }
}
</style>
