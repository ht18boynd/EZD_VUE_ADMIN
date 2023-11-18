<template>
    <div class="wrapper">
    <!--sidebar wrapper -->
    <slibarWrapper></slibarWrapper>
    <!--end sidebar wrapper -->
    <!--start header -->
    <startHeaderVue></startHeaderVue>
    <!--end header -->
    
    <!--Start page wrapper  . Dữ liệu chính-->
    <!--End page wrapper  . Dữ liệu chính-->

    <!--start switcher-->
    <switcher></switcher>
    <!--end switcher-->
    </div>
</template>

<script>
import switcher from "@/pages/switcher.vue";
import slibarWrapper from "@/pages/sidebarWrapper.vue";
import startHeaderVue from "@/pages/startHeader.vue";

export default {
    name:"ListItem",
    components: {
        switcher,
        slibarWrapper,
        startHeaderVue
    }
}
</script>
<style>

</style>