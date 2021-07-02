<template>
  <section>
    <a
      class="menu-button menuAnimated"
      data-bs-target="#offcanvasMenu"
      data-bs-toggle="offcanvas"
      aria-controls="offcanvasRight"
      data-aos-offset="200"
      :class="{ menufadeIn: animation }"
    >
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
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
      <div class="offcanvas-body p-md-7 p-sm-3 d-flex flex-column justify-content-between">
        <div class="d-flex justify-content-between">
          <div>
            <a
              href="#"
              class="border-bottom
              text-dark
             border-dark pb-1 d-flex
             align-items-center text-decoration-none
             icon mb-2 pb-2"
            >
              <h4 class="px-1 snapLeftBtn1">></h4>
              <h4 class="ms-1">學科介紹</h4>
            </a>
            <ul class="list-unstyled">
              <li class="mb-1 magnifyText">
                <a href="#" class="text-secondary text-decoration-none">－國文</a>
              </li>
              <li class="mb-1 magnifyText">
                <a href="#" class="text-secondary text-decoration-none">－英文</a>
              </li>
              <li class="mb-1 magnifyText">
                <a href="#" class="text-secondary text-decoration-none">－數學</a>
              </li>
              <li class="magnifyText">
                <a href="#" class="text-secondary text-decoration-none">－理化</a>
              </li>
            </ul>
          </div>
          <div>
            <a
              href="#"
              class="border-bottom
              text-dark
             border-dark
              pb-1 d-flex
              align-items-center
              text-decoration-none
             icon mb-2
              pb-2"
            >
              <h4 class="px-1 snapLeftBtn1">></h4>
              <h4 class="ms-1">學校介紹</h4>
            </a>
            <ul class="list-unstyled">
              <li class="mb-1 magnifyText">
                <a href="#" class="text-secondary text-decoration-none">－學校概要</a>
              </li>
              <li class="mb-1 magnifyText">
                <a href="#" class="text-secondary text-decoration-none">－教學環境</a>
              </li>
              <li class="mb-1 magnifyText">
                <a href="#" class="text-secondary text-decoration-none">－師資職員介紹</a>
              </li>
              <li class="magnifyText">
                <a href="#" class="text-secondary text-decoration-none">－交通位置</a>
              </li>
            </ul>
          </div>
          <div>
            <a
              href="#"
              class="border-bottom
              text-dark
            border-dark
            pb-1
            d-flex
            align-items-center
            text-decoration-none
            icon
            mb-2
            pb-2"
            >
              <h4 class="px-1 snapLeftBtn1">></h4>
              <h4 class="ms-1">師資介紹</h4>
            </a>
            <ul class="list-unstyled">
              <li class="mb-1 magnifyText">
                <a href="#" class="text-secondary text-decoration-none">－適合的對象</a>
              </li>
              <li class="mb-1 magnifyText">
                <a href="#" class="text-secondary text-decoration-none">－學費</a>
              </li>
              <li class="magnifyText">
                <a href="#" class="text-secondary text-decoration-none">－其他</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="d-flex justify-content-between">
          <div>
            <router-link
            to="/front/courses"
              class="border-bottom
             border-dark pb-1
              d-flex
              align-items-center
              text-decoration-none
              text-dark
              icon
              mb-2
              pb-2"
            >
              <h4 class="px-1 snapLeftBtn1">></h4>
              <h4 class="ms-1">課程購買</h4>
            </router-link>
            <ul class="list-unstyled">
              <li class="mb-1 magnifyText">
                <a href="product.html#language" class="text-secondary text-decoration-none"
                  >－語言</a
                >
              </li>
              <li class="mb-1 magnifyText">
                <a href="product.html#math" class="text-secondary text-decoration-none">－數理</a>
              </li>
              <li class="magnifyText">
                <a href="product.html#life" class="text-secondary text-decoration-none">－人生</a>
              </li>
            </ul>
          </div>
          <div>
            <a
              href="product.html"
              class="border-bottom
             border-dark pb-1
              d-flex
              align-items-center
              text-decoration-none
              text-dark
              icon
              mb-2
              pb-2"
            >
              <h4 class="px-1 snapLeftBtn1">></h4>
              <h4 class="ms-1">課程購買</h4>
            </a>
            <ul class="list-unstyled">
              <li class="mb-1 magnifyText">
                <a href="product.html#language" class="text-secondary text-decoration-none"
                  >－語言</a
                >
              </li>
              <li class="mb-1 magnifyText">
                <a href="product.html#math" class="text-secondary text-decoration-none">－數理</a>
              </li>
              <li class="magnifyText">
                <a href="product.html#life" class="text-secondary text-decoration-none">－人生</a>
              </li>
            </ul>
          </div>
          <div class="d-flex flex-column justify-content-between">
            <a
              href="#"
              class="border-bottom
             border-dark
              pb-1 d-flex
               align-items-center
                text-decoration-none
                text-dark
                icon
                pb-2"
            >
              <h4 class="px-1 snapLeftBtn1">></h4>
              <h4 class="ms-1">人才招募</h4>
            </a>
            <router-link
              to="/front/login"
              class="border-bottom
            border-dark
            pb-1 d-flex
            align-items-center
             text-decoration-none
              text-dark
             icon
             pb-2"
            >
              <h4 class="px-1 snapLeftBtn1">></h4>
              <h4 class="ms-1">登入</h4>
            </router-link>
            <a
              href="#"
              class="border-bottom
             border-dark
             pb-1
             d-flex
             align-items-center
             text-decoration-none
            text-dark
             icon
             pb-2"
            >
              <h4 class="px-1 snapLeftBtn1">></h4>
              <h4 class="ms-1">就按資格</h4>
            </a>
          </div>
        </div>
        <div class="wrapper d-flex justify-content-center">
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
    };
  },
  mounted() {
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
  methods: {},
};
</script>
