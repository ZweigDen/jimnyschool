<template>
  <section class="p-sm-7 pt-7 p-5">
    <p class="h1 d-flex">
      <span style="animation-delay: calc(1s * 0.1);" data-aos="animate__rotateInDownLeft"
        ><i class="fas fa-exclamation me-2"></i></span
      ><span style="animation-delay: calc(1s * 0.2);" data-aos="animate__rotateInDownLeft">活</span
      ><span style="animation-delay: calc(1s * 0.3);" data-aos="animate__rotateInDownLeft">動</span
      ><span style="animation-delay: calc(1s * 0.4);" data-aos="animate__rotateInDownLeft">消</span
      ><span style="animation-delay: calc(1s * 0.5);" data-aos="animate__rotateInDownLeft">息</span
      ><span style="animation-delay: calc(1s * 0.6);" data-aos="animate__rotateInDownLeft">。</span>
    </p>
  </section>
  <section class="container mb-7">
    <div class="row">
      <div class="col-sm-2">
        <div
          class="d-flex flex-sm-column justify-content-between"
          role="group"
          aria-label="Basic radio toggle button group"
        >
          <input
            type="radio"
            class="btn-check"
            name="btnradio"
            id="btnradio1"
            autocomplete="off"
            checked
            @click="selectCategory = ''"
          />
          <label class="btn btn-outline-dark mb-3" for="btnradio1">全部</label>
          <template v-for="item in categories" :key="item.id">
            <input
              type="radio"
              class="btn-check"
              name="btnradio"
              :id="item"
              autocomplete="off"
              @click="selectCategory = item"
            />
            <label class="btn btn-outline-dark mb-3" :for="item">{{ item }}</label>
          </template>
        </div>
      </div>
      <div class="col-sm-10">
        <div class="ms-sm-5 ps-sm-6 border-sm-start">
          <template v-for="item in filterproducts" :key="item.id">
            <div
              class="btn border-bottom w-100 py-2 icon text-dark shape-ex1"
              @click="goToPage(item)"
            >
              <div class="d-flex align-items-center mb-2">
                <h5>
                  {{ item.create_at }}
                </h5>
                <h5
                  class="ms-2 border p-1 px-2 rounded-pill"
                  :class="{
                    'text-warning border-warning': item.author === '閒聊',
                    'text-info border-info': item.author === '講義',
                    'text-success border-success': item.author === '面試',
                    'text-danger border-danger': item.author === '重要',
                    'text-primary border-primary': item.author === '一般',
                  }"
                >
                  {{ item.author }}
                </h5>
              </div>
              <div class="d-sm-flex justify-content-start">
                <h4 class="px-1 snapLeftBtn1 me-2 d-none d-sm-block">></h4>
                <h4>{{ item.title }}</h4>
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      articles: [],
      article: {},
      pagination: {},
      categories: [],
      selectCategory: '',
    };
  },
  computed: {
    filterproducts() {
      return this.articles.filter((item) => item.author.match(this.selectCategory));
    },
  },
  mounted() {
    this.getArticles();
  },
  methods: {
    // 取得所有文章
    getArticles() {
      const url = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/articles`;
      this.$http
        .get(url)
        .then((res) => {
          if (res.data.success) {
            this.articles = res.data.articles;
            this.pagination = res.data.pagination;
            this.getCategories();
          } else {
            alert(res);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // 取得所有分類
    getCategories() {
      const categories = new Set();
      this.articles.forEach((item) => {
        categories.add(item.author);
      });
      this.categories = [...categories];
    },
    // 查看細節
    goToPage(item) {
      console.log(this.$route); // 1
      console.log(this.$router); // 2
      this.$router.push(`/front/article/${item.id}`);
    },
  },
};
</script>
