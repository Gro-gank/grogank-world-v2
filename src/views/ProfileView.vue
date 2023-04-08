<template>
  <div class="lg:px-[12%] slg:px-[7%] md:px-[5%] sm:px-[1rem]">
    <div class="heading text-center text-[1.5rem]">
      <h1>Account Management</h1>
    </div>
    <div class="navbar w-full mt-[2rem]">
      <ul class="grid grid-cols-4 text-center items-center">
        <li @click="handleChooseView(1)" :class="{ active: chooseView == 1 }">
          Profile
        </li>
        <li @click="handleChooseView(2)" :class="{ active: chooseView == 2 }">
          Cart
        </li>
        <li @click="handleChooseView(3)" :class="{ active: chooseView == 3 }">
          Payment History
        </li>
        <li @click="handleChooseView(4)" :class="{ active: chooseView == 4 }">
          Wishlist
        </li>
      </ul>
    </div>
    <div>
      <account-profile v-if="chooseView == 1"></account-profile>
      <account-cart v-if="chooseView == 2"></account-cart>
      <account-payment-history v-if="chooseView == 3"></account-payment-history>
      <account-wishlist v-if="chooseView == 4"></account-wishlist>
    </div>
  </div>
</template>

<script>
import AccountProfile from "@/components/account/AccountProfile.vue";
import AccountCart from "@/components/account/AccountCart.vue";
import AccountWishlist from "@/components/account/AccountWishlist.vue";
import AccountPaymentHistory from "@/components/account/AccountPaymentHistory.vue";
import { ref } from "vue";
export default {
  components: {
    AccountProfile,
    AccountCart,
    AccountWishlist,
    AccountPaymentHistory,
  },
  setup() {
    const chooseView = ref("1");
    const handleChooseView = (value) => {
      chooseView.value = value;
    };

    return {
      chooseView,
      handleChooseView,
    };
  },
};
</script>

<style lang="scss" scoped>
.navbar {
  ul {
    li {
      padding: 1rem 0;
      cursor: pointer;
      width: 100%;
      height: 100%;
      a {
        display: block;
        padding: 1rem 0;
        width: 100%;
        height: 100%;
      }
    }
  }
}
.active {
  border: 1px solid #fff;
  color: var(--light-yellow);
}
</style>
