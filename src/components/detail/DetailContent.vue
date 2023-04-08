<template>
  <Swiper
    :breakpoints="{
      998: { slidesPerView: 1 },
      745: { slidesPerView: 1 },
      450: { slidesPerView: 1 },
    }"
    :navigation="true"
    :space-between="0"
    class="my-[4rem] w-full md:h-[380px] sm:h-[230px]"
  >
    <SwiperSlide
      v-for="(trailer, index) in item.trailer"
      :key="index"
      class="w-full h-full"
    >
      <iframe
        class="video rounded-xl w-full h-full border-[.2px]"
        :src="trailer"
        title="YouTube video player"
        frameborder="0"
        muted
        allow="accelerometer; autoplay;clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </SwiperSlide>
  </Swiper>

  <div class="">
    <h3 class="text-[1.2rem] font-semibold">Category</h3>
    <ul
      class="grid sm:grid-cols-3 slg:grid-cols-4 my-3 gap-5 border-l border-r md:px-[2rem] sm:px-[1rem]"
    >
      <li
        v-for="(cate, index) in item.categoryId"
        :key="index"
        class="text-center"
      >
        {{ cate }}
      </li>
    </ul>
  </div>
  <div class="overview my-[3rem]">
    <h3 class="text-[1.2rem] font-semibold">Overview</h3>
    <p v-html="item.description" class="py-2"></p>
  </div>
  <div class="gallery">
    <h3 class="text-[1.2rem] font-semibold">Gallery</h3>
    <div class="my-[2rem]">
      <swiper
        :slides-per-view="1"
        :autoplay="{
          delay: 7000,
          disableOnInteraction: false,
        }"
        :space-between="0"
        :modules="[Thumbs]"
        :thumbs="{ swiper: thumbsSwiper }"
        class="banner-swiper lg:w-[100%] lg:h-[80%] slg:w-[70%] md:h-[85%] sm:w-full md:px-0 sm:px-[1rem]"
      >
        // :scrollbar="{ draggable: true }"
        <swiper-slide
          class="w-fit h-fit"
          v-for="(image, index) in item.imageGalery"
          :key="index"
        >
          <img :src="image" alt="" class="rounded-3xl" />
        </swiper-slide>
      </swiper>

      <swiper
        :modules="[Thumbs]"
        :navigation="true"
        :space-between="5"
        watch-slides-progress
        :breakpoints="{
          945: { slidesPerView: 5 },
          745: { slidesPerView: 4 },
          350: { slidesPerView: 3 },
        }"
        @swiper="setThumbsSwiper"
        class="thumb-swiper border-t border-b mt-3 border-main"
      >
        <swiper-slide v-for="(image, index) in item.imageGalery" :key="index">
          <img :src="image" alt="" />
        </swiper-slide>
      </swiper>
    </div>
  </div>
  <div class="">
    <h3 class="text-[1.2rem] font-semibold">Specifications</h3>
    <div class="border my-4 p-[1rem] rounded-lg leading-6">
      <p v-html="item.spec"></p>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import SwiperCore, {
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from "swiper";
import "swiper/css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import "swiper/css/grid";
import { Thumbs } from "swiper";
import { ref } from "vue";

SwiperCore.use([Navigation, Pagination, Autoplay]);

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    item: {
      type: Object,
    },
  },
  setup() {
    const thumbsSwiper = ref(null);
    const setThumbsSwiper = (swiper) => {
      thumbsSwiper.value = swiper;
    };
    return {
      modules: [Navigation, Pagination, Scrollbar, A11y, Autoplay],
      Thumbs,
      thumbsSwiper,
      setThumbsSwiper,
    };
  },
};
</script>

<style></style>
