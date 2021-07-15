<template>
  <section class="p-sm-7 pt-7 p-5">
    <p class="h1 d-flex">
      <span style="animation-delay: calc(1s * 0.1);" data-aos="animate__rotateInDownLeft"
        ><i class="fas fa-exclamation mr-3"></i></span
      ><span style="animation-delay: calc(1s * 0.2);" data-aos="animate__rotateInDownLeft">師</span
      ><span style="animation-delay: calc(1s * 0.3);" data-aos="animate__rotateInDownLeft">資</span
      ><span style="animation-delay: calc(1s * 0.4);" data-aos="animate__rotateInDownLeft">介</span
      ><span style="animation-delay: calc(1s * 0.5);" data-aos="animate__rotateInDownLeft">紹</span
      ><span style="animation-delay: calc(1s * 0.6);" data-aos="animate__rotateInDownLeft">。</span>
    </p>
  </section>
  <!-- bg -->
  <section
    class="productHeader mb-7"
    :style="{ 'background-image': 'url(' + require('../../assets/images/teachers-01.jpg') + ')' }"
  ></section>
  <!-- 教育方針 -->
  <section class="text-center container mb-7">
    <div class="row flex-column align-items-center">
      <div class="col mb-3">
        <h3 class="mb-sm-4 mb-3">與時俱進</h3>
      </div>
      <div class="col mb-6">
        <h2>「高專業性」<span class="h3">以及</span>「豐富人力」<span class="h3">的培養</span></h2>
      </div>
      <div class="col">
        <h5 class="mb-2">以我校「進取」、「互助」的課程為基礎，</h5>
        <h5 class="mb-2">在以校長、理事長為核心的指導體制下，</h5>
        <h5 class="mb-2">以培養與時俱進的「高專業性」和「豐富人力」為目標</h5>
        <h5 class="mb-2">所有教職員工共同努力，每天穩定地實踐每一項教育活動。</h5>
        <h5 class="mb-2">培養永遠向前看的夢想之人，你的夢想由我們培養。</h5>
        <h5 class="mb-2">教育出實力雄厚、真正能為社會做出貢獻的人才。</h5>
      </div>
    </div>
  </section>
  <!-- 教師列表 -->
  <section class="p-5 p-sm-7">
    <div class="row row-cols-1 row-cols-md-2 g-4">
      <div class="col">
        <div class="card h-100 border-0">
          <img src="../../assets/images/teacher-01.jpg" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">校長-呼嚕貓</h5>
            <p class="card-text">國家級重要教育人才，任何領域都能見到校長的影子。</p>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card h-100 border-0">
          <img src="../../assets/images/teacher-02.jpg" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">主任-可憐貓奴</h5>
            <p class="card-text">
              每天負責照料呼嚕校長的生活。
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="d-flex justify-content-center p-7 mb-4">
    <router-link
      to="/front/school"
      class="text-decoration-none text-dark"
      data-aos="animate__bounceInLeft"
    >
      <i class="fas fa-chevron-circle-left h1 magnifyText"></i>
    </router-link>
  </section>
</template>
