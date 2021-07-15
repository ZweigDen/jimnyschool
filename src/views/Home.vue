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
    <Pickup></Pickup>
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
    <section
      class="alert
      d-none
      d-sm-block
        alert-dismissible fade show
        fixedBottomRight advertising m-5
        shadow-lg rounded"
      role="alert"
      data-aos="animate__bounceInLeft"
      :style="{
        'background-image': 'url(' + require('../assets/images/covid19.jpg') + ')',
      }"
    >
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </section>
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
    return {};
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
  mounted() {},
  methods: {},
};
</script>

<style lang="scss">
@media (max-width: 767px){
    .offcanContent{
        width: 100%;
    }
    .pickBox{
        width: 307px;
        height: 216px;
    }
    .pickUp{
        margin-top: -160px;
        border-radius: 0 0 0 0;
    }
    .bg3 &.bg4{
        max-height: 479px;
    }
    .w166 img{
        width: 95px;
        height: 95px;
    }
    .flexPostion{
        top: 40%;
    }
}
@media (max-width: 415px) {
  .tittleFixed {
    position: fixed;
    top: 0;
    z-index: 22;
    width: 100%;
    height: 60px;
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
    margin-top: -120px;
  }
  .nbMargin {
    margin-top: -200px;
    height: 160vh;
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
  .flexPostion {
    color: #000;
  }
  // banner
  .menuAnimated {
    top: 0;
    height: 60px;
  }
  .bar {
    background-color: #000;
    width: 40px;
  }
}
</style>
