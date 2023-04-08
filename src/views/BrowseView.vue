<template>
  <div class="lg:px-[12%] slg:px-[7%] md:px-[5%] sm:px-[1rem]">
    <div class="heading text-center text-[1.5rem]">
      <h1>Browsing</h1>
    </div>
    <div class="flex gap-2 slg:flex-row sm:flex sm:flex-col-reverse">
      <div class="the-list slg:w-[79%] sm:w-full">
        <div class="list-style w-full flex justify-between my-[2rem]">
          <div class="list-by">
            <select
              name=""
              id=""
              class="py-2 px-3 bg-[black] hover:border-[black]"
              v-model="sortStyle"
            >
              <option value="1">Newest First</option>
              <option value="2">On Sale</option>
              <option value="3">Most View</option>
              <option value="4">Top Rate</option>
              <option value="5">Price: High to low</option>
              <option value="6">Price: Low to high</option>
            </select>
          </div>
          <div class="list-type flex gap-2 items-center">
            <div
              :class="{ on: styleofList == 1 }"
              @click="handleChooseStyleofList(1)"
            >
              <ion-icon
                name="grid-outline"
                class="text-[1.5rem] cursor-pointer"
              ></ion-icon>
            </div>
            <div
              :class="{ on: styleofList == 2 }"
              @click="handleChooseStyleofList(2)"
            >
              <ion-icon
                name="list-outline"
                class="text-[2rem] cursor-pointer"
              ></ion-icon>
            </div>
          </div>
        </div>

        <div v-if="styleofList === 1">
          <grid-style :itemList="itemList.value"></grid-style>
        </div>

        <div v-if="styleofList === 2">
          <list-style :itemList="itemList.value"></list-style>
        </div>
      </div>
      <div class="list-sidebar slg:w-[20%] sm:w-full">
        <browse-sidebar></browse-sidebar>
      </div>
    </div>
  </div>
  <goto-top-button></goto-top-button>
</template>

<script>
import GridStyle from "@/components/browse/GridStyle.vue";
import ListStyle from "@/components/browse/ListStyle.vue";
import { computed, ref, watch } from "vue";
import { useStore } from "vuex";
import BrowseSidebar from "@/components/browse/BrowseSidebar.vue";
import GotoTopButton from "@/components/GotoTopButton.vue";
export default {
  components: { GridStyle, ListStyle, BrowseSidebar, GotoTopButton },
  setup() {
    const styleofList = ref(1);
    const handleChooseStyleofList = (value) => {
      styleofList.value = value;
    };
    const store = useStore();
    store.dispatch("items/getAllItemAction");
    const itemList = ref();
    itemList.value = computed(() => store.state.items.itemList);
    const sortStyle = ref(1);
    watch(sortStyle, (newValue) => {
      if (newValue == 1) {
        store.dispatch("items/getAllItemAction");
        itemList.value = computed(() => store.state.items.newReleaseList);
      } else if (newValue == 2) {
        store.dispatch("items/getSaleItemAction");
        itemList.value = computed(() => store.state.items.saleItemList);
      } else if (newValue == 3) {
        store.dispatch("items/getAllItemAction");
        itemList.value = computed(() => store.state.items.itemListbyView);
      } else if (newValue == 4) {
        store.dispatch("items/getAllItemAction");
        itemList.value = computed(() => store.state.items.itemListbyRate);
      } else if (newValue == 5) {
        store.dispatch("items/getAllItemAction");
        itemList.value = computed(() => store.state.items.itemHightoLow);
      } else if (newValue == 6) {
        store.dispatch("items/getAllItemAction");
        itemList.value = computed(() => store.state.items.itemLowtoHigh);
      }
    });
    return { handleChooseStyleofList, styleofList, sortStyle, itemList };
  },
};
</script>

<style lang="scss" scoped>
.on {
  color: var(--yellow);
}
</style>
