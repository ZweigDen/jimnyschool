<template>
  <section class="container">
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
            <button type="button" class="btn btn-outline-info" @click="$emit('next', 1)">
              修改
            </button>
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
            <button type="button" class="btn btn-outline-info" @click="$emit('next', 2)">
              修改
            </button>
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
          <button type="buttom" class="btn btn-dark mb-6 magnifyText" @click="$emit('createorder')">
            下一步
          </button>
        </div>
      </div>
      <div class="col-sm-3"></div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      carts: [],
      total: '',
    };
  },
  props: ['form'],
  mounted() {
    this.getCart();
  },
  methods: {
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
  },
};
</script>
