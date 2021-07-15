<template>
  <section class="p-sm-7 pt-7 p-5">
    <p class="h1 d-flex">
      <span style="animation-delay: calc(1s * 0.1);" data-aos="animate__rotateInDownLeft"
        ><i class="fas fa-exclamation me-3"></i></span
      ><span style="animation-delay: calc(1s * 0.2);" data-aos="animate__rotateInDownLeft">適</span
      ><span style="animation-delay: calc(1s * 0.3);" data-aos="animate__rotateInDownLeft">何</span
      ><span style="animation-delay: calc(1s * 0.4);" data-aos="animate__rotateInDownLeft">對</span
      ><span style="animation-delay: calc(1s * 0.5);" data-aos="animate__rotateInDownLeft">象</span
      ><span style="animation-delay: calc(1s * 0.6);" data-aos="animate__rotateInDownLeft">。</span>
    </p>
  </section>
  <!-- bg -->
  <section
    class="productHeader mb-7"
    :style="{ 'background-image': 'url(' + require('../../assets/images/header-05.jpg') + ')' }"
  ></section>
  <!-- 教育方針 -->
  <section class="text-center container mb-7">
    <div class="row flex-column align-items-center">
      <div class="col mb-3">
        <h3 class="mb-4">如果你未來想從事自己喜歡的興趣，那麼立即行動！</h3>
      </div>
      <div class="col mb-6">
        <h2>「即時戰力」<span class="h3">與</span>「團隊溝通」<span class="h3">的培訓</span></h2>
      </div>
      <div class="col">
        <h5 class="mb-2">呼嚕學院設有五大部門</h5>
        <h5 class="mb-2">以提供在即將到來的時代生存所需的專業知識。</h5>
        <h5 class="mb-2">可以為你提供更好體驗的學習和知識，以及專業的講師，都在等著你。</h5>
      </div>
    </div>
  </section>
  <section class="d-flex justify-content-center p-5 p-sm-7 mb-4">
    <router-link
      to="/front/admissions"
      class="text-decoration-none text-dark"
      data-aos="animate__bounceInLeft"
    >
      <i class="fas fa-chevron-circle-left h1 magnifyText"></i>
    </router-link>
  </section>
</template>
