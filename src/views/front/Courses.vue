<template>
  <section class="p-sm-7 pt-7 p-5">
    <p class="h1 d-flex">
      <span style="animation-delay: calc(1s * 0.1);" data-aos="animate__rotateInDownLeft"
        ><i class="fas fa-exclamation me-3"></i></span
      ><span style="animation-delay: calc(1s * 0.2);" data-aos="animate__rotateInDownLeft">課</span
      ><span style="animation-delay: calc(1s * 0.3);" data-aos="animate__rotateInDownLeft">程</span
      ><span style="animation-delay: calc(1s * 0.4);" data-aos="animate__rotateInDownLeft">購</span
      ><span style="animation-delay: calc(1s * 0.5);" data-aos="animate__rotateInDownLeft">買</span
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
        <h3 class="mb-4">線上課程推出！</h3>
      </div>
      <div class="col mb-6">
        <h2>在ＣＯＶＩＤ-19的疫情擴大下以及想入學考的學生要求下</h2>
      </div>
      <div class="col">
        <h5 class="mb-2">我們提供新的學習平台</h5>
        <h5 class="mb-2">這些平台課程都是深入淺出讓學生易懂</h5>
        <h5 class="mb-2">如果你本身已是本校學生都能夠免費使用這些課程</h5>
        <h5 class="mb-2">我們非常歡迎外校人員購買我們的課程</h5>
        <h5 class="mb-2">這些課程是非常適合作為考取本校前的菜單，</h5>
        <h5 class="mb-2">同時也能自我暸解是否有足夠的實力進入本校接受兩年刻苦的訓練。</h5>
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
    <a
      class="text-dark btn position-relative magnifyText"
      data-bs-toggle="modal"
      data-bs-target="#staticBackdrop"
      ><i class="fas fa-shopping-cart h2 text-white bg-dark p-2 rounded"></i>
      <div
        class="text-light bg-warning rounded-circle text-center position-absolute h5"
        style="padding:10px 10px; top:-5px; right:-5px"
      >
        {{ carts.length }}
      </div></a
    >
  </section>
  <!-- Modal -->
  <div
    class="modal fade"
    id="staticBackdrop"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header">
          <h3 class="modal-title" id="staticBackdropLabel">待結帳商品</h3>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <section class="p-sm-7">
            <table class="table text-center align-middle">
              <thead>
                <tr>
                  <th width="20%">科目</th>
                  <th width="20%">名稱</th>
                  <th width="20%">價格</th>
                  <th width="20%">詳情</th>
                  <th width="20%">刪除</th>
                </tr>
              </thead>
              <tbody :class="{ 'd-none': loadingStatus }">
                <template v-for="item in carts" :key="item.id">
                  <tr>
                    <td>{{ item.product.category }}</td>
                    <td>{{ item.product.title }}</td>
                    <td>{{ item.product.price }}</td>
                    <td>
                      <button
                        type="button"
                        class="btn btn-outline-warning"
                        data-bs-dismiss="modal"
                        @click="goToPage(item.product)"
                      >
                        <i class="fas fa-eye"></i>
                      </button>
                    </td>
                    <td>
                      <button
                        type="button"
                        class="btn btn-outline-danger"
                        @click="removeProduct(item.product.id)"
                      >
                        <i class="far fa-trash-alt"></i>
                      </button>
                    </td>
                  </tr>
                </template>
              </tbody>
            </table>
            <div>
              <h3>總金額：＄{{ $toCurrency(total) }}</h3>
            </div>
            <div class="d-flex justify-content-center">
              <div
                class="spinner-grow text-warning"
                role="status"
                :class="{ 'd-none': !loadingStatus }"
              >
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
          </section>
        </div>
        <div class="modal-footer d-flex flex-column align-items-center">
          <button
            :class="{ 'd-none': carts.length === 0 }"
            type="button"
            class="btn btn-warning text-white py-3 px-sm-9 px-7"
            data-bs-dismiss="modal"
            @click="goToCheckout"
          >
            結帳去
          </button>
          <button type="button" class="btn text-info" data-bs-dismiss="modal">
            繼續購物
          </button>
        </div>
      </div>
    </div>
  </div>
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
      total: '',
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
    // 結帳頁面
    goToCheckout() {
      this.$router.push('/front/checkout');
    },
    // 取得所有課程
    getProducts() {
      const url = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/products/all`;
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
            this.total = res.data.data.final_total;
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
