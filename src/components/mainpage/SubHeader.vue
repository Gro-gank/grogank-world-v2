<template>
  <div
    class="sub-header sticky top-0 mx-auto lg:px-[12%] slg:px-[7%] md:px-[5%] sm:px-[2rem] py-5 flex justify-between z-10"
  >
    <div class="flex gap-8 md:w-[50%] items-center">
      <div class="search-form">
        <input
          type="search"
          class="nosubmit rounded-3xl bg-[#2a2a2a] p-2 pl-10 text-base md:block sm:hidden"
          placeholder="Search store"
          v-model="keyword"
          ref="input"
        />
        <ion-icon
          name="search-outline"
          class="text-[1.5rem] ml-5 md:hidden sm:block"
          @click="handleOpenSearchForm"
        ></ion-icon>
      </div>
      <div
        class="search-list absolute top-[4.5rem] bg-[#2a2a2a] w-[20rem] z-40 md:block sm:hidden"
        v-if="itemList.length > 0 && keyword && input.focus"
      >
        <ul class="grid gap-5">
          <li v-for="(item, index) in itemList.slice(0, 3)" :key="index">
            <router-link
              :to="`/detail/${item.itemId}`"
              class="flex gap-2 items-center"
            >
              <img :src="item.imageSpan" class="w-[6rem] h-[4rem]" alt="" />
              <div>
                <p>{{ item.name }}</p>
              </div>
            </router-link>
          </li>
          <li v-if="itemList.length > 3">More ...</li>
        </ul>
      </div>
      <ul class="md:flex md:gap-9 sm:hidden text-[gray]">
        <li><router-link to="/">Discover</router-link></li>
        <li><router-link to="/browse">Browse</router-link></li>
        <li>News</li>
      </ul>
    </div>
    <div class="flex items-center">
      <ul class="flex md:gap-8 sm:gap-2">
        <li><router-link to="/">Wishlist</router-link></li>
        <li class="flex">
          <router-link to="/">Cart</router-link>
          <div class="ml-1 px-1 bg-opacity-50 text-main text-black rounded-lg">
            <span v-if="userPersonal[0]"
              >({{ userPersonal[0].cart.length }})</span
            >
            <span v-else>(0)</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
  <div
    class="search-form-moblie text-center z-10 fixed"
    v-if="isOpenSearchForm"
  >
    <div class="flex h-[10%]">
      <input
        ref="myinput"
        type="search"
        class="nosubmit bg-[#2a2a2a] h-full p-2 pl-8 text-[1.5rem]"
        placeholder="search store"
        v-model="keyword"
      />
      <div class="h-full bg-[#2a2a2a] py-1" @click="handleCloseSearchForm">
        <ion-icon name="close-outline" class="text-[3.5rem] my-auto"></ion-icon>
      </div>
    </div>

    <ul
      class="bg-[#2a2a2a] grid gap-2 text-left mt-2"
      v-if="itemList.length > 0 && keyword"
    >
      <li
        v-for="(item, index) in itemList.slice(0, 3)"
        :key="index"
        class="flex gap-3 items-center"
      >
        <img :src="item.imageSpan" class="w-[9rem] h-[6rem]" alt="" />
        <div>
          <p>{{ item.name }}</p>
        </div>
      </li>
      <li v-if="itemList.length > 3">More ...</li>
    </ul>
  </div>
</template>

<script>
import { computed, ref, watch } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    const userPersonal = computed(() => store.state.user.userPersonal);
    const keyword = ref();
    const input = ref();
    watch(keyword, (newValue) => {
      store.dispatch("items/getItembySearchAction", newValue);
    });
    const itemList = computed(() => store.state.items.itemList);
    const isOpenSearchForm = ref(false);
    const handleOpenSearchForm = () => {
      isOpenSearchForm.value = true;
    };
    const handleCloseSearchForm = () => {
      isOpenSearchForm.value = false;
      keyword.value = null;
    };
    return {
      isOpenSearchForm,
      handleOpenSearchForm,
      handleCloseSearchForm,
      userPersonal,
      keyword,
      itemList,
      input,
    };
  },
};
</script>

<style lang="scss">
.sub-header {
  color: var(--light-color);
  background: rgb(18, 18, 18);
  .search-form {
    input {
      border: 0.1rem solid #2a2a2a;
      &:focus {
        outline: none;
      }
      &::-webkit-search-cancel-button {
        -webkit-appearance: none;
      }
    }
  }
  input.nosubmit {
    background-image: url("https://icon-library.com/images/search-icon-white/search-icon-white-16.jpg");
    background-size: 10%;
    background-repeat: no-repeat;
    background-position: 8px center;
  }
  ul {
    li {
      cursor: pointer;
      &:hover {
        color: #fff;
      }
    }
  }
  .search-list {
    border-radius: 0.25em;
    ul {
      padding: 0.5rem;
      border-radius: 0.25em;
    }
  }
}
.search-form-moblie {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgb(gray, 0.5);

  input {
    width: 95%;
    border: 0.1rem solid #2a2a2a;
    &:focus {
      outline: none;
    }
    &::-webkit-search-cancel-button {
      -webkit-appearance: none;
    }
  }
  ul {
    border-radius: 0.5rem;
    li {
      padding: 1rem;
      border-bottom: 0.1rem solid var(--light-color);
      // border-radius: 0.5rem;
    }
  }
}
</style>
