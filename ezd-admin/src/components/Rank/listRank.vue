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
          <div class="breadcrumb-title pe-3">Rank</div>
          <div class="ps-3">
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb mb-0 p-0">
                <li class="breadcrumb-item">
                  <a href="javascript:;"><i class="bx bx-home-alt"></i></a>
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                  List Rank
                </li>
              </ol>
            </nav>
          </div>
        </div>
        <!--end breadcrumb-->
        <div v-if="showAdminBoard" class="row">
          <div class="col-12">
            <div class="card">
              <div class="card-body">
                <div class="row align-items-center">
                  <div class="col-lg-3 col-xl-2">
                    <a
                      href="/admin/rank/create"
                      class="btn btn-primary mb-3 mb-lg-0"
                      ><i class="bx bxs-plus-square"></i>Tạo rank mới</a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Start Edit Rank -->
        <div v-if="isEditDialogOpen" class="card">
          <div class="card-body p-4">
            <h5 class="card-title">Cập nhật rank</h5>
            <hr />
            <div class="form-body mt-4">
              <form @submit.prevent="updateRank">
                <div class="row">
                  <div class="col-lg-12">
                    <div class="border border-3 p-4 rounded">
                      <div class="mb-3">
                        <label for="rankName" class="form-label"
                          >Tên Xếp Hạng</label
                        >
                        <input
                          v-model="editRankData.rank_name"
                          v-bind="listRanks.rank_name"
                          type="text"
                          id="rankName"
                          class="form-control"
                          placeholder="Enter product title"
                        />
                      </div>
                      <div class="mb-3">
                        <div class="row g-3">
                          <div class="col-md-3">
                            <label for="minimumBalance"
                              >Số Tiền Tối Thiểu</label
                            >
                            <input
                              v-model="editRankData.minimum_balance"
                              type="number"
                              id="minimumBalance"
                            />
                          </div>
                          <div class="col-md-3">
                            <label for="maximumBalance"
                              >Số Tiền Đạt Theo Yêu Cầu</label
                            >
                            <input
                              v-model="editRankData.maximum_balance"
                              type="number"
                              id="maximumBalance"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="mb-3">
                        <div class="row g-6">
                          <label for="avatarImage" class="form-label"
                            >Khung hình avatar</label
                          >
                          <div class="col-md-3">
                            <input
                              id="avatarImage"
                              type="file"
                              accept=".jpg, .png, image/jpeg, image/png"
                              @change="handleImageUpload('avatarImage')"
                              multiple
                            />
                          </div>
                          <div class="col-md-3">
                            <img
                              id="previewImage"
                              class="img-fluid"
                              v-if="editRankData.imageAvatar"
                              :src="imageAvatar"
                              alt="Preview"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="mb-3">
                        <div class="row g-6">
                          <label for="backgroundImage" class="form-label"
                            >Hình nền</label
                          >
                          <div class="col-md-3">
                            <input
                              id="backgroundImage"
                              type="file"
                              accept=".xlsx,.xls,image/*,.doc,audio/*,.docx,video/*,.ppt,.pptx,.txt,.pdf"
                              @change="handleImageUpload('backgroundImage')"
                              multiple
                            />
                          </div>
                          <div class="col-md-3">
                            <img
                              id="previewImage"
                              class="img-fluid"
                              v-if="editRankData.imageBackground"
                              :src="imageBackground"
                              alt="Preview"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <button
                      type="submit"
                      class="btn btn-primary px-5 radius-30"
                    >
                      Lưu Xếp Hạng
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <!-- End Edit Rank -->
        <hr />
        <h6 class="mb-0 text-uppercase">Danh sách Rank đã tạo</h6>
        <hr />
        <div class="card">
          <div class="card-body">
            <div class="table-responsive">
              <div class="row">
                <div class="col-sm-12 col-md-6">
                  <div class="dataTables_length" id="example_length">
                    <label>
                      <select
                        class="form-select form-select-sm"
                        aria-controls="example"
                        name="example_length"
                      >
                        <option value="10">10</option>
                        <option value="25">25</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                      </select>
                    </label>
                  </div>
                </div>
                <div class="col-sm-12 col-md-6">
                  <div class="dataTables_filter">
                    <input
                      type="search"
                      class="form-control form-control-sm"
                      placeholder
                      aria-controls="example"
                    />
                  </div>
                </div>
              </div>
              <br />
              <div class="row">
                <div class="col-sm-12">
                  <table
                    id="example"
                    class="table table-striped table-bordered"
                    style="width: 100%"
                  >
                    <thead>
                      <tr>
                        <th>Tên xếp hạng</th>
                        <th>Số tiền tối thiểu</th>
                        <th>Số tiền cần đạt</th>
                        <th>Khung Avatar</th>
                        <th>Hình nền</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="rank in listRanks" :key="rank.rank_id">
                        <!-- <td> {{rank.rank_id}}</td> -->
                        <td>{{ rank.rank_name }}</td>
                        <td>{{ rank.minimum_balance }}</td>
                        <td>{{ rank.maximum_balance }}</td>
                        <td><img :src="rank.avatar_frame_image" /></td>
                        <td><img :src="rank.background_image" /></td>
                        <td>
                          <div class="row row-cols-auto g-3">
                            <div class="col">
                              <button
                                type="button"
                                class="btn btn-outline-success"
                              >
                                <i
                                  class="lni lni-pencil me-0"
                                  @click="openEditDialog(rank.rank_id)"
                                ></i>
                              </button>
                            </div>
                            <div class="col">
                              <button
                                type="button"
                                class="btn btn-outline-danger"
                                @click="deleteRank(rank.rank_id)"
                              >
                                <i class="lni lni-trash me-0"></i>
                              </button>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div class="row"></div>
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

import RankService from "@/service/RankService.js";
import Swal from "sweetalert2";
export default {
  name: "listRank",
  components: {
    switcher,
    searchModal,
    slibarWrapper,
    startHeaderVue,
  },

  data() {
    return {
      isEditDialogOpen: false,
      listRanks: [],
      editRankData: {
        rank_id: null,
        rank_name: "",
        minimum_balance: 0,
        maximum_balance: 0,
        avatar_frame_image: null,
        background_image: null,
      },
      avatarImage: null,
      backgroundImage: null,
    };
  },

  methods: {
    openEditDialog(rank) {
      // Mở Dialog và gán dữ liệu của rank vào editRankData
      this.getRankById(rank);
      this.isEditDialogOpen = true;
      this.editRankData = { ...rank };
    },

    closeEditDialog() {
      // Đóng Dialog và làm sạch dữ liệu editRankData
      this.isEditDialogOpen = false;
      this.editRankData = {
        rank_id: null,
        rank_name: "",
        minimum_balance: 0,
        maximum_balance: 0,
        avatar_frame_image: null,
        background_image: null,
      };
      (this.avatarImage = null), (this.backgroundImage = null);
    },

    async getRankById(id) {
      try {
        const response = await RankService.getRankById(id);
        this.editRankData = { ...response.data }; // Lấy dữ liệu từ response và gán vào editRankData
        // Khởi tạo giá trị mặc định cho hình ảnh
      } catch (error) {
        console.error("Error getting rank by ID:", error);
      }
    },
    handleImageUpload(type) {
      const input = event.target;
      const file = input.files[0];

      if (file) {
        // Check which type of image is being uploaded and update the corresponding property
        if (type === "avatarImage") {
          this.editRankData.avatar_frame_image = file;
          this.imageAvatar = URL.createObjectURL(file);
        } else if (type === "backgroundImage") {
          this.editRankData.background_image = file;
          this.imageBackground = URL.createObjectURL(file);
        }
      }
    },
    async updateRank() {
      try {
        const formData = new FormData();
        formData.append("rank_name", this.editRankData.rank_name);
        formData.append("minimum_balance", this.editRankData.minimum_balance);
        formData.append("maximum_balance", this.editRankData.maximum_balance);
        formData.append(
          "adminFrameImage",
          this.editRankData.avatar_frame_image
        );
        formData.append("backgroundImage", this.editRankData.background_image);

        await RankService.updateRank(this.editRankData.rank_id, formData);

        // Đóng Dialog và làm sạch dữ liệu editRankData sau khi cập nhật thành công
        this.closeEditDialog();

        // Refresh danh sách ranks sau khi cập nhật
        this.getAllRanks();
        this.$router.push("/admin/rank");
      } catch (error) {
        console.error("Error updating rank:", error);
      }
    },

    async confirmDelete() {
      // Hiển thị popup xác nhận trước khi delete Rank
      const confirmResult = await Swal.fire({
        title: "Bạn có chắc sẽ xóa nó?",
        text: "Nếu đã chắc chắn xin vui lòng chọn Yes hoặc No?",
        icon: "question",
        showCancelButton: true,
        confirmButtonText: "Yes",
        cancelButtonText: "No",
      });
      if (confirmResult.isConfirmed) {
        // Người dùng bấm Yes, tiến hành tạo rank
        await this.deleteRank();

        // Bạn cũng có thể thêm các hành động khác sau khi tạo rank thành công ở đây
      } else {
        // Người dùng bấm No hoặc đóng popup, không thực hiện gì cả
      }
    },

    async getAllRanks() {
      try {
        const response = await RankService.getRank();
        const data = response.data;

        // Gán giá trị cho cả gamelist và originalGamelist
        this.listRanks = data;
        // this.originalGamelist = data;
      } catch (error) {
        console.error("Lỗi khi lấy danh sách trò chơi: ", error);
      }
    },

    async deleteRank(id) {
      try {
        await RankService.deleteRank(id);
        // Refresh the list after deletion
        this.getAllRanks();
      } catch (error) {
        console.error("Lỗi khi xóa xếp hạng: ", error);
      }
    },
  },
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
    showAdminBoard() {
      if (this.currentUser && this.currentUser["roles"]) {
        return this.currentUser["roles"].includes("ROLE_ADMIN");
      }
      return false;
    },
    showModeratorBoard() {
      if (this.currentUser && this.currentUser["roles"]) {
        return this.currentUser["roles"].includes("ROLE_PROVIDER");
      }
      return false;
    },
  },
  created() {
    this.getAllRanks();
  },
};
</script>

<style scoped></style>
