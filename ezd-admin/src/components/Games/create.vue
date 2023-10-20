<template>
  <!-- Page Sidebar Ends-->
  <div class="page-body">
    <div class="container-fluid">
      <div class="page-title">
        <div class="row">
          <div class="col-6">
            <h3>Create New Game Collections</h3>
          </div>
          <div class="col-6">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <a href="index.html">
                  <svg class="stroke-icon">
                    <use
                      href="assets/svg/icon-sprite.svg#stroke-home"
                    ></use></svg
                ></a>
              </li>
              <li class="breadcrumb-item">Game Collection</li>
              <li class="breadcrumb-item active">Create New</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
    <!-- Container-fluid starts-->
    <div class="container-fluid">
      <div class="row">
          <!-- Create new Game-->
        <div class="col-sm-12">
          <div class="card">
            <div class="card-header" @click="showCreateForm = !showCreateForm">
              <h5 style="color: rgb(17, 11, 11); font-style: italic;">Create New Game</h5>
            </div>
            <div class="card-body" v-if="showCreateForm">
              <form
                class="was-validated"
                novalidate
                enctype="multipart/form-data"
                @submit.prevent="createNewGame"
              >
                <div class="row g-3">
                  <div class="col-md-6">
                    <label class="form-label" for="nameOfGame"
                      >Name Of Game:</label
                    >
                    <input
                      class="form-control"
                      id="nameOfGame"
                      v-model="nameOfGame"
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
                      required
                    />
                    <div class="invalid-feedback">Please provide an Image.</div>
                    <div class="valid-feedback">Looks good!</div>
                  </div>
                  <div class="col-md-2">
                    <label class="form-label" for="previewImage"
                      >Preview Image:</label
                    >
                    <img
                      id="previewImage"
                      class="img-fluid"
                      v-if="imagePreviewUrl"
                      :src="imagePreviewUrl"
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
                      v-model="selectedLevelIds"
                      required
                    >
                      <option
                        v-for="level in levelList"
                        :key="level.id"
                        :value="level.id"
                      >
                        {{ level.name }}
                      </option>
                    </select>
                    <div class="invalid-feedback">
                      Please provide at least one Level.
                    </div>
                    <div class="valid-feedback">Looks good!</div>
                  </div>
                  <div class="col-md-4">
                    <label class="form-label" for="roleIds"
                      >Perfect Role:</label
                    >
                    <select
                      class="form-select"
                      multiple
                      aria-label="multiple select example"
                      v-model="selectedRoleIds"
                      required
                    >
                      <option
                        v-for="role in allRoles"
                        :key="role.id"
                        :value="role.id"
                      >
                        {{ role.name }}
                      </option>
                    </select>
                    <div class="invalid-feedback">
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
                      v-model="selectedGenderIds"
                      required
                    >
                      <option
                        v-for="gender in allGenders"
                        :key="gender.id"
                        :value="gender.id"
                      >
                        {{ gender.name }}
                      </option>
                    </select>
                    <div class="invalid-feedback">
                      Please provide at least one Gender.
                    </div>
                    <div class="valid-feedback">Looks good!</div>
                  </div>
                  <div class="col-md-2">
                    <button class="btn btn-primary" type="submit">
                      Create
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <!-- Create new Level-->
        <div class="col-sm-4">
          <div class="card">
            <div
              class="card-header"
              @click="showCreateLevelForm = !showCreateLevelForm"
            >
              <h6 style="color: aqua">Create New Level</h6>
            </div>
            <div class="card-body" v-if="showCreateLevelForm">
              <form
                class="was-validated"
                novalidate
                @submit.prevent="createNewLevelGame"
              >
                <div class="row g-3">
                  <div class="col-md-12">
                    <label class="form-label" for="nameLevel">Name:</label>
                    <input
                      class="form-control"
                      id="nameLevel"
                      v-model="nameLevel"
                      type="text"
                      required
                    />
                    <div class="invalid-feedback">
                      Please provide a Name of Game.
                    </div>
                    <div class="valid-feedback">Looks good!</div>
                  </div>
                  <div class="col-md-12">
                    <button class="btn btn-primary" type="submit">
                      Create
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        <!-- Create new Role-->
        <div class="col-sm-4">
          <div class="card">
            <div
              class="card-header"
              @click="showCreateRoleForm = !showCreateRoleForm"
            >
              <h6 style="color: rgb(18, 143, 201)">Create New Pefect Role</h6>
            </div>
            <div class="card-body" v-if="showCreateRoleForm">
              <form
                class="was-validated"
                novalidate
                enctype="multipart/form-data"
                @submit.prevent="createNewRoleGame"
              >
                <div class="row g-3">
                  <div class="col-md-12">
                    <label class="form-label" for="nameOfGame">Name:</label>
                    <input
                      class="form-control"
                      id="nameOfGame"
                      v-model="nameRole"
                      type="text"
                      required
                    />
                    <div class="invalid-feedback">
                      Please provide a Name of Role.
                    </div>
                    <div class="valid-feedback">Looks good!</div>
                  </div>
                  <div class="col-md-12">
                    <button class="btn btn-primary" type="submit">
                      Create
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <!-- Create new Gender-->
        <div class="col-sm-4">
          <div class="card">
            <div
              class="card-header"
              @click="showCreateGenderForm = !showCreateGenderForm"
            >
              <h6 style="color: rgb(201, 18, 140)">Create New Gender</h6>
            </div>
            <div class="card-body" v-if="showCreateGenderForm">
              <form
                class="was-validated"
                novalidate
                enctype="multipart/form-data"
                @submit.prevent="createNewGenderGame"
              >
                <div class="row g-3">
                  <div class="col-md-12">
                    <label class="form-label" for="nameOfGame">Name:</label>
                    <input
                      class="form-control"
                      id="nameOfGame"
                      v-model="nameGender"
                      type="text"
                      required
                    />
                    <div class="invalid-feedback">
                      Please provide a Name of Gender.
                    </div>
                    <div class="valid-feedback">Looks good!</div>
                  </div>
                  <div class="col-md-12">
                    <button class="btn btn-primary" type="submit">
                      Create
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <!-- List of Levels -->
        <div class="col-sm-4">
          <div class="card">
            <div class="card-header">
              <h6>List Levels</h6>
            </div>
            <div class="card-block row">
              <div class="col-sm-12 col-lg-12 col-xl-12">
                <div
                  class="table-responsive"
                  style="max-height: 500px; overflow-y: auto"
                >
                  <table
                    class="table max-10-rows"
                    style="min-height: 100px; padding-bottom: 100px"
                  >
                    <thead class="table-dark">
                      <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                        <th scope="col"></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="level in levelList" :key="level.id">
                        <th scope="row">{{ level.id }}</th>
                        <td>{{ level.name }}</td>
                        <td>
                          <a @click="deleteLevel(level.id)">
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



        <!-- List of Roles -->
        <div class="col-sm-4">
          <div class="card">
            <div class="card-header">
              <h6>List Roles</h6>
            </div>
            <div class="card-block row">
              <div class="col-sm-12 col-lg-12 col-xl-12">
                <div
                  class="table-responsive"
                  style="max-height: 500px; overflow-y: auto"
                >
                  <table
                    class="table max-10-rows"
                    style="min-height: 100px; padding-bottom: 100px"
                  >
                    <thead class="table-dark">
                      <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                        <th scope="col"></th>
                        
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="role in allRoles" :key="role.id">
                        <th scope="row">{{ role.id }}</th>
                        <td>{{ role.name }}</td>
                        <td>
                          <a @click="deleteRole(role.id)">
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

                <!-- List of Genders -->
                <div class="col-sm-4">
                  <div class="card">
                    <div class="card-header">
                      <h6>List Genders</h6>
                    </div>
                    <div class="card-block row">
                      <div class="col-sm-12 col-lg-12 col-xl-12">
                        <div
                          class="table-responsive"
                          style="max-height: 500px; overflow-y: auto"
                        >
                          <table
                            class="table max-10-rows"
                            style="min-height: 100px; padding-bottom: 100px"
                          >
                            <thead class="table-dark">
                              <tr>
                                <th scope="col">Id</th>
                                <th scope="col">Name</th>
                                <th scope="col"></th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr v-for="gender in allGenders" :key="gender.id">
                                <th scope="row">{{ gender.id }}</th>
                                <td>{{ gender.name }}</td>
                                <td>
                                  <a @click="deleteGender(gender.id)">
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
    </div>
    <!-- Container-fluid Ends-->
  </div>
</template>

<script>
import GameService from "@/service/GameService";

import ForGameService from "@/service/ForGameService";

import Swal from "sweetalert2";

export default {
  name: "createGame",
  data() {
    return {
      //set giá trị cho trường create là rỗng 
      nameOfGame: "",
      nameLevel: "",
      nameRole: "",
      nameGender: "",

      gameImage: null,
      imagePreviewUrl: null, // Sử dụng để hiển thị hình ảnh được chọn

      // ẩn hiển các form create
      showCreateForm: false, // Bổ sung giá trị mặc định
      showCreateLevelForm: false,
      showCreateRoleForm: false,
      showCreateGenderForm: false,

      // set giá trị cho việc create Game
      selectedLevelIds: [],
      selectedRoleIds: [],
      selectedGenderIds: [],
      levelList: [],
      allRoles: [],
      allGenders: [],
    };
  },
  methods: {
    // for Gender
    async getAllGenders() {
      try {
        const response = await ForGameService.getAllGenderGames();
        this.allGenders = response.data.sort((a, b) => b.id - a.id);

      } catch (error) {
        console.error("Error fetching genders:", error);
      }
    },
    async createNewGenderGame() {

      if (!this.nameGender.trim()) {
    // Kiểm tra xem trường "Name" có giá trị không trống
    Swal.fire({
      icon: "error",
      title: "Name is required!",
      text: "Please provide a Name of Gender.",
    });
    return; // Không làm gì nếu trường "Name" trống
  }
      try {
        // Gọi phương thức createRoleGame từ ForGameService
        const response = await ForGameService.createGenderGame(this.nameGender);
        // Xóa tên Level sau khi đã tạo thành công
        if (response.id) {
          this.nameGender = "";
          this.getAllGenders();
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
            title: "Create error!",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      } catch (error) {
        console.error("Error creating new Level:", error);
        // Xử lý lỗi nếu cần
      }
    },
    async deleteGender(genderId ) {
      try {
      
        const response= await ForGameService.deleteGenderGame(genderId);
        if (response.status ===200) {
        // Sau khi xóa thành công, cập nhật lại danh sách Level bằng cách gọi phương thức lấy danh sách
        this.getAllGenders();
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Delete Success!",
            showConfirmButton: false,
            timer: 1500,
          });
        } else {
          Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Delete error! Check Game",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      } catch (error) {
        console.error('Error deleting Level:', error);
        // Xử lý lỗi nếu cần
      }
    },

    // for Role
    async getAllRoles() {
      try {
        const response = await ForGameService.getAllRoleGames();
        this.allRoles = response.data.sort((a, b) => b.id - a.id);
      } catch (error) {
        console.error("Error fetching roles:", error);
      }
    },

    async createNewRoleGame() {
      if (!this.nameRole.trim()) {
    // Kiểm tra xem trường "Name" có giá trị không trống
    Swal.fire({
      icon: "error",
      title: "Name is required!",
      text: "Please provide a Name of Role.",
    });
    return; // Không làm gì nếu trường "Name" trống
  }
      try {
        // Gọi phương thức createRoleGame từ ForGameService
        const response = await ForGameService.createRoleGame(this.nameRole);
        // Xóa tên Level sau khi đã tạo thành công
        if (response.id) {
          this.nameRole = "";
          this.getAllRoles();
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
            title: "Create error!",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      } catch (error) {
        console.error("Error creating new Level:", error);
        // Xử lý lỗi nếu cần
      }
    },
    async deleteRole(roleId ) {

      try {
      
        const response= await ForGameService.deleteRoleGame(roleId);
        if (response.status ===200) {
        // Sau khi xóa thành công, cập nhật lại danh sách Level bằng cách gọi phương thức lấy danh sách
        this.getAllRoles();
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Delete Success!",
            showConfirmButton: false,
            timer: 1500,
          });
        } else {
          Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Delete error! Check Game",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      } catch (error) {
        console.error('Error deleting Level:', error);
        // Xử lý lỗi nếu cần
      }
    },
    // for Level
    async getAllLevels() {
      try {
        const response = await ForGameService.getAllLevelGames();
        this.levelList = response.data.sort((a, b) => b.id - a.id);
      } catch (error) {
        console.error("Error fetching levels:", error);
      }
    },
    async createNewLevelGame() {
      if (!this.nameLevel.trim()) {
    // Kiểm tra xem trường "Name" có giá trị không trống
    Swal.fire({
      icon: "error",
      title: "Name is required!",
      text: "Please provide a Name of Level.",
    });
    return; // Không làm gì nếu trường "Name" trống
  }
      try {

      
        // Gọi phương thức createLevelGame từ ForGameService
        const response = await ForGameService.createLevelGame(this.nameLevel);
        // Xóa tên Level sau khi đã tạo thành công
        if (response.id) {
          this.nameLevel = "";
          this.getAllLevels();
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
            title: "Create error!",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      } catch (error) {
        console.error("Error creating new Level:", error);
        // Xử lý lỗi nếu cần
      }
    },
    async deleteLevel(levelId ) {
      try {
      
        const response= await ForGameService.deleteLevelGame(levelId);
        if (response.status ===200) {
        // Sau khi xóa thành công, cập nhật lại danh sách Level bằng cách gọi phương thức lấy danh sách
        this.getAllLevels();
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Delete Success!",
            showConfirmButton: false,
            timer: 1500,
          });
        } else {
          Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Delete error! Check Game",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      } catch (error) {
        console.error('Error deleting Level:', error);
        // Xử lý lỗi nếu cần
      }
    },
    // click Image get File
    handleImageChange(event) {
      this.gameImage = event.target.files[0];
      // Tạo một đối tượng FileReader để đọc hình ảnh
      let reader = new FileReader();

      reader.onload = (e) => {
        this.imagePreviewUrl = e.target.result; // Cập nhật imagePreviewUrl với dữ liệu hình ảnh
      };

      // Đọc hình ảnh được chọn
      reader.readAsDataURL(this.gameImage);
    },
    async createNewGame() {
      if (
        !this.nameOfGame ||
        !this.gameImage ||
        this.selectedLevelIds.length === 0 ||
        this.selectedRoleIds.length === 0 ||
        this.selectedGenderIds.length === 0
      ) {
        Swal.fire({
          icon: "error",
          title: "Validation Error",
          text: "Please fill in all required fields.",
        });
        return;
      }

      try {
        const response = await GameService.createNewGame(
          this.nameOfGame,
          this.gameImage,
          this.selectedLevelIds,
          this.selectedRoleIds,
          this.selectedGenderIds
        );
        if (response.id) {
          this.nameOfGame = "";
          this.gameImage = null;
          this.selectedLevelIds = [];
          this.selectedRoleIds = [];
          this.selectedGenderIds = [];
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Create Success!",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      } catch (error) {
        console.error("Error creating new game:", error);
        Swal.fire({
          icon: "error",
          title: "Create Error",
          text: "An error occurred while creating the game.",
        });
      }
    },
  },
  async created() {
    await this.getAllLevels();
    await this.getAllRoles();
    await this.getAllGenders();
  },
};
</script>
