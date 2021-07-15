<template>
  <section class="py-5 container d-flex flex-column justify-content-between">
    <div>
      <!-- 右邊上方banner -->
      <div class="d-flex justify-content-between align-items-center mb-3">
        <div class="d-flex align-items-center">
          <h2 class="me-4">消息列表</h2>
          <button type="button" class="ms-5 btn btn-outline-dark" @click="openModal(true)">
            <i class="fas fa-plus me-2 text-secondary"></i>新增消息
          </button>
        </div>
        <a href="#" class="text-dark" @click="logOut"><i class="fas fa-sign-out-alt h2"></i></a>
      </div>
      <!-- 下方內容 -->
      <table class="table table-borderless table-hover">
        <thead>
          <tr class="h4 border-bottom">
            <th scope="col">分類</th>
            <th scope="col">標題</th>
            <th scope="col">日期</th>
            <th scope="col">顯示</th>
            <th scope="col">刪除</th>
            <th scope="col">修改</th>
          </tr>
        </thead>
        <tbody>
          <tr class="h4" v-for="item in newsList" :key="item.id">
            <td>{{ item.author }}</td>
            <td>{{ item.title }}</td>
            <td>{{ item.create_at }}</td>
            <td v-if="item.isPublic"><i class="far fa-check-square text-success h3"></i></td>
            <td v-else><i class="far fa-times-circle h3 text-warning"></i></td>
            <td>
              <button
                type="button"
                class="btn btn-outline-danger btn-sm"
                @click="checkDelete(item)"
              >
                <i class="fas fa-trash-alt"></i>
              </button>
            </td>
            <td>
              <button
                type="button"
                class="btn btn-outline-secondary btn-sm"
                @click="openModal(false, item)"
              >
                <i class="fas fa-pen"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- delete modal -->
    <Checkdele
      ref="check"
      :loading="loadingStatus"
      :product="news"
      @delete-product="deleteNews"
    ></Checkdele>
    <!-- add&edit nodal -->
    <Addedit ref="news" :product="news" @render="getNewsList"></Addedit>
    <!-- 分頁模組 -->
  </section>
</template>

<script>
import Addedit from '@/components/AddEditNews.vue';
import Checkdele from '@/components/CheckDele.vue';

export default {
  data() {
    return {
      loadingStatus: '',
      newsList: [],
      pagination: {},
      news: {},
      isNew: false,
    };
  },
  components: {
    Addedit,
    Checkdele,
  },
  mounted() {
    this.getNewsList();
  },
  methods: {
    // 登出
    logOut() {
      document.cookie = 'hexToken=;expires=;';
      this.$router.push('/');
    },
    // 取得文章列表
    getNewsList(page = 1) {
      const url = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/admin/articles?page=${page}`;
      this.$http
        .get(url)
        .then((res) => {
          if (res.data.success) {
            this.newsList = res.data.articles;
            this.pagination = res.data.pagination;
          } else {
            console.log(res);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // 刪除文章
    deleteNews(id) {
      this.loadingStatus = id;
      const url = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/admin/article/${id}`;
      this.$http.delete(url).then((res) => {
        if (res.data.success) {
          this.getNewsList();
          this.loadingStatus = '';
          this.$refs.check.hideModal();
        }
      });
    },
    // 確認刪除
    checkDelete(item) {
      this.news = item;
      this.$refs.check.openModal();
    },
    // open-modal
    openModal(isNew, item) {
      this.isNew = isNew;
      if (this.isNew) {
        this.news = {};
      } else {
        const url = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/admin/article/${item.id}`;
        this.$http
          .get(url)
          .then((res) => {
            if (res.data.success) {
              this.news = res.data.article;
            } else {
              // eslint-disable-next-line no-alert
              alert(res);
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }
      this.$refs.news.openModal();
    },
  },
};
</script>
