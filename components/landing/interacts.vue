<template>
  <div class="interacts">
    <button v-if="isDesktop" @click="addToBookmark" class="bookmark">PC: 즐겨찾기 추가</button>
    <button v-else @click="addToHomeScreen" class="bookmark">모바일: 홈 화면 추가</button>
    <button class="share" @click="openPopup">공유하기</button>
  </div>
  <Popup ref="popupRef">
    <template #default>
      <div>
        <h2>공유하기</h2>
        <button @click="closePopup">닫기</button>
      </div>
    </template>
  </Popup>
</template>

<script setup>
import Popup from '~/components/landing/popup2.vue';
import { ref, onMounted } from 'vue';

// Popup 컴포넌트의 openPopup, closePopup 메서드 호출을 위해 ref 사용
const popupRef = ref(null);

const openPopup = () => {
  popupRef.value?.openPopup(); // Popup 컴포넌트의 openPopup 메서드 호출
};

const closePopup = () => {
  popupRef.value?.closePopup(); // Popup 컴포넌트의 closePopup 메서드 호출
};

// PC와 모바일 구분 및 PWA 설치 프롬프트
const isDesktop = ref(false); // PC 여부
const deferredPrompt = ref(null); // PWA 설치 프롬프트 저장

// PC에서 즐겨찾기 추가 기능
const addToBookmark = () => {
  const title = document.title;
  const url = window.location.href;

  if (window.external && 'AddFavorite' in window.external) {
    // Internet Explorer에서 동작
    window.external.AddFavorite(url, title);
  } else if (window.sidebar && window.sidebar.addPanel) {
    // Firefox에서 동작
    window.sidebar.addPanel(title, url, '');
  } else {
    // Chrome, Edge 등에서 실행 불가로 안내 메시지 출력
    alert('현재 브라우저는 자동 즐겨찾기 추가를 지원하지 않습니다. Ctrl+D를 눌러 추가해주세요.');
  }
};

// 모바일에서 홈 화면 추가 기능
const addToHomeScreen = async () => {
  if (deferredPrompt.value) {
    deferredPrompt.value.prompt(); // PWA 설치 프롬프트 실행
    const choiceResult = await deferredPrompt.value.userChoice;
    if (choiceResult.outcome === 'accepted') {
      alert('홈 화면에 추가되었습니다!');
    } else {
      alert('홈 화면 추가가 취소되었습니다.');
    }
    deferredPrompt.value = null; // 프롬프트 초기화
  } else {
    alert('이 브라우저는 홈 화면 추가를 지원하지 않습니다.');
  }
};

// 디바이스 타입 감지 및 PWA 프롬프트 이벤트 저장
onMounted(() => {
  isDesktop.value = window.innerWidth >= 1024;

  // PWA 설치 프롬프트 저장
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt.value = e;
  });
});
</script>

<style scoped>
.interacts {
  position: fixed;
  z-index: 100;
}

.bookmark,
.share {
  cursor: pointer;
  background-color: #ddd;
  border: none;
  padding: 10px 15px;
  margin: 5px;
  font-size: 16px;
  border-radius: 5px;
}

.bookmark:hover,
.share:hover {
  background-color: #bbb;
}
</style>
