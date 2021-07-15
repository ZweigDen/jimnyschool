<template>
  <section class="text-white ps-2 pl-sm-6 p-lg-9">
    <div data-aos="animate__bounceInDown">
      <p class="h6">Grow up. Turn professional.</p>
      <p class="h1 d-flex">
        <span style="animation-delay: calc(1s * 0.4);" data-aos="animate__rotateInDownLeft">你</span
        ><span style="animation-delay: calc(1s * 0.6);" data-aos="animate__rotateInDownLeft"
          >要</span
        ><span style="animation-delay: calc(1s * 0.8);" data-aos="animate__rotateInDownLeft"
          >的</span
        ><span style="animation-delay: calc(1s * 1);" data-aos="animate__rotateInDownLeft">專</span
        ><span style="animation-delay: calc(1s * 1.2);" data-aos="animate__rotateInDownLeft"
          >業</span
        ><span style="animation-delay: calc(1s * 1.4);" data-aos="animate__rotateInDownLeft"
          >，</span
        >
      </p>
      <p class="h1 d-flex mb-4">
        <span style="animation-delay: calc(1s * 1.4);" data-aos="animate__rotateInDownRight"
          >由</span
        ><span style="animation-delay: calc(1s * 1.2);" data-aos="animate__rotateInDownRight"
          >我</span
        ><span style="animation-delay: calc(1s * 1);" data-aos="animate__rotateInDownRight">們</span
        ><span style="animation-delay: calc(1s * 0.8);" data-aos="animate__rotateInDownRight"
          >培</span
        ><span style="animation-delay: calc(1s * 0.6);" data-aos="animate__rotateInDownRight"
          >訓</span
        ><span style="animation-delay: calc(1s * 0.4);" data-aos="animate__rotateInDownRight"
          >。</span
        >
      </p>
      <div class="row">
        <div class="col-lg-4 col-sm-6 col-9">
          <h5>
            各類專長職業學校-呼嚕貓學院。我們的許多畢業生活躍於生活環境險惡的苗栗國。為了突破現況，作為一個堅實的成年人。現在！你站在成為大人的門口。
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
