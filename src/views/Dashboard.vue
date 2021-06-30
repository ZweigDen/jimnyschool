<template>
  <div class="d-flex">
    <section
      class="bg-secondary d-flex flex-column justify-content-between p-5"
      style="height: 100vh"
    >
      <div>
        <ul class="list-unstyled d-flex flex-column">
          <li class="btn p-0 btn-secondary w-100 text-start mb-1">
            <h4 class="m-2 text-dark"><i class="fas fa-chart-bar me-3"></i>訂單列表</h4>
          </li>
          <li class="btn p-0 btn-secondary w-100 text-start mb-1">
            <router-link to="/admin/coupons" class="text-decoration-none">
              <h4 class="m-2 text-dark"><i class="fas fa-comments me-3"></i>優惠卷</h4>
            </router-link>
          </li>
          <li class="btn p-0 btn-secondary w-100 text-start mb-1">
            <router-link to="/admin/news" class="text-decoration-none"
              ><h4 class="m-2 text-dark">
                <i class="fas fa-list-alt me-3"></i>最新消息
              </h4></router-link
            >
          </li>
          <li class="btn p-0 btn-secondary w-100 text-start mb-1">
            <router-link to="/admin/products" class="text-decoration-none"
              ><h4 class="m-2 text-dark">
                <i class="fas fa-play-circle me-3"></i>課程列表
              </h4></router-link
            >
          </li>
          <li class="btn p-0 btn-secondary w-100 text-start mb-1">
            <h4 class="m-2 text-dark"><i class="fas fa-users me-3"></i>教師資料</h4>
          </li>
          <li class="btn p-0 btn-secondary w-100 text-start">
            <h4 class="m-2 text-dark"><i class="fas fa-cog me-3"></i>其他設定</h4>
          </li>
        </ul>
      </div>
      <div class="d-flex align-items-center">
        <div>
          <h4 class="mb-1">Zweig Deng</h4>
          <h5 class="mb-0">oiuuiooiu@icloud.com</h5>
        </div>
      </div>
    </section>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  data() {
    return {
      checkSuccess: false,
    };
  },
  created() {
    this.checkLogin();
  },
  methods: {
    checkLogin() {
      const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
      if (token) {
        // Axios 預設值
        this.$http.defaults.headers.common.Authorization = `${token}`;
        const api = `${process.env.VUE_APP_API}api/user/check`;
        this.$http.post(api, { api_token: this.token }).then((response) => {
          if (response.data.success) {
            this.checkSuccess = true;
          } else {
            alert(response.data.message);
            this.$router.push('/login');
          }
        });
      } else {
        alert('您尚未登入。');
        this.$router.push('/login');
      }
    },
    signout() {
      document.cookie = 'hexToken=;expires=;';
      alert('token 已清除');
      this.$router.push('/login');
    },
  },
};
</script>
