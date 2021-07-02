<template>
  <section class="p-7">
    <p class="h1 d-flex">
      <span style="animation-delay: calc(1s * 0.1);" data-aos="animate__rotateInDownLeft"
        ><i class="fas fa-exclamation mr-3"></i></span
      ><span style="animation-delay: calc(1s * 0.2);" data-aos="animate__rotateInDownLeft">코</span
      ><span style="animation-delay: calc(1s * 0.3);" data-aos="animate__rotateInDownLeft">스</span
      ><span style="animation-delay: calc(1s * 0.4);" data-aos="animate__rotateInDownLeft">구</span
      ><span style="animation-delay: calc(1s * 0.5);" data-aos="animate__rotateInDownLeft">매</span
      ><span style="animation-delay: calc(1s * 0.6);" data-aos="animate__rotateInDownLeft">。</span>
    </p>
  </section>
  <!-- bg -->
  <section
    class="productHeader mb-7"
    :style="{ 'background-image': 'url(' + require('../../assets/images/course-01.jpg') + ')' }"
  ></section>
  <!-- 教育方針 -->
  <section class="text-center container mb-7">
    <div class="row flex-column align-items-center">
      <div class="col mb-3">
        <h3 class="mb-4">시대를 살아 남기</h3>
      </div>
      <div class="col mb-6">
        <h2>「高い専門性」と「豊かな人間力」<span class="h3">の育成を</span></h2>
      </div>
      <div class="col">
        <h5 class="mb-2">本校の校訓である「進取」「明朗」「誠実」を根幹におき、</h5>
        <h5 class="mb-2">理事長、校長を中心とした指導体制のもと、スローガンに</h5>
        <h5 class="mb-2">時代を生き抜く「高い専門性」と「豊かな人間力」の育成を掲げ、</h5>
        <h5 class="mb-2">全教職員が一丸となって、日々の一つひとつの教育活動を着実に実践し、</h5>
        <h5 class="mb-2">常に先を見通す論理性や人間の機微がわかる感性を養い、</h5>
        <h5 class="mb-2">総合力に富む真の意味で社会に貢献できる人材の育成を行います。</h5>
      </div>
    </div>
  </section>
  <!-- product Modal -->
  <CourseProduct
    @add-cart="addCart"
    @remove-cart="removeProduct"
    @go-to-page="goToPage"
    :product="products"
    :loading="loadingStatus"
    :cart="carts"
  ></CourseProduct>
  <!-- 購物車按鈕 -->
  <section class="fixedBottomRight p-3" data-aos="animate__bounceInLeft" data-aos-offset="40">
    <a class="text-dark btn"><i class="fas fa-shopping-cart h1 magnifyText"></i>
    </a>
    <div class="text-light bg-warning rounded-circle text-center">{{ carts.length }}</div>
  </section>
</template>

<script>
import CourseProduct from '@/components/CourseProduct.vue';

export default {
  data() {
    return {
      products: [],
      product: {},
      carts: [],
      loadingStatus: '', // 讀取條
      cartId: '',
    };
  },
  components: {
    CourseProduct,
  },
  mounted() {
    this.getProducts();
    this.getCart();
  },
  methods: {
    // 取得所有課程
    getProducts() {
      const url = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/products`;
      this.$http
        .get(url)
        .then((res) => {
          if (res.data.success) {
            this.products = res.data.products;
          } else {
            // eslint-disable-next-line no-alert
            alert(res.data.message);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // 取得所有購物車
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
    // 產品明細
    goToPage(item) {
      console.log('ok');
      this.$router.push(`/front/product/${item.id}`);
    },
    // 增加購物車
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
        this.products.forEach((item) => {
          this.carts.forEach((cart) => {
            // eslint-disable-next-line eqeqeq
            if (item.id == cart.product.id) {
              // eslint-disable-next-line no-param-reassign
              item.checkBtn = 1;
            }
          });
        });
      }
      this.loadingStatus = '';
    },
  },
};
</script>
