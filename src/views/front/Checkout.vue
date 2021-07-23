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
      @submit="status = 2"
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
            :checked="form.user.pay === '線上刷卡'"
          />
          <label class="form-check-label h3" for="flexRadioDefault1">
            線上刷卡<i class="fab fa-cc-visa mx-1"></i><i class="fab fa-cc-mastercard mx-1"></i
            ><i class="fab fa-cc-jcb mx-1"></i>
          </label>
        </div>
        <Form
          class="text-center d-flex flex-column align-items-center"
          v-slot="{ errors }"
          @submit="next(3)"
          :class="{ 'd-none': form.user.pay !== '線上刷卡' }"
        >
          <div class="input input--nao position-relative">
            <Field
              id="number"
              name="卡號"
              type="text"
              class="input__field input__field--nao"
              :class="{ 'is-invalid': errors['卡號'] }"
              placeholder="請輸入 卡號"
              rules="digits:25"
              v-model="form.user.credit.number"
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
            <ErrorMessage
              name="卡號"
              class="invalid-feedback position-absolute top-0"
            ></ErrorMessage>
          </div>
          <div class="input input--nao position-relative">
            <Field
              id="name"
              name="姓名"
              type="text"
              class="input__field input__field--nao"
              :class="{ 'is-invalid': errors['姓名'] }"
              placeholder="請輸入 姓名"
              rules="required"
              v-model="form.user.credit.name"
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
            <ErrorMessage
              name="姓名"
              class="invalid-feedback position-absolute top-0"
            ></ErrorMessage>
          </div>
          <div class="input input--nao position-relative">
            <Field
              id="date"
              name="有效期限"
              type="text"
              class="input__field input__field--nao"
              :class="{ 'is-invalid': errors['有效期限'] }"
              placeholder="請輸入 MM/YY"
              rules="required"
              v-model="form.user.credit.date"
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
            <ErrorMessage
              name="有效期限"
              class="invalid-feedback position-absolute top-0"
            ></ErrorMessage>
          </div>
          <div class="input input--nao position-relative mb-6">
            <Field
              id="pin"
              name="安全碼"
              type="number"
              class="input__field input__field--nao"
              :class="{ 'is-invalid': errors['安全碼'] }"
              placeholder="請輸入 安全碼"
              rules="digits:3"
              v-model="form.user.credit.pin"
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
            <ErrorMessage
              name="安全碼"
              class="invalid-feedback position-absolute top-0"
            ></ErrorMessage>
          </div>
          <button type="submit" class="btn btn-dark mb-6 magnifyText">下一步</button>
        </Form>
        <div class="text-center"></div>
        <!-- 虛擬帳號 -->
        <div class="form-check border-top py-3">
          <input
            class="form-check-input me-3"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault3"
            value="PayPal"
            v-model="form.user.pay"
            :checked="form.user.pay === 'PayPal'"
          />
          <label class="form-check-label h3 d-flex flex-column" for="flexRadioDefault3">
            <div>PayPal</div>
            <div class="text-secondary mt-3" :class="{ 'd-none': form.user.pay !== 'PayPal' }">
              <h4 class="mb-2">
                您可以在大約 1
                分鐘內輕鬆註冊，並且您可以通過您常用的信用卡或銀行賬戶快速輕鬆地付款。
                （無需網銀，無需轉賬手續費）
              </h4>
              <h3 class="text-info">
                <i class="fab fa-cc-visa mx-1"></i><i class="fab fa-cc-mastercard mx-1"></i
                ><i class="fab fa-cc-jcb mx-1"></i><i class="fab fa-cc-stripe mx-1"></i>
                <i class="fab fa-cc-discover mx-1"></i>
              </h3>
            </div>
          </label>
        </div>
        <!-- 台銀轉 -->
        <div class="form-check border-top py-3">
          <input
            class="form-check-input me-3"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault4"
            value="台灣銀行線上轉帳"
            v-model="form.user.pay"
            :checked="form.user.pay === '台灣銀行線上轉帳'"
          />
          <label class="form-check-label h3 d-flex flex-column" for="flexRadioDefault4">
            <div>台灣銀行線上轉帳</div>
            <h4
              class="text-secondary mt-3"
              :class="{ 'd-none': form.user.pay !== '台灣銀行線上轉帳' }"
            >
              速買配唯一推薦
              <span class="text-light bg-info p-1 ms-2 rounded">支付費用：0</span>
            </h4>
          </label>
        </div>
        <!-- 7-11 -->
        <div class="form-check border-top py-3">
          <input
            class="form-check-input me-3"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault5"
            value="7-11 ibon"
            v-model="form.user.pay"
            :checked="form.user.pay === '7-11 ibon'"
          />
          <label class="form-check-label h3 d-flex flex-column" for="flexRadioDefault5">
            <div>7-11 ibon</div>
            <h4 class="text-secondary mt-3" :class="{ 'd-none': form.user.pay !== '7-11 ibon' }">
              <img src="@/assets/images/7-11.png" alt="" />7-11 ibon繳費。<span
                class="text-light bg-info p-1 ms-2 rounded"
                >手續費$15</span
              >
            </h4>
          </label>
        </div>
        <!-- 全家 -->
        <div class="form-check border-top py-3">
          <input
            class="form-check-input me-3"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault6"
            value="FamiPort"
            v-model="form.user.pay"
            :checked="form.user.pay === 'FamiPort'"
          />
          <label class="form-check-label h3 d-flex flex-column" for="flexRadioDefault6">
            <div>FamiPort</div>
            <h4 class="text-secondary mt-3" :class="{ 'd-none': form.user.pay !== 'FamiPort' }">
              <img src="@/assets/images/familyMart.png" alt="" />全家代碼繳費。<span
                class="text-light bg-info p-1 ms-2 rounded"
                >手續費$15</span
              >
            </h4>
          </label>
        </div>
        <!-- applePay -->
        <div class="form-check border-top py-3">
          <input
            class="form-check-input me-3"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault7"
            value="ApplePay"
            v-model="form.user.pay"
            :checked="form.user.pay === 'ApplePay'"
          />
          <label class="form-check-label h3 d-flex flex-column" for="flexRadioDefault7">
            <div>ApplePay<i class="fab fa-cc-apple-pay mx-1"></i></div>
            <h4 class="text-secondary mt-3" :class="{ 'd-none': form.user.pay !== 'ApplePay' }">
              只要輕輕一觸，就能以更快速、更簡單且更安全的方式付款。
            </h4>
          </label>
        </div>
        <!-- 呼嚕幣 -->
        <div class="form-check border-top py-3 mb-5">
          <input
            class="form-check-input me-3"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault8"
            v-model="form.user.pay"
            value="貓貓幣"
            :checked="form.user.pay === '貓貓幣'"
          />
          <label class="form-check-label h3" for="flexRadioDefault8">
            <div class="mb-3">貓貓幣</div>
            <h4
              class="text-secondary mb-3 text-start"
              :class="{ 'd-none': form.user.pay !== '貓貓幣' }"
            >
              貓貓星球貨幣<span class="text-light bg-info p-1 ms-2 rounded"
                >每養一隻 <i class="fas fa-cat"> 回饋 1 貓貓幣</i></span
              >
            </h4>
          </label>
        </div>
        <div class="d-flex justify-content-center">
          <button
            type="buttom"
            class="btn btn-dark mb-6 magnifyText"
            :class="{ 'd-none': form.user.pay === '線上刷卡' }"
            @click="status = 3"
          >
            下一步
          </button>
        </div>
      </div>
      <div class="col-sm-4 col-1"></div>
    </div>
  </section>
  <!-- 確認 -->
  <Check @next="next" @createorder="createOrder" :form="form" v-if="status === 3"></Check>
  <!-- 完工撒花～ -->
  <Final :order="order" v-if="status === 4"></Final>
</template>

<script>
import Check from '@/components/checkout/Check.vue';
import Final from '@/components/checkout/Final.vue';

export default {
  data() {
    return {
      form: {
        user: {
          pay: '貓貓幣',
          credit: {},
        },
      },
      id: '',
      status: 1,
      order: {},
    };
  },
  components: {
    Check,
    Final,
  },
  mounted() {},
  methods: {
    isPhone(value) {
      const phoneNumber = /^(09)[0-9]{8}$/;
      return phoneNumber.test(value) ? true : '需要正確的手機號碼';
    },
    // 付款步驟
    next(num) {
      this.status = num;
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
