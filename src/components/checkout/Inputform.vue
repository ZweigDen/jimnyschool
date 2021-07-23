<template>
  <section class="container">
    <Form
      class="text-center d-flex flex-column align-items-center"
      v-slot="{ errors }"
      @submit="next(3)"
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
          v-model="user.name"
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
          v-model="user.tel"
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
</template>

<script>
export default {
  data() {
    return {
      user: {},
    };
  },
  props: ['form'],
  watch: {
    form() {
      this.user = this.form;
    },
  },
};
</script>
