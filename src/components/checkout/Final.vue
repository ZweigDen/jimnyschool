<template>
  <section class="container">
    <div class="d-flex flex-column align-items-center mb-7">
      <h3 class="mb-5">訂單已創建</h3>
      <h4 class="mb-5">訂單編號：{{ order.orderId }}</h4>
      <a
        href="https://ssl.smse.com.tw/ezpos/mtmk.asp?Rvg2c=1&Dcvc=107&Od_sob=123456&Amount=500&Pur_name=王大明&Tel_number=037376006&Mobile_number=0961238006&Address=苗栗市莊敬街95號&Email=service@smse.com.tw&Invoice_name=訊航科技股份有限公司&Invoice_num=80129529&Remark=備註&Roturl=http://www.test.com/test.asp&Pay_zg=2"
        class="btn btn-dark mb-6 magnifyText"
        @click="goToPay"
      >
        付款去
      </a>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      payOrder: {},
      url: '',
    };
  },
  mounted() {},
  props: ['order'],
  methods: {
    goToPay() {
      this.$router.push = '';
    },
  },
};
</script>
