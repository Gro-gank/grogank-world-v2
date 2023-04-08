<template>
  <div v-for="(item, index) in paginatedData" :key="index">
    <slot :item="item"></slot>
  </div>

  <div class="w-full" v-if="paginatedData.length % 4 == 0">
    <vue-awesome-paginate
      :total-items="Math.ceil(itemList.length / perPage)"
      v-model="currentPage"
    >
      <template #prev-button>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="black"
            width="8"
            height="8"
            viewBox="0 0 24 24"
          >
            <path d="M8.122 24l-4.122-4 8-8-8-8 4.122-4 11.878 12z" />
          </svg>
          Prev
        </span>
      </template>

      <template #next-button>
        <span>
          Next
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="black"
            width="8"
            height="8"
            viewBox="0 0 24 24"
          >
            <path d="M8.122 24l-4.122-4 8-8-8-8 4.122-4 11.878 12z" />
          </svg>
        </span>
      </template>
    </vue-awesome-paginate>
  </div>
</template>

<script>
import { computed, ref, toRefs } from "vue";
import VueAwesomePaginate from "vue-awesome-paginate";
export default {
  components: {
    VueAwesomePaginate,
  },
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
    const perPage = 4;
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

    const currentPage = ref(1);

    return {
      paginatedData,
      perPage,
      page,
      nextPage,
      backPage,
      goToPage,
      firstPage,
      lastPage,
      currentPage,
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
.paginate-buttons {
  width: 40px;
  height: 40px;
  margin-inline: 5px;
  cursor: pointer;
  border: none;
  background-color: transparent;
  border-radius: 2px;
}
.back-button {
  width: 70px;
}
.next-button {
  width: 70px;
}
.back-button svg {
  transform: rotate(180deg);
}
.active-page {
  background-color: #2980b9;
  color: #fff;
}
.paginate-buttons:hover {
  background-color: #e5e5e5;
}
.active-page:hover {
  background-color: #3b8cc3;
  color: #fff;
}
.back-button:active,
.next-button:active {
  background-color: #dedede;
}
</style>
