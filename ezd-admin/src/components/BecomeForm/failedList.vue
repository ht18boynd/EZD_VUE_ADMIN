<template>
    <div class="wrapper">
      <!--sidebar wrapper -->
      <slibarWrapper></slibarWrapper>
      <!--end sidebar wrapper -->
      <!--start header -->
      <startHeaderVue></startHeaderVue>
  
      <div class="page-wrapper">
        <div class="page-content">
          <!--breadcrumb-->
          <div class="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
            <div class="breadcrumb-title pe-3">Nạp Coin</div>
            <div class="ps-3">
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb mb-0 p-0">
                  <li class="breadcrumb-item">
                    <a href="javascript:;"><i class="bx bx-home-alt"></i></a>
                  </li>
                  <li class="breadcrumb-item active" aria-current="page">
                    Danh Sách Đơn
                  </li>
                </ol>
              </nav>
            </div>
          </div>
          <!--end breadcrumb-->
          <h6 class="mb-0 text-uppercase">Danh Sách Tất Cả Đơn</h6>
          <hr />
          <div class="card">
            <div class="card-body">
              <div class="table-responsive">
                <table
                  id="example"
                  class="table table-striped table-bordered"
                  style="width: 100%"
                >
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Tên Đầy Đủ</th>
                        <th>Sinh Nhật</th>
                        <th>Nơi Ở</th>
                        <th>Ngày Tạo</th>                                          
                         <th>Status</th>
                        <th>Checked By Admin</th>
                        <th>Admin Check Time</th>
                    </tr>
                  </thead>
                <tbody>
                  <tr v-for="item in SUCCESSlist" :key="item.id">
                    <td>{{ item.id }}</td>
                    <td>{{ item.fullName }}</td>
                    <td>{{ item.birthDay }}</td>
                    <td>{{ item.becomeTime }}</td>
                    <td style="color:blue">{{ item.status }}</td>
                    <td>{{ item.checkedByAdmin }}</td>
                    <td>{{ item.adminCheckTime }}</td>
                  </tr>
                </tbody>
                  
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--start switcher-->
    <switcher></switcher>
  </template>
  
  <script>
  import switcher from "@/pages/switcher.vue";
  // import Swal from "sweetalert2";
  import slibarWrapper from "@/pages/sidebarWrapper.vue";
  import startHeaderVue from "@/pages/startHeader.vue";
  
  import BecomeIdolService from "@/service/BecomeIdolService";
  export default {
    name: "listTranSaction",
    data() {
      return {
        FAILEDlist: [],
      };
    },
  
    components: {
      switcher,
      
      slibarWrapper,
      startHeaderVue,
    },
    methods: {
      async getTransactionsByStatusFAILED() {
    try {
      const status = "FAILED";
      const response = await BecomeIdolService.getBecomeListByStatus(status);
      this.FAILEDlist = response; // Không cần .data ở đây
      console.log(this.FAILEDlist);
      console.log("Ok");
    } catch (error) {
      console.error("Lỗi khi lấy danh sách PENDING: ", error);
    }
  },
  
    },
    async created() {
      await this.getTransactionsByStatusFAILED();
    },
    
  };
  </script>
  
  <style></style>
  