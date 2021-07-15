<template>
  <section class="p-7">
    <p class="h1 d-flex">
      <span style="animation-delay: calc(1s * 0.1);" data-aos="animate__rotateInDownLeft"
        ><i class="fas fa-exclamation me-3"></i></span
      ><span style="animation-delay: calc(1s * 0.2);" data-aos="animate__rotateInDownLeft">付</span
      ><span style="animation-delay: calc(1s * 0.3);" data-aos="animate__rotateInDownLeft">款</span
      ><span style="animation-delay: calc(1s * 0.4);" data-aos="animate__rotateInDownLeft">方</span
      ><span style="animation-delay: calc(1s * 0.5);" data-aos="animate__rotateInDownLeft">式</span
      ><span style="animation-delay: calc(1s * 0.6);" data-aos="animate__rotateInDownLeft">。</span>
    </p>
  </section>
  <!-- 訂單資訊 -->
  <section class="d-flex justify-content-center mb-8">
    <ol class="triangle p-0">
      <li class="rounded-start">購買</li>
      <li class="current">支付</li>
      <li>確認</li>
      <li class="rounded-end">完成</li>
    </ol>
  </section>
  <!-- 付款方式 -->
  <section class="container">
    <div class="row">
      <div class="col-4"></div>
      <div class="col-4">
        <div class="form-check d-flex align-items-center border-top py-3">
          <input
            class="form-check-input me-3"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
            sryle="width:200px"
          />
          <label class="form-check-label h3" for="flexRadioDefault1">
            線上刷卡
          </label>
        </div>
        <div class="form-check d-flex align-items-center border-top py-3">
          <input
            class="form-check-input me-3"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault2"
            checked
          />
          <label class="form-check-label h3" for="flexRadioDefault2">
            虛擬帳號
          </label>
        </div>
        <div class="form-check d-flex align-items-center border-top py-3">
          <input
            class="form-check-input me-3"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault3"
            checked
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
            id="flexRadioDefault4"
            checked
          />
          <label class="form-check-label h3" for="flexRadioDefault4">
            超商帳單代收
          </label>
        </div>
        <div class="form-check d-flex align-items-center border-top py-3">
          <input
            class="form-check-input me-3"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault5"
            checked
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
            checked
          />
          <label class="form-check-label h3" for="flexRadioDefault6">
            FamiPort
          </label>
        </div>
        <div class="form-check d-flex align-items-center border-top py-3">
          <input
            class="form-check-input me-3"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault7"
            checked
          />
          <label class="form-check-label h3" for="flexRadioDefault7">
            LinePay
          </label>
        </div>
        <div class="form-check d-flex align-items-center border-top py-3 mb-5">
          <input
            class="form-check-input me-3"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault8"
            checked
          />
          <label class="form-check-label h3" for="flexRadioDefault8">
            呼嚕幣
          </label>
        </div>
        <div class="d-flex justify-content-center">
          <button type="buttom" class="btn btn-dark mb-6 magnifyText">下一步</button>
        </div>
      </div>
      <div class="col-4"></div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      id: '',
      order: {},
    };
  },
  created() {
    console.log(this.$route);
    console.log(this.$router);
    const { id } = this.$route.params;
    this.id = id;
    this.getOrder();
  },
  methods: {
    getOrder() {
      const url = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/order/${this.id}`;
      this.$http
        .get(url)
        .then((res) => {
          if (res.data.success) {
            console.log(res);
            this.order = res.data.order;
          } else {
            console.log(res);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
