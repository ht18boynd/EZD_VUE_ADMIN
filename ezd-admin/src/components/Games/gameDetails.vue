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
  <H6 style="color: rgb(18, 143, 201); border-bottom: 2px solid rgb(18, 143, 201;">
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
  <H6 style="color: rgb(201, 18, 140); border-bottom: 2px solid rgb(201, 18, 140;">
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
  <H6 style="color: rgb(9, 172, 123); border-bottom: 2px solid rgb(9, 172, 123;">
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
                  <a href="#" class="btn btn-primary">Sửa Thông Tin</a>
                  <a @click="deleteGame(game.id)"  class="btn btn-primary">
                    Xóa Game
                  </a>
                </div>
              </div>
            </div>
          </div>
          <hr />
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
      game: {}, // Để lưu trữ thông tin chi tiết của trò chơi
    };
  },
  created() {
    // Gọi phương thức để lấy thông tin game dựa vào id
    this.getGameDetails(this.id);
  },
  methods: {
    async deleteGame(id) {
  try {
    const result = await Swal.fire({
      title: 'Xác nhận xóa',
      text: 'Bạn có chắc muốn xóa game này?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Xóa',
      cancelButtonText: 'Hủy',
    });

    if (result.isConfirmed) {
      // Nếu người dùng xác nhận xóa
      await GameService.deleteGame(id);
      await Swal.fire({
        icon: 'success',
        title: 'Xóa thành công',
        text: 'Game đã được xóa thành công!',
      });

      // Sau khi xóa thành công, chuyển về trang /game
      this.$router.push('/game');
    } else if (result.dismiss === Swal.DismissReason.cancel) {
      // Nếu người dùng từ chối xóa
      await Swal.fire({
        icon: 'info',
        title: 'Hủy thao tác',
        text: 'Bạn đã hủy thao tác xóa game.',
      });
    }
  } catch (error) {
    console.error('Lỗi khi xóa game:', error);
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
};
</script>
