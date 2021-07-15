<template>
  <section class="p-sm-7 pt-7 p-5">
    <p class="h1 d-flex">
      <span style="animation-delay: calc(1s * 0.1);" data-aos="animate__rotateInDownLeft"
        ><i class="fas fa-exclamation me-3"></i></span
      ><span style="animation-delay: calc(1s * 0.2);" data-aos="animate__rotateInDownLeft">課</span
      ><span style="animation-delay: calc(1s * 0.3);" data-aos="animate__rotateInDownLeft">程</span
      ><span style="animation-delay: calc(1s * 0.4);" data-aos="animate__rotateInDownLeft">平</span
      ><span style="animation-delay: calc(1s * 0.5);" data-aos="animate__rotateInDownLeft">台</span
      ><span style="animation-delay: calc(1s * 0.6);" data-aos="animate__rotateInDownLeft">。</span>
    </p>
  </section>
  <section class="p-sm-7 p-5">
    <div class="row row-cols-1 row-cols-md-2 g-4">
      <div class="col" data-aos="animate__bounceInRight">
        <div class="btn p-0 pickHover mb-4">
          <router-link to="/front/introduction" class="text-dark text-decoration-none">
            <img src="@/assets/images/introduction.jpg" alt="" class="" />
            <h4 class="d-flex justify-content-between border-bottom pt-3 ps-2">
              課程介紹
              <span class="border-bottom pb-2 border-dark px-2"
                ><i class="fas fa-long-arrow-alt-right"></i
              ></span>
            </h4>
          </router-link>
        </div>
      </div>
      <div class="col" data-aos="animate__bounceInLeft">
        <div class="btn p-0 pickHover mb-4">
          <router-link to="/front/courses" class="text-dark text-decoration-none">
            <img src="@/assets/images/learn.jpg" alt="" class="" />
            <h4 class="d-flex justify-content-between border-bottom pt-3 ps-2">
              購買課程
              <span class="border-bottom pb-2 border-dark px-2"
                ><i class="fas fa-long-arrow-alt-right"></i
              ></span>
            </h4>
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script></script>
