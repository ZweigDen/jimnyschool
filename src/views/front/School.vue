<template>
  <section class="p-sm-7 pt-7 p-5">
    <p class="h1 d-flex">
      <span style="animation-delay: calc(1s * 0.1);" data-aos="animate__rotateInDownLeft"
        ><i class="fas fa-exclamation me-3"></i></span
      ><span style="animation-delay: calc(1s * 0.2);" data-aos="animate__rotateInDownLeft">校</span
      ><span style="animation-delay: calc(1s * 0.3);" data-aos="animate__rotateInDownLeft">園</span
      ><span style="animation-delay: calc(1s * 0.4);" data-aos="animate__rotateInDownLeft">介</span
      ><span style="animation-delay: calc(1s * 0.5);" data-aos="animate__rotateInDownLeft">紹</span
      ><span style="animation-delay: calc(1s * 0.6);" data-aos="animate__rotateInDownLeft">。</span>
    </p>
  </section>
  <section class="p-5 p-sm-7">
    <div class="row row-cols-1 row-cols-md-2 g-4">
      <div class="col" data-aos="animate__bounceInLeft">
        <div class="btn p-0 pickHover mb-4">
          <router-link to="/front/details" class="text-dark text-decoration-none">
            <img src="@/assets/images/school.jpg" alt="" class="" />
            <h4 class="d-flex justify-content-between border-bottom pt-3 ps-2">
              學校概要
              <span class="border-bottom pb-2 border-dark px-2"
                ><i class="fas fa-long-arrow-alt-right"></i
              ></span>
            </h4>
          </router-link>
        </div>
      </div>
      <div class="col" data-aos="animate__bounceInDown">
        <div class="btn p-0 pickHover mb-4">
          <router-link to="/front/classroom" class="text-dark text-decoration-none">
            <img src="@/assets/images/surroundings.jpg" alt="" class="" />
            <h4 class="d-flex justify-content-between border-bottom pt-3 ps-2">
              教學環境
              <span class="border-bottom pb-2 border-dark px-2"
                ><i class="fas fa-long-arrow-alt-right"></i
              ></span>
            </h4>
          </router-link>
        </div>
      </div>
      <div class="col" data-aos="animate__bounceInUp">
        <div class="btn p-0 pickHover mb-4">
          <router-link to="/front/teachers" class="text-dark text-decoration-none">
            <img src="@/assets/images/profession.jpg" alt="" class="" />
            <h4 class="d-flex justify-content-between border-bottom pt-3 ps-2">
              教師職員介紹
              <span class="border-bottom pb-2 border-dark px-2"
                ><i class="fas fa-long-arrow-alt-right"></i
              ></span>
            </h4>
          </router-link>
        </div>
      </div>
      <div class="col" data-aos="animate__bounceInRight">
        <div class="btn p-0 pickHover mb-4">
          <router-link to="/front/map" class="text-decoration-none text-dark">
            <img src="@/assets/images/map.jpg" alt="" class="" />
            <h4 class="d-flex justify-content-between border-bottom pt-3 ps-2">
              交通位置
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
