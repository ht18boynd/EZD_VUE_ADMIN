<template>
  <!-- Page Sidebar Ends-->
  <div class="page-body" style="background-image: url(assets/gif/bg1.gif)">
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
            <!--Edit Game-->
            <div class="col-sm-12">
              <div class="card">
                <div class="card-header" @click="showEditForm = !showEditForm">
                  <h6 style="color: rgb(117, 22, 22); font-style: italic">
                    Edit Game :
                  </h6>
                </div>
                <div class="card-body" v-if="showEditForm ">
                  <form
                  v-if="showEditForm"
                  class="was-validated"
                  novalidate
                  enctype="multipart/form-data"
                  @submit.prevent="saveEditedGame"
                >
                  <div class="row g-3">
                    <div class="col-md-6">
                      <label class="form-label" for="nameOfGame">Name Of Game:</label>
                      <input
                        class="form-control"
                        id="nameOfGame"
                        v-model="editingGame.nameGame"
                        type="text"
                        required
                      />
                      <div class="invalid-feedback">
                        Please provide a Name of Game.
                      </div>
                      <div class="valid-feedback">Looks good!</div>
                    </div>
                    <div class="col-md-4">
                      <label class="form-label" for="gameImage">Image:</label>
                      <input
                        class="form-control"
                        id="gameImage"
                        type="file"
                        @change="handleImageChange"
                      />
                      <div class="invalid-feedback" v-if="!editingGame.imageName">
                        Please provide an Image.
                      </div>
                      <div class="valid-feedback" v-else>Looks good!</div>
                    </div>
                    <div class="col-md-2">
                      <label class="form-label" for="previewImage">Preview Image:</label>
                      <img
                        id="previewImage"
                        class="img-fluid"
                        :src="editingGame.imageName"
                        alt="Preview"
                      />
                    </div>
                  </div>
                  <div class="row g-3">
                    <div class="col-md-4">
                      <label class="form-label" for="levelIds">Level:</label>
                      <select
                        class="form-select"
                        multiple
                        aria-label="multiple select example"
                        v-model="editingGame.levels"
                        required
                      >
                        <option v-for="level in levelList" :key="level.id" :value="level.id">
                          {{ level.name }}
                        </option>
                      </select>
                      <div class="invalid-feedback" v-if="editingGame.levels.length === 0">
                        Please provide at least one Level.
                      </div>
                      <div class="valid-feedback">Looks good!</div>
                    </div>
                    <div class="col-md-4">
                      <label class="form-label" for="roleIds">Perfect Role:</label>
                      <select
                        class="form-select"
                        multiple
                        aria-label="multiple select example"
                        v-model="editingGame.roles"
                        required
                      >
                        <option v-for="role in allRoles" :key="role.id" :value="role.id">
                          {{ role.name }}
                        </option>
                      </select>
                      <div class="invalid-feedback" v-if="editingGame.roles.length === 0">
                        Please provide at least one Perfect Role.
                      </div>
                      <div class="valid-feedback">Looks good!</div>
                    </div>
                    <div class="col-md-4">
                      <label class="form-label" for="genderIds">Gender:</label>
                      <select
                        class="form-select"
                        multiple
                        aria-label="multiple select example"
                        v-model="editingGame.genders"
                        required
                      >
                        <option v-for="gender in allGenders" :key="gender.id" :value="gender.id">
                          {{ gender.name }}
                        </option>
                      </select>
                      <div class="invalid-feedback" v-if="editingGame.genders.length === 0">
                        Please provide at least one Gender.
                      </div>
                      <div class="valid-feedback">Looks good!</div>
                    </div>
                    <div class="col-md-2">
                      <button class="btn btn-primary" type="submit">Save</button>
                    </div>
                  </div>
                </form>
                
                </div>
              </div>
            </div>
          </div>

          <div class="col-sm-12">
            <div class="card" style="background-image: url(assets/gif/bg1.gif)">
              <div class="card-header">
                <h3>List Game</h3>
              </div>
              <div class="table-responsive">
                <table class="table table-dashed">
                  <thead>
                    <tr class="border-bottom-primary">
                      <th scope="col" align="center">Id</th>
                      <th scope="col" align="center">Name</th>
                      <th scope="col" align="center">Image</th>
                      <th scope="col-2" align="center">Level</th>
                      <th scope="col" align="center">Perfect Role</th>
                      <th scope="col" align="center">Gender</th>
                      <th scope="col"></th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr
                      class="border-bottom-secondary"
                      v-for="game in gamelist"
                      :key="game.id"
                    >
                      <th scope="row">
                        {{ game.id }}
                      </th>
                      <td>
                        {{ game.nameGame }}
                      </td>
                      <td>
                        <img
                          class="img-100 rounded-circle"
                          :src="game.imageName"
                          :alt="game.nameGame"
                          @click="showImage(game.nameGame, game.imageName)"
                          width="100%"
                        />
                      </td>
                      <td>
                        <ul v-if="game.levels.length > 0">
                          <li
                            v-for="(level, index) in game.levels"
                            :key="level.id"
                          >
                            <span
                              v-if="showAllLevel || index < initialItemsToShow"
                              >{{ level.name }}</span
                            >
                          </li>
                        </ul>
                        <span v-else>null</span>
                        <a
                          v-if="
                            !showAllLevel &&
                            game.levels.length > initialItemsToShow
                          "
                          @click="showAllLevel = true"
                          >...</a
                        >
                      </td>

                      <td>
                        <ul v-if="game.roles.length > 0">
                          <li
                            v-for="(role, index) in game.roles"
                            :key="role.id"
                          >
                            <span
                              v-if="showAllRole || index < initialItemsToShow"
                              >{{ role.name }}</span
                            >
                          </li>
                        </ul>
                        <span v-else>null</span>
                        <a
                          v-if="
                            !showAllRole &&
                            game.roles.length > initialItemsToShow
                          "
                          @click="showAllRole = true"
                          >...</a
                        >
                      </td>

                      <td>
                        <ul v-if="game.genders.length > 0">
                          <li
                            v-for="(gender, index) in game.genders"
                            :key="gender.id"
                          >
                            <span
                              v-if="showAllGender || index < initialItemsToShow"
                              >{{ gender.name }}</span
                            >
                          </li>
                        </ul>
                        <span v-else>null</span>
                        <a
                          v-if="
                            !showAllGender &&
                            game.genders.length > initialItemsToShow
                          "
                          @click="showAllGender = true"
                          >...</a
                        >
                      </td>

                      <td>
                        <a @click="startEditingGame(game.id)">
                          <!-- Sử dụng sự kiện @click -->
                          <i class="icon-pencil-alt"></i>
                        </a>

                        <a @click="deleteGame(game.id)">
                          <i class="icon-trash"></i>
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
import ForGameService from "@/service/ForGameService";

export default {
  name: "gameCollector",
  data() {
    return {
      showEditForm: false,


      showAllLevel: false,
      showAllRole: false,
      showAllGender: false, // Theo dõi xem có hiển thị tất cả giá trị hay không
      initialItemsToShow: 3, // Số lượng giá trị hiển thị ban đầu

      //editing
      editingGame: {
        nameGame: '',
        imageName: '',
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

    async startEditingGame() {
  try {
    if (this.gamelist) {
      // Đảm bảo rằng gamelist đã được tải
      const game = this.gamelist.find((game) => game.id == this.id);
      if (game) {
        this.game = game;
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
};
</script>
