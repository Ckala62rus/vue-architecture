<template>
  <!--begin::Authentication - Password reset -->
  <div class="d-flex flex-column flex-column-fluid bgi-position-y-bottom position-x-center bgi-no-repeat bgi-size-contain bgi-attachment-fixed" style="background-size1: 100% 50%; background-image: url(assets/media/svg/illustrations/progress.svg)">
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
        <form class="form w-100" novalidate="novalidate" id="kt_password_reset_form">
          <!--begin::Heading-->
          <div class="text-center mb-10">
            <!--begin::Title-->
            <h1 class="text-dark mb-3">Forgot Password ?</h1>
            <!--end::Title-->
            <!--begin::Link-->
            <div class="text-gray-400 fw-bold fs-4">Enter your email to reset your password.</div>
            <!--end::Link-->
          </div>
          <!--begin::Heading-->
          <!--begin::Input group-->
          <div class="fv-row mb-10">
            <label class="form-label fw-bolder text-gray-900 fs-6">Email</label>
            <input class="form-control form-control-solid" type="email" placeholder="" name="email" autocomplete="off" />
          </div>
          <!--end::Input group-->
          <!--begin::Actions-->
          <div class="d-flex flex-wrap justify-content-center pb-lg-0">
            <button type="button" id="kt_password_reset_submit" class="btn btn-lg btn-primary fw-bolder me-4">
              <span class="indicator-label">Submit</span>
              <span class="indicator-progress">Please wait...
									<span class="spinner-border spinner-border-sm align-middle ms-2"></span></span>
            </button>
            <router-link
                :to="{name: 'login'}"
                class="btn btn-lg btn-light-primary fw-bolder"
            >Cancel</router-link>
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
  <!--end::Authentication - Password reset-->
</template>

<script>
export default {
  name: "TmpPasswordReset"
}
</script>

<style scoped>

</style>