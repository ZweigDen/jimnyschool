<template>
  <section class="bg-dark1 px-lg-7 py-4">
    <div class="d-sm-flex justify-content-between p-sm-7 p-4">
      <!-- <div class="d-none">
        <a
          href="#"
          class="border-bottom
             border-light pb-1 d-flex
             align-items-center text-decoration-none
             text-white icon mb-4 pb-2"
        >
          <h4 class="px-1 text-white snapLeftBtn">></h4>
          <h4 class="ms-1">學科介紹</h4>
        </a>
        <ul class="list-unstyled">
          <li class="mb-1 magnifyText">
            <a href="#" class="text-secondary text-decoration-none">－程式</a>
          </li>
          <li class="mb-1 magnifyText">
            <a href="#" class="text-secondary text-decoration-none">－創意</a>
          </li>
          <li class="mb-1 magnifyText">
            <a href="#" class="text-secondary text-decoration-none">－其他</a>
          </li>
          <li class="magnifyText">
            <a href="#" class="text-secondary text-decoration-none">－商業</a>
          </li>
          <li class="magnifyText">
            <a href="#" class="text-secondary text-decoration-none">－醫學</a>
          </li>
        </ul>
      </div> -->
      <div>
        <router-link
          to="/front/school"
          class="border-bottom
             border-light
              pb-1 d-flex
              align-items-center
              text-decoration-none
              text-white icon mb-4
              pb-2"
        >
          <h4 class="px-1 text-white snapLeftBtn">></h4>
          <h4 class="ms-1">學校介紹</h4>
        </router-link>
        <ul class="list-unstyled d-none d-sm-block">
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
      <div>
        <router-link
          to="/front/admissions"
          class="border-bottom
            border-light
            pb-1
            d-flex
            align-items-center
            text-decoration-none
            text-white
            icon
            mb-4
            pb-2"
        >
          <h4 class="px-1 text-white snapLeftBtn">></h4>
          <h4 class="ms-1">招生資訊</h4>
        </router-link>
        <ul class="list-unstyled d-none d-sm-block">
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
      <div>
        <router-link
          to="/front/articles"
          class="border-bottom
            border-light
            pb-1
            d-flex
            align-items-center
            text-decoration-none
            text-white icon mb-4 pb-2"
        >
          <h4 class="px-1 text-white snapLeftBtn">></h4>
          <h4 class="ms-1">最新消息</h4>
        </router-link>
        <ul class="list-unstyled d-none d-sm-block">
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
      <div>
        <router-link
          to="/front/courses"
          class="border-bottom
             border-light
              d-flex
              align-items-center
              text-decoration-none
              text-white
              icon
              mb-4
              pb-2"
        >
          <h4 class="px-1 text-white snapLeftBtn">></h4>
          <h4 class="ms-1">課程平台</h4>
        </router-link>
        <ul class="list-unstyled d-none d-sm-block">
          <li class="mb-1 magnifyText">
            <router-link to="/front/introduction" class="text-secondary text-decoration-none"
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
      <div class="d-flex flex-column justify-content-between ">
        <router-link
          to="/front/recruit"
          class="border-bottom
             border-light
              d-flex
               align-items-center
                text-decoration-none
                text-white
                icon
                mb-4
                pb-2"
        >
          <h4 class="px-1 text-white snapLeftBtn">></h4>
          <h4 class="ms-1">誠徵人才</h4>
        </router-link>
        <router-link
          to="/front/cooperation"
          class="border-bottom
            border-light
            pb-1 d-flex
            align-items-center
             text-decoration-none
             text-white
             icon
             mb-4
             pb-2"
        >
          <h4 class="px-1 text-white snapLeftBtn">></h4>
          <h4 class="ms-1">合作夥伴</h4>
        </router-link>
        <router-link
          to="/front/login"
          class="border-bottom
             border-light
             pb-1
             d-flex
             align-items-center
             text-decoration-none
             text-white
             icon
             pb-2"
        >
          <h4 class="px-1 text-white snapLeftBtn">></h4>
          <h4 class="ms-1">後台登入</h4>
        </router-link>
      </div>
    </div>
  </section>
</template>
