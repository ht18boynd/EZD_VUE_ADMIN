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
          <div class="breadcrumb-title pe-3">Item</div>
          <div class="ps-3">
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb mb-0 p-0">
                <li class="breadcrumb-item">
                  <a href="javascript:;"><i class="bx bx-home-alt"></i></a>
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                  List Items
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
                      href="/admin/item/create"
                      class="btn btn-primary mb-3 mb-lg-0"
                      ><i class="bx bxs-plus-square"></i>Tạo item mới</a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div v-if="isEditDialogOpen" ref="editForm" class="card">
          <div class="card-body p-4">
            <h5 class="card-title">Chỉnh sửa item mới</h5>
            <hr />
            <div class="form-body mt-4">
              <form @submit.prevent="updateItem">
                <div class="row">
                  <div class="border border-3 p-4 rounded">
                    <div class="col-lg-12">
                      <div class="mb-3">
                        <div class="row g-3">
                          <div class="col-md-5">
                            <label for="itemName" class="form-label"
                              >Tên Xếp Hạng</label
                            >
                            <input
                              type="text"
                              v-bind="listItems.name"
                              v-model="editItemData.name"
                              id="itemName"
                              class="form-control"
                              placeholder="Enter product title"
                            />
                          </div>
                          <div class="col-md-7">
                            <label for="imageUrl" class="form-label"
                              >Hình ảnh Icon</label
                            >
                            <input
                              id="imageUrl"
                              @change="handleImageUpload('imageUrl')"
                              type="file"
                              accept=".jpg, .png, image/jpeg, image/png"
                              multiple
                            />
                          </div>
                        </div>
                        <br />
                        <div class="mb-3">
                          <div class="row g-3">
                            <div class="col-md-5">
                              <label for="priceImage" class="form-label"
                                >Giá tiền của Item</label
                              >
                              <input
                                type="text"
                                v-bind="listItems.price"
                                v-model="editItemData.price"
                                id="priceImage"
                                class="form-control"
                                placeholder="Enter product title"
                              />
                            </div>
                            <div class="col-md-7">
                              <label for="imageReview" class="form-label"
                                >Hiển thị hình ảnh</label
                              >
                              <img
                                id="imageReview"
                                v-if="editItemData.imageUrl"
                                :src="imageReview"
                                class="img-fluid"
                                alt="Preview"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <br />
                <button type="submit" class="btn btn-primary">Cập nhật</button>
              </form>
            </div>
          </div>
        </div>

        <h6 class="mb-0 text-uppercase">Danh sách Item đã tạo</h6>
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
                        <th>Tên item</th>
                        <th>Số tiền</th>
                        <th>Image</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="item in listItems" :key="item.id">
                        <td>{{ item.name }}</td>
                        <td>{{ item.price }}</td>
                        <td><img :src="item.imageUrl" /></td>
                        <td>
                          <div class="row row-cols-auto g-3">
                            <div class="col">
                              <button
                                type="button"
                                class="btn btn-outline-success"
                                @click="openEditItem(item.id)"
                              >
                                <i class="lni lni-pencil me-0"></i>
                              </button>
                            </div>
                            <div class="col">
                              <button
                                type="button"
                                class="btn btn-outline-danger"
                                @click="deleteItem(item.id)"
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

import ItemService from "@/service/ItemService";

export default {
  name: "ListItem",
  components: {
    switcher,
    searchModal,
    slibarWrapper,
    startHeaderVue,
  },
  data() {
    return {
      isEditDialogOpen: false,
      listItems: [],
      editItemData: {
        id: null,
        name: "",
        imageUrl: null,
        price: 0.0,
      },
      imageReview: null,
      isLoading: false,
    };
  },
  methods: {
    openEditItem(item) {
      this.getItemById(item);
      this.isEditDialogOpen = true;
      this.editItemData = { ...item };
      this.scrollToEditForm();
    },
    scrollToEditForm() {
      this.$nextTick(() => {
        this.$refs.editForm.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });
    },
    closeDialog() {
      this.isEditDialogOpen = false;
      this.editItemData = {
        id: null,
        name: "",
        imageUrl: null,
        price: 0,
      };
      this.imageReview = null;
    },

    async getItemById(id) {
      try {
        const response = await ItemService.getItemById(id);
        this.editItemData = { ...response.data };
      } catch (error) {
        console.error("Error getting item by ID:", error);
      }
    },
    async getItems() {
      try {
        const response = await ItemService.getItem();
        const data = response.data;

        this.listItems = data;
      } catch (error) {
        console.error("Lỗi khi lấy danh sách trò chơi: ", error);
      }
    },
    async updateItem() {
      try {
        this.isLoading = true;
        const itemDatas = new FormData();
        itemDatas.append("name", this.editItemData.name);
        itemDatas.append("price", this.editItemData.price);
        itemDatas.append("imageFile", this.editItemData.imageUrl);

        await ItemService.updateItem(this.editItemData.id, itemDatas);
        this.closeDialog();

        this.getItems();
        this.$router.push("/admin/item");
      } catch (error) {
        console.error("Lỗi khi cập nhật item: ", error);
      } finally {
        this.isLoading = false;
      }
    },
    handleImageUpload(type) {
      const input = event.target;
      const file = input.files[0];

      if (file) {
        // Check which type of image is being uploaded and update the corresponding property
        if (type === "imageUrl") {
          this.editItemData.imageUrl = file;
          this.imageReview = URL.createObjectURL(file);
        }
      }
    },

    async deleteItem(id) {
      try {
        await ItemService.deleteItem(id);
        // Refresh the list after deletion
        this.getItems();
      } catch (error) {
        console.error("Lỗi khi xóa item: ", error);
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
    this.getItems();
  },
};
</script>
<style></style>
