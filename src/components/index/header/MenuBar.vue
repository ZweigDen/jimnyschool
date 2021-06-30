<template>
  <section>
    <a
      class="menu-button menuAnimated"
      data-bs-toggle="offcanvas"
      data-bs-target="#offcanvasRight"
      aria-controls="offcanvasRight"
      data-aos-offset="200"
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
      id="offcanvasRight"
      aria-labelledby="offcanvasRightLabel"
    >
      <div class="offcanvas-body p-md-7 p-sm-3 d-flex flex-column justify-content-between">
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
              <router-link
                to="/front/login"
                class="btn border-bottom pb-1 d-flex align-items-center text-decoration-none btn2"
              >
                <div class="button2">
                  <i class="fas fa-paper-plane icon h6 borderRadius2 p-1 mb-0 pt-0"></i>
                </div>
                <h4 class="ml-1 text-dark">登入</h4>
              </router-link>
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
                <li><a href="product.html#language">語言</a></li>
                <li><a href="product.html#math">數理</a></li>
                <li><a href="product.html#life">人生</a></li>
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
</template>
