<template>
  <section class="bg-white pt-10 pb-5 newsBlogBox">
    <div class="container">
      <div class="row">
        <div class="col-12 col-lg-6 mb-6 border-sm-0 border-bottom pb-1 mb-lg-0">
          <div class="d-sm-flex align-items-center mb-3">
            <h3 class="font-weight-bold mb-3 mb-sm-0">News</h3>
            <ul class="list-unstyled d-flex mb-0 align-items-center">
              <li class="ms-4 h6 d-none d-sm-block">/</li>
              <li class="ms-sm-2 h6 p-0">
                <input
                  type="radio"
                  class="btn-check"
                  name="btnradio"
                  id="btnradio0"
                  autocomplete="off"
                  checked
                />
                <label class="btn btn-outline-dark rounded-pill border-0" for="btnradio0"
                  >모든</label
                >
              </li>
              <li class="ms-2 btn h6 p-0">
                <input
                  type="radio"
                  class="btn-check"
                  name="btnradio"
                  id="btnradio1"
                  autocomplete="off"
                />
                <label class="btn btn-outline-dark rounded-pill border-0" for="btnradio1"
                  >이벤트</label
                >
              </li>
              <li class="ms-2 btn h6 p-0">
                <input
                  type="radio"
                  class="btn-check"
                  name="btnradio"
                  id="btnradio2"
                  autocomplete="off"
                />
                <label class="btn btn-outline-dark rounded-pill border-0" for="btnradio2"
                  >공지 사항</label
                >
              </li>
              <li class="ms-2 btn h6 p-0">
                <input
                  type="radio"
                  class="btn-check"
                  name="btnradio"
                  id="btnradio3"
                  autocomplete="off"
                />
                <label class="btn btn-outline-dark rounded-pill border-0" for="btnradio3"
                  >자격 · 검정</label
                >
              </li>
            </ul>
          </div>
          <table class="table table-hover text-secondary">
            <tbody>
              <template v-for="item in products" :key="item.id">
                <tr
                  class="py-2"
                  v-if="
                    item.category == '事件' || item.category == '注意' || item.category == '榜單'
                  "
                >
                  <th scope="row" class="h4">{{ item.unit }}</th>
                  <td class="h4">{{ item.category }}</td>
                  <td class="h4">{{ item.title }}</td>
                </tr>
              </template>
            </tbody>
          </table>
        </div>
        <div class="col-12 col-lg-6 border-bottom pb-1">
          <div class="d-sm-flex align-items-center mb-3">
            <h3 class="font-weight-bold mb-3 mb-sm-0">Blog</h3>
            <ul class="list-unstyled d-flex mb-0 align-items-center">
              <li class="ms-4 h6 d-none d-sm-block">/</li>
              <li class="ms-sm-2 h6 p-0">
                <input
                  type="radio"
                  class="btn-check"
                  name="btnradio1"
                  id="btnradio4"
                  autocomplete="off"
                  checked
                />
                <label class="btn btn-outline-dark rounded-pill border-0" for="btnradio4"
                  >모든</label
                >
              </li>
              <li class="ms-2 btn h6 p-0">
                <input
                  type="radio"
                  class="btn-check"
                  name="btnradio1"
                  id="btnradio5"
                  autocomplete="off"
                />
                <label class="btn btn-outline-dark rounded-pill border-0" for="btnradio5"
                  >정보 계</label
                >
              </li>
              <li class="ms-2 btn h6 p-0">
                <input
                  type="radio"
                  class="btn-check"
                  name="btnradio1"
                  id="btnradio6"
                  autocomplete="off"
                />
                <label class="btn btn-outline-dark rounded-pill border-0" for="btnradio6"
                  >비즈니스계</label
                >
              </li>
              <li class="ms-2 btn h6 p-0">
                <input
                  type="radio"
                  class="btn-check"
                  name="btnradio1"
                  id="btnradio7"
                  autocomplete="off"
                />
                <label class="btn btn-outline-dark rounded-pill border-0" for="btnradio7"
                  >인터뷰</label
                >
              </li>
            </ul>
          </div>
          <table class="table table-hover text-secondary">
            <tbody>
              <template v-for="item in products" :key="item.id">
                <tr
                  class="py-2"
                  v-if="
                    item.category == '上課講義' ||
                      item.category == '學員筆記' ||
                      item.category == '其他'
                  "
                >
                  <th scope="row" class="h4">{{ item.unit }}</th>
                  <td class="h4">{{ item.category }}</td>
                  <td class="h4 lineBotton">{{ item.title }}</td>
                </tr>
              </template>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      products: {},
    };
  },
  methods: {
    // 取得newsblog的資料
    getNews() {
      const url = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH2}/products`;
      this.$http
        .get(url)
        .then((res) => {
          if (res.data.success) {
            this.products = res.data.products;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    this.getNews();
  },
};
</script>
