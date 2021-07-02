<template>
  <!-- banner &header -->
  <header class="h100vh d-flex flex-column justify-content-between">
    <!-- banner -->
    <Banner></Banner>
    <!-- header content -->
    <Headercontent></Headercontent>
    <!-- menuBar -->
    <Menubar></Menubar>
  </header>
  <!-- content -->
  <main id="main">
    <!-- pick up -->
    <Pickup :list="products"></Pickup>
    <!-- news & blog -->
    <NewsBlog></NewsBlog>
    <!-- 優點 -->
    <Advantage></Advantage>
    <!-- 学科 -->
    <Subject></Subject>
    <!-- Open Campus -->
    <OpenCamp></OpenCamp>
    <!-- otherLink-->
    <OtherLink></OtherLink>
    <!-- 社群 -->
    <Community></Community>
    <!-- 生活點滴跑馬燈 -->
    <Carousellife></Carousellife>
  </main>
  <!-- footer -->
  <footer>
    <!-- footerbar -->
    <FooterBar></FooterBar>
    <!-- footerImformation -->
    <FooterImformation></FooterImformation>
    <!-- 右下角廣告 -->
    <section class="fixedBottomRight m-5" data-aos="animate__bounceInLeft"></section>
  </footer>
</template>

<script>
// header
import Banner from '../components/index/header/Banner.vue';
import Headercontent from '../components/index/header/HeaderContent.vue';
import Menubar from '../components/index/header/MenuBar.vue';
// main
import Pickup from '../components/index/main/PickUpModal.vue';
import NewsBlog from '../components/index/main/NewsBlog.vue';
import Advantage from '../components/index/main/Advantage.vue';
import Subject from '../components/index/main/Subject.vue';
import OpenCamp from '../components/index/main/OpenCampus.vue';
import OtherLink from '../components/index/main/OtherLink.vue';
import Community from '../components/index/main/Community.vue';
import Carousellife from '../components/index/main/Carousel.vue';
// footer
import FooterBar from '../components/index/footer/FooterBar.vue';
import FooterImformation from '../components/index/footer/FooterImformation.vue';

export default {
  data() {
    return {
      products: [],
    };
  },
  components: {
    Banner,
    Headercontent,
    Menubar,
    Pickup,
    NewsBlog,
    Advantage,
    Subject,
    OpenCamp,
    OtherLink,
    Carousellife,
    Community,
    FooterBar,
    FooterImformation,
  },
  mounted() {
    this.getProducts();
  },
  methods: {
    getProducts() {
      const url = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/products`;
      this.$http
        .get(url)
        .then((res) => {
          if (res.data.success) {
            this.products = res.data.products;
          } else {
            console.log(res);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style lang="scss">
.tittleIndex a {
  color: #fff;
}
@media (max-width: 375px) {
  .tittleFixed {
    position: fixed;
    top: 0;
    z-index: 22;
  }
  .tittleIndex a {
    color: #000;
  }
  .h2 {
    font-size: 16px;
  }
  .h1 {
    font-size: 36px;
  }
  .pickUp {
    margin-top: 0px;
  }
  .nbMargin {
    margin-top: -220px;
  }
  .openCamp {
    border-radius: 0px;
    top: 0px;
  }
  .openCampPostion {
    position: relative;
  }
  .flexPostion {
    position: relative;
  }
  .advantageBg {
    &1,
    &2,
    &3,
    &4 {
      height: 256px;
    }
  }
  .flexPostion {
    color: #000;
  }
}
</style>
