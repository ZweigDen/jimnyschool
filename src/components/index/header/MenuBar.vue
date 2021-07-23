<template>
  <section>
    <a
      class="menu-button menuAnimated"
      ref="menuBar"
      data-bs-target="#offcanvasMenu"
      data-bs-toggle="offcanvas"
      aria-controls="offcanvasRight"
      data-aos-offset="200"
      :class="{ menufadeIn: animation, cross: menuBar }"
    >
      <div class="bar" :class="{ 'bg-dark': menuBar }"></div>
      <div class="bar"></div>
      <div class="bar" :class="{ 'bg-dark': menuBar }"></div>
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
                      <router-link to="/front/classroom" class="text-secondary text-decoration-none"
                        >－教學環境</router-link
                      >
                    </li>
                    <li class="mb-1 magnifyText">
                      <router-link to="/front/teachers" class="text-secondary text-decoration-none"
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
                      <router-link to="/front/suitable" class="text-secondary text-decoration-none"
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
                      <router-link to="/front/articles" class="text-secondary text-decoration-none"
                        >－NEWS</router-link
                      >
                    </li>
                    <li class="mb-1 magnifyText">
                      <router-link to="/front/articles" class="text-secondary text-decoration-none"
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
          <div class="col mb-3">
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
</template>

<script>
export default {
  data() {
    return {
      animation: false,
      offcan: '',
      menuBar: false,
    };
  },
  mounted() {
    this.menuBtn();
    // 增加背景色以及改變bar色
    window.addEventListener('scroll', () => {
      const windowY = window.scrollY;
      const main = document.querySelector('#main');
      if (windowY > main.offsetTop - 50) {
        this.animation = true;
      } else {
        this.animation = false;
      }
    });
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
