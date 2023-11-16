<template>
  <!--sidebar wrapper -->
  <div class="sidebar-wrapper" data-simplebar="true">
    <div class="sidebar-header">
      <div>
        <img
          :src="BASE_URL + 'assets/images/logo-icon.png'"
          class="logo-icon"
          alt="logo icon"
        />
      </div>
      <div>
        <router-link to="/"><h4 class="logo-text">EZD Game</h4></router-link>
      </div>
      <div class="toggle-icon ms-auto"><i class="bx bx-arrow-back"></i></div>
    </div>
    <!--navigation-->
    <ul class="metismenu" id="menu">
      <li v-if="showAdminBoard" >
        <a href="#" class="has-arrow">
          <div class="parent-icon"><i class="bx bx-home-alt"></i></div>
          <div class="menu-title">Dashboard</div>
        </a>
        <ul>
          <li>
            <a href="index.html"><i class="bx bx-radio-circle"></i>Default</a>
          </li>
          <li>
            <a href="index2.html"
              ><i class="bx bx-radio-circle"></i>Alternate</a
            >
          </li>
          <li>
            <a href="index3.html"
              ><i class="bx bx-radio-circle"></i>Graphical</a
            >
          </li>
        </ul>
      </li>

      <li class="menu-label">ADMIN MANAGEMENT</li>

      <li>
        <a v-if="!showModeratorBoard" href="javascript:;" class="has-arrow">
          <div class="parent-icon"><i class="bx bx-cart"></i></div>
          <div class="menu-title">Quản Lý Trò Chơi</div>
        </a>
        <ul>
          <li>
            <router-link to="/admin/game"
              ><i class="bx bx-radio-circle"></i>Danh Sách</router-link
            >
          </li>

          <li>
            <router-link to="/admin/game/create"
              ><i class="bx bx-radio-circle"></i>Tạo Mới</router-link
            >
          </li>
        </ul>
      </li>

      <li>
        <a class="has-arrow" href="javascript:;">
          <div class="parent-icon"><i class="bx bx-menu"></i></div>
          <div class="menu-title">Quản Lý Home Page</div>
        </a>
        <ul>
          <li>
            <a class="has-arrow" href="javascript:;"
              ><i class="bx bx-radio-circle"></i>Quản Lý Banner</a
            >
            <ul>
              <li>
                <router-link to="/admin/banner"
                  ><i class="bx bx-radio-circle"></i>Danh Sách
                  Banner</router-link
                >
              </li>
              <li>
                <router-link to="/admin/banner/create"
                  ><i class="bx bx-radio-circle"></i>Tạo Mới Banner</router-link
                >
              </li>
            </ul>
          </li>
          <li>
            <a class="has-arrow" href="javascript:;"
              ><i class="bx bx-radio-circle"></i>Blog</a
            >
            <ul>
              <li>
                <router-link to="/admin/blog"
                  ><i class="bx bx-radio-circle"></i>List Blog</router-link
                >
              </li>
              <li>
                <router-link to="/admin/blog/create"
                  ><i class="bx bx-radio-circle"></i>Create Blog</router-link
                >
              </li>
            </ul>
          </li>
        </ul>
      </li>

      <!--Manager Rank Start-->
      <li>
        <a href="javascript:;" class="has-arrow">
          <div class="parent-icon"><i class="lni lni-cup"></i></div>
          <div class="menu-title text-primary">Quản Lý Rank</div>
        </a>
        <ul>
          <li>
            <a href="/admin/rank"
              ><i class="bx bx-radio-circle"></i>Danh Sách</a
            >
          </li>

          <li>
            <a href="/admin/rank/create"
              ><i class="bx bx-radio-circle"></i>Tạo Mới</a
            >
          </li>
        </ul>
      </li>
      <!--Manager Rank End-->

      <!--Manager Item Start-->
      <li>
        <a href="javascript:;" class="has-arrow">
          <div class="parent-icon"><i class="bx bx-cart"></i></div>
          <div class="menu-title">Quản Lý Item</div>
        </a>
        <ul>
          <li>
            <a href="/admin/item"
              ><i class="bx bx-radio-circle"></i>Danh Sách</a
            >
          </li>

          <li>
            <a href="/admin/item/create"
              ><i class="bx bx-radio-circle"></i>Tạo Mới</a
            >
          </li>
        </ul>
      </li>
      <!--Manager Item End-->

      <!--Manager Calendar Start-->
      <li>
        <a href="javascript:;" class="has-arrow">
          <div class="parent-icon"><i class="bx bx-cart"></i></div>
          <div class="menu-title">Quản lý thời gian</div>
        </a>
        <ul>
          <li>
            <a href="/admin/calendar"
              ><i class="bx bx-radio-circle"></i>All</a
            >
          </li>
        </ul>
      </li>
      <!--Manager Calendar End-->

      <li>
        <a href="widgets.html">
          <div class="parent-icon"><i class="bx bx-cookie"></i></div>
          <div class="menu-title">Widgets</div>
        </a>
      </li>
    </ul>
    <!--end navigation-->
  </div>
  <!--end sidebar wrapper -->
</template>

<script>
export default {
  name: "slibarWrapper",
  data() {
    return {
      BASE_URL: process.env.BASE_URL,
    };
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
};
</script>

<style></style>
