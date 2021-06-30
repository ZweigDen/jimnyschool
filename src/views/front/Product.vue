<template>
  <section class="p-7">
    <p class="h1 d-flex">
      <span style="animation-delay: calc(1s * 0.1);" data-aos="animate__rotateInDownLeft"
        ><i class="fas fa-exclamation mr-3"></i></span
      ><span style="animation-delay: calc(1s * 0.2);" data-aos="animate__rotateInDownLeft">課</span
      ><span style="animation-delay: calc(1s * 0.3);" data-aos="animate__rotateInDownLeft">程</span
      ><span style="animation-delay: calc(1s * 0.4);" data-aos="animate__rotateInDownLeft">介</span
      ><span style="animation-delay: calc(1s * 0.5);" data-aos="animate__rotateInDownLeft">紹</span
      ><span style="animation-delay: calc(1s * 0.6);" data-aos="animate__rotateInDownLeft">。</span>
    </p>
  </section>
  <!-- 照片牆 -->
  <section class="d-flex justify-content-between mb-3 px-7">
    <div
      class="detailBox rounded"
      :style="{ 'background-image': 'url(' + require('../../assets/images/header-01.jpg') + ')' }"
    ></div>
    <div class="d-flex flex-column justify-content-between w-50">
      <div
        class="detailBox2 rounded"
        :style="{ 'background-image': 'url(' + require('../../assets/images/header-02.jpg') + ')' }"
      ></div>
      <div class="d-flex justify-content-between w-100">
        <div
          class="detailBox3 rounded w-50"
          :style="{
            'background-image': 'url(' + require('../../assets/images/header-03.jpg') + ')',
          }"
        ></div>
        <div class="d-flex flex-column justify-content-between w-49">
          <div
            class="detailBox4 rounded"
            :style="{
              'background-image': 'url(' + require('../../assets/images/header-04.jpg') + ')',
            }"
          ></div>
          <!-- <div class="d-flex justify-content-center" :class="{ 'd-none': status == item.id }">
            <button
              class="button button--pipaluk button--text-thick rounded-3"
              :class="{ 'd-none': item.checkBtn == 0 }"
              @click="$emit('remove-cart', item.id)"
            >
              <i class="fas fa-trash-alt"></i>
            </button>
            <button
              class="button button--pipaluk button--text-thick rounded-3"
              :class="{ 'd-none': item.checkBtn == 1 }"
              @click="$emit('add-cart', item.id, qty)"
            >
              加入購物車
            </button>
          </div> -->
        </div>
      </div>
    </div>
  </section>
  <!-- 描述 -->
  <section class="w635 mb-5 px-7">
    <h2 class="d-flex align-items-center">
      {{ product.title }}
      <span class="h5 mb-0 ml-2"
        ><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i
        ><i class="fas fa-star"></i><span class="ml-1 textGray">4.0 (283)</span></span
      >
    </h2>
    <p class="text-primary mb-3 h5">
      318 Phaya Thai Road, Ratchathewi, Phaya Thai, 10400 Bangkok, Thailand
    </p>
    <p class="h5 textGray">
      The Rachada Hotel is an establishment that provides paid lodging on a short-term basis.
      Facilities provided may range from a modest-quality mattress in a small room to large suites
      with bigger, higher-quality beds, a dresser, a refrigerator and other kitchen facilities,
      upholstered chairs, a flat screen television, and en-suite bathrooms.
    </p>
  </section>
  <!-- 其他相關課程 -->
  <section class="ps-7 py-7">
    <p class="h2 d-flex mb-4">
      <span style="animation-delay: calc(1s * 0.1);" data-aos="animate__rotateInDownLeft"
        ><i class="fas fa-exclamation mr-3"></i></span
      ><span style="animation-delay: calc(1s * 0.2);" data-aos="animate__rotateInDownLeft">相</span
      ><span style="animation-delay: calc(1s * 0.3);" data-aos="animate__rotateInDownLeft">關</span
      ><span style="animation-delay: calc(1s * 0.4);" data-aos="animate__rotateInDownLeft">課</span
      ><span style="animation-delay: calc(1s * 0.5);" data-aos="animate__rotateInDownLeft">程</span
      ><span style="animation-delay: calc(1s * 0.6);" data-aos="animate__rotateInDownLeft">。</span>
    </p>
    <swiper
      :slides-per-view="4.2"
      :space-between="30"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <template v-for="item in products" :key="item.id">
        <swiper-slide
          class="swiperHover"
          v-if="item.category == product.category && item.id != product.id"
        >
          <div class="text-dark text-decoration-none btn p-0 pickHover" @click="goToPage(item)">
            <img :src="item.imageUrl" alt="" class="pickBox" />
            <h4
              class="d-flex justify-content-between border-bottom pt-3 ps-2"
              data-letters="更多介紹"
            >
              {{ item.title
              }}<span class="border-bottom pb-2 border-dark px-2"
                ><i class="fas fa-long-arrow-alt-right"></i
              ></span>
            </h4>
          </div>
        </swiper-slide>
      </template>
    </swiper>
  </section>
  <!-- 購物車按鈕 -->
  <section
    class="fixed-bottom bg-light p-3 d-flex
    align-items-center justify-content-between px-7"
    data-aos="animate__bounceInLeft"
    data-aos-offset="40"
  >
    <ul class="list-unstyled d-flex mb-0">
      <li class="magnifyText mb-0 me-3">
        <router-link to="/front/courses" class="text-decoration-none text-dark"
          ><h3>語文</h3></router-link
        >
      </li>
      <li class="magnifyText mb-0 me-3">
        <router-link to="/front/courses" class="text-decoration-none text-dark"
          ><h3>數理</h3></router-link
        >
      </li>
      <li class="magnifyText mb-0 me-3">
        <router-link to="/front/courses" class="text-decoration-none text-dark"
          ><h3>人生</h3></router-link
        >
      </li>
    </ul>
    <ul class="list-unstyled d-flex mb-0">
      <li class="magnifyText mb-0">
        <router-link to="/front/courses" class="text-decoration-none text-dark"
          ><h3>回到所有課程</h3></router-link
        >
      </li>
    </ul>
    <a class="text-dark btn"><i class="fas fa-shopping-cart h2 magnifyText"></i></a>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      id: '',
      products: [],
      product: {},
      loadingStatus: '',
    };
  },
  created() {
    console.log(this.$route);
    console.log(this.$router);
    const { id } = this.$route.params;
    this.id = id;
    this.getProduct();
    this.getProducts();
  },
  methods: {
    // 取得單項產
    getProduct() {
      const url = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/product/${this.id}`;
      this.$http
        .get(url)
        .then((res) => {
          if (res.data.success) {
            this.product = res.data.product;
          } else {
            // eslint-disable-next-line no-alert
            alert(res);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // 取得全部
    getProducts() {
      const url = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/products`;
      this.$http
        .get(url)
        .then((res) => {
          if (res.data.success) {
            this.products = res.data.products;
          } else {
            alert(res);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // 商品詳細
    goToPage(item) {
      console.log(this.$route); // 1
      console.log(this.$router); // 2
      this.$router.push(`/front/product/${item.id}`);
      this.$router.push(`/front/product/${item.id}`);
    },
  },
};
</script>
