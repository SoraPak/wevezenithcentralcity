<template>
  <footer id="footer">
      <div class="cont1">
        <div><nuxt-link to="/"><img src="/images/logo_zenith_w.svg" width="195" alt="두산위브더제니스 센트럴시티" /></nuxt-link></div>
        <div><img src="/images/footer/footer_tel1.png" width="226" alt="" /></div>
      </div>
      <div class="coop">
        <div class="partners">
          <img src="/images/footer/footer_partner1.png" height="20"alt="시행:신영부동산신탁(주)"/>
          <img src="/images/footer/footer_partner2.png" height="20"alt="시행위탁:(주)동진글로벌" />
          <img src="/images/footer/footer_partner3.png" height="20"alt="시공:두산건설(주)" />
        </div>
        <div class="detail">
          <!-- ul class="location">
            <li><em>현장 :</em> 대구광역시 학정동 732-1번지 일원</li>
            <li><em>견본주택 :</em> 대구광역시 북구 태전동 1213번지</li>
          </ul -->
          <div class="copy1">
            <ul>
              <li>
                홈페이지 제작에 사용된 CG, 사진, 이미지 및 내용은 소비자의 이해를
                돕기 위한 것으로 실제와 차이가 있습니다.
              </li>
              <li>
                시행 : (주)동진글로벌 / 사업자등록번호: 642-81-00292 / 주소:
                대구광역시 북구 학정로 522-1(학정동)
              </li>
            </ul>
            <p>
              COPYRIGHT 2024 © <em><span>두산위브더제니스 센트럴시티</span><span>사이트제작: 박소라 과장</span></em>. ALL RIGHTS
              RESERVED.
            </p>
          </div>
        </div>
        
      </div>

      
  </footer>
</template>

<style scoped>
footer {
  position: relative;
  width: 100%;
  box-sizing: border-box;
  margin: 0 auto;
  text-align: left;
  padding: 30px 50px 50px;
  border-top: none;
  background: #070d1c;
}
.cont1 {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, .2);
  padding-bottom: 30px;
  margin-bottom: 30px;
}
.coop {
  width: 100%;
  /* display: flex; */
  justify-content: space-between;
  flex-direction: row-reverse;
}
.partners > img {
  margin-right: 20px
}
.partners > img:last-child {
  margin-right: 0;
}
.location {
  display: flex;
  gap: 30px;
  line-height: 160%;
}
.location li {
  position: relative;
}
.location li:nth-child(2n)::before {
  position: absolute;
  left: -15px;
  top:50%;
  transform:translateY(-50%);
  width: 1px;
  height: 60%;
  background: rgba(255, 255, 255, .3);
  content: "";
}
.location em {
  font-weight: 500;
  color: #bf9364;
  font-style: normal;
}
.copy1 {
  margin-top: 10px;
}
.copy1 ul li {
  position: relative;
  padding-left: 16px;
  font-weight: 400;
  color: #9e9e9e;
  font-size: 13px;
  line-height: 160%;
}
.copy1 ul li::before {
    position: absolute;
    left: 0;
    top: 0;
    content: "※";
}
.copy1 > p {
  margin-top: 20px;
  font-weight: 400;
  color: #9e9e9e;
  font-size: 13px;
  line-height: 160%;
}
.copy1 > p > em {
    color: #fff;
    font-style: normal;
}
.copy1 > p > em > span {
  position: relative;
  display: inline-block;
  margin-left: 15px;
}
.copy1 > p > em > span:first-child{
  margin-left: 0;
}

.copy1 > p > em > span::before {
  position: absolute;
  left: -8px;
  top:50%;
  transform:translateY(-50%);
  width: 1px;
  height: 60%;
  background: rgba(255, 255, 255, .3);
  content: "";
}
.copy1 > p > em > span:first-child::before {
  display: none;
}

@media only screen and (max-width: 1250px) {
  .coop {
    display: block;
    margin-bottom: 10px;
  }
}

/* sp */
@media only screen and (max-width: 950px) {
  footer {
    padding: 4vw 5vw 5vw;
  }
  .cont1 {
    padding-bottom: 3vw;
    margin-bottom: 4vw;
  }
  .cont1 > div:first-child img {
    width: 30vw;
  }
  .cont1 > div:last-child {
    margin-left: auto;
    margin-top: 3vw;
  }
  .cont1 > div:last-child img {
    width: 48vw;
  }
  .partners > img {
    margin-right: 3vw;
    height: 3.38vw;
  }
  .location {
    display: block;
    font-size: 3.6vw;
    margin-top: 2vw;
  }
  .location li:nth-child(2n)::before {
    display: none;
  }
  .copy1 ul {
    margin-top: 3vw;
  }
  .copy1 ul li {
    padding-left: 3.3vw;
    font-size: 3vw;
  }
  .copy1 > p {
    margin-top: 3vw;
    font-size: 3vw;
  }
  .copy1 > p > em > span {
    margin-left: 0;
  }
  .copy1 > p > em > span::before {
    display: none
  }

}
</style>
