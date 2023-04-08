<template>
  <keep-alive>
    <div class="grid gap-2">
      <app-pagination :itemList="itemList" v-slot="slotProps">
        <router-link
          :to="`/detail/${slotProps.item.itemId}`"
          class="md:flex sm:grid sm:border md:border-none"
          @click="viewCount(slotProps.item)"
        >
          <img
            :src="slotProps.item.imageSpan"
            alt=""
            class="md:h-[180px] sm:h-[180px] md:w-[35%] sm:w-full mb-5 rounded-lg"
          />
          <div
            class="h-fit ml-3 grid gap-[.1rem] w-[100%] sm:text-center md:text-left"
          >
            <p class="font-bold text-[1.1rem]">{{ slotProps.item.name }}</p>
            <p>{{ slotProps.item.developer }}</p>
            <p
              v-html="slotProps.item.description.slice(0, 100) + ' ...'"
              class="md:block sm:hidden"
            ></p>
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
                <span class="text-[1.1rem]"
                  >{{ slotProps.item.salePrice }}$</span
                >
              </div>
              <span v-else>Price: {{ slotProps.item.price }} $</span>
            </div>
            <div
              class="social md:w-[30%] sm:w-[100%] flex justify-between px-[1rem]"
            >
              <div>
                <ion-icon name="eye-outline" class="text-[1rem]"></ion-icon>
                {{ slotProps.item.view }}
              </div>
              <div>
                <ion-icon name="star-outline"></ion-icon
                >{{ slotProps.item.rate }}
              </div>
            </div>
          </div>
        </router-link>
      </app-pagination>
    </div>
  </keep-alive>
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
</style>
