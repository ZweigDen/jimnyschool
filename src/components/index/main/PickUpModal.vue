<template>
  <section class="ps-lg-5">
    <div
      class="ps-lg-6 pt-3 pb-5 pickUp bg-white"
      data-aos="animate__bounceInRight"
      data-aos-once="true"
      data-aos-offset="80"
    >
      <h5 class="mb-sm-4 mb-2 text-secondary ps-2 ps-sm-6 ps-lg-0">- Pick up</h5>
      <swiper
        :slides-per-view="4.2"
        :space-between="30"
        :breakpoints="swiperOptions.breakpoints"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
      >
        <swiper-slide class="swiperHover" v-for="item in randomProduct" :key="item.id">
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
      </swiper>
    </div>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

export default {
  data() {
    return {
      products: [],
      randomProduct: [],
      swiperOptions: {
        breakpoints: {
          320: {
            slidesPerView: 1.2,
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
  components: {
    Swiper,
    SwiperSlide,
  },
  mounted() {
    this.getProducts();
  },
  methods: {
    // 取得產品
    getProducts() {
      const url = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/products/all`;
      this.$http
        .get(url)
        .then((res) => {
          if (res.data.success) {
            this.products = res.data.products;
            this.getRandomProduct();
            console.log(res);
          } else {
            console.log(res);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // 取得亂數產品列表
    getRandomProduct() {
      const maxSize = this.products.length < 8 ? this.products.length : 10;
      const arrSet = new Set([]);
      for (let i = 0; arrSet.size < maxSize; i + 1) {
        const num = getRandomInt(this.products.length);
        arrSet.add(num);
      }
      arrSet.forEach((i) => {
        this.randomProduct.push(this.products[i]);
      });
    },
    onSwiper(swiper) {
      console.log(swiper);
    },
    onSlideChange() {
      console.log('slide change');
    },
    goToPage(item) {
      console.log(this.$route); // 1
      console.log(this.$router); // 2
      this.$router.push(`/front/product/${item.id}`);
    },
  },
};
</script>
