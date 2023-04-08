<template>
  <keep-alive>
    <div class="py-[4rem]" v-if="userPersonal[0].paymentHistory">
      <div
        v-for="(item, index) in userPersonal[0].paymentHistory"
        :key="index"
        class="my-4 flex border-b"
      >
        <img :src="item.image" alt="" class="w-[30%] rounded-md" />
        <div class="ml-[2rem] w-[70%]">
          <p>Name: {{ item.name }}</p>

          <div class="price my-6 sm:flex sm:text-center">
            <div class="flex gap-2 sm:mx-auto" v-if="item.isSale == true">
              <div class="sale-icon">sale</div>
              <span class="line-through text-[1.1rem]">{{ item.price }}$</span>
              >
              <span class="text-[1.1rem]">{{ item.salePrice }}$</span>
            </div>
            <span v-else>Price: {{ item.price }}$</span>
          </div>
          <div class="btn-list flex w-full justify-between">
            <div class=""></div>
            <div class="flex gap-[2rem]">
              <button class="btn">
                <router-link :to="`/detail/${item.itemId}`"
                  >Go to detail</router-link
                >
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="py-[4rem] mb-[20rem]" v-else>
      <p>You have not buy yet</p>
    </div>
  </keep-alive>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  // props: {
  //   userPersonal: {
  //     type: Array,
  //   },
  // },
  setup() {
    const store = useStore();
    const userPersonal = computed(() => store.state.user.userPersonal);
    // const { userPersonal } = toRefs(props);
    // const cartList = userPersonal.value[0].cart;
    return {
      userPersonal,
    };
  },
};
</script>

<style></style>
