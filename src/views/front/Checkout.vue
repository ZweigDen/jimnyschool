<template>
  <!-- 購物車列表 -->
  <section>
      <div v-for="item in carts" :key="item.id">
          123
      </div>
  </section>
  <!-- 表單 -->
  <section class="container">
    <div class="row text-center">
      <div class="col-6">
        <div class="input input--nao">
          <label class="input__label input__label--nao" for="inputName">
            <div class="h4">姓名</div>
          </label>
          <input
            class="input__field input__field--nao"
            type="text"
            id="inputName"
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
      </div>
      <div class="col-6">
        <div class="input input--nao">
          <label class="input__label input__label--nao" for="inputPhone">
            <div class="h4">電話</div>
          </label>
          <input
            class="input__field input__field--nao"
            type="number"
            id="inputPhone"
            v-model="user.userphone"
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
      </div>
      <div class="col-6">
        <div class="input input--nao">
          <label class="input__label input__label--nao" for="inputMail">
            <div class="h4">郵件</div>
          </label>
          <input
            class="input__field input__field--nao"
            type="email"
            id="inputMail"
            v-model="user.usermail"
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
      </div>
      <div class="col-6">
        <div class="input input--nao">
          <label class="input__label input__label--nao" for="inputAddress">
            <div class="h4">地址</div>
          </label>
          <input
            class="input__field input__field--nao"
            type="text"
            id="inputAddress"
            v-model="user.useraddress"
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
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      user: {},
      carts: [],
    };
  },
  mounted() {
    this.getCarts();
  },
  methods: {
    getCarts() {
      const url = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/cart`;
      this.$http
        .get(url)
        .then((res) => {
          if (res.data.success) {
            this.carts = res.data.data;
          } else {
            // eslint-disable-next-line no-alert
            alert(res);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
