<template>
  <section class="container">
    <div class="d-flex flex-column align-items-center mb-7">
      <h3 class="mb-5">訂單已創建</h3>
      <h4 class="mb-5">訂單編號：{{ order.orderId }}</h4>
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
