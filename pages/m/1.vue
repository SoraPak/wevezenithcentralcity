<template>
  <SeoMeta 
    dtitle="모델하우스 오픈 1주년 기념! 5월의 황금연휴 이벤트 - 학정역 두산위브더제니스 센트럴시티"
    description="박소라 과장과 함께하는 모델하우스 방문 이벤트! 2025년 5월 1일(목) 부터 상품 소진 시 까지"
    image="https://xn--hu1bq8p65bh1h6oby7bg90c.kr/og_img_2505.png"
    url="https://xn--hu1bq8p65bh1h6oby7bg90c.kr/event/2505"
  />
  <div class="mailing">
    <div class="mailing_inner">
      <img src="/images/mailing/01/01.jpg" alt="">
      <div class="text">
        <p>
          박소라 과장과 함께하는<br>
          5월 가정의달 경품&추첨 이벤트!
        </p>
        <dl>
          <dt>👨‍👩‍👧‍👦 가족단위 방문 시(3인 이상) 추첨권 제공!</dt>
          <dd>
            경품: 샤브20, 신세계상품권3만원, 도자기세트 등<br>
            하루 지급 수량 한정 / 꽝 없이! 라면 또는 세제 증정
          </dd>
        </dl>
        <dl>
          <dt>👫 2인 이상 방문 시</dt>
          <dd>라면 or 리빙세트 1개 증정!</dd>
        </dl>
        <p>
          선착순으로 팀장님의 깜짝 혜택도 있으니 모델하우스 오셔서 들어보세요
        </p>
        <dl>        
          <dt>📌 참여조건</dt>
          <dd>
            ➊ 꼭 방문 예약 해 주세요(당일 가능)<br>
            ➋ 모델하우스 안내데스크에서 박소라 과장 찾아주세요<br>
             (※ 미지정 시 선물 지급 불가ㅠㅠ)<br>
            ➌ 팀장님과 상담 후 선물 제공<br>
            ➍ 선물은 방문 팀 단위로 지급<br>
            ➎ 5월 1일부터, 경품 소진 시까지
          </dd>
        </dl>
      </div>

    </div>
  </div>
</template>

<script setup>
import { useHead } from '#imports';
import SeoMeta from '~/components/seometa.vue';

useHead({
  style: [
    {
      children: `



      `
    }
  ]
});
</script>
<style scoped>
.mailing {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  padding-bottom: 40px;
  padding-top: 0;

}
.mailing_inner {
  width: 100%;
  max-width: 700px;
}
.mailing_inner > img {

  display: block;
  border-radius: 15px;
  margin-top: 20px;
}
.text {
  font-size: 20px;
  line-height: 180%;
}
.text > p,
.text > dl {
  margin-top: 20px;
}
.text dt {
  color: yellow;
  font-weight: bold;
}

/* sp */
@media only screen and (max-width: 950px) {
  .mailing {
    padding: 3.5vw;
    padding-top: 0;
    padding-bottom: 18vw;
  }
  .mailing_inner > img {
    border-radius:3vw;
    margin-top: 3.5vw;
    width: 100%;
  }
  .text {
    font-size: 4vw;
  }
  .text > p,
  .text > dl {
    margin-top: 3.5vw;
  }
}




</style>
