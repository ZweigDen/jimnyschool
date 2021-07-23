/* eslint-disable vue/no-use-v-if-with-v-for */
<template>
  <!-- 語文 -->
  <section class="p-sm-7 pt-7">
    <div class="mb-3 mb-3 p-5 p-sm-0">
      <p class="h1 d-flex text-dark border-bottom border-dark">
        <span style="animation-delay: calc(1s * 0.1);" data-aos="animate__rotateInDownLeft"
          ><i class="fas fa-language"></i></span
        ><span style="animation-delay: calc(1s * 0.2);" data-aos="animate__rotateInDownLeft"
          >語</span
        ><span style="animation-delay: calc(1s * 0.3);" data-aos="animate__rotateInDownLeft"
          >文</span
        ><span style="animation-delay: calc(1s * 0.4);" data-aos="animate__rotateInDownLeft"
          >類</span
        ><span style="animation-delay: calc(1s * 0.5);" data-aos="animate__rotateInDownLeft"
          ><i class="fas fa-exclamation ms-3"></i
        ></span>
      </p>
    </div>
    <swiper
      :slides-per-view="3"
      :space-between="30"
      :breakpoints="swiperOptions.breakpoints"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
    <template v-for="item in products" :key="item.id">
      <swiper-slide v-if="item.category == '語文'">
        <div class="mb-3">
          <div
            class="card h-100 shadow"
            :style="{
              'background-image': 'url(' + require('../assets/images/card-01.jpg') + ')',
              'background-position': 'center bottom',
            }"
          >
            <div class="border-0 p-0 m-0 text-center">
              <div class="btn pic" @click="$emit('go-to-page', item)">
                <img
                  :src="item.imageUrl"
                  class="card-img-top pt-1"
                  alt="..."
                  style="height:250px"
                />
              </div>
              <div class="card-body link--kukuri">
                <h3 class="card-title link hoverLink" :data-letters="item.title">
                  {{ item.title }}
                </h3>
                <p class="card-text">講師：{{ item.unit }}</p>
                <h5 class="card-text mb-2">
                  價格＄<span class="fw-bolder fst-italic">{{ $toCurrency(item.price) }}</span
                  >｜時數 <span class="fw-bolder fst-italic">{{ item.origin_price }}</span> 小時
                </h5>
                <div
                  class="spinner-border mb-1"
                  role="status"
                  :class="{ 'd-none': status != item.id }"
                ></div>
                <!-- 購物車按鈕 -->
                <div class="d-flex justify-content-center" :class="{ 'd-none': status == item.id }">
                  <button
                    class="button button--pipaluk button--text-thick rounded-3 wmin250 py-2"
                    :class="{ 'd-none': item.checkBtn == 0 }"
                    @click="$emit('remove-cart', item.id)"
                    @mouseover.self="changIcon"
                    @mouseleave.self="returnIcon"
                  >
                    <i class="bi bi-cart-check"></i>
                  </button>
                  <button
                    class="button button--pipaluk button--text-thick rounded-3 wmin250 py-2"
                    :class="{ 'd-none': item.checkBtn == 1 }"
                    @click="$emit('add-cart', item.id, qty)"
                    @mouseover.self="addIcon"
                    @mouseleave.self="returnFront"
                  >
                    加入購物車
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>
      </template>
    </swiper>
  </section>
  <!-- 程式 -->
  <section class="ps-sm-7 pb-sm-7 pt-7 p-0">
    <div class="mb-3 mb-3 p-5 p-sm-0">
      <p class="h1 d-flex text-dark align-items-center border-bottom border-dark">
        <span
          class="d-flex align-items-center"
          style="animation-delay: calc(1s * 0.1);"
          data-aos="animate__rotateInDownLeft"
        >
          <i
            class="fas fa-robot me-1 bg-dark text-light h3 rounded-start"
            style="padding:6px 4px 6px 4px"
          ></i>
          <i
            class="fas fa-laptop-code bg-dark text-light h3 rounded-end"
            style="padding:6px 4px 6px 4px"
          ></i> </span
        ><span style="animation-delay: calc(1s * 0.2);" data-aos="animate__rotateInDownLeft"
          >Ｉ</span
        ><span style="animation-delay: calc(1s * 0.3);" data-aos="animate__rotateInDownLeft"
          >Ｔ</span
        ><span style="animation-delay: calc(1s * 0.4);" data-aos="animate__rotateInDownLeft"
          >類</span
        ><span style="animation-delay: calc(1s * 0.5);" data-aos="animate__rotateInDownLeft"
          ><i class="fas fa-exclamation ms-3"></i
        ></span>
      </p>
    </div>
    <swiper
      :slides-per-view="3"
      :space-between="0"
      :breakpoints="swiperOptions.breakpoints"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
    <template v-for="item in products" :key="item.id">
      <swiper-slide v-if="item.category == '程式'">
        <div class="mb-3">
          <div
            class="card h-100 shadow"
            :style="{
              'background-image': 'url(' + require('../assets/images/card-01.jpg') + ')',
              'background-position': 'center bottom',
            }"
          >
            <div class="border-0 p-0 m-0 text-center">
              <div class="btn pic" @click="$emit('go-to-page', item)">
                <img
                  :src="item.imageUrl"
                  class="card-img-top pt-1"
                  alt="..."
                  style="height:250px"
                />
              </div>
              <div class="card-body link--kukuri">
                <h3 class="card-title link hoverLink" :data-letters="item.title">
                  {{ item.title }}
                </h3>
                <p class="card-text">講師：{{ item.unit }}</p>
                <h5 class="card-text mb-2">
                  價格＄<span class="fw-bolder fst-italic">{{ $toCurrency(item.price) }}</span
                  >｜時數 <span class="fw-bolder fst-italic">{{ item.origin_price }}</span> 小時
                </h5>
                <div
                  class="spinner-border mb-1"
                  role="status"
                  :class="{ 'd-none': status != item.id }"
                ></div>
                <!-- 購物車按鈕 -->
                <div class="d-flex justify-content-center" :class="{ 'd-none': status == item.id }">
                  <button
                    class="button button--pipaluk button--text-thick rounded-3 wmin250 py-2"
                    :class="{ 'd-none': item.checkBtn == 0 }"
                    @click="$emit('remove-cart', item.id)"
                    @mouseover.self="changIcon"
                    @mouseleave.self="returnIcon"
                  >
                    <i class="bi bi-cart-check"></i>
                  </button>
                  <button
                    class="button button--pipaluk button--text-thick rounded-3 wmin250 py-2"
                    :class="{ 'd-none': item.checkBtn == 1 }"
                    @click="$emit('add-cart', item.id, qty)"
                    @mouseover.self="addIcon"
                    @mouseleave.self="returnFront"
                  >
                    加入購物車
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>
      </template>
    </swiper>
  </section>
  <!-- 商業 -->
  <section class="ps-sm-7 pb-sm-7 pt-7 p-0">
    <div class="mb-3 mb-3 p-5 p-sm-0">
      <p class="h1 d-flex text-dark align-items-center border-bottom border-dark">
        <span
          class="d-flex align-items-center"
          style="animation-delay: calc(1s * 0.2);"
          data-aos="animate__rotateInDownLeft"
        >
          <i
            class="fas fa-user-tie me-1 bg-dark text-light h3 rounded-start"
            style="padding:6px 8px 6px 9px"
          ></i>
          <i
            class="fas fa-balance-scale-right bg-dark text-light h3 rounded-end"
            style="padding:6px 4px 6px 4px"
          ></i
        ></span>
        <span style="animation-delay: calc(1s * 0.2);" data-aos="animate__rotateInDownLeft"
          >商</span
        >
        <span style="animation-delay: calc(1s * 0.3);" data-aos="animate__rotateInDownLeft"
          >業</span
        >
        <span style="animation-delay: calc(1s * 0.4);" data-aos="animate__rotateInDownLeft"
          >類</span
        >
        <span style="animation-delay: calc(1s * 0.5);" data-aos="animate__rotateInDownLeft">
          <i class="fas fa-exclamation ms-3"></i>
        </span>
      </p>
    </div>
    <swiper
      :slides-per-view="3"
      :space-between="0"
      :breakpoints="swiperOptions.breakpoints"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
    <template v-for="item in products" :key="item.id">
      <swiper-slide v-if="item.category == '商業'">
        <div class="mb-3">
          <div
            class="card h-100 shadow"
            :style="{
              'background-image': 'url(' + require('../assets/images/card-01.jpg') + ')',
              'background-position': 'center bottom',
            }"
          >
            <div class="border-0 p-0 m-0 text-center">
              <div class="btn pic" @click="$emit('go-to-page', item)">
                <img
                  :src="item.imageUrl"
                  class="card-img-top pt-1"
                  alt="..."
                  style="height:250px"
                />
              </div>
              <div class="card-body link--kukuri">
                <h3 class="card-title link hoverLink" :data-letters="item.title">
                  {{ item.title }}
                </h3>
                <p class="card-text">講師：{{ item.unit }}</p>
                <h5 class="card-text mb-2">
                  價格＄<span class="fw-bolder fst-italic">{{ $toCurrency(item.price) }}</span
                  >｜時數 <span class="fw-bolder fst-italic">{{ item.origin_price }}</span> 小時
                </h5>
                <div
                  class="spinner-border mb-1"
                  role="status"
                  :class="{ 'd-none': status != item.id }"
                ></div>
                <!-- 購物車按鈕 -->
                <div class="d-flex justify-content-center" :class="{ 'd-none': status == item.id }">
                  <button
                    class="button button--pipaluk button--text-thick rounded-3 wmin250 py-2"
                    :class="{ 'd-none': item.checkBtn == 0 }"
                    @click="$emit('remove-cart', item.id)"
                    @mouseover.self="changIcon"
                    @mouseleave.self="returnIcon"
                  >
                    <i class="bi bi-cart-check"></i>
                  </button>
                  <button
                    class="button button--pipaluk button--text-thick rounded-3 wmin250 py-2"
                    :class="{ 'd-none': item.checkBtn == 1 }"
                    @click="$emit('add-cart', item.id, qty)"
                    @mouseover.self="addIcon"
                    @mouseleave.self="returnFront"
                  >
                    加入購物車
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>
      </template>
    </swiper>
  </section>
  <!-- 醫護 -->
  <section class="ps-sm-7 pb-sm-7 pt-7 p-0">
    <div class="mb-3 mb-3 p-5 p-sm-0">
      <p class="h1 d-flex text-dark align-items-center border-bottom border-dark">
        <span
          class="d-flex align-items-center"
          style="animation-delay: calc(1s * 0.2);"
          data-aos="animate__rotateInDownLeft"
        >
          <i
            class="fas fa-stethoscope me-1 bg-dark text-light h3 rounded-start"
            style="padding:6px 7px 6px 7px"
          ></i>
          <i
            class="fas fa-clinic-medical bg-dark text-light h3 rounded-end"
            style="padding:6px 5px 6px 5px"
          ></i
        ></span>
        <span style="animation-delay: calc(1s * 0.2);" data-aos="animate__rotateInDownLeft"
          >醫</span
        >
        <span style="animation-delay: calc(1s * 0.3);" data-aos="animate__rotateInDownLeft"
          >護</span
        >
        <span style="animation-delay: calc(1s * 0.4);" data-aos="animate__rotateInDownLeft"
          >類</span
        >
        <span style="animation-delay: calc(1s * 0.5);" data-aos="animate__rotateInDownLeft">
          <i class="fas fa-exclamation ms-3"></i>
        </span>
      </p>
    </div>
     <swiper
      :slides-per-view="3"
      :space-between="0"
      :breakpoints="swiperOptions.breakpoints"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
    <template v-for="item in products" :key="item.id">
      <swiper-slide v-if="item.category == '醫護'">
        <div class="mb-3">
          <div
            class="card h-100 shadow"
            :style="{
              'background-image': 'url(' + require('../assets/images/card-01.jpg') + ')',
              'background-position': 'center bottom',
            }"
          >
            <div class="border-0 p-0 m-0 text-center">
              <div class="btn pic" @click="$emit('go-to-page', item)">
                <img
                  :src="item.imageUrl"
                  class="card-img-top pt-1"
                  alt="..."
                  style="height:250px"
                />
              </div>
              <div class="card-body link--kukuri">
                <h3 class="card-title link hoverLink" :data-letters="item.title">
                  {{ item.title }}
                </h3>
                <p class="card-text">講師：{{ item.unit }}</p>
                <h5 class="card-text mb-2">
                  價格＄<span class="fw-bolder fst-italic">{{ $toCurrency(item.price) }}</span
                  >｜時數 <span class="fw-bolder fst-italic">{{ item.origin_price }}</span> 小時
                </h5>
                <div
                  class="spinner-border mb-1"
                  role="status"
                  :class="{ 'd-none': status != item.id }"
                ></div>
                <!-- 購物車按鈕 -->
                <div class="d-flex justify-content-center" :class="{ 'd-none': status == item.id }">
                  <button
                    class="button button--pipaluk button--text-thick rounded-3 wmin250 py-2"
                    :class="{ 'd-none': item.checkBtn == 0 }"
                    @click="$emit('remove-cart', item.id)"
                    @mouseover.self="changIcon"
                    @mouseleave.self="returnIcon"
                  >
                    <i class="bi bi-cart-check"></i>
                  </button>
                  <button
                    class="button button--pipaluk button--text-thick rounded-3 wmin250 py-2"
                    :class="{ 'd-none': item.checkBtn == 1 }"
                    @click="$emit('add-cart', item.id, qty)"
                    @mouseover.self="addIcon"
                    @mouseleave.self="returnFront"
                  >
                    加入購物車
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>
      </template>
    </swiper>
  </section>
  <!-- 公職 -->
  <section class="ps-sm-7 pb-sm-7 pt-7 p-0">
    <div class="mb-3 mb-3 p-5 p-sm-0">
      <p class="h1 d-flex text-dark align-items-center border-bottom border-dark">
        <span
          class="d-flex align-items-center"
          style="animation-delay: calc(1s * 0.2);"
          data-aos="animate__rotateInDownLeft"
        >
          <i
            class="fas fa-seedling me-1 bg-dark text-light h3 rounded-start"
            style="padding:6px 7px 6px 7px"
          ></i>
          <i
            class="fas fa-tools bg-dark text-light h3 rounded-end"
            style="padding:6px 7px 6px 7px"
          ></i
        ></span>
        <span style="animation-delay: calc(1s * 0.2);" data-aos="animate__rotateInDownLeft"
          >公</span
        >
        <span style="animation-delay: calc(1s * 0.3);" data-aos="animate__rotateInDownLeft"
          >職</span
        >
        <span style="animation-delay: calc(1s * 0.4);" data-aos="animate__rotateInDownLeft"
          >類</span
        >
        <span style="animation-delay: calc(1s * 0.5);" data-aos="animate__rotateInDownLeft">
          <i class="fas fa-exclamation ms-3"></i>
        </span>
      </p>
    </div>
    <swiper
      :slides-per-view="3"
      :space-between="0"
      :breakpoints="swiperOptions.breakpoints"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
    <template v-for="item in products" :key="item.id">
      <swiper-slide v-if="item.category == '公職'">
        <div class="mb-3">
          <div
            class="card h-100 shadow"
            :style="{
              'background-image': 'url(' + require('../assets/images/card-01.jpg') + ')',
              'background-position': 'center bottom',
            }"
          >
            <div class="border-0 p-0 m-0 text-center">
              <div class="btn pic" @click="$emit('go-to-page', item)">
                <img
                  :src="item.imageUrl"
                  class="card-img-top pt-1"
                  alt="..."
                  style="height:250px"
                />
              </div>
              <div class="card-body link--kukuri">
                <h3 class="card-title link hoverLink" :data-letters="item.title">
                  {{ item.title }}
                </h3>
                <p class="card-text">講師：{{ item.unit }}</p>
                <h5 class="card-text mb-2">
                  價格＄<span class="fw-bolder fst-italic">{{ $toCurrency(item.price) }}</span
                  >｜時數 <span class="fw-bolder fst-italic">{{ item.origin_price }}</span> 小時
                </h5>
                <div
                  class="spinner-border mb-1"
                  role="status"
                  :class="{ 'd-none': status != item.id }"
                ></div>
                <!-- 購物車按鈕 -->
                <div class="d-flex justify-content-center" :class="{ 'd-none': status == item.id }">
                  <button
                    class="button button--pipaluk button--text-thick rounded-3 wmin250 py-2"
                    :class="{ 'd-none': item.checkBtn == 0 }"
                    @click="$emit('remove-cart', item.id)"
                    @mouseover.self="changIcon"
                    @mouseleave.self="returnIcon"
                  >
                    <i class="bi bi-cart-check"></i>
                  </button>
                  <button
                    class="button button--pipaluk button--text-thick rounded-3 wmin250 py-2"
                    :class="{ 'd-none': item.checkBtn == 1 }"
                    @click="$emit('add-cart', item.id, qty)"
                    @mouseover.self="addIcon"
                    @mouseleave.self="returnFront"
                  >
                    加入購物車
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>
      </template>
    </swiper>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';

export default {
  data() {
    return {
      status: '',
      products: [],
      carts: [],
      swiperOptions: {
        breakpoints: {
          320: {
            slidesPerView: 1.2,
            spaceBetween: 25,
          },
          766: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3.3,
            spaceBetween: 30,
          },
        },
      },
    };
  },
  props: ['product', 'loading', 'cart'],
  components: {
    Swiper,
    SwiperSlide,
  },
  watch: {
    product() {
      this.products = this.product;
    },
    loading() {
      this.status = this.loading;
    },
    cart() {
      this.carts = this.cart;
    },
  },
  mounted() {},
  methods: {
    // 添加購物車後
    returnIcon(e) {
      e.target.innerHTML = '<i class="bi bi-cart-check"></i>';
    },
    changIcon(e) {
      e.target.innerHTML = '<i class="bi bi-cart-x-fill"></i>';
    },
    // 添加購物車錢
    returnFront(e) {
      e.target.innerHTML = '加入購物車';
    },
    addIcon(e) {
      e.target.innerHTML = '<i class="fas fa-cart-plus"></i>';
    },
  },
};
</script>
