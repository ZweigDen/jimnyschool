<template>
  <section class="p-sm-7 pt-7 p-5">
    <p class="h1 d-flex">
      <span style="animation-delay: calc(1s * 0.1);" data-aos="animate__rotateInDownLeft"
        ><i class="fas fa-exclamation me-3"></i></span
      ><span style="animation-delay: calc(1s * 0.2);" data-aos="animate__rotateInDownLeft">課</span
      ><span style="animation-delay: calc(1s * 0.3);" data-aos="animate__rotateInDownLeft">程</span
      ><span style="animation-delay: calc(1s * 0.4);" data-aos="animate__rotateInDownLeft">介</span
      ><span style="animation-delay: calc(1s * 0.5);" data-aos="animate__rotateInDownLeft">紹</span
      ><span style="animation-delay: calc(1s * 0.6);" data-aos="animate__rotateInDownLeft">。</span>
    </p>
  </section>
  <!-- 教育方針 -->
  <section class="text-center container mb-7">
    <div class="row flex-column align-items-center">
      <div class="col mb-3">
        <h3 class="mb-4">我們的宗旨</h3>
      </div>
      <div class="col mb-6">
        <h2>「專業人才」<span class="h3">與</span>「熱心互助」<span class="h3">的培育</span></h2>
      </div>
      <div class="col">
        <h5 class="mb-2">本校教學以「努力」「進取」「互助」的方式教導、</h5>
        <h5 class="mb-2">在以校長、老師為核心的熱心教導下，</h5>
        <h5 class="mb-2">以培養與時俱進的「專業人才」和「熱心互助」為目標</h5>
        <h5 class="mb-2">所有教職員工共同努力，每天穩定地實踐每一項教育活動。</h5>
        <h5 class="mb-2">教導學生永遠向前看的心態和善解人意的感性，</h5>
        <h5 class="mb-2">培養綜合實力雄厚、能夠為社會做出真正貢獻的人才。</h5>
      </div>
    </div>
  </section>
  <!-- bg -->
  <section
    class="productHeader mb-7"
    :style="{ 'background-image': 'url(' + require('@/assets/images/charm-02.jpg') + ')' }"
  ></section>
  <!-- 方案 -->
  <section class="px-sm-7 px-5 border-bottom">
    <div class="row border-top py-3">
      <div class="col-4">
        <p class="h2">語言<span class="h3 ms-2 text-secondary">課程</span></p>
      </div>
      <div class="col-8">
        本校有三大語言提供學生學習，在第一年我們就會模擬熱門職業的面試，讓學生做好準備。<br>
        熱門相關的工作有-外交官、翻譯家
      </div>
    </div>
    <div class="row border-top py-3">
      <div class="col-4">
        <p class="h2">ＩＴ<span class="h3 ms-2 text-secondary">課程</span></p>
      </div>
      <div class="col-8">
        十萬青年十萬肝，ＧＧ輪班救台灣，我們非常歡迎學生投入ＩＴ課程，成為新鮮的肝。<br>
        熱門相關的工作有-ＧＧ公程師
      </div>
    </div>
    <div class="row border-top py-3">
      <div class="col-4">
        <p class="h2">商業<span class="h3 ms-2 text-secondary">課程</span></p>
      </div>
      <div class="col-8">
        想炒股、炒幣嗎？跟著我們的商業課程走，保證成為撼動滑爾街的.....韭菜<br>
        熱門相關的工作有-滑爾街分析師
      </div>
    </div>
    <div class="row border-top py-3">
      <div class="col-4">
        <p class="h2">醫護<span class="h3 ms-2 text-secondary">課程</span></p>
      </div>
      <div class="col-8">
醫務室工作是一輩子的工作！國家資格 加上醫療產品註冊和銷售商資格，活動領域遍及苗栗國！
可以選擇多種工作方式，應對未來人生階段的變化。
      </div>
    </div>
    <div class="row border-top py-3">
      <div class="col-4">
        <p class="h2">公職<span class="h3 ms-2 text-secondary">課程</span></p>
      </div>
      <div class="col-8">
        接待、會計和銷售等廣泛領域所需的辦公室工作。這就是為什麼需要多樣化的知識和技能。如果你的夢想是公職人員，那麼選擇我們再適合不過了。
      </div>
    </div>
  </section>
  <section class="d-flex justify-content-center p-7 mb-4">
    <router-link
      to="/front/lesson"
      class="text-decoration-none text-dark"
      data-aos="animate__bounceInLeft"
    >
      <i class="fas fa-chevron-circle-left h1 magnifyText"></i>
    </router-link>
  </section>
</template>
