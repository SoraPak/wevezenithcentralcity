<template>
  <section :class="{'popup': true, 'hide-popup': !isPopupOpen}" @click.self="closePopup">
    <div class="popupCon">
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
import { ref, watch } from 'vue';

// 팝업 상태 관리
const isPopupOpen = ref(false);

const openPopup = () => {
  isPopupOpen.value = true;
};

const closePopup = () => {
  isPopupOpen.value = false;
};

// 팝업이 열리면 body 스크롤을 막고, 닫힐 때 허용
watch(isPopupOpen, (newVal) => {
  if (newVal) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
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
    box-sizing: border-box;
    overflow: hidden;
    border-radius: 10px;
    transition: transform 0.5s ease, opacity 0.5s ease;
  }
  .hide-popup .popupCon {
    transform: translateY(50px);
    opacity: 0;
  }
  .popupCon_body {
    padding:2vh;
  }
  .popupCon button {
    background: none;
    border: none;
    font-size: 1.5rem;
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
  .popup {
    align-items: start;
  }
  .popupCon {
    width: 100%;
    margin: 4vw;
    font-size: 5vw;
    border-radius: 1vw;
  }
  .popupCon button {
    font-size: 6vw;
  }
}
</style>
