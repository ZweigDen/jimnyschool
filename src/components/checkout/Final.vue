<template>
  <section class="d-flex flex-column align-items-center mb-7">
    <h3 class="mb-5">感謝你的購買</h3>
    <h4>訂單編號：{{ order.orderId }}</h4>
  </section>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ['order'],
};
</script>
