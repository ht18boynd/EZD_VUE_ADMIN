<template>
  <!--wrapper-->
  <div class="wrapper">
    <!--sidebar wrapper -->
    <slibarWrapper></slibarWrapper>
    <!--end sidebar wrapper -->
    <!--start header -->
    <startHeaderVue></startHeaderVue>
    <!--end header -->

    <!--start page wrapper  . Dữ liệu chính-->
    <div class="page-wrapper">
      <div class="page-content">
        <!--breadcrumb-->
        <div class="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
          <div class="breadcrumb-title pe-3">eCommerce</div>
          <div class="ps-3">
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb mb-0 p-0">
                <li class="breadcrumb-item">
                  <a href="javascript:;"><i class="bx bx-home-alt"></i></a>
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                  Products Details
                </li>
              </ol>
            </nav>
          </div>
          <div class="ms-auto">
            <div class="btn-group">
              <button type="button" class="btn btn-primary">Settings</button>
              <button
                type="button"
                class="btn btn-primary split-bg-primary dropdown-toggle dropdown-toggle-split"
                data-bs-toggle="dropdown"
              >
                <span class="visually-hidden">Toggle Dropdown</span>
              </button>
              <div
                class="dropdown-menu dropdown-menu-right dropdown-menu-lg-end"
              >
                <a class="dropdown-item" href="javascript:;">Action</a>
                <a class="dropdown-item" href="javascript:;">Another action</a>
                <a class="dropdown-item" href="javascript:;"
                  >Something else here</a
                >
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="javascript:;">Separated link</a>
              </div>
            </div>
          </div>
        </div>
        <!--end breadcrumb-->

        <div class="card">
          <div class="row g-0">
            <div class="col-md-4 border-end">
              <img :src="game.imageName" class="img-fluid" alt="..." />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h4 class="card-title">{{ game.nameGame }}</h4>
                <div class="d-flex gap-3 py-3">
                  <div class="cursor-pointer">
                    <i class="bx bxs-star text-warning"></i>
                    <i class="bx bxs-star text-warning"></i>
                    <i class="bx bxs-star text-warning"></i>
                    <i class="bx bxs-star text-warning"></i>
                    <i class="bx bxs-star text-secondary"></i>
                  </div>
                  <div>142 reviews</div>
                  <div class="text-success">
                    <i class="bx bxs-cart-alt align-middle"></i> 134 orders
                  </div>
                </div>

                <!-- Bảng hiển thị Roles -->
                <div>
                  <H6
                    style="color: rgb(18, 143, 201); border-bottom: 2px solid rgb(18, 143, 201;"
                  >
                    Vị Trí
                    <img
                      width="25"
                      height="25"
                      src="https://img.icons8.com/nolan/64/new-world.png"
                      alt="new-world"
                    />:
                  </H6>
                  <div class="d-flex flex-wrap">
                    <div
                      class="col-3"
                      v-for="role in game.roles"
                      :key="role.id"
                    >
                      {{ role.name }}
                    </div>
                  </div>
                </div>

                <!-- Bảng hiển thị Genders -->
                <div>
                  <H6
                    style="color: rgb(201, 18, 140); border-bottom: 2px solid rgb(201, 18, 140;"
                  >
                    Giới Tính
                    <img
                      width="25"
                      height="25"
                      src="https://img.icons8.com/nolan/64/gender.png"
                      alt="gender"
                    />:
                  </H6>
                  <div class="d-flex flex-wrap">
                    <div
                      class="col-3"
                      v-for="gender in game.genders"
                      :key="gender.id"
                    >
                      {{ gender.name }}
                    </div>
                  </div>
                </div>

                <!-- Bảng hiển thị Levels -->
                <div>
                  <H6
                    style="color: rgb(9, 172, 123); border-bottom: 2px solid rgb(9, 172, 123;"
                  >
                    Cấp Độ
                    <img
                      width="25"
                      height="25"
                      src="https://img.icons8.com/nolan/64/final-fantasy-xiv.png"
                      alt="final-fantasy-xiv"
                    />:
                  </H6>
                  <div class="d-flex flex-wrap">
                    <div
                      class="col-3"
                      v-for="level in game.levels"
                      :key="level.id"
                    >
                      {{ level.name }}
                    </div>
                  </div>
                </div>

                <hr />

                <div class="d-flex gap-3 mt-3">
                  <a @click="startEditingGame(game.id)" class="btn btn-primary"
                    >Sửa Thông Tin</a
                  >
                  <a @click="deleteGame(game.id)" class="btn btn-primary">
                    Xóa Game
                  </a>
                </div>
              </div>
            </div>
          </div>
          <hr />
        </div>
        <div class="card">
          <div class="card-body p-4">
            <div @click="showEditForm = !showEditForm">
              <h6 class="card-title">
                Sửa Chi Tiết Trò Chơi :
                <img
                  width="50"
                  height="50"
                  src="https://img.icons8.com/dusk/64/new-world.png"
                  alt="new-world"
                />
              </h6>
            </div>
            <hr />
            <div class="form-body mt-4" v-if="showEditForm">
              <div class="row">
                <form
                  class="row g-3 needs-validation was-validated"
                  novalidate
                  enctype="multipart/form-data"
                  @submit.prevent="saveEditedGame"
                >
                  <div class="col-lg-8">
                    <div class="mb-3">
                      <label for="bsValidation1" class="form-label"
                        >Tên Trò Chơi</label
                      >
                      <input
                        type="text"
                        class="form-control"
                        id="bsValidation1"
                        placeholder="Vui Lòng Nhập Tên"
                        v-model="editingGame.nameGame"
                        required
                      />
                      <div class="valid-feedback">Looks good!</div>
                      <div class="invalid-feedback">
                        Vui Lòng Nhập Tên
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="feather feather-github me-2 icon-inline"
                        >
                          <path
                            d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div class="mb-3">
                      <label for="bsValidation2" class="form-label"
                        >Ảnh Trò Chơi</label
                      >
                      <input
                        type="file"
                        class="form-control"
                        id="bsValidation2"
                        placeholder="Ảnh Trò Chơi"
                        @change="handleImageChange"
                        required
                      />
                      <div class="valid-feedback">Looks good!</div>
                      <div class="invalid-feedback">
                        Vui Lòng Chọn File
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="feather feather-github me-2 icon-inline"
                        >
                          <path
                            d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div class="mb-3">
                      <label for="bsValidation2" class="form-label"
                        >Ảnh Xem Trước</label
                      >

                      <img
                        id="previewImage"
                        class="img-fluid"
                        v-if="imagePreviewUrl"
                        :src="imagePreviewUrl"
                        alt="Preview"
                      />
                      <img
                        id="previewImage"
                        class="img-fluid"
                        v-else
                        :src="game.imageName"
                        alt="Preview"
                      />
                    </div>
                  </div>

                  <div class="col-lg-4">
                    <div class="row g-3">
                      <div class="col-12">
                        <label for="bsValidation10" class="form-label"
                          >Cấp Độ</label
                        >
                        <select
                          id="bsValidation10"
                          class="form-select"
                          required
                          multiple
                          v-model="editingGame.levels"
                        >
                          <option disabled>Lựa Chọn Dưới Đây...</option>
                          <option
                            v-for="level in levelList"
                            :key="level.id"
                            :value="level.id"
                          >
                            {{ level.name }}
                          </option>
                        </select>
                        <div class="valid-feedback">
                          Looks good! Chọn Nhiều Bằng Ctrl +
                        </div>
                        <div class="invalid-feedback">
                          Vui Lòng Chọn Ít Nhất 1 Giá Trị
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="feather feather-github me-2 icon-inline"
                          >
                            <path
                              d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
                            ></path>
                          </svg>
                        </div>
                      </div>
                      <div class="col-12">
                        <label for="bsValidation11" class="form-label"
                          >Vị Trí</label
                        >
                        <select
                          id="bsValidation11"
                          class="form-select"
                          required
                          multiple
                          v-model="editingGame.roles"
                        >
                          <option disabled>Lựa Chọn Dưới Đây...</option>
                          <option
                            v-for="role in allRoles"
                            :key="role.id"
                            :value="role.id"
                          >
                            {{ role.name }}
                          </option>
                        </select>
                        <div class="valid-feedback">
                          Looks good! Chọn Nhiều Bằng Ctrl +
                        </div>
                        <div class="invalid-feedback">
                          Vui Lòng Chọn Ít Nhất 1 Giá Trị
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="feather feather-github me-2 icon-inline"
                          >
                            <path
                              d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
                            ></path>
                          </svg>
                        </div>
                      </div>
                      <div class="col-12">
                        <label for="bsValidation12" class="form-label"
                          >Giới Tính</label
                        >
                        <select
                          id="bsValidation12"
                          class="form-select"
                          required
                          multiple
                          v-model="editingGame.genders"
                        >
                          <option disabled>Lựa Chọn Dưới Đây...</option>
                          <option
                            v-for="gender in allGenders"
                            :key="gender.id"
                            :value="gender.id"
                          >
                            {{ gender.name }}
                          </option>
                        </select>
                        <div class="valid-feedback">
                          Looks good! Chọn Nhiều Bằng Ctrl +
                        </div>
                        <div class="invalid-feedback">
                          Vui Lòng Chọn Ít Nhất 1 Giá Trị
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="feather feather-github me-2 icon-inline"
                          >
                            <path
                              d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
                            ></path>
                          </svg>
                        </div>
                      </div>

                      <div class="col-12">
                        <div class="d-grid">
                          <button type="submit" class="btn btn-primary">
                            Lưu
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <!--end row-->
            </div>
          </div>
        </div>
        <h6 class="text-uppercase mb-0">Các Sản Phẩm Liên Quan</h6>
        <hr />
        <div class="row row-cols-1 row-cols-lg-3">
          <div class="col">
            <div class="card">
              <div class="row g-0">
                <div class="col-md-4">
                  <img
                    src="assets/images/products/16.png"
                    class="img-fluid"
                    alt="..."
                  />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h6 class="card-title">Light Grey Headphone</h6>
                    <div class="cursor-pointer my-2">
                      <i class="bx bxs-star text-warning"></i>
                      <i class="bx bxs-star text-warning"></i>
                      <i class="bx bxs-star text-warning"></i>
                      <i class="bx bxs-star text-warning"></i>
                      <i class="bx bxs-star text-secondary"></i>
                    </div>
                    <div class="clearfix">
                      <p class="mb-0 float-start fw-bold">
                        <span
                          class="me-2 text-decoration-line-through text-secondary"
                          >$240</span
                        ><span>$199</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <div class="row g-0">
                <div class="col-md-4">
                  <img
                    src="assets/images/products/17.png"
                    class="img-fluid"
                    alt="..."
                  />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h6 class="card-title">Black Cover iPhone 8</h6>
                    <div class="cursor-pointer my-2">
                      <i class="bx bxs-star text-warning"></i>
                      <i class="bx bxs-star text-warning"></i>
                      <i class="bx bxs-star text-warning"></i>
                      <i class="bx bxs-star text-warning"></i>
                      <i class="bx bxs-star text-warning"></i>
                    </div>
                    <div class="clearfix">
                      <p class="mb-0 float-start fw-bold">
                        <span
                          class="me-2 text-decoration-line-through text-secondary"
                          >$179</span
                        ><span>$110</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <div class="row g-0">
                <div class="col-md-4">
                  <img
                    src="assets/images/products/19.png"
                    class="img-fluid"
                    alt="..."
                  />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h6 class="card-title">Men Hand Watch</h6>
                    <div class="cursor-pointer my-2">
                      <i class="bx bxs-star text-warning"></i>
                      <i class="bx bxs-star text-warning"></i>
                      <i class="bx bxs-star text-warning"></i>
                      <i class="bx bxs-star text-secondary"></i>
                      <i class="bx bxs-star text-secondary"></i>
                    </div>
                    <div class="clearfix">
                      <p class="mb-0 float-start fw-bold">
                        <span
                          class="me-2 text-decoration-line-through text-secondary"
                          >$150</span
                        ><span>$120</span>
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
    <!--end page wrapper -->
    <!--start overlay-->
    <div class="overlay toggle-icon"></div>
    <!--end overlay-->
    <!--Start Back To Top Button-->
    <a href="javaScript:;" class="back-to-top"
      ><i class="bx bxs-up-arrow-alt"></i
    ></a>
    <!--End Back To Top Button-->
    <footer class="page-footer">
      <p class="mb-0">Copyright © 2022. All right reserved.</p>
    </footer>
  </div>
  <!--end wrapper-->
  <!-- search modal -->
  <searchModal></searchModal>
  <!-- end search modal -->
  <!--start switcher-->
  <switcher></switcher>
  <!--end switcher-->
  <!-- Các phần tử khác của trang gameDetails -->
</template>
<script>
import ForGameService from "@/service/ForGameService";
import GameService from "@/service/GameService";
import Swal from "sweetalert2";

import switcher from "@/pages/switcher.vue";
import searchModal from "@/pages/searchModal.vue";
import slibarWrapper from "@/pages/sidebarWrapper.vue";
import startHeaderVue from "@/pages/startHeader.vue";
export default {
  name: "gameDetails",
  props: ["id"], // Nhận tham số id từ URL
  components: {
    switcher,
    searchModal,
    slibarWrapper,
    startHeaderVue,
  },
  data() {
    return {
      imagePreviewUrl: null, // Sử dụng để hiển thị hình ảnh được chọn

      showEditForm: false,
      game: {}, // Để lưu trữ thông tin chi tiết của trò chơi
      //editing
      editingGame: {
        nameGame: "",
        imageName: "",
        levels: [],
        roles: [],
        genders: [],
      },

      levelList: [],
      allRoles: [],
      allGenders: [],
      gamelist: [],
    };
  },

  methods: {
    handleImageChange(event) {
      this.editingGame.imageName = event.target.files[0];
      // Tạo một đối tượng FileReader để đọc hình ảnh
      let reader = new FileReader();

      reader.onload = (e) => {
        this.imagePreviewUrl = e.target.result; // Cập nhật imagePreviewUrl với dữ liệu hình ảnh
      };

      // Đọc hình ảnh được chọn
      reader.readAsDataURL(this.editingGame.imageName);
    },
    async startEditingGame() {
      try {
        if (this.gamelist) {
          this.showEditForm = !this.showEditForm;
          // Đảm bảo rằng gamelist đã được tải
          const game = this.gamelist.find((game) => game.id == this.id);
          if (game) {
            this.editingGame = game;
          } else {
            console.error("Không tìm thấy trò chơi với ID: ", this.id);
          }
        } else {
          console.error("Danh sách trò chơi không tồn tại.");
        }
      } catch (error) {
        console.error("Lỗi khi lấy chi tiết trò chơi: ", error);
      }
    },

    // timf trò chơi

    async saveEditedGame() {
      // Validate form fields
      if (
        !this.editingGame.nameGame ||
        !this.editingGame.imageName ||
        this.editingGame.levels.length === 0 ||
        this.editingGame.roles.length === 0 ||
        this.editingGame.genders.length === 0
      ) {
        // Handle validation errors
        Swal.fire({
          icon: "warning",
       
          text: "Bạn Đã Để Trống Giá Trị Nào Đó",
        });
        return;
      }

      // Check if the new name is already in use by other games (excluding the current game)
      const isNameOfGameExist = this.gamelist.some(
        (game) =>
          game.id !== this.editingGame.id && // Exclude the current game from the check
          game.nameGame.toLowerCase() ===
            this.editingGame.nameGame.toLowerCase()
      );

      if (isNameOfGameExist) {
        // Handle the error when a different game is using the new name
        Swal.fire({
          icon: "error",
          title: "Duplicate Name",
          text: "1 Trò Chơi Đã Sử Dụng Tên Này Rồi !",
        });
        return;
      }

      // Call the editGame method to update the game
      try {
        const response = await GameService.editGame(
          this.editingGame.id,
          this.editingGame.nameGame,
          this.editingGame.imageName,
          this.editingGame.levels,
          this.editingGame.roles,
          this.editingGame.genders
        );

        if (response.id) {
          // Handle successful update
          this.editingGame = null;
          this.getGameDetails(this.id);
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Cập Nhập Thành Công!",
            showConfirmButton: false,
            timer: 1500,
          });
          this.showEditForm = false; // Hide the edit form after successful update
        }
      } catch (error) {
        // Handle update errors
        console.error("Error updating game:", error);
        Swal.fire({
          icon: "error",
          title: "Sửa Lỗi",
          text: "Có Lỗi Khi Sửa Trò Chơi.",
        });
      }
    },

    async getAllGames() {
      try {
        const response = await GameService.getAllGames();
        this.gamelist = response.data.sort((a, b) => b.id - a.id);
      } catch (error) {
        console.error("Lỗi khi lấy danh sách trò chơi: ", error);
      }
    },
    // get all
    async getAllLevels() {
      try {
        const response = await ForGameService.getAllLevelGames();
        this.levelList = response.data.sort((a, b) => b.id - a.id);
      } catch (error) {
        console.error("Error fetching levels:", error);
      }
    },
    async getAllRoles() {
      try {
        const response = await ForGameService.getAllRoleGames();
        this.allRoles = response.data.sort((a, b) => b.id - a.id);
      } catch (error) {
        console.error("Error fetching roles:", error);
      }
    },
    async getAllGenders() {
      try {
        const response = await ForGameService.getAllGenderGames();
        this.allGenders = response.data.sort((a, b) => b.id - a.id);
      } catch (error) {
        console.error("Error fetching genders:", error);
      }
    },
    async deleteGame(id) {
      try {
        const result = await Swal.fire({
          title: "Xác nhận xóa",
          text: "Bạn có chắc muốn xóa game này?",
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "Xóa",
          cancelButtonText: "Hủy",
        });

        if (result.isConfirmed) {
          // Nếu người dùng xác nhận xóa
          await GameService.deleteGame(id);
          await Swal.fire({
            icon: "success",
            title: "Xóa thành công",
            text: "Game đã được xóa thành công!",
          });

          // Sau khi xóa thành công, chuyển về trang /game
          this.$router.push("/game");
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          // Nếu người dùng từ chối xóa
          await Swal.fire({
            icon: "info",
            title: "Hủy thao tác",
            text: "Bạn đã hủy thao tác xóa game.",
          });
        }
      } catch (error) {
        console.error("Lỗi khi xóa game:", error);
      }
    },

    async getGameDetails(id) {
      try {
        // Sử dụng GameService để lấy thông tin game theo id
        const response = await GameService.getGameById(id);
        this.game = response; // Lưu thông tin game vào biến game
      } catch (error) {
        console.error("Lỗi khi lấy chi tiết trò chơi: ", error);
      }
    },
  },
  async created() {
    // Gọi phương thức để lấy thông tin game dựa vào id
    this.getGameDetails(this.id);
    await this.getAllGames();
    await this.getAllLevels();
    await this.getAllRoles();
    await this.getAllGenders();
  },
};
</script>
