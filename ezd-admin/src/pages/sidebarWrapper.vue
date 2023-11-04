<template>
  <!--sidebar wrapper -->
  <div class="sidebar-wrapper" data-simplebar="true">
    <div class="sidebar-header" style="background-image: url(&quot;assets/gif/oke1.gif&quot;);
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;">
      <div >
        <a href="/"
          >
          <h4>EZD</h4></a
        >
      </div>
      <div class="toggle-icon ms-auto"><i class="bx bx-arrow-back"></i></div>
    </div>
    <!--navigation-->
    <ul class="metismenu" id="menu">
      <li class="parent">
        <a class="has-arrow" href="#">
          <div class="parent-icon">
            <i class="fadeIn animated bx bx-line-chart-down"></i>
          </div>
          <div class="menu-title">Thống Kê</div>
        </a>
        <ul class="child">
          <li class="parent">
            <a class="has-arrow" href="#"
              ><i class="fadeIn animated bx bx-chevron-right-circle"> </i>Thống
              Kê User</a
            >
            <ul class="child">
              <li>
                <a href="/admin/user/listUser" nowrap
                  ><i class="bx bx-radio-circle"></i
                  ><i class="lni lni-indent-increase"></i>Danh Sách User</a
                >
              </li>
              <li>
                <a href="/admin/user/listStaf" nowrap
                  ><i class="bx bx-radio-circle"></i
                  ><i class="lni lni-indent-increase"></i>Danh Sách Cộng Tác
                  Viên</a
                >
              </li>
            </ul>
          </li>
        </ul>
      </li>
      <li class="parent">
        <a class="has-arrow" href="#">
          <div class="parent-icon"><i class="bx bx-cart"></i></div>
          <div class="menu-title">Quản Lý Home Page</div>
        </a>
        <ul class="child">
          <li class="parent">
            <a class="has-arrow" href="#"
              ><i class="fadeIn animated bx bx-chevron-right-circle"></i> Danh
              Mục Game <span class="expand"></span
            ></a>
            <ul class="child">
              <li>
                <a href="/admin/game"
                  ><i class="bx bx-radio-circle"></i>Danh Sách Game</a
                >
              </li>
              <li>
                <a href="/admin/game/create"
                  ><i class="bx bx-radio-circle"></i>Tạo Mới Game</a
                >
              </li>
            </ul>
          </li>
          <li class="parent">
            <a class="has-arrow" href="#"
              ><i class="fadeIn animated bx bx-chevron-right-circle"> </i>Danh
              Mục Banner <span class="expand"></span
            ></a>
            <ul class="child">
              <li>
                <a href="/admin/banner"
                  ><i class="bx bx-radio-circle"></i>Danh Sách Banner</a
                >
              </li>
              <li>
                <a href="/admin/banner/create"
                  ><i class="bx bx-radio-circle"></i>Tạo Mới Banner</a
                >
              </li>
            </ul>
          </li>
          <li class="parent">
            <a class="has-arrow" href="#"
              ><i class="fadeIn animated bx bx-chevron-right-circle"> </i>Danh
              Mục Blog <span class="expand"></span
            ></a>
            <ul class="child">
              <li>
                <a href="/admin/blog"
                  ><i class="bx bx-radio-circle"></i>Danh Sách Blog</a
                >
              </li>
              <li>
                <a href="/admin/blog/create"
                  ><i class="bx bx-radio-circle"></i>Tạo Mới Blog</a
                >
              </li>
            </ul>
          </li>
        </ul>
      </li>

      <li class="parent">
        <a class="has-arrow" href="#">
          <div class="parent-icon">
            <i class="bx bx-bell" style="color: red"></i>
          </div>
          <div class="menu-title">Quản Lý Đơn</div>
        </a>
        <ul class="child">
          <li class="parent">
            <a class="has-arrow" href="#"
              ><i class="fadeIn animated bx bx-message-square-add"> </i
              ><span>Đăng Ký Cộng Tác</span></a
            >
            <ul class="child">
              <li>
                <a href="/admin/banner"
                  ><i class="bx bx-radio-circle"></i>Danh Sách Đơn</a
                >
              </li>
              <li>
                <a href="/admin/banner/create"
                  ><i class="bx bx-radio-circle"></i>Danh Sách Từ Chối</a
                >
              </li>
              <li>
                <a href="/admin/banner/create"
                  ><i class="bx bx-radio-circle"></i>Danh Sách Chấp Nhận</a
                >
              </li>
            </ul>
          </li>
          <li class="parent">
            <a class="has-arrow" href="#"
              ><i class="fadeIn animated bx bx-message-square-add"> </i
              ><span>Đăng Ký Sản Phẩm</span></a
            >
            <ul class="child">
              <li>
                <a href="#"
                  ><i class="bx bx-radio-circle"></i>Danh Sách Đơn</a
                >
              </li>
              <li>
                <a href="#"
                  ><i class="bx bx-radio-circle"></i>Danh Sách Từ Chối</a
                >
              </li>
              <li>
                <a href="#"
                  ><i class="bx bx-radio-circle"></i>Danh Sách Chấp Nhận</a
                >
              </li>
            </ul>
          </li>
        </ul>
      </li>
      <li class="parent">
        <a class="has-arrow" href="#">
          <div class="parent-icon">
            <i class="bx bx-shopping-bag" style="color: red"></i>
          </div>
          <div class="menu-title">Quản Lý Giao Dịch</div>
        </a>
        <ul class="child">
          <li class="parent">
            <a class="has-arrow" href="#"
              ><i class="fadeIn animated bx bx-message-square-add"> </i
              ><span>Nạp Coin</span></a
            >
            <ul class="child">
              <li>
                <a href="/admin/transaction"
                  ><i class="bx bx-radio-circle"></i>Danh Sách Đơn Chờ</a
                >
              </li>
              <li>
                <a href="/admin/transaction/success"
                  ><i class="bx bx-radio-circle"></i>Danh Sách Chấp Nhận </a
                >
              </li>
              <li>
                <a href="/admin/transaction/failed"
                  ><i class="bx bx-radio-circle"></i>Danh Sách Từ Chối </a
                >
              </li>
            </ul>
          </li>
          <li class="parent">
            <a class="has-arrow" href="#"
              ><i class="fadeIn animated bx bx-message-square-add"> </i
              ><span>Lucky Spin</span></a
            >
            <ul class="child">
              <li>
                <a href="/admin/banner"
                  ><i class="bx bx-radio-circle"></i>Danh Sách</a
                >
              </li>
            </ul>
          </li>
        </ul>
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
};
</script>

<style></style>
