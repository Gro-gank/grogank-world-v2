<template>
  <the-header></the-header>
  <sub-header></sub-header>
  <router-view />
  <the-footer></the-footer>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";
import SubHeader from "@/components/mainpage/SubHeader.vue";
import TheFooter from "./components/TheFooter.vue";
export default {
  components: { TheHeader, SubHeader, TheFooter },
};
</script>
<style lang="scss"></style>
