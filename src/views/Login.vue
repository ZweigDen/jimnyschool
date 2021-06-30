<template>
  <div class="container mt-5 d-flex justify-content-center">
    <Form class="text-center" @submit.prevent="logIn">
      <div class="input input--nao">
        <label class="input__label input__label--nao" for="inputEmail">
          <div class="h4">帳號</div>
        </label>
        <input
          class="input__field input__field--nao"
          type="email"
          id="inputEmail"
          v-model="user.username"
        />
        <svg
          class="graphic graphic--nao"
          width="300%"
          height="100%"
          viewBox="0 0 1200 60"
          preserveAspectRatio="none"
        >
          <path
            d="M0,56.5c0,0,298.666,0,399.333,
            0C448.336,56.5,513.994,46,597,46c77.327,0,135,10.5,
            200.999,10.5c95.996,0,402.001,0,402.001,0"
          />
        </svg>
      </div>
      <div class="input input--nao">
        <label class="input__label input__label--nao" for="inputPassword">
          <div class="h4">密碼</div>
        </label>
        <input
          class="input__field input__field--nao"
          type="password"
          id="inputPassword"
          v-model="user.password"
        />
        <svg
          class="graphic graphic--nao"
          width="300%"
          height="100%"
          viewBox="0 0 1200 60"
          preserveAspectRatio="none"
        >
          <path
            d="M0,56.5c0,0,298.666,0,399.333,
            0C448.336,56.5,513.994,46,597,46c77.327,0,135,10.5,
            200.999,10.5c95.996,0,402.001,0,402.001,0"
          />
        </svg>
      </div>
      <div class="my-5">
        <button class="btn btn-lg btn-secondary" type="button" @click="logIn">
          登入
        </button>
      </div>
    </Form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {},
    };
  },
  methods: {
    logIn() {
      const api = `${process.env.VUE_APP_URL}/admin/signin`;
      this.$http.post(api, this.user).then((res) => {
        if (res.data.success) {
          const { token, expired } = res.data;
          document.cookie = `hexToken=${token};expires=${new Date(expired)};`;
          this.$router.push('/admin');
        } else {
          // eslint-disable-next-line no-alert
          alert(res.data.message);
        }
      });
    },
  },
};
</script>
