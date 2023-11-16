<template>
  <div class="wrapper">
    <!--sidebar wrapper -->
    <slibarWrapper></slibarWrapper>
    <!--end sidebar wrapper -->
    <!--start header -->
    <startHeaderVue></startHeaderVue>
    <!--end header -->

    <!--Start page wrapper  . Dữ liệu chính-->
    <div class="page-wrapper">
      <div class="page-content">
        <!--breadcrumb-->
        <div class="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
          <div class="breadcrumb-title pe-3">Calendar</div>
          <div class="ps-3">
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb mb-0 p-0">
                <li class="breadcrumb-item">
                  <a href="javascript:;"><i class="bx bx-home-alt"></i></a>
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                  List calendar
                </li>
              </ol>
            </nav>
          </div>
        </div>
        <!--end breadcrumb-->
        <div class="card">
          <div class="card-body">
            <div class="table-responsive">
              <full-calendar
                :options="calendarOption"
              ></full-calendar>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--End page wrapper  . Dữ liệu chính-->

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
import FullCalendar from "@fullcalendar/vue3";
import dayGridPlugins from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugins from "@fullcalendar/list";
export default {
  name: "ListCalendar",
  components: {
    switcher,
    searchModal,
    slibarWrapper,
    startHeaderVue,
    FullCalendar,
  },
  data() {
    return {
      calendar: null,
      calendarOption: {
        plugins: [dayGridPlugins, interactionPlugin,listPlugins],
        initialView: "dayGridYear",
        initialDate: "2020-09-12",
        headerToolbar: {
          left: "prev,next today",
          center: "title",
          right: "dayGridYear,dayGridMonth,dayGridWeek,listWeek",
        },
        events: [
          {
            title: "All Day Event",
            start: "2020-09-01",
          },
        ],
        eventClick: this.handleEventClick,
      },
    };
  },
  methods: {
    handleEventClick() {
      // Xử lý khi một sự kiện được nhấp vào
      // info sẽ chứa thông tin về sự kiện như info.event, info.el, ...
    },
  },
};
</script>
<style></style>
