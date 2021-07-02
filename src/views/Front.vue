<template>
  <header class="d-flex flex-column justify-content-between">
    <!-- banner -->
    <section class="d-flex align-items-center mb-5 mb-sm-9 mb-lg-0 p-sm-5">
      <div class="col-sm-6 col-lg-4 ps-0 tittleFixed">
        <h1 class="tittleIndex pt-2 ps-2 p-sm-0">
          <router-link to="/" class="d-flex flex-column text-decoration-none text-dark">
            <span class="h6">고양이기업 미래 창조 아카데미</span><span class="h2">코골이 고양이 게임 대학</span>
          </router-link>
        </h1>
      </div>
      <div class="col-4 d-none d-lg-block">
        <div class="d-flex justify-content-center">
          <router-link
            to="school"
            class="d-flex align-items-center text-decoration-none text-dark icon mx-2"
          >
            <h4 class="px-1 snapLeftBtn1">></h4>
            <h4 class="ms-1">학교 안내</h4>
          </router-link>
          <router-link
            to="teachers"
            class="d-flex align-items-center text-decoration-none text-dark icon mx-2"
          >
            <h4 class="px-1 snapLeftBtn1">></h4>
            <h4 class="ms-1">학과 · 코스</h4>
          </router-link>
          <router-link
            to="/front/courses"
            class="d-flex align-items-center text-decoration-none text-dark icon mx-2"
          >
            <h4 class="px-1 snapLeftBtn1">></h4>
            <h4 class="ms-1">캠퍼스 라이프</h4>
          </router-link>
        </div>
      </div>
      <div class="col-4 d-none d-lg-block">
        <ul class="list-unstyled d-flex mb-0 align-items-center justify-content-end me-7">
          <li class="magnifyText">
            <a href="#" class="text-dark text-decoration-none h6">입학 안내</a>
          </li>
          <li class="ms-4 magnifyText">
            <a href="#" class="text-dark text-decoration-none h6">취업 · 자격</a>
          </li>
          <li class="ms-4 magnifyText">
            <a href="#" class="text-dark text-decoration-none h6">대상자 별</a>
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
        data-bs-target="#offcanvasRight"
        aria-controls="offcanvasRight"
        data-aos-offset="200"
      >
        <div class="bar bg-dark"></div>
        <div class="bar bg-dark"></div>
        <div class="bar bg-dark"></div>
      </a>
      <!-- modal -->
      <div
        class="offcanvas offcanvas-end offcanContent"
        tabindex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div class="offcanvas-body p-sm-7 d-flex flex-column justify-content-between">
          <div class="card-columns">
            <div class="card border-0">
              <div class="card-body">
                <a
                  href="index.html"
                  class="border-bottom pb-1 d-flex align-items-center text-decoration-none btn2"
                >
                  <div class="button2">
                    <i class="fas fa-paper-plane icon h6 borderRadius2 p-1 mb-0 pt-0"></i>
                  </div>
                  <h4 class="ml-1 text-dark">首頁</h4>
                </a>
              </div>
            </div>
            <div class="card border-0">
              <div class="card-body">
                <a
                  href="#"
                  class="border-bottom pb-1 d-flex align-items-center text-decoration-none btn2"
                >
                  <div class="button2">
                    <i class="fas fa-paper-plane icon h6 borderRadius2 p-1 mb-0 pt-0"></i>
                  </div>
                  <h4 class="ml-1 text-dark">學科介紹</h4>
                </a>
                <ul>
                  <li><a href="#">國文</a></li>
                  <li><a href="#">英文</a></li>
                  <li><a href="#">數學</a></li>
                  <li><a href="#">理化</a></li>
                  <li><a href="#">xx</a></li>
                </ul>
              </div>
            </div>
            <div class="card border-0">
              <div class="card-body">
                <a
                  href="index.html"
                  class="border-bottom pb-1 d-flex align-items-center text-decoration-none btn2"
                >
                  <div class="button2">
                    <i class="fas fa-paper-plane icon h6 borderRadius2 p-1 mb-0 pt-0"></i>
                  </div>
                  <h4 class="ml-1 text-dark">人才招募</h4>
                </a>
              </div>
            </div>
            <div class="card border-0">
              <div class="card-body">
                <a
                  href="#"
                  class="border-bottom pb-1 d-flex align-items-center text-decoration-none btn2"
                >
                  <div class="button2">
                    <i class="fas fa-paper-plane icon h6 borderRadius2 p-1 mb-0 pt-0"></i>
                  </div>
                  <h4 class="ml-1 text-dark">學校介紹</h4>
                </a>
                <ul>
                  <li><a href="#">學校概要</a></li>
                  <li><a href="#">教學環境</a></li>
                  <li><a href="#">師資職員介紹</a></li>
                  <li><a href="#">交通位置</a></li>
                </ul>
              </div>
            </div>
            <div class="card border-0">
              <div class="card-body">
                <a
                  href="#"
                  class="border-bottom pb-1 d-flex align-items-center text-decoration-none btn2"
                >
                  <div class="button2">
                    <i class="fas fa-paper-plane icon h6 borderRadius2 p-1 mb-0 pt-0"></i>
                  </div>
                  <h4 class="ml-1 text-dark">入學相關</h4>
                </a>
                <ul>
                  <li><a href="#">適合的對象</a></li>
                  <li><a href="#">學費</a></li>
                  <li><a href="#">其他</a></li>
                </ul>
              </div>
            </div>
            <div class="card border-0">
              <div class="card-body">
                <a
                  class="btn border-bottom pb-1 d-flex align-items-center text-decoration-none btn2"
                  @click="login"
                >
                  <div class="button2">
                    <i class="fas fa-paper-plane icon h6 borderRadius2 p-1 mb-0 pt-0"></i>
                  </div>
                  <h4 class="ml-1 text-dark">
                    登入
                  </h4>
                </a>
              </div>
              <!-- Modal -->
              <login-modal ref="login" :api-url="apiUrl"></login-modal>
            </div>
            <div class="card border-0">
              <div class="card-body">
                <a
                  href="#"
                  class="border-bottom pb-1 d-flex align-items-center text-decoration-none btn2"
                >
                  <div class="button2">
                    <i class="fas fa-paper-plane icon h6 borderRadius2 p-1 mb-0 pt-0"></i>
                  </div>
                  <h4 class="ml-1 text-dark">升學榜單</h4>
                </a>
                <ul>
                  <li><a href="#">國中</a></li>
                  <li><a href="#">高中</a></li>
                  <li><a href="#">大學</a></li>
                </ul>
              </div>
            </div>
            <div class="card border-0">
              <div class="card-body">
                <a
                  href="product.html"
                  class="border-bottom pb-1 d-flex align-items-center text-decoration-none btn2"
                >
                  <div class="button2">
                    <i class="fas fa-paper-plane icon h6 borderRadius2 p-1 mb-0 pt-0"></i>
                  </div>
                  <h4 class="ml-1 text-dark">課程購買</h4>
                </a>
                <ul>
                  <li data-bs-toggle="offcanvas"><a href="#language">語言</a></li>
                  <li data-bs-toggle="offcanvas"><a href="#math">數理</a></li>
                  <li data-bs-toggle="offcanvas"><a href="#life">人生</a></li>
                </ul>
              </div>
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
  </header>
  <router-view></router-view>
  <!-- footer -->
  <footer class="border-top">
    <section class="p-7 d-sm-flex align-items-center justify-content-between">
      <div>
        <p class="h6">県知事認可 専修学校 / 学校法人 未来創造学園</p>
        <h3 class="mb-3">彭老師數理専門学校</h3>
      </div>
      <div>
        <p class="mb-1 text-secondary">〒360 竹北市xxxxxxx</p>
        <p class="text-secondary">TEL：0968-911-231 / FAX：0968-911-231</p>
      </div>
    </section>
  </footer>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>

<style lang="scss"></style>
