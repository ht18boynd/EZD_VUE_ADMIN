<template>
  <div class="sidebar-wrapper" data-simplebar="true">
    <div
      class="sidebar-header"
      style="
        background-image: url('assets/gif/oke1.gif');
        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;
      "
    >
      <div>
        <router-link to="/"> <h4>EZD</h4></router-link>
      </div>
      <div class="toggle-icon ms-auto"><i class="bx bx-arrow-back"></i></div>
    </div>
    <!--navigation-->
    <ul class="metismenu" id="menu">
      <li>
        <router-link to="/">
          <div class="parent-icon"><i class="bx bx-line-chart"></i></div>
          <div class="menu-title">Dashboard</div>
        </router-link>
      </li>
      <li>
        <a class="has-arrow" @click="clicknguoidung = !clicknguoidung">
          <div class="parent-icon"><i class="bx bx-user-circle"></i></div>
          <div class="menu-title">Quản Lý Người Dùng</div>
        </a>
        <ol v-if="clicknguoidung">
          <li>
            <a class="has-arrow">Quản Lý User</a>
            <ul>
              <li>
                <router-link to="/admin/user/listUser"
                  >Danh Sách User</router-link
                >
              </li>
            </ul>
          </li>
          <li>
            <a class="has-arrow">Quản Lý Idol</a>
            <ul>
              <li>
                <router-link to="/admin/user/listStaf"
                  >Danh Sách Idol</router-link
                >
              </li>
            </ul>
          </li>
        </ol>
      </li>

      <li>
        <a class="has-arrow" @click="clickhomepage = !clickhomepage">
          <div class="parent-icon"><i class="bx bx-home-alt"></i></div>
          <div class="menu-title">Quản Lý Home Page</div>
        </a>
        <ol v-if="clickhomepage">
          <li>
            <a class="has-arrow">Danh Mục Game</a>
            <ul>
              <li>
                <router-link to="/admin/game">Danh Sách Game</router-link>
              </li>
              <li>
                <router-link to="/admin/game/create">Tạo Mới Game</router-link>
              </li>
            </ul>
          </li>
          <li>
            <a class="has-arrow">Danh Mục Item</a>
            <ul>
              <li>
                <router-link to="/admin/item">Danh Sách Item</router-link>
              </li>
              <li>
                <router-link to="/admin/item/create">Tạo Mới Item</router-link>
              </li>
            </ul>
          </li>
          <li>
            <a class="has-arrow">Danh Mục Rank</a>
            <ul>
              <li>
                <router-link to="/admin/rank">Danh Sách Rank</router-link>
              </li>
              <li>
                <router-link to="/admin/rank/create">Tạo Mới Rank</router-link>
              </li>
            </ul>
          </li>
          <li>
            <a class="has-arrow">Danh Mục Banner</a>
            <ul>
              <li>
                <router-link to="/admin/banner">Danh Sách Banner</router-link>
              </li>
              <li>
                <router-link to="/admin/banner/create"
                  >Tạo Mới Banner</router-link
                >
              </li>
            </ul>
          </li>
          <li>
            <a class="has-arrow">Danh Mục Blog</a>
            <ul>
              <li>
                <router-link to="/admin/blog">Danh Sách Blog</router-link>
              </li>
              <li>
                <router-link to="/admin/blog/create">Tạo Mới Blog</router-link>
              </li>
            </ul>
          </li>
          <li>
            <a class="has-arrow">Danh mục FAQ</a>
            <ul>
              <li>
                <router-link to="/admin/quiz">Danh Sách FAQ</router-link>
              </li>
              <li>
                <router-link to="/admin/quiz/create">Tạo Mới FAQ</router-link>
              </li>
            </ul>
          </li>
        </ol>
      </li>
      <li>
        <a
          class="nav-link dropdown-toggle dropdown-toggle-nocaret position-relative"
          @click="clickDon = !clickDon"
        >
          <div class="parent-icon">
            <span class="alert-count">10</span>
            <i class="bx bx-bell" style="color: red"></i>
          </div>
          <div class="menu-title">Quản Lý Đơn</div>
        </a>
        <ol v-if="clickDon">
          <li>
            <a class="has-arrow" @click="DangKyIdol = !DangKyIdol"
              >Đăng Ký Idol</a
            >
            <ul v-if="DangKyIdol">
              <li>
                <router-link to="/admin/become">Danh Sách Chờ</router-link>
              </li>
              <li>
                <router-link to="/admin/become/success"
                  >Danh Sách Chấp Nhận</router-link
                >
              </li>
              <li>
                <router-link to="/admin/become/failed"
                  >Danh Sách Từ Chối</router-link
                >
              </li>
            </ul>
          </li>
          <li>
            <a class="has-arrow" @click="DangKySanPham = !DangKySanPham"
              >Đăng Ký Sản Phẩm</a
            >
            <ul v-if="DangKySanPham">
              <li>
                <router-link to="#">Danh Sách Đơn Chờ</router-link>
              </li>
              <li>
                <router-link to="#">Danh Sách Từ Chối</router-link>
              </li>
              <li>
                <router-link to="#">Danh Sách Chấp Nhận</router-link>
              </li>
            </ul>
          </li>
          <li>
            <a class="has-arrow" @click="DanhSachNap = !DanhSachNap"
              >Danh Sách Nạp Coin</a
            >
            <ul v-if="DanhSachNap">
              <li>
                <router-link to="/admin/transaction"
                  >Danh Sách Đơn Chờ</router-link
                >
              </li>
              <li>
                <router-link to="/admin/transaction/success"
                  >Danh Sách Chấp Nhận
                </router-link>
              </li>
              <li>
                <router-link to="/admin/transaction/failed"
                  >Danh Sách Từ Chối
                </router-link>
              </li>
            </ul>
          </li>
          <li>
            <a class="has-arrow" @click="DanhSachLucky = !DanhSachLucky"
              >Danh Sách Lucky Spin</a
            >
            <ul v-if="DanhSachLucky">
              <li>
                <router-link to="/admin/user/listLucky">Danh Sách</router-link>
              </li>
            </ul>
          </li>
        </ol>
      </li>
    </ul>
    <!--end navigation-->
  </div>
  <!--end sidebar wrapper -->
</template>

<script>
import { userInfo } from "@/store";

export default {
  name: "slibarWrapper",
  data() {
    return {
      BASE_URL: process.env.BASE_URL,
      role: userInfo.value,
      clicknguoidung: false,
      clickhomepage: false,
      clickDon: false,
      DangKyIdol: false,
      DangKySanPham: false,
      DanhSachNap: false,
      DanhSachLucky: false,
    };
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@1,900&display=swap"); /* Chọn tất cả các phần tử "menu-title" */
li .menu-title {
  font-family: "Times New Roman Bold";
  font-weight: 500;
  font-size: 16px; /* Cỡ chữ */
  transition: color 0.2s; /* Hiệu ứng màu khi di chuột qua */
  color: rgb(251, 146, 60);
}
ul li a {
  font-family: "Times New Roman Bold";
  font-size: 14px;
  color: rgb(74, 201, 169);
}
</style>
