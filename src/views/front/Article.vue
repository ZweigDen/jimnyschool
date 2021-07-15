<template>
  <section class="p-sm-7 pt-7 p-5">
    <p class="h1 d-flex">
      <span style="animation-delay: calc(1s * 0.1);" data-aos="animate__rotateInDownLeft"
        ><i class="fas fa-exclamation"></i></span
      ><span style="animation-delay: calc(1s * 0.2);" data-aos="animate__rotateInDownLeft">Ｎ</span
      ><span style="animation-delay: calc(1s * 0.3);" data-aos="animate__rotateInDownLeft">Ｅ</span
      ><span style="animation-delay: calc(1s * 0.4);" data-aos="animate__rotateInDownLeft">Ｗ</span
      ><span style="animation-delay: calc(1s * 0.5);" data-aos="animate__rotateInDownLeft">Ｓ</span
      ><span style="animation-delay: calc(1s * 0.6);" data-aos="animate__rotateInDownLeft">＆</span>
      <span style="animation-delay: calc(1s * 0.6);" data-aos="animate__rotateInDownLeft">Ｂ</span>
      <span style="animation-delay: calc(1s * 0.6);" data-aos="animate__rotateInDownLeft">Ｌ</span>
      <span style="animation-delay: calc(1s * 0.6);" data-aos="animate__rotateInDownLeft">Ｏ</span>
      <span style="animation-delay: calc(1s * 0.6);" data-aos="animate__rotateInDownLeft">Ｇ</span>
    </p>
  </section>
  <section class="p-sm-7 p-5" style="background: #f4f4f4">
    <div
      class="bg-white
      rounded-3
      shadow-sm
      text-center
      h100vh
      px-5 pt-8 pb-4 d-flex flex-column justify-content-between"
    >
      <div>
        <div class="mb-4 d-flex justify-content-center align-items-center">
          <h4
            class="me-2 border p-1 px-2 rounded-pill"
            :class="{
              'text-warning border-warning': article.author === '閒聊',
              'text-info border-info': article.author === '講義',
              'text-success border-success': article.author === '面試',
              'text-danger border-danger': article.author === '重要',
              'text-primary border-primary': article.author === '一般',
            }"
          >
            {{ article.author }}
          </h4>
          <h5 class="text-secondary">{{ article.create_at }}</h5>
        </div>
        <h2 class="mb-7 border-bottom pb-6">{{ article.title }}</h2>
        <h4>{{ article.content }}</h4>
      </div>
      <div class="container border-top border-bottom py-3">
        <div class="row">
          <div class="col-sm-4 text-start">
            <div
              class="btn shape-ex"
              @click="goToPage(previousArticle)"
              :class="{ 'd-none': !previousArticle }"
            >
              <i class="bi bi-caret-left-fill"></i>{{ previousArticle.title }}
            </div>
          </div>
          <router-link class="btn col-sm-4" to="/front/articles">返回列表</router-link>
          <div class="col-sm-4 text-end">
            <div
              class="btn shape-ex"
              @click="goToPage(nextArticle)"
              :class="{ 'd-none': !nextArticle }"
            >
              {{ nextArticle.title }}<i class="bi bi-caret-right-fill"></i>
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
      id: '',
      articles: [],
      article: {},
      // 同類型文章
      categories: [],
      nextArticle: {},
      previousArticle: {},
    };
  },
  created() {
    console.log(this.$route);
    console.log(this.$router);
    const { id } = this.$route.params;
    this.id = id;
    this.getArticle();
  },
  methods: {
    // 取得單文章
    getArticle() {
      const url = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/article/${this.id}`;
      this.$http
        .get(url)
        .then((res) => {
          if (res.data.success) {
            this.article = res.data.article;
            this.getArticles();
          } else {
            // eslint-disable-next-line no-alert
            alert(res);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // 去看其他文章
    goToPage(item) {
      this.$router.replace(`/front/article/${item.id}`).then(() => {
        const { id } = this.$route.params;
        this.id = id;
        this.getArticle();
      });
    },
    // 取得所有文章
    getArticles() {
      const url = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/articles/`;
      this.$http
        .get(url)
        .then((res) => {
          if (res.data.success) {
            this.articles = res.data.articles;
            this.getCategories();
          } else {
            console.log(res);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // 取得同類型文章
    getCategories() {
      this.articles.forEach((item) => {
        if (item.author === this.article.author) {
          this.categories.push(item);
          this.setArticle();
        }
      });
      console.log(this.categories);
    },
    // 設定前後筆文章
    setArticle() {
      this.categories.forEach((item, i) => {
        if (item.id === this.article.id) {
          if (i === 0 && i === this.categories.length - 1) {
            this.nextArticle = false;
            this.previousArticle = false;
          } else if (i === 0) {
            this.nextArticle = this.categories[i + 1];
            this.previousArticle = false;
          } else if (i === this.categories.length - 1) {
            this.nextArticle = false;
            this.previousArticle = this.categories[i - 1];
          } else {
            this.nextArticle = this.categories[i + 1];
            this.previousArticle = this.categories[i - 1];
          }
        }
      });
    },
  },
};
</script>
