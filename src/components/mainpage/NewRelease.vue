<template>
  <div class="container text-center mx-auto mt-[4rem]">
    <h1 class="text-[1.6rem] font-bold mb-10">New Release</h1>
    <Swiper
      :breakpoints="{
        745: { slidesPerView: 2 },
        550: { slidesPerView: 1 },
      }"
      :autoplay="{
        delay: 7000,
        disableOnInteraction: false,
      }"
      :space-between="0"
      class="w-full"
    >
      <SwiperSlide
        v-for="(item, index) in itemList.slice(0, 8)"
        :key="index"
        class="w-[20%] grid gap-7 px-[.7rem] swiper-item"
      >
        <router-link :to="`/detail/${item.itemId}`" @click="viewCount(item)">
          <img
            :src="item.imageSpan"
            alt=""
            class="w-[98%] slg:h-[20rem] sm:h-[12rem] rounded-lg"
          />
          <div class="text-left my-4">
            <div>
              <p>{{ item.name }}</p>
              <p>{{ item.developer }}</p>
            </div>
            <div
              class="flex gap-[1.3rem] py-[0.5rem]"
              v-if="item.isSale === true"
            >
              <div class="sale-icon">sale</div>
              <p>
                <span class="line-through">{{ item.price }}</span> >
                <span>{{ item.salePrice }} $</span>
              </p>
            </div>
            <div class="flex gap-[1.3rem] py-[.5rem]" v-else>
              <p>
                <span>{{ item.price }} $</span>
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
    const itemList = computed(() => store.state.items.newReleaseList);
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
  :hover {
    img {
      border: 0.1rem solid yellow;
    }
  }
}
</style>
