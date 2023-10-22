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
        <div class="row">
          <div class="col-12">
            <div class="card">
              <div class="card-body">
                <div class="row align-items-center">
                  <div class="col-lg-3 col-xl-2">
                    <a
                      href="/game/create"
                      class="btn btn-primary mb-3 mb-lg-0"
                      ><i class="bx bxs-plus-square"></i>Thêm Mới</a
                    >
                  </div>
                  <div class="col-lg-9 col-xl-10">
                    <form class="float-lg-end">
                      <div class="col">
                        <div class="position-relative">
                          <input
                            type="text"
                            class="form-control ps-5"
                            placeholder="Search Game..."
                          />
                          <span
                            class="position-absolute top-50 product-show translate-middle-y"
                            ><i class="bx bx-search"></i
                          ></span>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <div class="card">
              <div class="card-body">
                <div class="row align-items-center">
                  <h5>
                    <i class="lni lni-list"></i> <span>Danh Sách Trò Chơi</span>
                  </h5>
                </div>
              </div>
            </div>
          </div>

          <div
            class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 row-cols-xxl-5 product-grid"
           
          >
            <div class="col" v-for="game in gamelist" :key="game.id">
              <div class="card">
                <img
                  class="card-img-top"
                  :src="game.imageName"
                  :alt="game.nameGame"
                  @click="showImage(game.nameGame, game.imageName)"
                />

               
                <div class="icon-badge position-relative  me-lg-5 "  v-if="game.id === maxId" style="background-image: url(assets/gif/new06p.gif)">

                   
                  </div>
                  <div class="icon-badge position-relative  me-lg-5   " v-else style="background-image: url(assets/gif/icons8-hot.gif)">
                   
                  </div>
               

                <div class="card-body">
                  <h6 class="card-title cursor-pointer">{{ game.nameGame }}</h6>
                  <div class="clearfix">
                    <p class="mb-0 float-start"><strong>134</strong> Sales</p>
                  </div>
                  <router-link :to="'/game/gameDetails/' + game.id">Chi Tiết</router-link>

                </div>
              </div>
            </div>
          </div>
        </div>

        <!--end row-->
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
</template>

<script>
import GameService from "@/service/GameService";
import Swal from "sweetalert2";
import ForGameService from "@/service/ForGameService";
import switcher from "@/pages/switcher.vue";
import searchModal from "@/pages/searchModal.vue";

import slibarWrapper from "@/pages/sidebarWrapper.vue";

import startHeaderVue from "@/pages/startHeader.vue";
export default {
  name: "listGame",
  components: {
    switcher,
    searchModal,
    slibarWrapper,
    startHeaderVue,
  },

  data() {
    return {
  
      //editing
      

      levelList: [],
      allRoles: [],
      allGenders: [],
      gamelist: [],
    };
  },
  methods: {
    // timf trò chơi
    async startEditingGame(gameId) {
      // Tìm trò chơi dựa trên gameId và gán cho editingGame
      this.editingGame = await this.gamelist.find((game) => game.id === gameId);
    },
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
          icon: "error",
          title: "Validation Error",
          text: "Please fill in all required fields.",
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
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Game updated successfully!",
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
          title: "Update Error",
          text: "An error occurred while updating the game.",
        });
      }
    },

    async deleteGame(id) {
      try {
        // Gọi method deleteGame từ GameService
        await GameService.deleteGame(id);

        // Sử dụng SweetAlert2 để hiển thị thông báo xóa thành công
        await Swal.fire({
          icon: "success",
          title: "Xóa thành công",
          text: "Game đã được xóa thành công!",
        });

        // Sau khi xóa thành công, cập nhật danh sách game
        await this.getAllGames();
      } catch (error) {
        console.error("Lỗi khi xóa game:", error);
      }
    },
    showImage(name, imageUrl) {
      Swal.fire({
        title: name,
        imageUrl: imageUrl,
        imageWidth: 400,
        imageHeight: 400,
      });
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
  },
  async created() {
    await this.getAllGames();
    await this.getAllLevels();
    await this.getAllRoles();
    await this.getAllGenders();
  },
  computed: {
    // Tính toán `maxId` để xác định `id` lớn nhất trong danh sách
    maxId() {
      return Math.max(...this.gamelist.map((game) => game.id));
    },
  },
};
</script>
