<template>
  <div class="banner">
    <img src="images/banner/stars.png" alt="" id="stars" ref="stars" />
    <img src="images/banner/moon.png" alt="" id="moon" ref="moon" />
    <img
      src="images/banner/mountains_behind.png"
      alt=""
      id="mountains_behind"
      ref="mountains_behind"
    />
    <h2 class="slg:text-[7vh] sm:text-[5vh] font-bold" id="text" ref="text">
      <span class="text-main">Grogank</span> World
    </h2>
    <img
      src="images/banner/mountains_front.png"
      alt=""
      id="mountains_front"
      ref="mountains_front"
    />
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const stars = ref();
    const moon = ref();
    const text = ref();
    const mountains_behind = ref();
    const mountains_front = ref();
    window.addEventListener("scroll", () => {
      let value = window.scrollY;
      stars.value.style.left = value * 0.25 + "px";
      moon.value.style.top = value * 1.05 + "px";
      mountains_behind.value.style.top = value * 0.5 + "px";
      mountains_front.value.style.top = value * 0 + "px";
      text.value.style.marginTop = value * 1 + "px";
    });
    return {
      stars,
      moon,
      text,
      mountains_behind,
      mountains_front,
    };
  },
};
</script>

<script></script>
<style lang="scss" scoped>
.banner {
  position: relative;
  width: 100%;
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    object-fit: cover;
    pointer-events: none;
  }
}
.banner::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100px;
  bottom: -100px;
  background: linear-gradient(to top, #2a2a2a2a, transparent);
  z-index: 100;
}
img#moon {
  mix-blend-mode: screen;
}

img#mountains_front {
  z-index: 10;
}
#text {
  position: absolute;
  white-space: nowrap;
  z-index: 9;
  transition: 1s;
}
</style>
