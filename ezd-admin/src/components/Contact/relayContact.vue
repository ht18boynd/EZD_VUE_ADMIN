<template>
  <div class="wrapper">
    <!--sidebar wrapper -->
    <slibarWrapper></slibarWrapper>
    <!--end sidebar wrapper -->
    <!--start header -->
    <startHeaderVue></startHeaderVue>

    <div class="page-wrapper">
      <div class="page-content">
        <div class="card">
          <div class="card-body">
            <form @submit.prevent="submitForm" enctype="multipart/form-data">
              

              <h6>To : {{ contact.email }}</h6>
              
              <input v-model="subject" type="text" class="form-control" id="subject" required alt="Subject" placeholder="Subject"/>
              <br>
              <div ref="editor" @change="updateContent"></div>

              <button type="submit">Send Email</button>
            </form>
          </div>
        </div>
      </div>
    </div>

    <searchModal></searchModal>
    <!-- end search modal -->
    <!--start switcher-->
    <switcher></switcher>
  </div>
</template>

<script>
import "froala-editor/css/froala_editor.pkgd.min.css"; // Import CSS
import "froala-editor/js/plugins.pkgd.min.js"; // Import Froala plugins (optional)
import "froala-editor/js/languages/vi.js"; // Import language file (optional)
import "froala-editor/js/third_party/embedly.min.js"; // Import third-party plugins (optional)
import "froala-editor/js/third_party/font_awesome.min.js";
import FroalaEditor from "froala-editor";
import switcher from "@/pages/switcher.vue";
import searchModal from "@/pages/searchModal.vue";
// import Swal from "sweetalert2";
import slibarWrapper from "@/pages/sidebarWrapper.vue";
import ContactService from "@/service/ContactService.js";
import startHeaderVue from "@/pages/startHeader.vue";

export default {
  name: "relayContact",
  // Trong mounted hook
  mounted() {
    // Khởi tạo Froala Editor trong mounted hook
    this.$nextTick(() => {
      const editor = new FroalaEditor(this.$refs.editor, {
        // Cấu hình Froala Editor nếu cần
        events: {
          contentChanged: () => {
            // Xử lý sự kiện khi nội dung thay đổi
            this.content = editor.html.get();
          },
        },
      });
    });
  },

  data() {
    return {
      contact: {},
      toEmail: "",
      subject: "",
      content: "",
    };
  },
  components: {
    switcher,
    searchModal,
    slibarWrapper,
    startHeaderVue,
  },
  methods: {
    async submitForm() {
      try {
        // Call the service method to create and
        this.toEmail = this.contact.email;
        await ContactService.createAndSendEmail(
          this.toEmail,
          this.subject,
          this.content
        );

        // Handle the response as needed, e.g., show success message

        console.log("Email sent successfully.");
      } catch (error) {
        console.error("Error sending email:", error);
      }
    },
    updateContent(event, editor) {
      // Update content when CKEditor changes
      this.newContact.content = editor.getData();
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
