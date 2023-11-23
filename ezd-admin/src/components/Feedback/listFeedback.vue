<template>
  <div class="wrapper">
    <!--sidebar wrapper -->
    <slibarWrapper></slibarWrapper>
    <!--end sidebar wrapper -->
    <!--start header -->
    <startHeaderVue></startHeaderVue>
    <div class="page-wrapper">
      <div class="page-content">
        <!--end header -->

        <h1>List Feedback</h1>
        <div class="d-md-flex align-items-center email-message px-3 py-1">
          <div class="d-flex align-items-center email-actions">
            <p class="mb-0"><b>FullName</b></p>
          </div>
          <div class="">
            <p class="mb-0">Title</p>
          </div>
          <div class="ms-auto">
            <p class="mb-0 email-time"></p>
          </div>
        </div>
        <br>
        <div class="email-content">
          <div class="">
            <div class="email-wrapper">
              <div class="email-list">
                <div class="" v-for="a in listFeedback" :key="a.id">
                  <div
                    class="d-md-flex align-items-center email-message px-3 py-1"
                  >
                  
                    <div class="d-flex align-items-center email-actions">
                      <p class="mb-0">
                        <b>{{ a.userName }}</b>
                      </p>
                    </div>
                    <div class=" d-flex align-items- email-actions">
                      <p class="mb-0">
                        <template
                          v-for="i in Array.from({ length: a.rating })"
                          :key="i"
                        >
                          <i class="bx bx-star font-18 mx-2 email-star"></i>
                        </template>
                      </p>
                    </div>

                    <div class="d-flex align-items- email-actions">
                      <p class="mb-auto ">
                        {{ a.comment }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--start page wrapper  . Dữ liệu chính-->
    <!--start page wrapper -->
    <div class="page-wrapper">
      <div class="page-content"></div>
    </div>
  </div>

  <searchModal></searchModal>
  <!-- end search modal -->
  <!--start switcher-->
  <switcher></switcher>
</template>

<script>
import switcher from "@/pages/switcher.vue";
import searchModal from "@/pages/searchModal.vue";
// import Swal from "sweetalert2";
import slibarWrapper from "@/pages/sidebarWrapper.vue";
import FeedbackService from "@/service/FeedbackService.js";
import startHeaderVue from "@/pages/startHeader.vue";
export default {
  name: "listFeedback",
  data() {
    return {
      listFeedback: [],
    };
  },
  components: {
    switcher,
    searchModal,
    slibarWrapper,
    startHeaderVue,
  },
  methods: {
    async getAllContacts() {
      try {
        const response = await FeedbackService.getAllFeedbacks();

        this.listFeedback = response.data;
      } catch (error) {
        console.error("Lỗi khi lấy danh sách Contact: ", error);
      }
    },
  },
  async created() {
    await this.getAllContacts();
  },
};
</script>
