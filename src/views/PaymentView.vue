<template>
  <div class="lg:px-[12%] slg:px-[7%] md:px-[5%] sm:px-[1rem] mb-[5rem]">
    <div class="heading text-center text-[1.5rem] my-[3rem]">
      <h1>Payment</h1>
    </div>
    <div
      class="content slg:flex-row sm:flex sm:flex-col-reverse w-full text-[1.2rem]"
    >
      <div class="user-info slg:w-[70%] md:w-full slg:my-0 ms:my-[3rem]">
        <p class="mb-[2rem]">Payment Info:</p>
        <p>Name: {{ user[0].firstName }} {{ user[0].lastName }}</p>
        <p>Email: {{ user[0].email }}</p>
        <p class="mt-[2rem]">Choose payment method:</p>
        <div class="grid gap-3 ml-[2rem] mb-[2rem]">
          <label class="check-box"
            >Paypal
            <input type="radio" checked="checked" name="radio" />
            <span class="checkmark"></span>
          </label>

          <label class="check-box"
            >Credit card (Visa/MasterCard)
            <input type="radio" name="radio" />
            <span class="checkmark"></span>
          </label>
        </div>

        <button class="btn" @click="handlePay">Place payment</button>
      </div>
      <div class="user-info slg:w-[30%] md:w-full text-left">
        <p class="mb-[2rem]">Payment Overview:</p>
        <img :src="item[0].imageSpan" alt="" />
        <div class="">
          <p>Name: {{ item[0].name }}</p>
          <p>Developer: {{ item[0].developer }}</p>
          <div class="price mt-3">
            <div class="flex gap-2 sm:mx-auto" v-if="item[0].isSale == true">
              <div class="sale-icon">sale</div>
              <span class="line-through text-[1.1rem]"
                >{{ item[0].price }}$</span
              >
              >
              <span class="text-[1.1rem]">{{ item[0].salePrice }}$</span>
            </div>
            <span v-else>Price: {{ item[0].price }}$</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, reactive } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
export default {
  setup() {
    const store = useStore();
    const router = useRouter();
    const item = computed(() => store.state.items.itemDetail);
    const user = computed(() => store.state.user.user);
    const userPersonal = computed(() => store.state.user.userPersonal);
    const payment = reactive({
      itemId: item.value[0].itemId,
      name: item.value[0].name,
      price: item.value[0].price,
      sale: item.value[0].isSale,
      image: item.value[0].imageSpan,
    });
    const handlePay = () => {
      userPersonal.value[0].paymentHistory = [
        ...userPersonal.value[0].paymentHistory,
        payment,
      ];
      const newpayment = userPersonal.value[0];
      store.dispatch("user/payAction", { newpayment, router });
    };
    return {
      item,
      user,
      handlePay,
    };
  },
};
</script>

<style></style>
