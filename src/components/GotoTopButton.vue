<template>
  <a @click="gotoTop" id="button" title="Go to top" :class="{ show: isTop }"
    ><ion-icon name="chevron-up-outline"></ion-icon
  ></a>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const isTop = ref(false);
    window.addEventListener("scroll", () => {
      let scrollPosition = window.scrollY;
      if (scrollPosition >= 200) {
        isTop.value = true;
      } else {
        isTop.value = false;
      }
    });
    const gotoTop = () => {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    };
    return { isTop, gotoTop };
  },
};
</script>

<style lang="scss" scoped>
#button {
  position: fixed;
  bottom: 3rem;
  right: 3rem;
  z-index: 99;
  height: 2rem;
  width: 2rem;
  padding: 0.1rem;
  text-align: center;

  color: red;
  cursor: pointer;
  border-radius: 10px;
  transform: scaleY(0);
  font-size: 2rem;
  transition: 0.7s;
  visibility: hidden;
  &:hover {
    color: var(--light-yellow);
  }

  &.show {
    visibility: visible;
    transform: scaleY(1);
  }
}
</style>
