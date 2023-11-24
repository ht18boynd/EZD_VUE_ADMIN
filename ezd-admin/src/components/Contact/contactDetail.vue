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

        <!-- <div class="container">
          <div class="row">
            <div class="contact-details-container" v-if="contact">
              <div class="cs-single_post" v-if="contact">
                <h5 class="detail-title">Full Name :  {{ contact.fullName }}</h5>
                <h5 class="detail-title">Email :  {{ contact.email }}</h5>
                <h5 class="detail-title">Title : {{ contact.title }}</h5>

                <p class="detail-content"><b>Content:</b> {{ contact.content }}</p>

                <div class="cs-height_10 cs-height_lg_10"></div>
              </div>
              <div class="cs-height_60 cs-height_lg_30"></div>

              <div class="cs-height_60 cs-height_lg_30"></div>
            </div>
          </div>
        </div> -->
        <div class="email-wrapper">
          
            <div class="email-read-box p-3" v-if="contact">
              <h4>
                {{ contact.title }}
              </h4>
              <hr />
              <div class="d-flex align-items-center">
                <img
                  src="/assets/images/avatars/avatar-2.png"
                  width="42"
                  height="42"
                  class="rounded-circle"
                  alt=""
                />
                
                <div class="flex-grow-1 ms-2">
                  <p class="mb-0 font-weight-bold">{{ contact.fullName }}</p>
                  <div class="dropdown">
                    <div class="dropdown-toggle" >
                      to me
                    </div>
                  
                  </div>
                </div>
                <p class="mb-0 chat-time ps-5 ms-auto">
                  <!-- Sep 15, 2020, 11:04 PM (19 hours ago) -->
                </p>
              </div>
              <div class="email-read-content px-md-5 py-5">
                <p>
                {{ contact.content }}
                </p>
               
                <hr />
                 <button class="btn btn-success"  @click="viewRelay(contact.id)">Reply</button>
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
  name: "contactDetail",
  data() {
    return {
      contact: {},
    };
  },
  components: {
    switcher,
    searchModal,
    slibarWrapper,
    startHeaderVue,
  },
  methods: {
    viewRelay(contactId) {
      // Chuyển hướng đến trang xem chi tiết, có thể sử dụng Vue Router hoặc window.location
      // Ví dụ sử dụng Vue Router:
      this.$router.push({ name: "relayContact", params: { id: contactId } });
    },
    async getContactDetails() {
      const contactId = this.$route.params.id;
      try {
        const response = await ContactService.getContactById(contactId);

        this.contact = response.data;
        console.log(this.contact);
      } catch (error) {
        console.error("Lỗi khi lấy chi tiết contact: ", error);
      }
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
    await this.getContactDetails();
  },
};
</script>
<style>

</style>
