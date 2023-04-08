<template>
  <div class="lg:mx-[12%] slg:mx-[7%] md:mx-[2%] sm:mx-[2rem]">
    <h1 class="text-[2.6rem] font-normal my-[2rem] md:text-left sm:text-center">
      {{ item[0].name }}
    </h1>
    <div
      class="w-[30%] flex justify-between text-[1.2rem] items-center sm:mx-auto md:mx-0"
    >
      <div>
        <ion-icon name="eye-outline" class="text-[1.5rem]"></ion-icon
        >{{ item[0].view }}
      </div>
      <div><ion-icon name="star-outline"></ion-icon>{{ item[0].rate }}</div>
    </div>
  </div>

  <div
    class="lg:mx-[12%] slg:mx-[7%] md:mx-[2%] sm:mx-[2rem] slg:flex-row sm:flex sm:flex-col-reverse"
  >
    <div class="detail-content slg:w-[65%] md:w-full sm:w-full">
      <detail-content :item="item[0]"></detail-content>
    </div>
    <div class="detail-sidebar slg:w-[32%] md:w-full sm:w-full slg:ml-[5rem]">
      <detail-sidebar :item="item[0]"></detail-sidebar>
    </div>
  </div>
  <detail-comment :commentList="commentList" :item="item"></detail-comment>
  <goto-top-button></goto-top-button>
</template>

<script>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import DetailContent from "@/components/detail/DetailContent.vue";
import DetailSidebar from "@/components/detail/DetailSidebar.vue";
import GotoTopButton from "@/components/GotoTopButton.vue";
import DetailComment from "@/components/detail/DetailComment.vue";
export default {
  components: { DetailContent, DetailSidebar, GotoTopButton, DetailComment },
  setup() {
    const store = useStore();
    const route = useRoute();

    store.dispatch("items/getItemDetailAction", route.params.itemId);
    const item = computed(() => store.state.items.itemDetail);
    store.dispatch("items/getCommentAction", route.params.itemId);
    const commentList = computed(() => store.state.items.itemComment);
    return {
      item,
      commentList,
    };
  },
};
</script>

<style></style>
