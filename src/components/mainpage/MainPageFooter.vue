<template>
  <div class="mx-auto md:px-[10%] sm:px-[2%] my-[5rem] border-t pt-[5rem]">
    <div class="content md:flex sm:block gap-[3rem]">
      <router-link to="/browse">
        <!-- <img src="https://wallpaperaccess.com/full/4882904.jpg" alt="" /> -->
        <img
          src="https://wallpaperaccess.com/full/774615.jpg"
          alt=""
          class="md:w-[640px] md:h-[360px] rounded-xl sm:h-[300px] sm:w-[700px]"
        />
      </router-link>

      <div class="right-side items-center h-full my-auto grid gap-[3rem]">
        <router-link to="/browse">
          <h2 class="text-[1.5rem] text-main">
            Explore Our Catalog
          </h2></router-link
        >
        <p>
          Browse by genre, features, price, and more to find your next favorite
          game.
        </p>
        <router-link to="/browse" class="normal-btn w-fit"
          >BROWSE ALL</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.content {
  img {
    &:hover {
      scale: 1.05;
    }
  }
}
</style>
