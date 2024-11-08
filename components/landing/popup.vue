<template>
  <section :class="{'popup': true, 'hide-popup': !isPopupOpen, 'align-start': isAlignStart}" @click.self="closePopup">
    <div class="popupCon" ref="popupConRef">
      <!-- 닫기 버튼을 팝업 컴포넌트 내부에 포함 -->
      <button @click="closePopup">× 닫기</button>
      <div class="popupCon_body">
        <!-- slot을 통해 팝업 내용을 동적으로 설정 -->
        <slot></slot>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, watch, onMounted, nextTick } from 'vue';

// 팝업 상태 관리
const isPopupOpen = ref(false);
const isAlignStart = ref(false); // align-items: start 조건
const popupConRef = ref(null);

const openPopup = () => {
  isPopupOpen.value = true;
};

const closePopup = () => {
  isPopupOpen.value = false;
};

// 팝업이 열리면 body 스크롤을 막고, 닫힐 때 허용
watch(isPopupOpen, async (newVal) => {
  if (newVal) {
    document.body.style.overflow = 'hidden';
    await nextTick(); // DOM 업데이트 후 실행
    checkPopupHeight();
  } else {
    document.body.style.overflow = '';
  }
});

// 팝업 높이 및 뷰포트 비교하여 align-items 조정
const checkPopupHeight = () => {
  const popupConElement = popupConRef.value;
  const viewportHeight = window.innerHeight;
  const popupConHeight = popupConElement.offsetHeight;
  const marginTop = parseFloat(getComputedStyle(popupConElement).marginTop);
  const marginBottom = parseFloat(getComputedStyle(popupConElement).marginBottom);
  
  const totalHeight = popupConHeight + marginTop + marginBottom;
  
  if (totalHeight > viewportHeight) {
    isAlignStart.value = true;
  } else {
    isAlignStart.value = false;
  }
};

onMounted(() => {
  // 윈도우 리사이즈 시에도 높이를 다시 계산
  window.addEventListener('resize', checkPopupHeight);
});

// openPopup 함수를 외부에서 사용할 수 있도록 expose
defineExpose({
  openPopup
});
</script>


<style scoped>
  .popup {
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    z-index: 10000;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow-y: auto;
    opacity: 1;
    visibility: visible;
    transition: opacity 0.5s ease, visibility 0.5s ease;
  }
.align-start {
  align-items: start;
}
  .hide-popup {
    opacity: 0;
    visibility: hidden;
  }

  .popup::before{
    content: "";
    display: block;
    background: #000000a5;
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
  }
  .popupCon {
    background: #fff;
    color: #000;
    z-index: 2;
    position: relative;
    text-align: center;
    font-size: 18px;
    box-sizing: border-box;
    overflow: hidden;
    border-radius: 10px;
    transition: transform 0.5s ease, opacity 0.5s ease;
    margin: 5vh;
  }
  .hide-popup .popupCon {
    transform: translateY(50px);
    opacity: 0;
  }
  .popupCon_body {
    padding:20px;
  }
  .popupCon button {
    background: none;
    border: none;
    font-size: 23px;
    cursor: pointer;
    margin: 0;
    width: 100%;
    padding: 7px 10px;
    background: #e0dffc;
    display: flex;
    justify-content: center;
    align-items: center;
  }


/* sp */
@media only screen and (max-width: 950px) {
  .popupCon {
    width: 100%;
    margin: 3vw;
    font-size: 4.5vw;
    border-radius: 1vw;
  }
  .popupCon button {
    font-size: 6vw;
  }
  .popupCon_body {
    padding:3vw;
  }
}
</style>
