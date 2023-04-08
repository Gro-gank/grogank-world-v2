<template>
  <div
    class="grid-list grid slg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-2"
  >
    <app-pagination :itemList="itemList" v-slot="slotProps">
      <router-link
        :to="`/detail/${slotProps.item.itemId}`"
        class="item h-fit p-2"
        @click="viewCount(slotProps.item)"
      >
        <img
          :src="slotProps.item.imageTitle"
          alt=""
          class="h-[280px] mb-5 rounded-lg mx-auto"
        />
        <div class="h-fit">
          <p class="font-bold text-[1.1rem]">{{ slotProps.item.name }}</p>
          <p>{{ slotProps.item.developer }}</p>
          <div class="price my-3">
            <div
              class="flex gap-2 sm:mx-auto"
              v-if="slotProps.item.isSale == true"
            >
              <div class="sale-icon">sale</div>
              <span class="line-through text-[1.1rem]"
                >{{ slotProps.item.price }}$</span
              >
              >
              <span class="text-[1.1rem]">{{ slotProps.item.salePrice }}$</span>
            </div>
            <span v-else>Price: {{ slotProps.item.price }} $</span>
          </div>
        </div>
        <div class="social flex justify-between px-[1rem]">
          <div>
            <ion-icon name="eye-outline" class="text-[1rem]"></ion-icon>
            {{ slotProps.item.view }}
          </div>
          <div>
            <ion-icon name="star-outline"></ion-icon>{{ slotProps.item.rate }}
          </div>
        </div>
      </router-link>
    </app-pagination>
  </div>
</template>

<script>
import { useStore } from "vuex";
import AppPagination from "../AppPagination.vue";

export default {
  components: { AppPagination },
  props: {
    itemList: {
      type: Array,
    },
  },
  setup() {
    const store = useStore();
    const viewCount = (item) => {
      store.dispatch("items/countViewAction", item);
    };
    return {
      viewCount,
    };
  },
};
</script>

<style lang="scss" scoped>
.item {
  img {
    border: 0.1rem solid transparent;
  }
  &:hover {
    img {
      border: 0.1rem solid yellow;
    }
  }
}
.grid-list {
  .grid-item:last-child {
    width: 400%;
  }
}
</style>
