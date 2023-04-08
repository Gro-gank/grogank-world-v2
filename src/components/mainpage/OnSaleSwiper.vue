<template>
  <div class="container text-center mx-auto md:mt-[4rem] sm:mt-[8rem]">
    <h1 class="text-[1.6rem] font-bold mb-10">On Sales</h1>
    <Swiper
      :breakpoints="{
        1120: { slidesPerView: 5 },
        998: { slidesPerView: 3 },
        745: { slidesPerView: 2 },
        550: { slidesPerView: 1 },
      }"
      :autoplay="{
        delay: 7000,
        disableOnInteraction: false,
      }"
      :pagination="{
        dynamicBullets: true,
      }"
      :navigation="true"
      :space-between="0.2"
      class="w-full"
    >
      <SwiperSlide
        v-for="(item, index) in itemList"
        :key="index"
        class="w-[20%] grid gap-7 px-[.1rem] swiper-item"
      >
        <router-link :to="`/detail/${item.itemId}`" @click="viewCount(item)">
          <img
            :src="item.imageTitle"
            alt=""
            class="w-[98%] slg:h-[18rem] sm:h-[30rem] rounded-md"
          />
          <div class="text-left my-4">
            <div>
              <p>{{ item.name }}</p>
              <p>{{ item.developer }}</p>
            </div>
            <div class="flex gap-[1.3rem] py-[1rem]">
              <div class="sale-icon">sale</div>
              <p>
                <span class="line-through">{{ item.price }}</span> >
                <span>{{ item.salePrice }} $</span>
              </p>
            </div>
            <p>Release: {{ item.release }}</p>
            <div class="flex justify-between pr-6 my-2">
              <div class="text-[1rem]">
                <ion-icon name="star-outline"></ion-icon>
                {{ item.rate }}
              </div>
              <div class="text-[1rem]">
                <ion-icon name="eye-outline"></ion-icon>
                {{ item.view }}
              </div>
            </div>
          </div>
        </router-link>
      </SwiperSlide>
    </Swiper>
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
import { useStore } from "vuex";
import { computed } from "vue";
SwiperCore.use([Navigation, Pagination, Autoplay]);

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const store = useStore();
    store.dispatch("items/getSaleItemAction");
    const itemList = computed(() => store.state.items.saleItemList);
    const viewCount = (item) => {
      store.dispatch("items/countViewAction", item);
    };
    return {
      modules: [Navigation, Pagination, Scrollbar, A11y, Autoplay],
      itemList,
      viewCount,
    };
  },
};
</script>

<style lang="scss">
.swiper-item {
  img::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 100;
    background-color: gray;
  }

  :hover {
    img {
      border: 0.1rem solid yellow;
    }
  }
}
</style>
