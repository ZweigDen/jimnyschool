/* eslint-disable vue/no-use-v-if-with-v-for */
<template>
  <section class="p-7" id="language">
    <div class="mb-3 border-bottom border-dark">
      <p class="h1 d-flex text-dark">
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
    <div class="row row-cols-1 row-cols-md-3 g-4">
      <template v-for="item in products" :key="item.id">
        <div class="col mb-3" v-if="item.category == '語文'">
          <div
            class="card h-100 shadow"
            :style="{
              'background-image': 'url(' + require('../assets/images/card-01.jpg') + ')',
              'background-position': 'center bottom',
            }"
          >
            <div class="border-0 p-0 m-0 text-center">
              <div class="btn pic" @click="$emit('go-to-page', item)">
                <img :src="item.imageUrl" class="card-img-top pt-1" alt="..." />
              </div>
              <div class="card-body link--kukuri">
                <h3 class="card-title link hoverLink" :data-letters="item.title">
                  {{ item.title }}
                </h3>
                <p class="card-text">講師：{{ item.unit }}</p>
                <h5 class="card-text mb-2">
                  價格$ {{ $toCurrency(item.price) }}｜課堂時數 {{ item.origin_price }} 小時
                </h5>
                <div
                  class="spinner-border mb-1"
                  role="status"
                  :class="{ 'd-none': status != item.id }"
                ></div>
                <div class="d-flex justify-content-center" :class="{ 'd-none': status == item.id }">
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </div>
  </section>
  <section class="p-7" id="math">
    <div class="mb-3 border-bottom border-dark">
      <p class="h1 d-flex text-dark align-items-center">
        <span
          class="pb-2"
          style="animation-delay: calc(1s * 0.1);"
          data-aos="animate__rotateInDownLeft"
          ><i class="fas fa-cogs me-1 bg-dark text-light h3 p-1 rounded-start"></i
          ><i class="fas fa-flask bg-dark text-light h3 p-1 rounded-end"></i></span
        ><span style="animation-delay: calc(1s * 0.2);" data-aos="animate__rotateInDownLeft"
          >數</span
        ><span style="animation-delay: calc(1s * 0.3);" data-aos="animate__rotateInDownLeft"
          >理</span
        ><span style="animation-delay: calc(1s * 0.4);" data-aos="animate__rotateInDownLeft"
          >類</span
        ><span style="animation-delay: calc(1s * 0.5);" data-aos="animate__rotateInDownLeft"
          ><i class="fas fa-exclamation ml-3"></i
        ></span>
      </p>
    </div>
    <div class="row row-cols-1 row-cols-md-3 g-4">
      <template v-for="item in products" :key="item.id">
        <div class="col mb-3" v-if="item.category == '數理'">
          <div
            class="card h-100 shadow"
            :style="{
              'background-image': 'url(' + require('../assets/images/card-01.jpg') + ')',
              'background-position': 'center bottom',
            }"
          >
            <div class="border-0 p-0 m-0 text-center">
              <div class="btn pic" @click="$emit('go-to-page', item)">
                <img :src="item.imageUrl" class="card-img-top pt-1" alt="..." />
              </div>
              <div class="card-body link--kukuri">
                <h3 class="card-title link hoverLink" :data-letters="item.title">
                  {{ item.title }}
                </h3>
                <p class="card-text">講師：{{ item.unit }}</p>
                <h5 class="card-text mb-2">
                  價格$ {{ $toCurrency(item.price) }}｜課堂時數 {{ item.origin_price }} 小時
                </h5>
                <div
                  class="spinner-border mb-1"
                  role="status"
                  :class="{ 'd-none': status != item.id }"
                ></div>
                <div class="d-flex justify-content-center" :class="{ 'd-none': status == item.id }">
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </div>
  </section>
  <section class="p-7" id="life">
    <div class="mb-3 border-bottom border-dark">
      <p class="h1 d-flex text-dark align-items-center">
        <span
          class="pb-2"
          style="animation-delay: calc(1s * 0.2);"
          data-aos="animate__rotateInDownLeft"
        >
          <i class="fas fa-seedling me-1 bg-dark text-light h3 p-1 rounded-start"></i>
          <i class="fas fa-cat bg-dark text-light h3 p-1 rounded-end"></i
        ></span>
        <span style="animation-delay: calc(1s * 0.2);" data-aos="animate__rotateInDownLeft"
          >人</span
        >
        <span style="animation-delay: calc(1s * 0.3);" data-aos="animate__rotateInDownLeft"
          >生</span
        >
        <span style="animation-delay: calc(1s * 0.4);" data-aos="animate__rotateInDownLeft"
          >類</span
        >
        <span style="animation-delay: calc(1s * 0.5);" data-aos="animate__rotateInDownLeft">
          <i class="fas fa-exclamation ml-3"></i>
        </span>
      </p>
    </div>
    <div class="row row-cols-1 row-cols-md-3 g-4">
      <template v-for="item in products" :key="item.id">
        <div class="col mb-3" v-if="item.category == '人生'">
          <div
            class="card h-100 shadow"
            :style="{
              'background-image': 'url(' + require('../assets/images/card-01.jpg') + ')',
              'background-position': 'center bottom',
            }"
          >
            <div class="border-0 p-0 m-0 text-center">
              <div class="btn pic" @click="$emit('go-to-page', item)">
                <img :src="item.imageUrl" class="card-img-top pt-1" alt="..." />
              </div>
              <div class="card-body link--kukuri">
                <h3 class="card-title link hoverLink" :data-letters="item.title">
                  {{ item.title }}
                </h3>
                <p class="card-text">講師：{{ item.unit }}</p>
                <h5 class="card-text mb-2">
                  價格$ {{ $toCurrency(item.price) }}｜課堂時數 {{ item.origin_price }} 小時
                </h5>
                <div
                  class="spinner-border mb-1"
                  role="status"
                  :class="{ 'd-none': status != item.id }"
                ></div>
                <div class="d-flex justify-content-center" :class="{ 'd-none': status == item.id }">
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      status: '',
      products: [],
      carts: [],
    };
  },
  props: ['product', 'loading', 'cart'],
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
  methods: {},
};
</script>
