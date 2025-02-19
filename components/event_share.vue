<template>
  <!-- 공유 모달 -->
  <div v-if="isShareOpen" class="share">
    <strong class="ttl">공유하기</strong>
    <div class="list">
      <a href="#" @click.prevent="shareToSNS('band')">밴드</a>
      <a href="#" @click.prevent="shareToSNS('line')">LINE</a>
      <a href="#" @click.prevent="shareToSNS('twitter')">X</a>
      <a href="#" @click.prevent="shareToSNS('facebook')">페이스북</a>
      <a href="#" @click.prevent="shareToSNS('kakao')">카카오톡</a>
    </div>
    <button class="copy" @click="copyUrl">
      <span>복사</span>
      <span>{{ shareUrl }}</span>
    </button>
    <button class="close" @click="closeShare">닫기</button>
  </div>

  <!-- 복사 완료 모달 -->
  <div v-if="isCopyDone" class="copyDone">
    <div class="copyDone_comment">
      주소가 복사되었습니다. <br />원하는 곳에 붙여넣기(Ctrl+V)해주세요.
    </div>
    <button class="copyDone_close" @click="isCopyDone = false">닫기</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// 공유 모달 상태
const isShareOpen = ref(false);
const isCopyDone = ref(false);

// 공유할 URL
const shareUrl = 'https://학정역두산위브.kr/event_list';

// 공유 모달 열기/닫기
const openShare = () => {
  isShareOpen.value = true;
};
const closeShare = () => {
  isShareOpen.value = false;
};

// SNS 공유 함수
const shareToSNS = (platform) => {
  let url = '';
  const encodedUrl = encodeURIComponent(shareUrl);

  switch (platform) {
    case 'band':
      url = `https://band.us/plugin/share?body=${encodedUrl}`;
      break;
    case 'line':
      url = `https://social-plugins.line.me/lineit/share?url=${encodedUrl}`;
      break;
    case 'twitter':
      url = `https://twitter.com/intent/tweet?url=${encodedUrl}`;
      break;
    case 'facebook':
      url = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
      break;
    case 'kakao':
      if (window.Kakao) {
        window.Kakao.Link.sendDefault({
          objectType: 'feed',
          content: {
            title: '이벤트 공유',
            description: '종료된 이벤트 확인하기',
            imageUrl: 'https://학정역두산위브.kr/og_img_2501.png',
            link: { webUrl: shareUrl, mobileWebUrl: shareUrl },
          },
        });
        return;
      }
      url = `https://sharer.kakao.com/talk/friends/picker/link?url=${encodedUrl}`;
      break;
  }

  window.open(url, '_blank');
};

// URL 복사 기능
const copyUrl = async () => {
  try {
    await navigator.clipboard.writeText(shareUrl);
    isCopyDone.value = true;
    isShareOpen.value = false; // 복사 후 공유 모달 닫기
  } catch (err) {
    console.error('복사 실패:', err);
  }
};

// 공유 모달을 외부에서 열 수 있도록 expose
defineExpose({ openShare });
</script>

<style scoped>
.share, .copyDone {
  position: fixed;
  width: 80%;
  max-width: 400px;
  background: #fff;
  color: #000;
  padding: 20px;
  text-align: center;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 10000;
}
.list {
  display: flex;
  justify-content: space-around;
  margin: 10px 0;
}
.list a {
  text-decoration: none;
  font-weight: bold;
  color: #333;
}
.copy {
  display: flex;
  flex-direction: column;
  background: #ddd;
  border: none;
  padding: 10px;
  margin: 10px 0;
  cursor: pointer;
}
.copyDone {
  background: #000;
  color: #fff;
}
</style>
