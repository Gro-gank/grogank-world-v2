<template>
  <div
    class="md:w-[100%] lg:px-[10%] slg:px-[5%] md:px-[2%] sm:px-[0] md:mt-[4rem] sm:mt-[5rem] mx-auto md:h-[35rem] sm:h-[36rem] w-full"
  >
    <h1 class="font-bold text-[1.6rem] my-[2rem] w-full text-center">
      Most Popular
    </h1>
    <div class="banner-swiper-content p-1 flex justify-between h-full w-full">
      <swiper
        :slides-per-view="1"
        :autoplay="{
          delay: 7000,
          disableOnInteraction: false,
        }"
        :pagination="{
          dynamicBullets: true,
        }"
        :space-between="0.5"
        :modules="[Thumbs]"
        :thumbs="{ swiper: thumbsSwiper }"
        class="banner-swiper lg:w-[80%] slg:w-[70%] md:h-[85%] sm:h-full rounded-3xl items-center sm:text-center md:text-left md:px-0 sm:px-[1rem]"
      >
        // :scrollbar="{ draggable: true }"
        <swiper-slide
          class="w-full h-full"
          v-for="(item, index) in itemList.slice(0, 4)"
          :key="index"
        >
          <div class="banner-swiper-item">
            <router-link
              :to="`/detail/${item.itemId}`"
              class=""
              @click="viewCount(item)"
            >
              <img
                :src="item.imageSpan"
                alt=""
                class="image-span cursor-pointer md:block sm:hidden"
              />
              <img
                :src="item.imageTitle"
                alt=""
                class="cursor-pointer md:hidden sm:block sm:h-[450px] sm:w-[350px] rounded-2xl"
              />
              <div
                class="absolute left-0 bottom-0 text-center w-full md:hidden mb-8"
              >
                <h2 class="font-bold text-yellow-600 text-[1.5rem]">
                  {{ item.name }}
                </h2>
                <p>{{ item.developer }}</p>
                <p>{{ item.price }} $</p>
              </div>
              <div
                class="md:absolute md:bottom-0 md:left-0 md:block sm:hidden md:w-[40%] my-11 mx-3 bg-[gray] bg-opacity-20 p-3"
              >
                <div>
                  <h2 class="font-bold text-yellow-600 text-[2rem]">
                    {{ item.name }}
                  </h2>
                  <p>{{ item.developer }}</p>
                  <p>{{ item.price }} $</p>
                </div>

                <p
                  class="sm:hidden md:block"
                  v-html="item.description.slice(0, 200) + ' ' + '...'"
                ></p>
              </div>
            </router-link>
          </div>
        </swiper-slide>
      </swiper>
      <div class="lg:w-[20%] slg:w-[25%] sm:hidden md:block">
        <swiper
          :modules="[Thumbs]"
          watch-slides-progress
          :slides-per-view="4"
          @swiper="setThumbsSwiper"
          :direction="'vertical'"
          class="thumb-swiper"
        >
          <swiper-slide
            v-for="(item, index) in itemList.slice(0, 4)"
            :key="index"
          >
            <div class="swiper-item-thumb pb-1 box-border w-full">
              <img :src="item.imageTitle" alt="" />
              <div class="h-[5rem] grid items-center">
                <p>{{ item.name }}</p>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
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
import { computed, ref } from "vue";
import { useStore } from "vuex";
SwiperCore.use([Navigation, Pagination, Autoplay]);

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const store = useStore();

    store.dispatch("items/getAllItemAction");
    const itemList = computed(() => store.state.items.itemListbyView);

    const thumbsSwiper = ref(null);
    const setThumbsSwiper = (swiper) => {
      thumbsSwiper.value = swiper;
    };
    const viewCount = (item) => {
      store.dispatch("items/countViewAction", item);
    };
    return {
      modules: [Navigation, Pagination, Scrollbar, A11y, Autoplay],
      Thumbs,
      thumbsSwiper,
      setThumbsSwiper,
      itemList,
      viewCount,
    };
  },
};
</script>

<style lang="scss" scoped>
.banner-swiper {
  .banner-swiper-item {
    .image-span {
      border-radius: 1rem;
      opacity: 0.8;
      width: 940px;
      height: 490px;
    }
  }
}
.thumb-swiper {
  padding: 1rem;
  box-sizing: border-box;

  .swiper-slide {
    display: block;
    width: 100%;
    opacity: 0.8;
    .swiper-item-thumb {
      padding: 0.5rem;
      border-radius: 1rem;
      height: 7.5rem;
      display: flex;
      gap: 1rem;

      img {
        width: 4rem;
        height: 5rem;
        border-radius: 0.7rem;
      }
    }
  }
  .swiper-slide-thumb-active {
    opacity: 1;
    &::before {
      content: "";
      position: absolute;
      background-color: gray;
      // border-radius: 1rem;
      border-top-left-radius: 1.2rem;
      border-bottom-left-radius: 1.2rem;

      width: 1%;
      height: 80%;
      opacity: 0.2;
      animation: changing 7.5s;
    }
  }
}

@keyframes changing {
  0% {
    width: 1%;
  }
  // 50% {
  //   width: 50%;
  // }
  100% {
    width: 100%;
    border-top-right-radius: 1rem;
    border-bottom-right-radius: 1rem;
  }
}
</style>
