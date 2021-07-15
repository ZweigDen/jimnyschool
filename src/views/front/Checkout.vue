<template>
  <section class="p-sm-7 pt-7 p-5">
    <p class="h1 d-flex">
      <span style="animation-delay: calc(1s * 0.1);" data-aos="animate__rotateInDownLeft"
        ><i class="fas fa-exclamation me-3"></i></span
      ><span style="animation-delay: calc(1s * 0.2);" data-aos="animate__rotateInDownLeft">結</span
      ><span style="animation-delay: calc(1s * 0.3);" data-aos="animate__rotateInDownLeft">帳</span
      ><span style="animation-delay: calc(1s * 0.4);" data-aos="animate__rotateInDownLeft">Ｇ</span
      ><span style="animation-delay: calc(1s * 0.5);" data-aos="animate__rotateInDownLeft">Ｏ</span
      ><span style="animation-delay: calc(1s * 0.6);" data-aos="animate__rotateInDownLeft">。</span>
    </p>
  </section>
  <!-- 狀態 -->
  <section class="d-flex justify-content-center mb-7">
    <ol class="triangle p-0">
      <li class="rounded-start" :class="{ current: status === 1 }">購買</li>
      <li :class="{ current: status === 2 }">支付</li>
      <li :class="{ current: status === 3 }">確認</li>
      <li class="rounded-end" :class="{ current: status === 4 }">完成</li>
    </ol>
  </section>
  <!-- 表單 -->
  <section class="container" v-if="status === 1">
    <Form
      class="text-center d-flex flex-column align-items-center"
      v-slot="{ errors }"
      @submit="next(2)"
    >
      <div class="input input--nao position-relative">
        <Field
          id="name"
          name="姓名"
          type="text"
          class="input__field input__field--nao"
          :class="{ 'is-invalid': errors['姓名'] }"
          placeholder="請輸入 姓名"
          rules="required"
          v-model="form.user.name"
        >
        </Field>
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
        <ErrorMessage name="姓名" class="invalid-feedback position-absolute top-0"></ErrorMessage>
      </div>
      <div class="input input--nao position-relative">
        <Field
          id="phone"
          name="手機"
          type="text"
          class="input__field input__field--nao"
          :class="{ 'is-invalid': errors['手機'] }"
          placeholder="請輸入 手機"
          :rules="isPhone"
          v-model="form.user.tel"
        >
        </Field>
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
        <ErrorMessage name="手機" class="invalid-feedback position-absolute top-0"></ErrorMessage>
      </div>
      <div class="input input--nao position-relative">
        <Field
          id="email"
          name="信箱"
          type="email"
          class="input__field input__field--nao"
          :class="{ 'is-invalid': errors['信箱'] }"
          placeholder="請輸入 Email"
          rules="email|required"
          v-model="form.user.email"
        >
        </Field>
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
        <ErrorMessage name="信箱" class="invalid-feedback position-absolute top-0"></ErrorMessage>
      </div>
      <div class="input input--nao position-relative mb-6">
        <Field
          id="address"
          name="地址"
          type="text"
          class="input__field input__field--nao"
          :class="{ 'is-invalid': errors['地址'] }"
          placeholder="請輸入 地址"
          rules="required"
          v-model="form.user.address"
        >
        </Field>
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
        <ErrorMessage name="地址" class="invalid-feedback position-absolute top-0"></ErrorMessage>
      </div>
      <button type="submit" class="btn btn-dark mb-6 magnifyText">下一步</button>
    </Form>
  </section>
  <!-- pay -->
  <section class="container" v-if="status === 2">
    <div class="row">
      <div class="col-sm-4 col-1"></div>
      <div class="col-sm-4 col-10">
        <!-- 信用卡 -->
        <div class="form-check d-flex align-items-center border-top py-3">
          <input
            class="form-check-input me-3"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
            sryle="width:200px"
            value="線上刷卡"
            v-model="form.user.pay"
          />
          <label class="form-check-label h3" for="flexRadioDefault1">
            線上刷卡<i class="fab fa-cc-visa mx-1"></i><i class="fab fa-cc-mastercard mx-1"></i
            ><i class="fab fa-cc-jcb mx-1"></i>
          </label>
        </div>
        <div class="text-center"></div>
        <!-- 虛擬帳號 -->
        <div class="form-check d-flex align-items-center border-top py-3">
          <input
            class="form-check-input me-3"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault2"
            value="PayPal"
            v-model="form.user.pay"
          />
          <label class="form-check-label h3" for="flexRadioDefault2">
            PayPal<i class="fab fa-cc-paypal mx-1"></i>
          </label>
        </div>
        <!-- 台銀轉 -->
        <div class="form-check d-flex align-items-center border-top py-3">
          <input
            class="form-check-input me-3"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault3"
            value="臺灣銀行線上轉帳"
            v-model="form.user.pay"
          />
          <label class="form-check-label h3" for="flexRadioDefault3">
            臺灣銀行線上轉帳
          </label>
        </div>
        <div class="form-check d-flex align-items-center border-top py-3">
          <input
            class="form-check-input me-3"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault5"
            value="7-11 ibon"
            v-model="form.user.pay"
          />
          <label class="form-check-label h3" for="flexRadioDefault5">
            7-11 ibon
          </label>
        </div>
        <div class="form-check d-flex align-items-center border-top py-3">
          <input
            class="form-check-input me-3"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault6"
            value="FamiPort"
            v-model="form.user.pay"
          />
          <label class="form-check-label h3" for="flexRadioDefault6">
            FamiPort
          </label>
        </div>
        <!-- applePay -->
        <div class="form-check d-flex align-items-center border-top py-3">
          <input
            class="form-check-input me-3"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault7"
            value="ApplePay"
            v-model="form.user.pay"
          />
          <label class="form-check-label h3" for="flexRadioDefault7">
            ApplePay<i class="fab fa-cc-apple-pay mx-1"></i>
          </label>
        </div>
        <div class="form-check d-flex align-items-center border-top py-3 mb-5">
          <input
            class="form-check-input me-3"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault8"
            v-model="form.user.pay"
            value="呼嚕幣"
            checked
          />
          <label class="form-check-label h3" for="flexRadioDefault8">
            呼嚕幣
          </label>
        </div>
        <div class="d-flex justify-content-center">
          <button type="buttom" class="btn btn-dark mb-6 magnifyText" @click="next(3)">
            下一步
          </button>
        </div>
      </div>
      <div class="col-sm-4 col-1"></div>
    </div>
  </section>
  <!-- 確認 -->
  <section class="container" v-if="status === 3">
    <div class="row">
      <div class="col-sm-3"></div>
      <div class="col-sm-6 col-12">
        <div class="mb-7 border-bottom pb-4">
          <h2 class="mb-4">購買的課程</h2>
          <table class="table align-middle">
            <thead>
              <tr class="text-info">
                <th scope="col"></th>
                <th scope="col">課程名稱</th>
                <th scope="col">類別</th>
                <th scope="col">價格</th>
              </tr>
            </thead>
            <tbody v-for="item in carts" :key="item.product.id">
              <tr>
                <th scope="row">
                  <img :src="item.product.imageUrl" alt="" style="width:120px;height:90px" />
                </th>
                <td>{{ item.product.title }}</td>
                <td>{{ item.product.category }}</td>
                <td>{{ $toCurrency(item.final_total) }}</td>
              </tr>
            </tbody>
          </table>
          <h3 class="text-end">總金額：＄{{ $toCurrency(total) }}</h3>
        </div>
        <div class="mb-7 pb-4">
          <div class="d-flex justify-content-between align-items-center">
            <h2 class="mb-4">買方資料</h2>
            <button type="button" class="btn btn-outline-info" @click="next(1)">修改</button>
          </div>
          <table class="table align-middle">
            <thead>
              <tr class="text-info">
                <th scope="col"></th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">姓名</th>
                <td>{{ form.user.name }}</td>
              </tr>
              <tr>
                <th scope="row">電話</th>
                <td>{{ form.user.tel }}</td>
              </tr>
              <tr>
                <th scope="row">信箱</th>
                <td>{{ form.user.email }}</td>
              </tr>
              <tr>
                <th scope="row">地址</th>
                <td>{{ form.user.address }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="mb-7 pb-4">
          <div class="d-flex justify-content-between align-items-center">
            <h2 class="mb-4">付款方式</h2>
            <button type="button" class="btn btn-outline-info" @click="next(2)">修改</button>
          </div>
          <table class="table align-middle">
            <thead>
              <tr class="text-info">
                <th scope="col"></th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">付款方式</th>
                <td>{{ form.user.pay }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="d-flex justify-content-center">
          <button type="buttom" class="btn btn-dark mb-6 magnifyText" @click="createOrder">
            下一步
          </button>
        </div>
      </div>
      <div class="col-sm-3"></div>
    </div>
  </section>
  <!-- 完工撒花～ -->
  <section class="d-flex flex-column align-items-center mb-7" v-if="status === 4">
    <h3 class="mb-5">感謝你的購買</h3>
    <h4>訂單編號：{{ order.orderId }}</h4>
  </section>
</template>

<script>
export default {
  data() {
    return {
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: '',
          pay: '呼嚕幣',
        },
      },
      carts: [],
      total: '',
      id: '',
      status: 1,
      order: {},
    };
  },
  mounted() {
    this.getCart();
  },
  methods: {
    isPhone(value) {
      const phoneNumber = /^(09)[0-9]{8}$/;
      return phoneNumber.test(value) ? true : '需要正確的手機號碼';
    },
    // 付款步驟
    next(num) {
      this.status = num;
    },
    getCart() {
      const url = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/cart`;
      this.$http.get(url).then((res) => {
        if (res.data.success) {
          console.log(res);
          this.carts = res.data.data.carts;
          this.total = res.data.data.final_total;
        }
      });
    },
    createOrder() {
      const order = this.form;
      const url = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/order`;
      this.$http
        .post(url, { data: order })
        .then((res) => {
          if (res.data.success) {
            this.order = res.data;
            this.status = 4;
          } else {
            console.log('res:', res);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
