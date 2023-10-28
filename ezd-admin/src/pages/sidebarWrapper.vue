<template>
   <!--sidebar wrapper -->
   <div class="sidebar-wrapper" data-simplebar="true">
    <div class="sidebar-header">
      <div>
        <img
        :src= " BASE_URL + 'assets/images/logo-icon.png' "
          class="logo-icon"
          alt="logo icon"
        />
      </div>
      <div>
        <a href="/"><h4 class="logo-text">EZD Game</h4></a>
      </div>
      <div class="toggle-icon ms-auto"><i class="bx bx-arrow-back"></i></div>
    </div>
    <!--navigation-->
    <ul class="metismenu" id="menu">
      <li>
        <a href="javascript:;" class="has-arrow">
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
        <a href="javascript:;" class="has-arrow">
          <div class="parent-icon"><i class="bx bx-cart"></i></div>
          <div class="menu-title">Quản Lý Trò Chơi</div>
        </a>
        <ul>
          <li>
            <a href="/admin/game"
              ><i class="bx bx-radio-circle"></i>Danh Sách</a
            >
          </li>
          
          <li>
            <a href="/admin/game/create"
              ><i class="bx bx-radio-circle"></i>Tạo Mới</a
            >
          </li>
         
        </ul>
      </li>
      <li>
        <a class="has-arrow" href="javascript:;">
          <div class="parent-icon"><i class="bx bx-menu"></i>
          </div>
          <div class="menu-title">Quản Lý Home Page</div>
        </a>
        <ul>
          <li> <a class="has-arrow" href="javascript:;"><i class='bx bx-radio-circle'></i>Quản Lý Banner</a>
            <ul>
              <li> <a href="/admin/banner"><i class='bx bx-radio-circle'></i>Danh Sách Banner</a>

              </li>
              <li> <a  href="/admin/banner/create"><i class='bx bx-radio-circle'></i>Tạo Mới Banner</a>

              </li>
            </ul>
          </li>

          <li>
            <a class="has-arrow" href="javascript:;"><i class='bx bx-radio-circle'></i>Blog</a>
            <ul>
              <li> <a  href="/admin/blog"><i class='bx bx-radio-circle'></i>List Blog</a>
               </li>
                  <li> <a href="/admin/blog/create"><i class='bx bx-radio-circle'></i>Create Blog</a>
                  
                
              </li>
            </ul>
          </li>
        </ul>
      </li>
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
name:'slibarWrapper',
data(){
  return {
       BASE_URL: process.env.BASE_URL,
  }
}
}
</script>

<style>

</style>