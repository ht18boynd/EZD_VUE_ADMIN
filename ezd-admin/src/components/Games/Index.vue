<template>
  <!-- Page Sidebar Ends-->
  <div class="page-body">
    <div class="container-fluid">
      <div class="page-title">
        <div class="row">
          <div class="col-6">
            <h3>Game Collection</h3>
          </div>
          <div class="col-6">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <a href="/">
                  <svg class="stroke-icon">
                    <use
                      href="assets/svg/icon-sprite.svg#stroke-home"
                    ></use></svg
                ></a>
              </li>
              <li class="breadcrumb-item">Game Collection</li>
              <li class="breadcrumb-item active">List Game</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
    <!-- Container-fluid starts-->
    <div class="container-fluid">
      <div class="row">
        <!-- Zero Configuration  Starts-->
        <div class="col-sm-12">
          <div class="row">
            <div class="col-sm-6">
              <div class="card">
                <div class="card-header">
                  <h5>Create</h5>
                </div>
                <div class="card-body">
                  <form
                    class="was-validated"
                    novalidate
                    @submit.prevent="createNewGame"
                    enctype="multipart/form-data"
                  >
                    <div class="mb-3">
                      <label class="form-label" for="nameOfGame"
                        >Name Of Game:</label
                      >
                      <input
                        class="form-control"
                        id="nameOfGame"
                        type="text"
                        v-model="nameGame"
                        required
                      />
                      <div class="invalid-feedback">
                        Please provide a Name of Game.
                      </div>
                      <div class="valid-feedback">Looks good!</div>
                    </div>
                    <div class="mb-3">
                      <label class="form-label" for="gameImage">Image:</label>
                      <input
                        class="form-control"
                        id="gameImage"
                        type="file"
                        @change="onFileChangeForCreate"
                        required
                      />
                      <div class="invalid-feedback">
                        Please provide an Image.
                      </div>
                      <div class="valid-feedback">Looks good!</div>
                    </div>
                    <div class="col-md-2">
                      <button
                        class="btn btn-primary"
                        type="submit"
                        :disabled="!isFormValid"
                      >
                        Create
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="card">
                <div class="card-header">
                  <h5>Edit Game</h5>
                </div>
                <div class="card-body">
                  <form class="was-validated" novalidate  @submit.prevent="editGame">
                    <div class="mb-3">
                      <label class="form-label" for="validationCustom01"
                        >Name Of Game:</label
                      >
                      <input
                        class="form-control"
                        id="validationCustom01"
                        type="text"
                        v-model="nameGameForEdit"
                        required
                      />
                      <!-- Sử dụng v-model để kết nối với nameGame -->
                      <div class="invalid-feedback">
                        Please provide a Name of Game
                      </div>
                      <div class="valid-feedback">Looks good!</div>
                    </div>
                    <div class="mb-3">
                      <label class="form-label" for="validationCustom05"
                        >Image:</label
                      >
                      <input
                        class="form-control"
                        id="validationCustom05"
                        type="file"
                        required
                        @change="onFileChangeForEdit"
                      />
                      <div class="invalid-feedback">
                        Please provide an Image.
                      </div>
                      <div class="valid-feedback">Looks good!</div>
                    </div>
                    <div class="mb-3">
                      <img
                        v-if="imageGameForEdit"
                        :src="imageGameForEdit"
                        alt="Game Image"
                        class="img-100 rounded-circle"
                      />
                    </div>

                    <button class="btn btn-primary">
                      Save Changes
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div class="card">
            <div class="card-header pb-0 card-no-border">
              <h3>List Game</h3>
            </div>

            <div class="card-body">
              <div class="table-responsive">
                <table class="display" id="basic-1">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Image</th>
                      <th>Action</th>
                      <th>
                        <div>
                          <button
                            type="button"
                            class="btn btn-pill btn-primary btn-air-primary active"
                          >
                            Delete Selected
                          </button>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="game in gamelist" :key="game.id">
                      <td data-label="ID" class="stats-item">
                        {{ game.id }}
                      </td>
                      <td data-label="Game Name" class="stats-item">
                        {{ game.nameGame }}
                      </td>
                      <td data-label="Image" class="stats-item">
                        <img
                          class="img-100 rounded-circle"
                          :src="game.imageName"
                          :alt="game.nameGame"
                          @click="showImage(game.nameGame, game.imageName)"
                        />
                      </td>

                      <td>
                        <a @click="startEditingGame(game.id)">
                          <!-- Sử dụng sự kiện @click -->
                          <i class="icon-pencil-alt"></i>Edit
                        </a>
                      </td>
                      <td>
                        <a @click="deleteGame(game.id)">
                          <i class="icon-trash"></i>Delete
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Container-fluid Ends-->
  </div>
</template>
<script>
import GameService from "@/service/GameService";
import Swal from "sweetalert2";

export default {
  name: "gameCollector",
  data() {
    return {
      gamelist: [],
      nameGame: "",
      selectedFileForCreate: null,

      nameGameForEdit: "", // Thêm biến nameGameForEdit
      selectedFileForEdit: null,
      editGameId: null,
      imageGameForEdit: "", // Thêm biến imageGameForEdit
    };
  },
  methods: {
    onFileChangeForEdit(event) {
      this.selectedFileForEdit = event.target.files[0];
    },
    startEditingGame(id) {

      this.editGameId = id;
      // Đọc thông tin game từ danh sách và gán cho các field của form chỉnh sửa (nameGame và imageGame)
      const selectedGame = this.gamelist.find((game) => game.id === id);
      if (selectedGame) {
        this.nameGameForEdit = selectedGame.nameGame;
        this.imageGameForEdit = selectedGame.imageName; // Gán giá trị imageGameForEdit
      }
    },

    async editGame() {
      try {
        // Đảm bảo rằng đã chọn game cần chỉnh sửa
        if (this.editGameId) {
          const response = await GameService.editGame(
            this.editGameId,
            this.selectedFileForEdit,
            this.nameGameForEdit
          );

          if (response.status === 200) {
            await this.getAllGames();
            this.nameGameForEdit = "";
            this.selectedFileForEdit = null;
            this.editGameId = null; // Đặt lại giá trị ID game cần chỉnh sửa
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Edit Success!",
              showConfirmButton: false,
              timer: 1500,
            });
          } else {
            Swal.fire({
              position: "top-end",
              icon: "error",
              title: "Edit Error!",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        } else {
          Swal.fire("Error", "Please select a game to edit.", "error");
        }
      } catch (error) {
        Swal.fire("Xảy ra lỗi", "Vui lòng thử lại sau", "error");
      }
    },
    onFileChangeForCreate(event) {
      this.selectedFileForCreate = event.target.files[0];
    },
    async createNewGame() {
      try {
        const response = await GameService.addNewGame(
          this.selectedFileForCreate,
          this.nameGame
        );

        if (response.status === 200) {
          await this.getAllGames(); // Assuming you have an `getAllGames` method to refresh the game list
          this.nameGame = "";
          this.selectedFile = null;
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Create Success!",
            showConfirmButton: false,
            timer: 1500,
          });
        } else {
          Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Create Error!",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      } catch (error) {
        console.error("Lỗi khi thêm trò chơi: ", error);
        Swal.fire("Xảy ra lỗi", "Vui lòng thử lại sau", "error");
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
  },
  async created() {
    await this.getAllGames();
  },
  computed: {
    isFormValid() {
      return this.nameGame && this.selectedFileForCreate;
    },
  },
};
</script>
