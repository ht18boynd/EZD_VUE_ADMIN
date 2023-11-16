<template>
  <!--wrapper-->
  <div class="wrapper">
    <!--sidebar wrapper -->
    <slibarWrapper></slibarWrapper>
    <!--end sidebar wrapper -->
    <!--start header -->
    <startHeaderVue></startHeaderVue>
    <!--end header -->

    <!-- search modal -->
    <searchModal></searchModal>
    <!-- end search modal -->
    <!--start switcher-->
    <switcher></switcher>
    <!--end switcher-->
  </div>
</template>

<script>
import switcher from "@/pages/switcher.vue";
import searchModal from "@/pages/searchModal.vue";

import slibarWrapper from "@/pages/sidebarWrapper.vue";

import startHeaderVue from "@/pages/startHeader.vue";

export default {
  name: "ProfilePage",
  components: {
    switcher,
    searchModal,
    slibarWrapper,
    startHeaderVue,
  },

};
</script>
