<script setup>
import Popup from '~/components/landing/popup.vue';
import { ref, defineExpose } from 'vue';

const popup = ref(null);

const openPopup = () => {
  if (popup.value) {
    popup.value.openPopup();
  } else {
    console.error("Popup instance not found in Job component.");
  }
};

// 부모 컴포넌트에서 호출 가능하도록 expose
defineExpose({
  openPopup
});
</script>

<template>
  <Popup ref="popup">
    <div>
      <h1>분양팀 새로운 가족 모집</h1>
      <p>
        분양팀에서 함께할 새로운 가족을 모집합니다.<br> (상세 내용 추후 추가)<br>
        자세한 내용은 아래 연락처로 문의하세요.<br>
        <strong style="font-size: 140%;color: #df0000;">010-9357-0669 신현주 팀장</strong>
      </p>
    </div>
  </Popup>
</template>
