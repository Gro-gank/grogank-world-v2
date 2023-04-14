<template>
  <header class="flex h-14 bg-[#2a2a2a] z-[500]">
    <div class="left-side-header flex gap-8 sm:w-[67%]">
      <router-link to="/">
        <div class="logo py-3 pl-2 text-[1.5rem] sm:w-[100%] font-bold">
          <span class="text-main">Grogank</span> World
        </div></router-link
      >
      <div class="header-list ml-4 sm:hidden md:flex">
        <ul class="flex my-auto gap-10 font-medium text-lg">
          <li><router-link to="/browse">Store</router-link></li>
          <li><router-link to="/about">About us </router-link></li>
        </ul>
      </div>
    </div>
    <div class="right-side-header sm:w-[33%] my-auto">
      <div class="flex text-right">
        <div class="sm:w-[65%] md:w-[90%] my-auto pr-8">
          <h1
            class="user-name mr-2 font-medium text-lg sm:hidden md:block"
            v-if="user[0]"
          >
            {{ user[0].lastName }}
            <ion-icon
              name="chevron-down-outline"
              class="sm:hidden md:inline-block text-sm"
            ></ion-icon>
            <div
              class="header-list-lg hidden absolute w-[10rem] right-[4rem] top-[2.5rem] bg-[#2a2a2a] rounded-sm"
            >
              <ul class="py-2 pt-6 grid gap-2 text-center">
                <li>
                  <router-link to="/account">Account</router-link>
                </li>
                <li>Cart</li>
                <li>Wishlist</li>
                <li @click="handleLogout">Log Out</li>
              </ul>
            </div>
          </h1>
          <router-link to="/login" v-else>
            <h1
              class="mr-2 text-main font-medium text-lg cursor-pointer sm:hidden md:block"
            >
              Log In
            </h1>
          </router-link>
        </div>

        <div class="w-[10%] sm:block md:hidden">
          <ion-icon
            name="menu-outline"
            class="text-[1.5rem]"
            @click="handleOpenHeaderMenu"
            v-if="isOpenHeaderMenu == false"
          ></ion-icon>
        </div>
      </div>
    </div>
  </header>
  <div
    class="header-list-mobile mt-[4rem] absolute h-fit w-full bg-[#2a2a2a] z-20"
    v-if="isOpenHeaderMenu"
  >
    <ul class="grid relative gap-y-8 py-6 text-center">
      <li v-if="user[0]">{{ user[0].firstName }} {{ user[0].lastName }}</li>
      <li v-if="user[0]">
        <router-link to="/account/{{profile}}">Account</router-link>
      </li>
      <li v-else><router-link to="/login">Log In</router-link></li>
      <li><router-link to="/browse">Discover Store</router-link></li>
      <li><router-link to="/about">About us </router-link></li>
      <li v-if="user[0]" @click="handleLogout">Log Out</li>
      <li>
        <ion-icon
          name="close-outline"
          class="text-[1.5rem]"
          @click="handleCloseHeaderMenu"
          v-if="isOpenHeaderMenu == true"
        ></ion-icon>
      </li>
    </ul>
  </div>
</template>

<script>
import { computed, ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
export default {
  setup() {
    const isOpenHeaderMenu = ref(false);
    const handleOpenHeaderMenu = () => {
      isOpenHeaderMenu.value = true;
    };
    const handleCloseHeaderMenu = () => {
      isOpenHeaderMenu.value = false;
    };
    const store = useStore();
    const router = useRouter();
    store.dispatch("user/loadUserLoginFromLocalStorageAction");
    const user = computed(() => store.state.user.user);
    const handleLogout = () => {
      store.dispatch("user/logoutAction", router);
    };
    return {
      handleOpenHeaderMenu,
      isOpenHeaderMenu,
      handleCloseHeaderMenu,
      user,
      handleLogout,
    };
  },
};
</script>

<style lang="scss">
.logo {
  &:hover {
    span {
      color: #cccccc;
    }
  }
}
.left-side-header {
  .header-list {
    ul {
      li {
        cursor: pointer;
        &:hover {
          color: #fff;
        }
      }
    }
  }
}
.user-name {
  cursor: pointer;
  &:hover {
    color: var(--light-yellow);
    .header-list-lg {
      display: block;
    }
  }

  .header-list-lg {
    z-index: 100;
    li {
      color: rgb(#cccccc, 0.8);
      &:hover {
        color: #cccccc;
      }
    }
  }
}
</style>
