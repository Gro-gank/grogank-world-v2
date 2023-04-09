<template>
  <div
    class="h-fit sticky top-[13rem] w-full px-2 border-t border-b md:ml-[2rem]"
  >
    <div class="flex justify-between">
      <p class="text-[1.5rem]">Filter</p>
      <p class="cursor-pointer" @click="handleResetFilter">Reset</p>
    </div>
    <div class="mx-auto my-[2rem]">
      <input
        type="search"
        placeholder="keyword"
        class="text-[1.2rem] p-2 w-full bg-[black]"
        v-model="keyword"
      />
      <div class="option w-full my-[2rem]">
        <div class="mb-[1rem]">
          <p>Gerne :</p>
          <!-- <i class="fas fa-chevron-down"></i> -->
        </div>
        <select
          name=""
          id=""
          v-model="categoryOption"
          class="w-[90%] text-[1.1rem] p-1 bg-[black] text-[white]"
        >
          <option value="action">Action</option>
          <option value="adventure">Adventure</option>
          <option value="sport">Sport</option>
          <option value="strategy">Strategy</option>
          <option value="order">Order</option>
        </select>
      </div>
      <div class="option w-full my-[2rem]">
        <div class="mb-[1rem]">
          <p>Category :</p>
          <!-- <i class="fas fa-chevron-down"></i> -->
        </div>
        <select
          name=""
          id=""
          v-model="gerneOption"
          class="text-[1.1rem] p-1 bg-[black] text-[white] w-[90%]"
        >
          <option
            :value="gerne.name"
            v-for="(gerne, index) in genreList"
            :key="index"
          >
            {{ gerne.name }}
          </option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, ref, watch } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    store.dispatch("cate/getGenrebyCategoryAction");
    const keyword = ref("");
    const categoryOption = ref("");
    const gerneOption = ref("");
    watch(keyword, (newValue) => {
      store.dispatch("items/getItembySearchAction", newValue);
    });
    watch(categoryOption, (newKeyWord) => {
      store.dispatch("items/getItembyCategoryAction", newKeyWord);
      store.dispatch("cate/getGenrebyCategoryAction", newKeyWord);
    });
    watch(gerneOption, (newKeyWord) => {
      store.dispatch("items/getItembyCategoryAction", newKeyWord);
    });
    const genreList = computed(() => store.state.cate.genreList);
    const handleResetFilter = () => {
      keyword.value = "";
      categoryOption.value = "";
      gerneOption.value = "";
    };
    return {
      keyword,
      genreList,
      handleResetFilter,
      categoryOption,
      gerneOption,
    };
  },
};
</script>

<style></style>
