<template>
  <section class="d-flex align-items-center mb-10 mb-sm-9 mb-lg-0 p-sm-5">
    <div class="col-sm-6 col-lg-4 ps-0 tittleFixed">
      <h1 class="tittleIndex pt-2 ps-2 p-sm-0">
        <router-link to="/" class="d-flex flex-column text-decoration-none"
          ><span class="h6">고양이기업 미래 창조 아카데미</span
          ><span class="h2">코골이 고양이 게임 대학</span></router-link
        >
      </h1>
    </div>
    <div class="col-4 d-none d-lg-block">
      <div class="d-flex justify-content-center">
        <router-link
          to="/front/school"
          class="d-flex align-items-center text-decoration-none icon mx-2"
        >
          <h4 class="px-1 text-white snapLeftBtn">></h4>
          <h4 class="ms-1 text-white">학교 안내</h4>
        </router-link>
        <router-link
          to="/front/teachers"
          class="d-flex align-items-center text-decoration-none icon mx-2"
        >
          <h4 class="px-1 text-white snapLeftBtn">></h4>
          <h4 class="ms-1 text-white">학과 · 코스</h4>
        </router-link>
        <router-link
          to="/front/courses"
          class="d-flex align-items-center text-decoration-none icon mx-2"
        >
          <h4 class="px-1 text-white snapLeftBtn">></h4>
          <h4 class="ms-1 text-white">캠퍼스 라이프</h4>
        </router-link>
      </div>
    </div>
    <div class="col-4 d-none d-lg-block">
      <ul class="list-unstyled d-flex mb-0 align-items-center justify-content-end me-7">
        <li class="magnifyText">
          <a href="#" class="text-white text-decoration-none h6">입학 안내</a>
        </li>
        <li class="ms-4 magnifyText">
          <a href="#" class="text-white text-decoration-none h6">취업 · 자격</a>
        </li>
        <li class="ms-4 magnifyText">
          <a href="#" class="text-white text-decoration-none h6">대상자 별</a>
        </li>
      </ul>
    </div>
  </section>
</template>
