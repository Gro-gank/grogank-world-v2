<template>
  <div class="sidebar w-full h-fit sticky top-[10rem] mb-4">
    <img :src="item.imageSpan" alt="" class="rounded-xl w-full" />
    <div class="price my-6 sm:flex sm:text-center">
      <div class="flex gap-2 sm:mx-auto" v-if="item.isSale == true">
        <div class="sale-icon">sale</div>
        <span class="line-through text-[1.1rem]">{{ item.price }}$</span> >
        <span class="text-[1.1rem]">{{ item.salePrice }}$</span>
      </div>
      <span v-else>Price: {{ item.price }}$</span>
    </div>
    <div
      class="button-list w-[85%] mx-auto items-center text-center my-6 grid gap-3"
    >
      <a @click="handlePay">
        <button
          class="p-1 bg-[red] w-full text-[#ffffff] rounded-md hover:bg-opacity-70 hover:text-main"
        >
          GET
        </button>
      </a>

      <button class="p-1 normal-btn w-full" @click="handleAddtoCart">
        Add to cart
      </button>
      <button class="p-1 normal-btn w-full">Add to wishlist</button>
    </div>
    <div class="addition-info px-3 grid gap-3">
      <div class="flex justify-between pb-2 border-b-[1px]">
        <span>Developer:</span>
        <span>{{ item.developer }}</span>
      </div>
      <div class="flex justify-between pb-2 border-b-[1px]">
        <span>Release:</span>
        <span>{{ item.release }}</span>
      </div>
      <div class="flex justify-between pb-2 border-b-[1px]">
        <span>Platform:</span>
        <span>Windows</span>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";
import { computed, reactive, toRefs } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
export default {
  props: {
    item: {
      type: Object,
    },
  },
  setup(props) {
    const store = useStore();
    const { item } = toRefs(props);
    const router = useRouter();
    const handleAddtoCart = () => {
      try {
        const userPersonal = computed(() => store.state.user.userPersonal);
        const cartItem = reactive({
          itemId: item.value.itemId,
          name: item.value.name,
          sale: item.value.isSale,
          price: item.value.price,
          salePrice: item.value.salePrice,
          image: item.value.imageSpan,
        });
        userPersonal.value[0].cart = [...userPersonal.value[0].cart, cartItem];
        const newCart = userPersonal.value[0];
        store.dispatch("user/updateCartAction", { newCart });
        console.log(newCart.userId);
        // store.dispatch("user/getUserPersonalAction", );
      } catch (error) {
        console.log(error);
        Swal.fire({
          icon: "warning",
          title: "You should Login to continue!",
          showConfirmButton: true,
        });
      }
    };
    const handlePay = () => {
      const user = computed(() => store.state.user.user);
      if (user.value[0]) {
        console.log(user.value);
        router.push(`/payment/${item.value.itemId}`);
      } else {
        Swal.fire({
          icon: "warning",
          title: "You should Login to continue!",
          showConfirmButton: true,
        });
      }
    };
    return {
      handleAddtoCart,
      handlePay,
    };
  },
};
</script>

<style></style>
