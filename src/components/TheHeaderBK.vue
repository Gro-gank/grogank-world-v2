<template>
  <header
    class="w-full h-16 py-[.5rem] top-0 left-0 justify-between text-[20px] flex bg-[#2a2a2a] bg-opacity-80 fixed lg:px-[15%] md:px-[7%] sm:px-0"
  >
    <div
      class="logo relative lg:w-[25%] md:w-30% sm:w-[70%] font-bold text-[30px] cursor-pointer"
      id="logo"
    >
      <span class="text-yellow-400">Grogank</span> World
    </div>
    <div class="header-middle-side sm:hidden md:block lg:w-[55%] md:w-[45%]">
      <ul class="flex gap-10 items-center py-1 text-[25px]">
        <li>Store</li>
        <li>About</li>
        <li class="user-option w-[10rem]">
          Grogankick
          <ion-icon class="text-[16px]" name="chevron-down-outline"></ion-icon>
          <ul class="user-option-list">
            <li>Profile</li>
            <li>Sign out</li>
          </ul>
        </li>
      </ul>
    </div>
    <div
      class="header-right-side relative flex text-[30px] p-2 gap-3 lg:w-[25%] md:w-[20%] pl-5 text-right"
    >
      <ion-icon name="search-outline"></ion-icon>
      <div class="cart" v-if="fasle">
        <ion-icon name="cart-outline"> </ion-icon>
        <span class="text-[25px]">0</span>
      </div>
      <div class="btn-header flex gap-1 uppercase sm:hidden md:flex">
        <div class="btn">Log In</div>
        <div class="btn">Register</div>
      </div>
      <ion-icon
        name="close-outline"
        class="sm:block"
        @click="handleCloseHeaderMenu()"
        v-if="isOpenHeaderMenu"
      ></ion-icon>
      <ion-icon
        name="menu-outline"
        class="sm:block md:hidden"
        @click="handleOpenHeaderMenu()"
        v-else
      ></ion-icon>
      <ul
        class="w-[380px] h-[350px] text-center z-10 right-[1px] top-16 absolute bg-[#2a2a2a]"
        v-if="isOpenHeaderMenu"
      >
        <li class="p-3">Grogankick</li>
        <li class="p-3">Your Profile</li>
        <li class="p-3">Store</li>
        <li class="p-3">About us</li>
        <li class="p-3">Log out</li>
      </ul>
    </div>
  </header>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const isOpenHeaderMenu = ref(false);
    const handleOpenHeaderMenu = () => {
      isOpenHeaderMenu.value = true;
    };
    const handleCloseHeaderMenu = () => {
      isOpenHeaderMenu.value = false;
    };
    return {
      handleOpenHeaderMenu,
      isOpenHeaderMenu,
      handleCloseHeaderMenu,
    };
  },
};
</script>

<style lang="scss">
#logo {
  &:hover span {
    color: rgb(229 231 235 / var(--tw-text-opacity));
  }
}
.header-middle-side {
  ul {
    li {
      cursor: pointer;
      color: rgb(229 231 235 / var(--tw-text-opacity));
      &:hover {
        color: #fff;
      }
    }
  }
  .user-option {
    &:hover .user-option-list {
      display: block;
    }
    .user-option-list {
      display: none;
      position: absolute;
      padding-top: 1rem;
      width: 10rem;
      font-size: 20px;
      li {
        width: 100%;
        padding: 0.5rem 2rem;
        background: #2a2a2a;
        border-top: 1px solid #fff;
        &:hover {
          background-color: gray;
          opacity: 1;
        }
      }
    }
  }
}
.header-right-side {
  ul {
    li {
      width: 100%;
      border-bottom: 0.1rem solid rgb(18, 18, 18);
    }
  }
}
</style>
