<template>
  <section class="p-sm-7 pt-7 p-5">
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
  <section class="d-sm-flex justify-content-between mb-3 px-sm-7">
    <div
      class="detailBox rounded d-none d-sm-block"
      :style="{ backgroundImage: 'url(' + product.imageUrl + ')' }"
    ></div>
    <div class="d-flex flex-column justify-content-between detailProduct">
      <div
        class="detailBox2 rounded mb-1"
        :style="{ backgroundImage: 'url(' + product.imagesUrl[0] + ')' }"
      ></div>
      <div class="d-flex justify-content-between w-100">
        <div
          class="detailBox3 rounded w-50"
          :style="{ backgroundImage: 'url(' + product.imagesUrl[1] + ')' }"
        ></div>
        <div class="d-flex flex-column justify-content-between w-49">
          <div
            class="detailBox4 rounded"
            :style="{ backgroundImage: 'url(' + product.imagesUrl[2] + ')' }"
          ></div>
          <!-- 按鈕 -->
          <div class="d-flex justify-content-center">
            <div
              class="spinner-border mb-1"
              role="status"
              :class="{ 'd-none': loadingStatus != product.id }"
            ></div>
          </div>
          <div
            class="d-flex justify-content-center"
            :class="{ 'd-none': loadingStatus == product.id }"
          >
            <button
              class="button button--pipaluk button--text-thick rounded-3 py-2 w-100"
              :class="{ 'd-none': this.checkBtn == 0 }"
              @click="removeProduct(product.id)"
              @mouseover.self="changIcon"
              @mouseleave.self="returnIcon"
            >
              <i class="bi bi-cart-check"></i>
            </button>
            <button
              class="button button--pipaluk button--text-thick rounded-3 py-2 w-100"
              :class="{ 'd-none': this.checkBtn == 1 }"
              @click="addCart(product.id, qty)"
              @mouseover.self="addIcon"
              @mouseleave.self="returnFront"
            >
              加入購物車
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- 描述 -->
  <section class="container mb-5 px-sm-7">
    <div class="row">
      <div class="col-sm-6 col-12">
        <h2 class="d-flex align-items-center mb-5">
          {{ product.title }}
        </h2>
        <h3 class="mb-6">
          {{ product.description }}
        </h3>
        <h5 class="h5 text-warning">
          {{ product.content }}
        </h5>
      </div>
    </div>
  </section>
  <!-- 其他相關課程 -->
  <section class="ps-sm-7 py-sm-7">
    <p class="h2 d-flex mb-4 p-5">
      <span style="animation-delay: calc(1s * 0.1);" data-aos="animate__rotateInDownLeft"
        ><i class="fas fa-exclamation me-3"></i></span
      ><span style="animation-delay: calc(1s * 0.2);" data-aos="animate__rotateInDownLeft">相</span
      ><span style="animation-delay: calc(1s * 0.3);" data-aos="animate__rotateInDownLeft">關</span
      ><span style="animation-delay: calc(1s * 0.4);" data-aos="animate__rotateInDownLeft">課</span
      ><span style="animation-delay: calc(1s * 0.5);" data-aos="animate__rotateInDownLeft">程</span
      ><span style="animation-delay: calc(1s * 0.6);" data-aos="animate__rotateInDownLeft">。</span>
    </p>
    <swiper
      :slides-per-view="4.2"
      :space-between="30"
      :breakpoints="swiperOptions.breakpoints"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <template v-for="item in randomProduct" :key="item.id">
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
  <!-- 結帳按鈕 -->
  <section class="d-flex justify-content-center p-7 mb-4">
    <router-link
      to="/front/courses"
      class="text-decoration-none text-dark"
      data-aos="animate__bounceInLeft"
    >
      <i class="fas fa-chevron-circle-left h1 magnifyText"></i>
    </router-link>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

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
      carts: [],
      loadingStatus: '',
      cartId: '',
      checkBtn: 0,
      randomProduct: [],
      swiperOptions: {
        breakpoints: {
          320: {
            slidesPerView: 1.5,
            spaceBetween: 10,
          },
          766: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4.2,
            spaceBetween: 30,
          },
        },
      },
    };
  },
  created() {
    console.log(this.$route);
    console.log(this.$router);
    const { id } = this.$route.params;
    this.id = id;
    this.getProduct();
    this.getCart();
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
            this.getProducts();
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
      const url = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/products/all`;
      this.$http
        .get(url)
        .then((res) => {
          if (res.data.success) {
            this.products = res.data.products;
            this.getRandomProduct();
          } else {
            alert(res);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // 隨機生成新陣列
    getRandomProduct() {
      const { category } = this.product;
      const filterProducts = this.products.filter((item) => item.category === category);
      console.log('filterProducts:', filterProducts);
      const maxSize = filterProducts.length < 4 ? filterProducts.length : 4;
      const arrSet = new Set([]);
      for (let i = 0; arrSet.size < maxSize; i + 1) {
        const num = getRandomInt(filterProducts.length);
        arrSet.add(num);
        console.log(arrSet, num);
      }
      this.randomProduct = [];
      arrSet.forEach((i) => {
        this.randomProduct.push(filterProducts[i]);
      });
      console.log(this.randomProduct);
    },
    // 取得購物車
    getCart() {
      const url = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/cart`;
      this.$http
        .get(url)
        .then((res) => {
          if (res.data.success) {
            this.carts = res.data.data.carts;
            this.statusBtn();
          } else {
            console.log(res);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // 商品詳細
    goToPage(item) {
      this.$router.replace(`/front/product/${item.id}`).then(() => {
        const { id } = this.$route.params;
        this.id = id;
        this.getProduct();
      });
    },
    // 新增購物車
    addCart(id, qty = 1) {
      this.checkBtn = 1;
      this.loadingStatus = id;
      const cart = {
        product_id: id,
        qty,
      };
      const url = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/cart`;
      this.$http
        .post(url, { data: cart })
        .then((res) => {
          if (res.data.success) {
            this.getCart();
            this.loadingStatus = '';
          } else {
            console.log(res);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // 移除單項產品
    removeProduct(id) {
      this.checkBtn = 0;
      this.loadingStatus = id;
      this.carts.forEach((item) => {
        if (id === item.product.id) {
          this.cartId = item.id;
        }
      });
      const url = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/cart/${this.cartId}`;
      this.$http
        .delete(url)
        .then((res) => {
          if (res.data.success) {
            this.getCart();
            this.loadingStatus = '';
          } else {
            console.log(res);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // 判斷按鈕狀態
    statusBtn() {
      if (this.carts.length < 1) {
        this.checkBtn = 0;
      } else {
        this.carts.forEach((item) => {
          if (item.product.id === this.product.id) {
            this.checkBtn = 1;
          }
        });
      }
    },
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
