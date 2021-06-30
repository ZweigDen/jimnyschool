<template>
  <section class="py-5 container d-flex flex-column justify-content-between">
    <div>
      <!-- 右邊上方banner -->
      <div class="d-flex justify-content-between align-items-center mb-3">
        <div class="d-flex align-items-center">
          <h2 class="me-4">課程列表</h2>
          <button type="button" class="ms-5 btn btn-outline-dark" @click="openModal(true)">
            <i class="fas fa-plus me-2 text-secondary"></i>新增課程
          </button>
        </div>
        <a href="#" class="text-dark" @click="logOut"><i class="fas fa-sign-out-alt h2"></i></a>
      </div>
      <!-- 下方內容 -->
      <table class="table table-borderless table-hover">
        <thead>
          <tr class="h4 border-bottom">
            <th scope="col">分類<i class="fas fa-arrow-down text-primary ml-2"></i></th>
            <th scope="col">課程標題</th>
            <th scope="col">價格</th>
            <th scope="col">啟用</th>
            <th scope="col">刪除</th>
            <th scope="col">修改</th>
          </tr>
        </thead>
        <tbody>
          <tr class="h4" v-for="item in products" :key="item.id">
            <td>{{ item.category }}</td>
            <td>{{ item.title }}</td>
            <td>{{ item.price }}</td>
            <td v-if="item.is_enabled"><i class="far fa-check-square text-success h3"></i></td>
            <td v-else><i class="far fa-times-circle h3 text-warning"></i></td>
            <td>
              <button
                type="button"
                class="btn btn-outline-danger btn-sm"
                @click="checkDelete(item)"
              >
                <i class="fas fa-trash-alt"></i>
              </button>
            </td>
            <td>
              <button
                type="button"
                class="btn btn-outline-secondary btn-sm"
                @click="openModal(false, item)"
              >
                <i class="fas fa-pen"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- delete modal -->
    <Checkdele
      :product="product"
      @delete-product="deleteProduct"
      :loading="loadingStatus"
      ref="check"
    ></Checkdele>
    <!-- add&edit nodal -->
    <Addedit
      :product="product"
      ref="addedit"
      @render="getProducts"
    ></Addedit>
    <!-- 分頁模組 -->
    <Pagination
      class="d-flex justify-content-center"
      :page="pagination"
      @get_product="getProducts"
    ></Pagination>
  </section>
</template>

<script>
import Pagination from '@/components/Pagination.vue';
import Checkdele from '@/components/CheckDele.vue';
import Addedit from '@/components/AddEditModal.vue';

export default {
  data() {
    return {
      loadingStatus: '',
      products: [],
      product: {},
      pagination: {},
      isNew: false,
    };
  },
  components: {
    Pagination,
    Checkdele,
    Addedit,
  },
  methods: {
    // 登出
    logOut() {
      document.cookie = 'hexToken=;expires=;';
      this.$router.push('/');
    },
    // 取得資料
    getProducts(page = 1) {
      const url = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/admin/products?page=${page}`;
      this.$http.get(url).then((res) => {
        if (res.data.success) {
          this.products = res.data.products;
          this.pagination = res.data.pagination;
        }
      });
    },
    // open add&edit Modal
    openModal(isNew, item) {
      this.isNew = isNew;
      if (this.isNew) {
        this.product = {
          // imagesUrl: [],
        };
      } else {
        this.product = { ...item };
      }
      this.$refs.addedit.openModal();
    },
    // check刪除
    checkDelete(item) {
      this.product = item;
      this.$refs.check.openModal();
    },
    // 刪除單項課程
    deleteProduct(id) {
      this.loadingStatus = id;
      const url = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/admin/product/${id}`;
      this.$http.delete(url).then((res) => {
        if (res.data.success) {
          this.getProducts();
          this.loadingStatus = '';
          this.$refs.check.hideModal();
        }
      });
    },
  },
  created() {
    this.getProducts();
  },
};
</script>
