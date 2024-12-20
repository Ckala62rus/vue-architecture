<template>
  <div>
    <!--begin::Main-->
<!--    <tmp-login-page/>-->

    <!--begin::Login-->
    <div v-if="flag" class="d-flex flex-column flex-root">
      <!--begin::Authentication - Sign-in -->
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
            <form class="form w-100" novalidate="novalidate" id="kt_sign_in_form" action="#">
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
                <input class="form-control form-control-lg form-control-solid" type="text" name="email" autocomplete="off" />
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
                  <a href="authentication/flows/basic/password-reset.html" class="link-primary fs-6 fw-bolder">Forgot Password ?</a>
                  <!--end::Link-->
                </div>
                <!--end::Wrapper-->
                <!--begin::Input-->
                <input class="form-control form-control-lg form-control-solid" type="password" name="password" autocomplete="off" />
                <!--end::Input-->
              </div>
              <!--end::Input group-->
              <!--begin::Actions-->
              <div class="text-center">
                <!--begin::Submit button-->
                <button type="submit" id="kt_sign_in_submit" class="btn btn-lg btn-primary fw-bolder me-3 my-2">
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
    <!--end::Login-->

    <!--begin::Root-->
    <div v-if="!flag" class="d-flex flex-column flex-root">
      <!--begin::Page-->
      <div class="page d-flex flex-row flex-column-fluid">
        <!--begin::Aside-->
        <tmp-aside/>
        <!--end::Aside-->
        <!--begin::Wrapper-->
        <div class="wrapper d-flex flex-column flex-row-fluid" id="kt_wrapper">
          <!--begin::Header-->
          <tmp-header/>
          <!--end::Header-->
          <!--begin::Content-->
          <div class="content d-flex flex-column flex-column-fluid" id="kt_content">
            <!--begin::Toolbar-->
            <tmp-toolbar/>
            <!--end::Toolbar-->
            <!--begin::Post-->
            <div class="post d-flex flex-column-fluid" id="kt_post">
              <div id="kt_content_container" class="container-xxl">
                <!--begin::Home card-->
                <div class="card">
                  <!--begin::Body-->
                  <div class="card-body p-lg-20">
                    <!--begin::Section-->
                    <div class="mb-17">
                      <!--begin::Title-->
                      <h3 class="text-black mb-7">Latest Articles, News &amp; Updates</h3>

                      <router-link :to="{name: 'login'}">go</router-link>
                      <br>
                      <router-link :to="{name: 'warehouse'}">warehouse</router-link>
                      <!--end::Title-->
                      <!--begin::Separator-->
                      <div class="separator separator-dashed mb-9"></div>
                      <!--end::Separator-->
                      <!--begin::Row-->
                      <div class="row">

<!--                        <router-view/>-->
<!--                        <router-view/>-->
                        <router-view v-slot="{ Component }">
<!--                          <transition name="slide-left">-->
                            <component :is="Component" />
<!--                          </transition>-->
                        </router-view>

                      </div>
                      <!--begin::Row-->
                    </div>
                    <!--end::Section-->
                  </div>
                  <!--end::Body-->
                </div>
                <!--end::Home card-->
              </div>
            </div>
            <!--end::Post-->
          </div>
          <!--end::Content-->
          <!--begin::Footer-->
<!--          <tmp-footer/>-->
          <!--end::Footer-->
        </div>
        <!--end::Wrapper-->
      </div>
      <!--end::Page-->
    </div>
    <!--end::Root-->

    <!--begin::Drawers-->
    <!--begin::Activities drawer-->
    <activities-drawer/>
    <!--end::Activities drawer-->

    <!--begin::Explorer drawer toggle-->
    <explorer-drawer-toggle/>
    <!--end::Explorer drawer toggle-->

    <!--begin::Explorer drawer-->
    <explorer-drawer/>
    <!--end::Explorer drawer-->

    <!--begin::Chat drawer-->
    <chat-drawer/>
    <!--end::Chat drawer-->
    <!--end::Drawers-->

    <!--begin::Modals-->
    <!--begin::Modal - Invite Friends-->
    <modal-invite-friends/>
    <!--end::Modal - Invite Friend-->

    <!--begin::Modal - Create App-->
    <modal-create-app/>
    <!--end::Modal - Create App-->

    <!--begin::Modal - Upgrade plan-->
    <modal-upgrade-plan/>
    <!--end::Modal - Upgrade plan-->
    <!--end::Modals-->

    <!--begin::Scrolltop-->
    <scroll-top/>
    <!--end::Scrolltop-->

  </div>
</template>

<script>
import ActivitiesDrawer from "@/views/template/ActivitiesDrawer";
import ExplorerDrawerToggle from "@/views/template/ExplorerDrawerToggle";
import ExplorerDrawer from "@/views/template/ExplorerDrawer";
import ChatDrawer from "@/views/template/ChatDrawer";
import ModalInviteFriends from "@/views/template/ModalInviteFriends";
import ModalCreateApp from "@/views/template/ModalCreateApp";
import ModalUpgradePlan from "@/views/template/ModalUpgradePlan";
import ScrollTop from "@/views/template/Scrolltop";

// import TmpFooter from "@/views/template/Footer";
import TmpToolbar from "@/views/template/Toolbar";
import TmpHeader from "@/views/template/Header";
import TmpAside from "@/views/template/Aside";

export default {
  name: "TmpMainPage",
  components: {
    TmpAside,
    TmpHeader,
    TmpToolbar,
    // TmpFooter,

    ScrollTop,
    ModalUpgradePlan,
    ModalCreateApp,
    ModalInviteFriends,
    ChatDrawer,
    ExplorerDrawer,
    ExplorerDrawerToggle,
    ActivitiesDrawer
  },
  data() {
    return {
     flag: false
    }
  },
  created() {
    // document.body.className = '';
    // document.body.classList.add('header-fixed', 'header-tablet-and-mobile-fixed', 'toolbar-enabled', 'toolbar-fixed', 'aside-enabled', 'aside-fixed')
  },

  mounted() {
    // const pluginsBundle = document.createElement("script");
    // pluginsBundle.src =
    //     "assets/plugins/global/plugins.bundle.js";
    // document.body.appendChild(pluginsBundle);
    //
    // const scriptsBundle = document.createElement("script");
    // scriptsBundle.src =
    //     "assets/js/scripts.bundle.js";
    // document.body.appendChild(scriptsBundle);

    // window.addEventListener('load', () => {
    //   const pluginsBundle = document.createElement("script");
    //   pluginsBundle.src =
    //       "assets/plugins/global/plugins.bundle.js";
    //   document.body.appendChild(pluginsBundle);
    //
    //   const scriptsBundle = document.createElement("script");
    //   scriptsBundle.src =
    //       "assets/js/scripts.bundle.js";
    //   document.body.appendChild(scriptsBundle);
    //
    //   const widgets = document.createElement("script");
    //   widgets.src =
    //       "assets/js/custom/widgets.js";
    //   document.body.appendChild(widgets);
    // })
  }
}
</script>

<style scoped>

</style>