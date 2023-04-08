<template>
  <div
    class="my-[4rem] container mx-auto md:grid slg:grid-cols-3 md:grid-cols-2 gap-9"
  >
    <div class="border-r-[1px] border-gray-400 my-5">
      <div
        class="title md:text-left md:ml-[2rem] text-[1.5rem] mb-[1rem] flex justify-between pr-[2rem]"
      >
        <p>Top View</p>
        <div class="normal-btn">More</div>
      </div>
      <ul class="p-5">
        <li v-for="(item, index) in listbyView.slice(0, 8)" :key="index">
          <router-link
            :to="`/detail/${item.itemId}`"
            class="item flex items-center px-3 py-5"
            @click="viewCount(item)"
          >
            <img :src="item.imageTitle" alt="" class="w-[70px] h-[90px]" />
            <div class="ml-3">
              <p>{{ item.name }}</p>
              <p>{{ item.price }} $</p>
              <p><ion-icon name="eye-outline"></ion-icon> {{ item.view }}</p>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="border-r-[1px] border-gray-400 my-5">
      <div
        class="title md:text-left md:ml-[2rem] text-[1.5rem] mb-[2rem] flex justify-between pr-[2rem]"
      >
        <p>Top Rate</p>
        <div class="normal-btn">More</div>
      </div>
      <ul>
        <li v-for="(item, index) in listbyRate.slice(0, 8)" :key="index">
          <router-link
            :to="`/detail/${item.itemId}`"
            class="item flex items-center px-3 py-5"
            @click="viewCount(item)"
          >
            <img :src="item.imageTitle" alt="" class="w-[70px] h-[90px]" />
            <div class="ml-3">
              <p>{{ item.name }}</p>
              <p>{{ item.price }} $</p>
              <p><ion-icon name="star-outline"></ion-icon> {{ item.rate }}</p>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
    <div>
      <div class="title md:text-left md:ml-[2rem] text-[1.5rem] mb-[2rem]">
        Software
      </div>
      <!-- <ul>
        <li
          v-for="(item, index) in listbyView.slice(0, 8)"
          :key="index"
          class="item flex items-center px-3 py-5"
        >
          <img :src="item.imageTitle" alt="" class="w-[70px] h-[90px]" />
          <p>{{ item.name }}</p>
        </li>
      </ul> -->
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    store.dispatch("items/getAllItemAction");
    const listbyView = computed(() => store.state.items.itemListbyView);
    const listbyRate = computed(() => store.state.items.itemListbyRate);
    const viewCount = (item) => {
      store.dispatch("items/countViewAction", item);
    };
    return {
      listbyView,
      listbyRate,
      viewCount,
    };
  },
};
</script>

<style lang="scss" scoped>
.item {
  width: 85%;
  border-radius: 1rem;
  &:hover {
    background-color: rgb(gray, 0.2);
  }
  img {
    border-radius: 0.5rem;
  }
}
</style>
