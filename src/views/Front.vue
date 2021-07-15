<template>
  <header class="d-flex flex-column justify-content-between">
    <!-- banner -->
    <section class="d-flex align-items-center mb-5 mb-sm-9 mb-lg-0 p-sm-5">
      <div class="col-sm-6 col-lg-4 ps-0 tittleFixed bg-white">
        <h1 class="tittleIndex pt-2 ps-2 p-sm-0">
          <router-link to="/" class="d-flex flex-column text-decoration-none text-dark">
            <span class="h6">苗栗國補教王-專修學校 未來創造學院</span
            ><span class="h2">呼嚕貓教育學校</span>
          </router-link>
        </h1>
      </div>
      <div class="col-4 d-none d-lg-block">
        <div class="d-flex justify-content-center">
          <router-link
            to="/front/articles"
            class="d-flex align-items-center text-decoration-none text-dark icon mx-2"
          >
            <h4 class="px-1 snapLeftBtn1">></h4>
            <h4 class="ms-1">活動消息</h4>
          </router-link>
          <router-link
            to="/front/school"
            class="d-flex align-items-center text-decoration-none text-dark icon mx-2"
          >
            <h4 class="px-1 snapLeftBtn1">></h4>
            <h4 class="ms-1">校園介紹</h4>
          </router-link>
          <router-link
            to="/front/lesson"
            class="d-flex align-items-center text-decoration-none text-dark icon mx-2"
          >
            <h4 class="px-1 snapLeftBtn1">></h4>
            <h4 class="ms-1">課程平台</h4>
          </router-link>
        </div>
      </div>
      <div class="col-4 d-none d-lg-block">
        <ul class="list-unstyled d-flex mb-0 align-items-center justify-content-end me-7">
          <li class="magnifyText">
            <router-link to="/front/admissions" class="text-dark text-decoration-none h6">
              招生資訊
            </router-link>
          </li>
          <li class="ms-4 magnifyText">
            <router-link to="/front/cooperation" class="text-dark text-decoration-none h6">
              合作夥伴
            </router-link>
          </li>
          <li class="ms-4 magnifyText">
            <router-link to="/front/recruit" class="text-dark text-decoration-none h6">
              誠徵人才
            </router-link>
          </li>
        </ul>
      </div>
    </section>
    <!-- menuBar -->
    <section>
      <a
        class="menu-button menuAnimated"
        data-bs-backdrop="false"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasMenu"
        aria-controls="offcanvasRight"
        data-aos-offset="200"
        ref="menuBar"
        :class="{ cross: menuBar }"
      >
        <div class="bar bg-dark"></div>
        <div class="bar bg-dark"></div>
        <div class="bar bg-dark"></div>
      </a>
      <!-- modal -->
      <div
        class="offcanvas offcanvas-end offcanContent"
        data-bs-backdrop="false"
        tabindex="-1"
        aria-labelledby="offcanvasRightLabel"
        ref="modal"
        id="offcanvasMenu"
      >
        <div class="offcanvas-body p-lg-9 p-sm-3 d-sm-flex flex-column justify-content-between">
          <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            <div class="col">
              <div class="card border-0">
                <div class="card-body">
                  <div>
                    <router-link
                      to="/front/school"
                      class="border-bottom
             border-info
              pb-1 d-flex
              text-dark
              align-items-center
              text-decoration-none
              icon mb-2
              pb-2"
                    >
                      <h4 class="px-1 snapLeftBtn1">></h4>
                      <h4 class="ms-1">學校介紹</h4>
                    </router-link>
                    <ul class="list-unstyled">
                      <li class="mb-1 magnifyText">
                        <router-link to="/front/details" class="text-secondary text-decoration-none"
                          >－學校概要</router-link
                        >
                      </li>
                      <li class="mb-1 magnifyText">
                        <router-link
                          to="/front/classroom"
                          class="text-secondary text-decoration-none"
                          >－教學環境</router-link
                        >
                      </li>
                      <li class="mb-1 magnifyText">
                        <router-link
                          to="/front/teachers"
                          class="text-secondary text-decoration-none"
                          >－師資職員介紹</router-link
                        >
                      </li>
                      <li class="magnifyText">
                        <router-link to="/front/map" class="text-secondary text-decoration-none"
                          >－交通位置</router-link
                        >
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card border-0">
                <div class="card-body">
                  <div>
                    <router-link
                      to="/front/admissions"
                      class="border-bottom
            border-info
            pb-1
            d-flex
            align-items-center
            text-decoration-none
            text-dark
            icon
            mb-2
            pb-2"
                    >
                      <h4 class="px-1 snapLeftBtn1">></h4>
                      <h4 class="ms-1">招生資訊</h4>
                    </router-link>
                    <ul class="list-unstyled">
                      <li class="mb-1 magnifyText">
                        <router-link
                          to="/front/suitable"
                          class="text-secondary text-decoration-none"
                          >－適合對象</router-link
                        >
                      </li>
                      <li class="mb-1 magnifyText">
                        <router-link to="/front/money" class="text-secondary text-decoration-none"
                          >－學費方案</router-link
                        >
                      </li>
                      <li class="mb-1 magnifyText">
                        <router-link to="/front/otherqa" class="text-secondary text-decoration-none"
                          >－其他問題</router-link
                        >
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card border-0">
                <div class="card-body">
                  <div>
                    <router-link
                      to="/front/articles"
                      class="border-bottom
            border-info
            pb-1
            d-flex
            align-items-center
            text-decoration-none
            text-dark icon mb-2 pb-2"
                    >
                      <h4 class="px-1 snapLeftBtn1">></h4>
                      <h4 class="ms-1">最新消息</h4>
                    </router-link>
                    <ul class="list-unstyled">
                      <li class="mb-1 magnifyText">
                        <router-link
                          to="/front/articles"
                          class="text-secondary text-decoration-none"
                          >－NEWS</router-link
                        >
                      </li>
                      <li class="mb-1 magnifyText">
                        <router-link
                          to="/front/articles"
                          class="text-secondary text-decoration-none"
                          >－Blog</router-link
                        >
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card border-0">
                <div class="card-body">
                  <div>
                    <router-link
                      to="/front/lesson"
                      class="border-bottom
             border-info pb-1
              d-flex
              align-items-center
              text-decoration-none
              text-dark
              icon
              mb-2
              pb-2"
                    >
                      <h4 class="px-1 snapLeftBtn1">></h4>
                      <h4 class="ms-1">課程平台</h4>
                    </router-link>
                    <ul class="list-unstyled">
                      <li class="mb-1 magnifyText">
                        <router-link
                          to="/front/introduction"
                          class="text-secondary text-decoration-none"
                          >－課程介紹</router-link
                        >
                      </li>
                      <li class="mb-1 magnifyText">
                        <router-link to="/front/courses" class="text-secondary text-decoration-none"
                          >－購買課程</router-link
                        >
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card border-0">
                <div class="card-body">
                  <div class="d-flex flex-column justify-content-between">
                    <router-link
                      to="/front/recruit"
                      class="border-bottom
             border-info
              pb-1 d-flex
               align-items-center
                text-decoration-none
                text-dark
                icon
                mb-4
                pb-2"
                    >
                      <h4 class="px-1 snapLeftBtn1">></h4>
                      <h4 class="ms-1">誠徵人才</h4>
                    </router-link>
                    <router-link
                      to="/front/cooperation"
                      class="border-bottom
            border-info
            pb-1 d-flex
            align-items-center
             text-decoration-none
             text-dark
             icon
             mb-4
             pb-2"
                    >
                      <h4 class="px-1 snapLeftBtn1">></h4>
                      <h4 class="ms-1">合作夥伴</h4>
                    </router-link>
                    <router-link
                      to="/front/login"
                      class="border-bottom
             border-info
             pb-1
             d-flex
             align-items-center
             text-decoration-none
             text-dark
             icon
             pb-2"
                    >
                      <h4 class="px-1 snapLeftBtn1">></h4>
                      <h4 class="ms-1">後台登入</h4>
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="wrapper d-flex justify-content-center mb-3">
              <div class="button fb mx-3">
                <div class="icon">
                  <a href="#" class="text-dark"><i class="fab fa-facebook-f"></i></a>
                </div>
              </div>
              <div class="button ig mx-3">
                <div class="icon">
                  <a href="#" class="text-dark"><i class="fab fa-instagram"></i></a>
                </div>
              </div>
              <div class="button line mx-3">
                <div class="icon">
                  <a href="https://line.me/ti/p/Bem_VnvbP7" class="text-dark"
                    ><i class="fab fa-line"></i
                  ></a>
                </div>
              </div>
            </div>
        </div>
      </div>
    </section>
  </header>
  <router-view></router-view>
  <!-- footer -->
  <footer class="border-top">
    <section class="px-sm-7 px-4 py-4 d-sm-flex align-items-center justify-content-between">
      <div>
        <p class="h6">苗栗國補教王-專修學校 未來創造學院</p>
        <h3 class="mb-3">呼嚕貓教育學校</h3>
      </div>
      <div>
        <p class="mb-1 text-secondary">〒360 苗栗國中央地區</p>
        <p class="text-secondary">
          大麻喵喵街27-8 (<a
            href="https://www.google.com.tw/maps/place/苗栗車站/@24.57002,120.8201543,17z/data=!3m1!4b1!4m5!3m4!1s0x3469ac120c3f77a1:0x8998154fa69bd5e!8m2!3d24.57002!4d120.822343?hl=zh-TW"
            >Google Map </a
          >)
        </p>
        <p class="text-secondary">TEL：0968-911-231 / FAX：0968-911-231</p>
      </div>
    </section>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      menuBar: false,
    };
  },
  mounted() {
    this.menuBtn();
  },
  methods: {
    menuBtn() {
      const { menuBar } = this.$refs;
      menuBar.addEventListener('click', () => {
        this.menuBar = !this.menuBar;
      });
    },
  },
};
</script>

<style lang="scss"></style>
