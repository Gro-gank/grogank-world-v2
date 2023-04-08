<template>
  <keep-alive>
    <div class="py-[4rem]" v-if="userPersonal[0].cart">
      <div
        v-for="(cart, index) in userPersonal[0].cart"
        :key="index"
        class="my-4 flex border-b"
      >
        <img :src="cart.image" alt="" class="w-[30%] rounded-md" />
        <div class="ml-[2rem] w-[70%]">
          <p>{{ cart.name }}</p>
          <div class="price my-6 sm:flex sm:text-center">
            <div class="flex gap-2 sm:mx-auto" v-if="cart.isSale == true">
              <div class="sale-icon">sale</div>
              <span class="line-through text-[1.1rem]">{{ cart.price }}$</span>
              >
              <span class="text-[1.1rem]">{{ cart.salePrice }}$</span>
            </div>
            <span v-else>Price: {{ cart.price }}$</span>
          </div>
          <div class="btn-list flex w-full justify-between">
            <div class=""></div>
            <div class="flex gap-[2rem]">
              <button class="btn">
                <router-link :to="`/detail/${cart.itemId}`"
                  >Go to detail</router-link
                >
              </button>
              <ion-icon
                name="trash-outline"
                class="text-[2rem] cursor-pointer"
                @click="handleDeleteCart(index)"
              ></ion-icon>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="py-[4rem] mb-[20rem]" v-else>
      <p>You have 0 item in your Cart</p>
    </div>
  </keep-alive>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    const userPersonal = computed(() => store.state.user.userPersonal);
    // const cartList = userPersonal.value[0].cart;
    const cartList = userPersonal.value[0].cart;
    const handleDeleteCart = (index) => {
      cartList.splice(index, 1);
      userPersonal.value[0].cart = cartList;
      store.dispatch("user/deleteCartAction", userPersonal.value[0]);
    };
    return {
      handleDeleteCart,
      userPersonal,
    };
  },
};
</script>

<style></style>
