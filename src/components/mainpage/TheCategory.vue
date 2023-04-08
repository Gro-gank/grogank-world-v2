<template>
  <div
    class="slg:px-[10%] md:px-[5%] sm:px-0 mx-auto my-[5rem] pt-[2rem] border-t"
  >
    <p class="text-center font-bold text-[1.3rem] mb-[2rem]">Browse category</p>
    <div
      class="category-content grid slg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-2 w-full"
    >
      <router-link to="/browse" @click="handleChooseCategory('action')">
        <div class="category-item text-center text-[1.3rem]">
          <img src="images/category/action-game.jpg" alt="" />
          <p>Action</p>
        </div>
      </router-link>
      <router-link to="/browse" @click="handleChooseCategory('adventure')"
        ><div class="category-item text-center text-[1.3rem]">
          <img src="images/category/adventure-game.png" alt="" />
          <p>Adventure</p>
        </div></router-link
      >
      <router-link to="/browse" @click="handleChooseCategory('sport')">
        <div class="category-item text-center text-[1.3rem]">
          <img src="images/category/sport.jpg" alt="" />
          <p>Sport</p>
        </div></router-link
      >
      <router-link to="/browse" @click="handleChooseCategory('strategy')"
        ><div class="category-item text-center text-[1.3rem]">
          <img src="images/category/strategy.jpg" alt="" />
          <p>Strategy</p>
        </div></router-link
      >
      <router-link to="/browse" @click="handleChooseCategory('order')">
        <div class="category-item text-center text-[1.3rem]">
          <img src="images/category/indie.jpg" alt="" />
          <p>Order</p>
        </div></router-link
      >
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.category-item {
  img {
    border: 0.5rem solid black;
    width: 100%;
    height: 10rem;
  }
  &:hover {
    scale: 1.1;
    img {
      border: 0.2rem solid yellow;
    }
  }
}
</style>
