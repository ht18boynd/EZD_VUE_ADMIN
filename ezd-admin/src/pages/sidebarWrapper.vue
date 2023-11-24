<template>
  <div class="sidebar-wrapper">
    <router-link to="/">
      <div
        class="sidebar-header"
        :style="{
          'background-image': 'url(' + BASE_URL + 'assets/gif/ezGame.gif)',
          'background-size': 'cover',
          'background-position': ' center',
          'background-repeat': 'no-repeat',
        }"
      ></div>
      <br />
    </router-link>
    <!--navigation-->
    <ul class="metismenu" id="menu">
      <!-- Dashboard -->

      <li>
        <router-link to="/">
          <div class="parent-icon"><i class="bx bx-line-chart"></i></div>
          <div class="menu-title">Dashboard</div>
        </router-link>
      </li>

      <!-- Quản Lý Người Dùng -->
      <li>
        <a class="has-arrow" @click="clicknguoidung = !clicknguoidung">
          <div class="parent-icon"><i class="bx bx-user-circle"></i></div>
          <div class="menu-title">Quản Lý Người Dùng</div>
        </a>
        <ol v-if="clicknguoidung">
          <li>
            <a class="has-arrow">Quản Lý User</a>
            <ul>
        <a class="has-arrow" @click="toggleCategory('nguoidung')">
          <div class="parent-icon"><i class="bx bx-user-circle"></i></div>
          <div class="menu-title">Quản Lý Người Dùng</div>
        </a>
        <ol v-if="categories.nguoidung.visible">
          <li>
            <a class="has-arrow" @click="toggleSubCategory('user')">
              <div class="menu-title">Quản Lý User</div>
            </a>
            <ul v-if="subCategories.user.visible">
              <li>
                <router-link to="/admin/user/listUser" @click.prevent>
                  Danh Sách User</router-link >
              </li>
            </ul>
          </li>
          <li>
            <a class="has-arrow">Quản Lý Idol</a>
            <ul>
            <a class="has-arrow" @click="toggleSubCategory('idol')">
              <div class="menu-title">Quản Lý Idol</div>
            </a>
            <ul v-if="subCategories.idol.visible">
              <li>
                <router-link to="/admin/user/listStaf">Danh Sách Idol</router-link>
              </li>
            </ul>
          </li>
        </ol>
      </li>

      <!-- Quản Lý Home Page -->
      <li>
        <a class="has-arrow" @click="clickhomepage = !clickhomepage">
        <a class="has-arrow" @click="toggleCategory('homepage')">
          <div class="parent-icon"><i class="bx bx-home-alt"></i></div>
          <div class="menu-title">Quản Lý Home Page</div>
        </a>
        <ol v-if="categories.homepage.visible">
          <li>
            <a class="has-arrow">Danh Mục Game</a>
            <ul>
            <a class="has-arrow" @click="toggleSubCategory('game')">
              <div class="menu-title">Danh Mục Game</div>
            </a>
            <ul v-if="subCategories.game.visible">
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
            <a class="has-arrow" @click="toggleSubCategory('banner')">
              <div class="menu-title">Danh Mục Banner</div>
            </a>
            <ul v-if="subCategories.banner.visible">
              <li>
                <router-link to="/admin/banner">Danh Sách Banner</router-link>
              </li>
              <li>
                <router-link to="/admin/banner/create">Tạo Mới Banner</router-link>
              </li>
            </ul>
          </li>
          <li>
            <a class="has-arrow" @click="toggleSubCategory('blog')">
              <div class="menu-title">Danh Mục Blog</div>
            </a>
            <ul v-if="subCategories.blog.visible">
              <li>
                <router-link to="/admin/blog">Danh Sách Blog</router-link>
              </li>
              <li>
                <router-link to="/admin/blog/create">Tạo Mới Blog</router-link>
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

            <a class="has-arrow" 
              >Danh mục FAQ</a
            >
           

            <a class="has-arrow" @click="toggleSubCategory('faq')">
              <div class="menu-title">Danh Mục FAQ</div>
            </a>
            <ul v-if="subCategories.faq.visible">

              <li>
                <router-link to="/admin/quiz">Danh Sách FAQ</router-link>
              </li>
              <li>
                <router-link to="/admin/quiz/create">Tạo Mới FAQ</router-link>
              </li>
            </ul>
          </li>
          <li>
            <a class="has-arrow">Danh mục FAQ</a>
            <ul>
              <li>
                <router-link to="/admin/quiz">Danh Sách FAQ</router-link>
            <a class="has-arrow" 
              >Danh mục Contact</a
            >
            <ul>
              <li>
                <router-link to="/admin/contact"
                  >Danh Sách Contact</router-link
                >
              </li>
              
            </ul>
          </li>
           <li>
            <a class="has-arrow" 
              >Danh mục Feedback</a
            >
            <ul>
              <li>
                <router-link to="/admin/quiz/create">Tạo Mới FAQ</router-link>
                <router-link to="/admin/feedback"
                  >Danh Sách Feedback</router-link
                >
              </li>
              
            </ul>
          </li>
        </ol>
      </li>

      <!-- Quản Lý Đơn -->
      <li>
        <a
          class="nav-link dropdown-toggle dropdown-toggle-nocaret position-relative"
          @click="clickDon = !clickDon"
        >
        <a class="nav-link dropdown-toggle dropdown-toggle-nocaret position-relative" @click="toggleCategory('don')">
          <div class="parent-icon">
            <span class="alert-count">10</span>
            <i class="bx bx-bell" style="color: red"></i>
          </div>
          <div class="menu-title">Quản Lý Đơn</div>
        </a>
        <ol v-if="categories.don.visible">
          <li>
            <a class="has-arrow" @click="DangKyIdol = !DangKyIdol"
              >Đăng Ký Idol</a
            >
            <ul v-if="DangKyIdol">
            <a class="has-arrow" @click="toggleSubCategory('dangkyidol')">Đăng Ký Idol</a>
            <ul v-if="subCategories.dangkyidol.visible">
              <li>
                <router-link to="/admin/become">Danh Sách Chờ</router-link>
              </li>
              <li>
                <router-link to="/admin/become/success">Danh Sách Chấp Nhận</router-link>
              </li>
              <li>
                <router-link to="/admin/become/failed">Danh Sách Từ Chối</router-link>
              </li>
            </ul>
          </li>
          <li>
            <a class="has-arrow" @click="DangKySanPham = !DangKySanPham"
              >Đăng Ký Sản Phẩm</a
            >
            <ul v-if="DangKySanPham">
            <a class="has-arrow" @click="toggleSubCategory('dangkysanpham')">Đăng Ký Sản Phẩm</a>
            <ul v-if="subCategories.dangkysanpham.visible">
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
            <a class="has-arrow" @click="toggleSubCategory('danhsachnap')">Danh Sách Nạp Coin</a>
            <ul v-if="subCategories.danhsachnap.visible">
              <li>
                <router-link to="/admin/transaction">Danh Sách Đơn Chờ</router-link>
              </li>
              <li>
                <router-link to="/admin/transaction/success">Danh Sách Chấp Nhận</router-link>
              </li>
              <li>
                <router-link to="/admin/transaction/failed">Danh Sách Từ Chối</router-link>
              </li>
            </ul>
          </li>
          <li>
            <a class="has-arrow" @click="DanhSachLucky = !DanhSachLucky"
              >Danh Sách Lucky Spin</a
            >
            <ul v-if="DanhSachLucky">
            <a class="has-arrow" @click="toggleSubCategory('danhsachlucky')">Danh Sách Lucky Spin</a>
            <ul v-if="subCategories.danhsachlucky.visible">
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
  name:"slideBar",
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
       BASE_URL: process.env.BASE_URL,

      categories: {
        nguoidung: { visible: false },
        homepage: { visible: false },
        don: { visible: false },
      },
      subCategories: {
        user: { visible: false },
        idol: { visible: false },
        game: { visible: false },
        banner: { visible: false },
        blog: { visible: false },
        faq: { visible: false },
        dangkyidol: { visible: false },
        dangkysanpham: { visible: false },
        danhsachnap: { visible: false },
        danhsachlucky: { visible: false },
      },
    };
  },
  methods: {
    toggleCategory(category) {
      this.categories[category].visible = !this.categories[category].visible;
    },
    toggleSubCategory(subCategory) {
      this.subCategories[subCategory].visible = !this.subCategories[subCategory].visible;
    },
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
