<template>
  <div class="container mx-auto mb-[5rem]">
    <h2 class="text-[1.2rem] font-bold text-center">About me</h2>
    <div class="content my-[2rem] flex w-full justify-between pr-[2rem]">
      <div>
        <div class="info flex">
          <div class="">
            <p>Name: Phạm Đăng Thắng (Grogank)</p>
            <p>Birthday: 2000/08/20</p>
            <p>Address: quận Tân Binh, TP Hồ Chí Minh</p>
            <p>
              Education : Academy of Cryptography Techniques Ho Chi Minh (from
              2018)
            </p>
          </div>
        </div>

        <div class="social mt-[1rem]">
          <p class="link">Social :</p>
          <div>
            <p>
              <ion-icon name="mail-outline"></ion-icon> Email:
              <a href="grogankick@gmail.com" class="link"
                >grogankick@gmail.com</a
              >
            </p>
          </div>
          <div>
            <p>
              <ion-icon name="logo-github"></ion-icon>Github:

              <a href="https://github.com/Gro-gank" class="link"
                >https://github.com/Gro-gank</a
              >
            </p>
          </div>
          <div>
            <p>
              <ion-icon name="logo-facebook"></ion-icon>Facebook:

              <a class="link" href="https://www.facebook.com/grogankk"
                >https://www.facebook.com/grogankk</a
              >
            </p>
          </div>
        </div>
        <div class="mt-[1rem]">
          <p class="mb-[.2rem] link">About the app:</p>
          <div class="flex">
            <p>Create at: 2023/04/03</p>
          </div>
          <div class="framework">
            <p class="">Technology :</p>
            <div class="flex pl-[.5rem]">
              <p>- Framework:</p>
              <ion-icon
                name="logo-vue"
                class="text-[rgb(66,184,131)] text-[1.3rem]"
              >
              </ion-icon>
              <p>VueJS 3</p>
            </div>
            <div class="flex pl-[.5rem]">
              <p>
                - Vue library: Composition API, VueX, Vue Router, Vue Sweetalert
                2
              </p>
            </div>
            <div class="flex pl-[.5rem]">
              <p>- HTLM, CSS, Javascript</p>
            </div>
            <div class="flex pl-[.5rem]">
              <p>- Tailwind CSS, SCSS</p>
            </div>
            <div class="flex pl-[.5rem]">
              <p>- MockApi.io, Axios</p>
            </div>

            <div class="flex pl-[.5rem]">
              <p>- Hosting: Netlify</p>
            </div>
            <div class="">
              Source code:
              <a
                href="https://github.com/Gro-gank/grogank-world-v2"
                class="link"
                >https://github.com/Gro-gank/grogank-world-v2</a
              >
            </div>
          </div>
        </div>
      </div>
      <div>
        <img
          src="https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg"
          class="w-[200px] h-[200px]"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.link {
  color: var(--light-yellow);
}
</style>
