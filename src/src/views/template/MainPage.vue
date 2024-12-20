<template>
  <div>
    <!--begin::Main-->
<!--    <tmp-login-page/>-->

    <!--begin::Root-->
    <div class="d-flex flex-column flex-root">
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

                      <router-link :to="{name: 'home'}">go</router-link>
                      <br>
                      <router-link :to="{name: 'warehouse'}">warehouse</router-link>
                      <!--end::Title-->
                      <!--begin::Separator-->
                      <div class="separator separator-dashed mb-9"></div>
                      <!--end::Separator-->
                      <!--begin::Row-->
                      <div class="row">

                        <router-view/>
<!--                        <router-view/>-->
<!--                        <router-view v-slot="{ Component }">-->
<!--                          <transition name="slide-left">-->
<!--                            <component :is="Component" />-->
<!--                          </transition>-->
<!--                        </router-view>-->

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