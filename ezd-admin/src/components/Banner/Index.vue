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
    <!--start page wrapper -->
    <div class="page-wrapper">
      <div class="page-content">

      <div class="card">
					<div class="card-body">
        <!--breadcrumb-->
        <carousel :items-to-show="1">
          <slide v-for="slide in bannerList" :key="slide" >
          <div class="slide-content">
            <img :src="slide.image" alt="" style="width:1300px;height:500px" />
            </div>
            <div class="carousel-caption d-none d-md-block">
												<h5>{{slide.name}}</h5>
												<p>{{slide.title}}.</p>
											</div>
          </slide>

          <template #addons>
            <navigation />
            <pagination />
          </template>
        </carousel>
</div>
</div>
        <!--end row-->
      </div>
    </div>
    <!--end page wrapper -->
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
</template>
<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import switcher from "@/pages/switcher.vue";
import searchModal from "@/pages/searchModal.vue";

import slibarWrapper from "@/pages/sidebarWrapper.vue";
import BannerService from "@/service/BannerService.js";
import startHeaderVue from "@/pages/startHeader.vue";
export default {
  name: "listBanner",
  data() {
    return {
      bannerList: [],
    };
  },
  components: {
    switcher,
    searchModal,
    slibarWrapper,
    startHeaderVue,
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  methods: {
    async getAllBanners() {
      try {
        const response = await BannerService.getAllBanners();
        const data = response.data;
        //const data = response.data.sort((a, b) => b.id - a.id);
        // Gán giá trị cho cả bannerList và originalBannerList
        this.bannerList = data;
        // this.originalBannerList = data;
      } catch (error) {
        console.error("Lỗi khi lấy danh sách banner: ", error);
      }
    },
  },
  async created() {
    await this.getAllBanners();
  },
  prevCarousel() {
    const carousel = document.getElementById("carouselExampleDark");
    const activeIndex = this.getActiveIndex(carousel);
    if (activeIndex > 0) {
      this.goToSlide(activeIndex - 1, carousel);
    } else {
      this.goToSlide(this.bannerList.length - 1, carousel);
    }
  },

  nextCarousel() {
    const carousel = document.getElementById("carouselExampleDark");
    const activeIndex = this.getActiveIndex(carousel);
    if (activeIndex < this.bannerList.length - 1) {
      this.goToSlide(activeIndex + 1, carousel);
    } else {
      this.goToSlide(0, carousel);
    }
  },

  getActiveIndex(carousel) {
    return Array.from(carousel.querySelectorAll(".carousel-item")).findIndex(
      (item) => item.classList.contains("active")
    );
  },

  goToSlide(index, carousel) {
    const indicators = carousel.querySelectorAll(".carousel-indicators li");
    indicators[index].click();
  },
};
</script>
<style scoped>

.slide-content {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 500px; /* Điều chỉnh chiều cao tùy theo yêu cầu */
}

.slide-content img {
  max-width: 100%;
  max-height: 100%;
}
</style>