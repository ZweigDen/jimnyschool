<template>
  <section class="text-white ps-2 pl-sm-6 p-lg-9">
    <div data-aos="animate__bounceInDown">
      <p class="h6">Grow up. Turn professional.</p>
      <p class="h1 d-flex">
        <span style="animation-delay: calc(1s * 0.4);" data-aos="animate__rotateInDownLeft">큰</span
        ><span style="animation-delay: calc(1s * 0.6);" data-aos="animate__rotateInDownLeft"
          >사</span
        ><span style="animation-delay: calc(1s * 0.8);" data-aos="animate__rotateInDownLeft"
          >에</span
        ><span style="animation-delay: calc(1s * 1);" data-aos="animate__rotateInDownLeft">람</span
        ><span style="animation-delay: calc(1s * 1.2);" data-aos="animate__rotateInDownLeft"
          >들</span
        ><span style="animation-delay: calc(1s * 1.4);" data-aos="animate__rotateInDownLeft"
          >。</span
        >
      </p>
      <p class="h1 d-flex mb-4">
        <span style="animation-delay: calc(1s * 1.4);" data-aos="animate__rotateInDownRight"
          >에</span
        ><span style="animation-delay: calc(1s * 1.2);" data-aos="animate__rotateInDownRight"
          >열</span
        ><span style="animation-delay: calc(1s * 1);" data-aos="animate__rotateInDownRight">하</span
        ><span style="animation-delay: calc(1s * 0.8);" data-aos="animate__rotateInDownRight"
          >다</span
        ><span style="animation-delay: calc(1s * 0.6);" data-aos="animate__rotateInDownRight"
          >히</span
        ><span style="animation-delay: calc(1s * 0.4);" data-aos="animate__rotateInDownRight"
          >。</span
        >
      </p>
      <div class="row">
        <div class="col-lg-4 col-sm-6 col-9">
          <h5>
            IT 및 비즈니스 전문 학교 LULU. 졸업생의 상당수가 여러 분야에서 활약하고 있습니다. 삶은
            각각 그렇지만, 모두, 제대로 된 성인으로. 그리고 지금. 당신은 어른의 어귀에 서 있습니다.
          </h5>
        </div>
      </div>
    </div>
    <!-- 幻燈片按鈕 -->
    <div class="d-none d-sm-block">
      <div class="swiper-pagination d-flex flex-column pe-5 overflow-hidden"></div>
    </div>
  </section>
  <!-- 幻燈片 -->
  <!-- <section class="fixed-top zIndex-1">
    <swiper
      class="currSwiper bgImg"
      :slides-per-view="1"
      :space-between="0"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide
        :style="{
          'background-image': 'url(' + require('../../../assets/images/header-01.jpg') + ')',
        }"
      ></swiper-slide>
      <swiper-slide
        :style="{
          'background-image': 'url(' + require('../../../assets/images/header-05.jpg') + ')',
        }"
      ></swiper-slide>
      <swiper-slide
        :style="{
          'background-image': 'url(' + require('../../../assets/images/header-08.jpg') + ')',
        }"
      ></swiper-slide>
      <swiper-slide
        :style="{
          'background-image': 'url(' + require('../../../assets/images/header-06.jpg') + ')',
        }"
      ></swiper-slide>
      <swiper-slide
        :style="{
          'background-image': 'url(' + require('../../../assets/images/header-07.jpg') + ')',
        }"
      ></swiper-slide>
    </swiper>
  </section> -->
  <section class="fixed-top zIndex-1">
    <div class="swiper-container currSwiper">
      <div class="swiper-wrapper bgImg">
        <div
          class="swiper-slide"
          :style="{
            'background-image': 'url(' + require('../../../assets/images/header-01.jpg') + ')',
          }"
        ></div>
        <div
          class="swiper-slide"
          :style="{
            'background-image': 'url(' + require('../../../assets/images/header-05.jpg') + ')',
          }"
        ></div>
        <div
          class="swiper-slide"
          :style="{
            'background-image': 'url(' + require('../../../assets/images/header-08.jpg') + ')',
          }"
        ></div>
        <div
          class="swiper-slide"
          :style="{
            'background-image': 'url(' + require('../../../assets/images/header-06.jpg') + ')',
          }"
        ></div>
        <div
          class="swiper-slide"
          :style="{
            'background-image': 'url(' + require('../../../assets/images/header-07.jpg') + ')',
          }"
        ></div>
      </div>
    </div>
  </section>
</template>

<script type="module">
import Swiper from 'swiper/bundle';

export default {
  data() {
    return {
      swiper: '',
    };
  },
  components: {
    // eslint-disable-next-line vue/no-unused-components
    Swiper,
  },
  mounted() {
    this.swiper = new Swiper('.currSwiper', {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      effect: 'fade',
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  },
};
</script>
