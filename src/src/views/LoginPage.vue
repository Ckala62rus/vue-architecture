<template>
  <!--begin::Authentication - Sign-in -->
  <div class="d-flex flex-column flex-root">
    <!--begin::Authentication - Sign-in -->
    <div class="d-flex flex-column flex-column-fluid bgi-position-y-bottom position-x-center bgi-no-repeat bgi-size-contain bgi-attachment-fixed" style="background-size1: 100% 50%; background-image: url(/assets/media/svg/illustrations/progress.svg)">
      <!--begin::Content-->
      <div class="d-flex flex-center flex-column flex-column-fluid p-10 pb-lg-20">
        <!--begin::Logo-->
        <a href="index.html" class="mb-12">
          <img alt="Logo" src="assets/media/logos/logo-2-dark.svg" class="h-45px" />
        </a>
        <!--end::Logo-->
        <!--begin::Wrapper-->
        <div class="w-lg-500px bg-white rounded shadow-sm p-10 p-lg-15 mx-auto">
          <!--begin::Form-->
          <form @submit.prevent="onSubmitLogin" class="form w-100" novalidate="novalidate" action="#">
            <!--begin::Heading-->
            <div class="text-center mb-10">
              <!--begin::Title-->
              <h1 class="text-dark mb-3">Sign In to Metronic</h1>
              <!--end::Title-->
              <!--begin::Link-->
              <div class="text-gray-400 fw-bold fs-4">New Here?
                <a href="authentication/flows/basic/sign-up.html" class="link-primary fw-bolder">Create an Account</a></div>
              <!--end::Link-->
            </div>
            <!--begin::Heading-->
            <!--begin::Input group-->
            <div class="fv-row mb-10">
              <!--begin::Label-->
              <label class="form-label fs-6 fw-bolder text-dark">Email</label>
              <!--end::Label-->
              <!--begin::Input-->
              <input
                  class="form-control form-control-lg form-control-solid"
                  type="text"
                  name="email"
                  autocomplete="off"
                  v-model="form.email"
              />
              <!--end::Input-->
            </div>
            <!--end::Input group-->
            <!--begin::Input group-->
            <div class="fv-row mb-10">
              <!--begin::Wrapper-->
              <div class="d-flex flex-stack mb-2">
                <!--begin::Label-->
                <label class="form-label fw-bolder text-dark fs-6 mb-0">Password</label>
                <!--end::Label-->
                <!--begin::Link-->
<!--                <a href="authentication/flows/basic/password-reset.html" class="link-primary fs-6 fw-bolder">Forgot Password ?</a>-->
                <router-link :to="{name: 'password-reset'}" class="link-primary fs-6 fw-bolder">Forgot Password ?</router-link>
                <!--end::Link-->
              </div>
              <!--end::Wrapper-->
              <!--begin::Input-->
              <input
                  class="form-control form-control-lg form-control-solid"
                  type="password"
                  name="password"
                  autocomplete="off"
                  v-model="form.password"
              />
              <!--end::Input-->
            </div>
            <!--end::Input group-->
            <!--begin::Actions-->
            <div class="text-center">
              <!--begin::Submit button-->
              <button class="btn btn-lg btn-primary fw-bolder me-3 my-2">
                <span class="indicator-label">Sign In</span>
                <span class="indicator-progress">Please wait...
									<span class="spinner-border spinner-border-sm align-middle ms-2"></span></span>
              </button>
              <!--end::Submit button-->
              <!--begin::Google link-->
              <a href="#" class="btn btn-light-primary btn-lg fw-bolder my-2">
                <img alt="Logo" src="assets/media/svg/social-icons/google.svg" class="h-20px me-3" />Sign in with Google</a>
              <!--end::Google link-->
            </div>
            <!--end::Actions-->
          </form>
          <!--end::Form-->
        </div>
        <!--end::Wrapper-->
      </div>
      <!--end::Content-->
      <!--begin::Footer-->
      <div class="d-flex flex-center flex-column-auto p-10">
        <!--begin::Links-->
        <div class="d-flex align-items-center fw-bold fs-6">
          <a href="https://keenthemes.com/faqs" class="text-muted text-hover-primary px-2">About</a>
          <a href="mailto:support@keenthemes.com" class="text-muted text-hover-primary px-2">Contact</a>
          <a href="https://1.envato.market/EA4JP" class="text-muted text-hover-primary px-2">Contact Us</a>
        </div>
        <!--end::Links-->
      </div>
      <!--end::Footer-->
    </div>
    <!--end::Authentication - Sign-in-->
  </div>
  <!--end::Authentication - Sign-in-->
</template>

<script>

import {actionTypes} from "@/store/modules/auth";

export default {
  name: "TmpLoginPage",
  data(){
    return {
      form: {
        email: 'admin2@mail.ru',
        password: "123123",
      },
    }
  },

  methods: {
    async  onSubmitLogin() {
      await this.$store.dispatch(actionTypes.login, this.form)
    },

    goHome() {
      window.location = '/'
    },
  },

  mounted() {
    // const app = document.getElementById('#app')
    // app.className = ''
  }
}
</script>

<style scoped>

</style>