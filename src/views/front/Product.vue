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
      :style="{ backgroundImage: 'url(' + product.imageUrl + ')' }"
    ></div>
    <div class="d-flex flex-column justify-content-between w-50">
      <div
        class="detailBox2 rounded"
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
              class="spinner-border text-warning"
              role="status"
              :class="{ 'd-none': product.id != loadingStatus }"
            ></div>
          </div>
          <div
            class="d-flex justify-content-center"
            :class="{ 'd-none': product.id == loadingStatus }"
          >
            <button
              class="button button--pipaluk button--text-thick rounded-3 w-100 py-2"
              :class="{ 'd-none': product.checkBtn == 0 }"
              @click="removeProduct(product.id)"
            >
              <i class="fas fa-trash-alt"></i>
            </button>
            <button
              class="button button--pipaluk button--text-thick rounded-3 w-100 py-2"
              :class="{ 'd-none': product.checkBtn == 1 }"
              @click="addCart(product.id, qty)"
            >
              加入購物車
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- 描述 -->
  <section class="col-6 mb-5 px-7">
    <h2 class="d-flex align-items-center mb-5">
      {{ product.title }}
    </h2>
    <h3 class="mb-6">
      {{ product.description }}
    </h3>
    <h5 class="h5 text-warning">
      {{ product.content }}
    </h5>
  </section>
  <!-- 其他相關課程 -->
  <section class="ps-7 py-7">
    <p class="h2 d-flex mb-4">
      <span style="animation-delay: calc(1s * 0.1);" data-aos="animate__rotateInDownLeft"
        ><i class="fas fa-exclamation mr-3"></i></span
      ><span style="animation-delay: calc(1s * 0.2);" data-aos="animate__rotateInDownLeft">관</span
      ><span style="animation-delay: calc(1s * 0.3);" data-aos="animate__rotateInDownLeft">련</span
      ><span style="animation-delay: calc(1s * 0.4);" data-aos="animate__rotateInDownLeft">코</span
      ><span style="animation-delay: calc(1s * 0.5);" data-aos="animate__rotateInDownLeft">스</span
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
  <!-- 結帳按鈕 -->
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
          ><h3>쇼핑을 계속</h3></router-link
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
      carts: [],
      loadingStatus: '',
      cartId: '',
    };
  },
  created() {
    console.log(this.$route);
    console.log(this.$router);
    const { id } = this.$route.params;
    this.id = id;
    this.getProduct();
    this.getProducts();
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
    // 取得購物車
    getCart() {
      const url = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/cart`;
      this.$http
        .get(url)
        .then((res) => {
          if (res.data.success) {
            this.carts = res.data.data.carts;
            // 執行按鈕狀態改變
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
      console.log(this.$route); // 1
      console.log(this.$router); // 2
      this.$router.push(`/front/product/${item.id}`);
      this.$router.push(`/front/product/${item.id}`);
    },
    // 新增購物車
    addCart(id, qty = 1) {
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
      this.product.checkBtn = 0;
      this.loadingStatus = id;
      // 將btn切回購買
      this.products.forEach((item) => {
        if (id === item.id) {
          // eslint-disable-next-line no-param-reassign
          item.checkBtn = 0;
        }
      });
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
      if (this.carts.length === 0) {
        this.products.forEach((item) => {
          // eslint-disable-next-line no-param-reassign
          item.checkBtn = 0;
        });
      } else {
        this.carts.forEach((cart) => {
          this.products.forEach((item) => {
            // eslint-disable-next-line eqeqeq
            if (cart.product.id == item.id) {
              // eslint-disable-next-line no-param-reassign
              this.product.checkBtn = 1;
            }
          });
        });
      }
      this.loadingStatus = '';
    },
  },
};
</script>
