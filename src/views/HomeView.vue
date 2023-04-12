<template>
  <the-banner-2></the-banner-2>
  <popular-banner></popular-banner>
  <on-sale-swiper></on-sale-swiper>
  <new-release></new-release>
  <the-category></the-category>
  <main-page-list></main-page-list>
  <goto-top-button></goto-top-button>
  <main-page-footer></main-page-footer>
</template>

<script>
import PopularBanner from "@/components/mainpage/PopularBanner.vue";
import TheBanner2 from "@/components/mainpage/TheBanner2.vue";
import OnSaleSwiper from "@/components/mainpage/OnSaleSwiper.vue";
import NewRelease from "@/components/mainpage/NewRelease.vue";
import MainPageList from "@/components/mainpage/MainPageList.vue";
import TheCategory from "@/components/mainpage/TheCategory.vue";
import MainPageFooter from "@/components/mainpage/MainPageFooter.vue";
import GotoTopButton from "@/components/GotoTopButton.vue";

// @ is an alias to /src

export default {
  name: "HomeView",
  components: {
    PopularBanner,
    TheBanner2,
    OnSaleSwiper,
    NewRelease,
    MainPageList,
    TheCategory,
    MainPageFooter,
    GotoTopButton,
  },
};
</script>

<style></style>
