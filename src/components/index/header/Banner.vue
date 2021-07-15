<template>
  <section class="d-flex align-items-center mb-10 mb-sm-9 mb-lg-0 p-sm-5">
    <div class="col-sm-6 col-lg-4 ps-0 tittleFixed" :class="{ menufadeIn: animation }">
      <h1 class="tittleIndex pt-2 ps-2 p-sm-0">
        <router-link to="/" class="d-flex flex-column text-decoration-none"
          ><span class="h6">苗栗國補教王-專業學校 未來創造學院</span
          ><span class="h2">呼嚕貓教育學校</span></router-link
        >
      </h1>
    </div>
    <div class="col-4 d-none d-lg-block">
      <div class="d-flex justify-content-center">
        <router-link
          to="/front/articles"
          class="d-flex align-items-center text-decoration-none icon mx-2"
        >
          <h4 class="px-1 text-white snapLeftBtn">></h4>
          <h4 class="ms-1 text-white">活動消息</h4>
        </router-link>
        <router-link
          to="/front/school"
          class="d-flex align-items-center text-decoration-none icon mx-2"
        >
          <h4 class="px-1 text-white snapLeftBtn">></h4>
          <h4 class="ms-1 text-white">校園介紹</h4>
        </router-link>
        <router-link
          to="/front/lesson"
          class="d-flex align-items-center text-decoration-none icon mx-2"
        >
          <h4 class="px-1 text-white snapLeftBtn">></h4>
          <h4 class="ms-1 text-white">課程平台</h4>
        </router-link>
      </div>
    </div>
    <div class="col-4 d-none d-lg-block">
      <ul class="list-unstyled d-flex mb-0 align-items-center justify-content-end me-7">
        <li class="magnifyText">
          <router-link to="/front/admissions" class="text-white text-decoration-none h6"
            >招生資訊</router-link
          >
        </li>
        <li class="ms-4 magnifyText">
          <router-link to="/front/cooperation" class="text-white text-decoration-none h6"
            >合作夥伴</router-link
          >
        </li>
        <li class="ms-4 magnifyText">
          <router-link to="/front/recruit" class="text-white text-decoration-none h6"
            >誠徵人才</router-link
          >
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      animation: false,
    };
  },
  mounted() {
    // 增加背景色以及改變bar色
    window.addEventListener('scroll', () => {
      const windowY = window.scrollY;
      const main = document.querySelector('#main');
      if (windowY > main.offsetTop - 330) {
        this.animation = true;
      } else {
        this.animation = false;
      }
    });
  },
  methods: {},
};
</script>
