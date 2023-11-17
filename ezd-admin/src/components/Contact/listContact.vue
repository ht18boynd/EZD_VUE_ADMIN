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

        <h1>List Contact</h1>
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
        <div class="email-content">
        <div class="">
          <div class="email-wrapper">
            <div class="email-list">
            <div class=""  v-for="a in contact" :key="a.id">
              <a @click="viewDetails(a.id)">
                <div
                  class="d-md-flex align-items-center email-message px-3 py-1"
                >
                  <div class="d-flex align-items-center email-actions">
                    <input class="form-check-input" type="checkbox" value="" />
                    <i class="bx bx-star font-20 mx-2 email-star"></i>
                    <p class="mb-0">
                      <b>{{ a.fullName }}</b>
                    </p>
                  </div>
                  <div class="">
                    <p class="mb-0">
                      {{ a.title }}
                    </p>
                  </div>
                  <div class="ms-auto">
                    <p class="mb-0 email-time"></p>
                  </div>
                </div>
              </a>
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
import ContactService from "@/service/ContactService.js";
import startHeaderVue from "@/pages/startHeader.vue";
export default {
  name: "listContact",
  data() {
    return {
      contact: [],
    };
  },
  components: {
    switcher,
    searchModal,
    slibarWrapper,
    startHeaderVue,
  },
  methods: {
    viewDetails(contactId) {
      // Chuyển hướng đến trang xem chi tiết, có thể sử dụng Vue Router hoặc window.location
      // Ví dụ sử dụng Vue Router:
      this.$router.push({ name: "contactDetails", params: { id: contactId } });
    },
    async getAllContacts() {
      try {
        const response = await ContactService.getAllContacts();

        this.contact = response.data;
        console.log(this.contact);
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
