<template>
  <div v-for="(item, index) in paginatedData" :key="index">
    <slot :item="item"></slot>
  </div>

  <div class="w-full" v-if="paginatedData.length % 4 == 0">
    <div class="btn-list flex mx-auto w-fit my-[2rem]">
      <button
        class="paginate-btn py-[.5rem] md:px-[1rem] sm:px-[.7rem]"
        @click="firstPage"
        :class="{ active: page == 1 }"
      >
        First
      </button>
      <button
        @click="backPage"
        class="paginate-btn py-[.5rem] md:px-[1rem] sm:px-[.7rem]"
      >
        Prev
      </button>

      <button
        v-for="numPage in Math.ceil(itemList.length / perPage)"
        :key="numPage"
        @click="() => goToPage(numPage)"
        class="paginate-btn py-[.5rem] md:px-[1rem] sm:px-[.7rem]"
        :class="{ active: page == numPage }"
      >
        {{ numPage }}
      </button>
      <button
        @click="nextPage"
        class="paginate-btn py-[.5rem] md:px-[1rem] sm:px-[.7rem]"
      >
        Next
      </button>
      <button
        class="paginate-btn py-[.5rem] md:px-[1rem] sm:px-[.7rem]"
        @click="lastPage"
        :class="{ active: page == Math.ceil(itemList.length / perPage) }"
      >
        Last
      </button>
    </div>
  </div>
</template>

<script>
import { computed, ref, toRefs } from "vue";

export default {
  components: {},
  props: {
    itemList: {
      type: Array,
    },
  },
  setup(props) {
    let page = ref(1);
    const { itemList } = toRefs(props);
    // const data = Array.from(Array(24).keys()).map((item) => {
    //   return { index: item, value: `this_${item}` };
    // });
    // const data = itemList.value;
    // perPage = 4 * x
    const perPage = 12;
    var totalPage = Math.ceil(itemList.value.length / perPage);
    const paginatedData = computed(() =>
      itemList.value.slice((page.value - 1) * perPage, page.value * perPage)
    );

    const nextPage = () => {
      if (page.value !== Math.ceil(itemList.value.length / perPage)) {
        page.value += 1;
      }
    };

    const backPage = () => {
      if (page.value !== 1) {
        page.value -= 1;
      }
    };

    const goToPage = (numPage) => {
      page.value = numPage;
    };
    const firstPage = () => {
      page.value = 1;
    };
    const lastPage = () => {
      page.value = Math.ceil(itemList.value.length / perPage);
    };
    return {
      paginatedData,
      perPage,
      page,
      nextPage,
      backPage,
      goToPage,
      firstPage,
      lastPage,
      totalPage,
    };
  },
};
</script>

<style lang="scss" scoped>
.btn-list {
  button {
    border: 1px solid #fff;
    &:hover {
      background-color: var(--gray);
    }
  }
}
.active {
  background-color: var(--gray);
  color: var(--light-yellow);
}
</style>
