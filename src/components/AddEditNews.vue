<template>
  <div
    ref="modal"
    class="modal fade"
    tabindex="-1"
    aria-labelledby="productModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-xl">
      <div class="modal-content border-0">
        <div class="modal-header bg-dark text-white">
          <h5 class="modal-title">
            <span>新增消息</span>
            <span>編輯消息</span>
          </h5>
          <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-sm-8">
              <div class="form-group">
                <label for="title">消息標題</label>
                <input
                  id="title"
                  v-model="tempProduct.title"
                  type="text"
                  class="form-control"
                  placeholder="請輸入標題"
                />
              </div>

              <div class="row">
                <div class="form-group col-md-6">
                  <label for="category">消息分類</label>
                  <select class="form-control" v-model="tempProduct.author">
                    <option disabled selected>請選擇分類</option>
                    <option>重要</option>
                    <option>一般</option>
                    <option>面試</option>
                    <option>講義</option>
                    <option>閒聊</option>
                  </select>
                </div>
                <div class="form-group col-md-6">
                  <label for="date">日期</label>
                  <input
                    id="date"
                    v-model.number="tempProduct.create_at"
                    type="date"
                    class="form-control"
                    placeholder="請輸入日期"
                  />
                </div>
              </div>
              <hr />
              <div class="form-group">
                <label for="content">文章內容</label>
                <textarea
                  id="content"
                  v-model="tempProduct.content"
                  type="text"
                  class="form-control"
                  placeholder="請輸入內容"
                >
                </textarea>
              </div>
              <div class="form-group">
                <div class="form-check">
                  <input
                    id="is_enabled"
                    v-model="tempProduct.isPublic"
                    class="form-check-input"
                    type="checkbox"
                    :true-value=true
                    :false-value=false
                  />
                  <label class="form-check-label" for="is_enabled">是否啟用</label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <div class="text-center" :class="{ 'd-none': loading == false }">
            <div class="spinner-border" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
          <button
            type="button"
            class="btn btn-outline-secondary"
            data-bs-dismiss="modal"
            :class="{ 'd-none': loading == true }"
          >
            取消
          </button>
          <button
            type="button"
            class="btn btn-primary"
            @click="updateProduct(tempProduct)"
            :class="{ 'd-none': loading == true }"
          >
            確認
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['product'],
  data() {
    return {
      tempProduct: {},
      status: '',
      modal: '',
      loading: false,
    };
  },
  mounted() {
    // eslint-disable-next-line no-undef
    this.modal = new bootstrap.Modal(this.$refs.modal);
  },
  watch: {
    product() {
      this.tempProduct = this.product;
    },
    loading() {
      this.status = this.loading;
    },
  },
  methods: {
    updateProduct(temp) {
      this.loading = true;
      let api = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/admin/article`;
      let method = 'post';
      if (temp.id) {
        api = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/admin/article/${temp.id}`;
        method = 'put';
      }

      this.$http[method](api, { data: temp })
        .then((res) => {
          if (res.data.success) {
            this.$emit('render');
            this.loading = false;
            this.hideModal();
          } else {
            alert(res.data.message);
            this.loading = false;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    openModal() {
      this.modal.show();
    },
    hideModal() {
      this.modal.hide();
    },
  },
};
</script>
