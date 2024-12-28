<template>
  <div class="d-flex flex-column flex-root">

    <router-view v-if="!auth" v-slot="{ Component }">
<!--      <transition :name="'slide-right'">-->
        <component :is="Component" />
<!--      </transition>-->
    </router-view>

<!--    <tmp-password-reset/>-->
<!--    <tmp-login-page v-if="!auth"/>-->
    <div v-show="auth">
    <!--begin::Main-->
    <!--    <tmp-login-page/>-->

    <!--begin::Root-->
    <div>
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
              <router-view v-slot="{ Component }">
                <transition :name="'slide-right'">
                  <component :is="Component" />
                </transition>
              </router-view>

<!--              <transition name="'route'" mode="out-in" appear>-->
<!--                <router-view />-->
<!--              </transition>-->
            </div>
            <!--end::Post-->
          </div>
          <!--end::Content-->
            <!--begin::Footer-->
            <tmp-footer/>
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
import TmpHeader from "@/views/template/Header";
import TmpAside from "@/views/template/Aside";
import TmpFooter from "@/views/template/Footer";

import {mapGetters} from "vuex"
import {actionTypes, gettersTypes} from "@/store/modules/auth";
import TmpToolbar from "@/views/template/Toolbar";
import TmpLoginPage from "@/views/LoginPage";
import TmpPasswordReset from "@/views/template/PasswordReset";

export default {
  components: {
    TmpPasswordReset,
    TmpLoginPage,
    TmpToolbar,
    TmpFooter,
    TmpAside,
    TmpHeader,
    ScrollTop,
    ModalUpgradePlan,
    ModalCreateApp,
    ModalInviteFriends,
    ChatDrawer,
    ExplorerDrawer,
    ExplorerDrawerToggle,
    ActivitiesDrawer,
  },

  head: {
    title: {
      inner: 'It will be a pleasure'
    },
    script: [
      { type: 'text/javascript', src: '@/assets/plugins/global/plugins.bundle.js', async: true, body: true}, // Insert in body
      { type: 'text/javascript', src: 'assets/js/scripts.bundle.js', async: true, body: true}, // Insert in body
    ],
  },
  computed: {
    ...mapGetters({
      auth: gettersTypes.isAuth
    }),
  },

  data() {
    return {
      transitionName: 'slide',
      timer: null,
    }
  },

  methods: {
    me() {
      this.$store.dispatch(actionTypes.me)
    },
    checkAuth(){
      this.timer = setInterval(() => {
        if(this.auth) {
          this.$store.dispatch(actionTypes.me)
        }
        // else {
        //   clearInterval(this.timer)
        // }
      }, 5000)
    },
  },
  mounted() {
    this.me()
    this.checkAuth()

    // console.log(this.$store.state.auth.auth.user)

    // if (this.auth) {
    //   window.addEventListener('load', () => {
    //     const pluginsBundle = document.createElement("script");
    //     pluginsBundle.src =
    //         "http://localhost:8080/assets/plugins/global/plugins.bundle.js";
    //     document.body.appendChild(pluginsBundle);
    //
    //     const scriptsBundle = document.createElement("script");
    //     scriptsBundle.src =
    //         "http://localhost:8080/assets/js/scripts.bundle.js";
    //     document.body.appendChild(scriptsBundle);
    //
    //     const widgets = document.createElement("script");
    //     widgets.src =
    //         "http://localhost:8080/assets/js/custom/widgets.js";
    //     document.body.appendChild(widgets);
    //   })
    // }
  },

  unmounted() {
    clearInterval(this.timer)
  },

}
</script>

<style>
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active до версии 2.1.8 */ {
  transform: translateX(375px);
  opacity: 0;
}

.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition-duration: 0.2s;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.25, 0, 0.1, 1);
  overflow: hidden;
}
.slide-left-enter-active #kt_subheader,
.slide-left-leave-active #kt_subheader,
.slide-right-enter-active #kt_subheader,
.slide-right-leave-active #kt_subheader {
  visibility: hidden !important;
}

.slide-left-enter,
.slide-right-leave-active {
  opacity: 0;
  transform: translate(2em, 0);
}

.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  transform: translate(-2em, 0);
}
</style>
