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
                  >
                    <div class="mb-3">
                      <label class="form-label" for="validationCustom01">
                        Name Of Game :</label
                      >
                      <input
                        class="form-control"
                        id="validationCustom01"
                        type="text"
                        v-model="nameGame"
                        required
                      />
                      <div class="invalid-feedback">
                        Please provide a Name of Game
                      </div>
                      <div class="valid-feedback">Looks good!</div>
                    </div>
                    <div class="mb-3">
                      <label class="form-label" for="validationCustom05"
                        >Image :
                      </label>
                      <input
                        class="form-control"
                        id="validationCustom05"
                        type="file"
                        v-on:change="selectedFile = $event.target.files[0]"
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
                  <form v-if="editingGame" class="was-validated" novalidate>
                    <div class="mb-3">
                      <label class="form-label" for="validationCustom01">
                        Name Of Game :</label
                      >
                      <input
                        v-model="editingGame.nameGame"
                        class="form-control"
                        id="validationCustom01"
                        type="text"
                        required
                      />
                      <div class="invalid-feedback">
                        Please provide a Name of Game
                      </div>
                      <div class="valid-feedback">Looks good!</div>
                    </div>
                    <div class="mb-3">
                      <label class="form-label" for="validationCustom05"
                        >Image :
                      </label>
                      <input
                        @change="onFileChange"
                        class="form-control"
                        id="validationCustom05"
                        type="file"
                        required
                      />
                      <div class="invalid-feedback">
                        Please provide an Image.
                      </div>
                      <div class="valid-feedback">Looks good!</div>
                    </div>

                    <button @click="saveChanges" class="btn btn-primary">
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
                            @click="deleteSelectedGames"
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
                    <tr v-for="game in gamelist" :key="game.idGame">
                      <td data-label="ID" class="stats-item">
                        {{ game.idGame }}
                      </td>
                      <td data-label="Game Name" class="stats-item">
                        {{ game.nameGame }}
                      </td>
                      <td data-label="Image" class="stats-item">
                        <a @click="showImagePreview(game)">
                          <img
                            class="img-100 rounded-circle"
                            :src="getImageFromBase64(game.base64Image)"
                            :alt="game.nameGame"
                          />
                        </a>
                      </td>
                      <td>
                        <a href="#" @click="editGame(game)">
                          <i class="icon-pencil-alt"></i>Edit
                        </a>
                      </td>
                      <td>
                        <a href="#" @click="deleteGame(game.idGame)">
                          <i class="icon-trash"></i>Delete
                        </a>
                      </td>
                      <td>
                        <input
                          type="checkbox"
                          v-model="selectedGames"
                          :value="game.idGame"
                        />
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
      selectedFile: null,
      imagePreviewURL: "",
      editingGame: "",
      selectedGames: [], // mảng lưu dữ liệu game muốn xóa
    };
  },
  methods: {
    async deleteSelectedGames() {
      if (this.selectedGames.length === 0) {
        Swal.fire("Vui lòng chọn ít nhất một trò chơi để xóa.", "", "warning");
        return;
      }

      try {
        await GameService.deleteMultipleGames(this.selectedGames);

        // Loại bỏ các trò chơi đã xóa khỏi danh sách
        this.gamelist = this.gamelist.filter(
          (game) => !this.selectedGames.includes(game.idGame)
        );

        // Xóa danh sách trò chơi đã chọn
        this.selectedGames = [];

        // Cập nhật lại danh sách sau khi xóa
        await this.getAllGames();
      } catch (error) {
        console.error("Lỗi khi xóa trò chơi: ", error);
        Swal.fire("Xảy ra lỗi", "Vui lòng thử lại sau", "error");
      }
    },
    async deleteGame(id) {
      try {
        const response = await GameService.deleteGame(id);
        if (response.status === 200) {
          // Loại bỏ trò chơi khỏi danh sách sau khi xóa
          this.gamelist = this.gamelist.filter((game) => game.idGame !== id);

          // Cập nhật lại danh sách sau khi xóa
          await this.getAllGames();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Delete Success!",
            showConfirmButton: false,
            timer: 1200,
          });
        } else {
          Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Delete Error!",
            showConfirmButton: false,
            timer: 1200,
          });
        }
      } catch (error) {
        console.error("Lỗi khi xóa trò chơi: ", error);
        Swal.fire("Xảy ra lỗi", "Vui lòng thử lại sau", "error");
      }
    },

    async editGame(game) {
      this.editingGame = { ...game };
    },
    onFileChange(event) {
      const file = event.target.files[0];
      if (file) {
        this.editingGame.newImage = file;
      }
    },
    async saveChanges() {
      const game = this.editingGame;

      try {
        await GameService.editGame(game.idGame, game.newImage, game.nameGame);
        await this.getAllGames();
        this.editingGame = null;
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Edit Success!",
          showConfirmButton: false,
          timer: 1500,
        });
      } catch (error) {
        console.error("Lỗi khi chỉnh sửa trò chơi: ", error);
        Swal.fire("Xảy ra lỗi", "Vui lòng thử lại sau", "error");
      }
    },

    async createNewGame() {
      const nameGame = this.nameGame;
      const file = this.selectedFile;

      try {
        const response = await GameService.addNewGame(file, nameGame);
        if (response.status === 200) {
          await this.getAllGames();
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

    async getAllGames() {
      try {
        const response = await GameService.getAllGames();
        this.gamelist = response.data.sort((a, b) => b.idGame - a.idGame);
      } catch (error) {
        console.error("Lỗi khi lấy danh sách trò chơi: ", error);
      }
    },
    getImageFromBase64(base64Data) {
      const binaryData = atob(base64Data);
      const byteArray = new Uint8Array(binaryData.length);
      for (let i = 0; i < binaryData.length; i++) {
        byteArray[i] = binaryData.charCodeAt(i);
      }
      const blob = new Blob([byteArray], { type: "image/png" });
      return URL.createObjectURL(blob);
    },

    showImagePreview(game) {
      this.imagePreviewURL = this.getImageFromBase64(game.base64Image);
      this.ganeName = game.nameGame;
      this.showSweetAlert(game);
    },
    showSweetAlert() {
      Swal.fire({
        title: this.ganeName,
        imageUrl: this.imagePreviewURL,
        imageWidth: 400,
        imageHeight: 400,
      });
    },
  },
  async created() {
    await this.getAllGames();
  },
  computed: {
    isFormValid() {
      return this.nameGame && this.selectedFile;
    },
    isEditFormValid() {
      const game = this.editingGame;
      return game && game.nameGame && (game.newImage || !game.newImage);
    },
  },
};
</script>
