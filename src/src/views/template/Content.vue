<template>
  <div>
    <!--begin::Main-->
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
              <div id="kt_content_container" class="container-fluid">
                <router-view></router-view>
              </div>
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
</template>

<script>
export default {
  name: "TmpContent"
}
</script>

<style scoped>

</style>