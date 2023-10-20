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
        <div class="col-sm-12">
          <div class="card">
            <div class="card-header">
              <h5>Create New Game</h5>
            </div>
            <div class="card-body">
              <form
              class="was-validated"
              novalidate
              enctype="multipart/form-data"
              @submit.prevent="createNewGame"
            >
              <div class="row g-3">
                <div class="col-md-6">
                  <label class="form-label" for="nameOfGame">Name Of Game:</label>
                  <input
                    class="form-control"
                    id="nameOfGame"
                    v-model="nameOfGame"
                    type="text"
                    required
                  />
                  <div class="invalid-feedback">Please provide a Name of Game.</div>
                  <div class="valid-feedback">Looks good!</div>
                </div>
                <div class="col-md-6">
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
              </div>
              <div class="row g-3">
                <div class="col-md-4">
                  <label class="form-label" for="levelIds">Level:</label>
                  <select
                  class="form-select"
                 
                    multiple aria-label="multiple select example"
                   
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
                  <div class="invalid-feedback">Please provide at least one Level.</div>
                  <div class="valid-feedback">Looks good!</div>
                </div>
                <div class="col-md-4">
                  <label class="form-label" for="roleIds">Perfect Role:</label>
                  <select
                  class="form-select"
                 
                  multiple aria-label="multiple select example"
                 
                    v-model="selectedRoleIds"
                    required
                  >
                   
                      <option v-for="role in allRoles" :key="role.id" :value="role.id">
                        {{ role.name }}
                      </option>
                  
                  </select>
                  <div class="invalid-feedback">Please provide at least one Perfect Role.</div>
                  <div class="valid-feedback">Looks good!</div>
                </div>
                <div class="col-md-4">
                  <label class="form-label" for="genderIds">Gender:</label>
                  
                  <select
                  class="form-select"
                  
                  multiple aria-label="multiple select example"                
                    v-model="selectedGenderIds"
                    required>
               
                  
                      <option
                        v-for="gender in allGenders"
                        :key="gender.id"
                        :value="gender.id"
                      >
                        {{ gender.name }}
                      </option>
                 
                  </select>
                  <div class="invalid-feedback">Please provide at least one Gender.</div>
                  <div class="valid-feedback">Looks good!</div>
                </div>
                <div class="col-md-2">
                  <button class="btn btn-primary" type="submit">Create</button>
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
                <div class="table-responsive">
                  <table class="table max-10-rows">
                    <thead class="table-dark">
                      <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="level in levelList" :key="level.id">
                        <th scope="row">{{ level.id }}</th>
                        <td>{{ level.name }}</td>
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
                <div class="table-responsive">
                  <table class="table max-10-rows">
                    <thead class="table-dark">
                      <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="gender in allGenders" :key="gender.id">
                        <th scope="row">{{ gender.id }}</th>
                        <td>{{ gender.name }}</td>
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
                <div class="table-responsive">
                  <table class="table">
                    <thead class="table-dark">
                      <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="role in allRoles" :key="role.id">
                        <th scope="row">{{ role.id }}</th>
                        <td>{{ role.name }}</td>
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
      nameOfGame: "",
      gameImage: null,
      selectedLevelIds: [],
      selectedRoleIds: [],
      selectedGenderIds: [],
      levelList: [],
      allRoles: [],
      allGenders: [],
    };
  },
  methods: {
    handleImageChange(event) {
      this.gameImage = event.target.files[0];
    },
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
        this.allRoles = response.data;
      } catch (error) {
        console.error("Error fetching roles:", error);
      }
    },
    async getAllGenders() {
      try {
        const response = await ForGameService.getAllGenderGames();
        this.allGenders = response.data;
      } catch (error) {
        console.error("Error fetching genders:", error);
      }
    },
    async createNewGame() {
  if (!this.nameOfGame || !this.gameImage || this.selectedLevelIds.length === 0 || this.selectedRoleIds.length === 0 || this.selectedGenderIds.length === 0) {
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
}

  },
  async created() {
    await this.getAllLevels();
    await this.getAllRoles();
    await this.getAllGenders();
  },
};
</script>