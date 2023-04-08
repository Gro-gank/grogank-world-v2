<template>
  <footer class="footer">
    <div class="credit">
      created by
      <span class="font-bold text-[1.5rem] text-main">Grogank </span> | all
      right reserved
    </div>
  </footer>
  <!-- footer ends -->
</template>

<script>
export default {};
</script>

<style lang="scss">
footer {
  position: relative;
  background-color: #2a2a2a;
  background-size: cover;
  border-top: 0.2rem solid var(--light-color);
  text-align: center;
  bottom: 0;
  left: 0;
}

.footer .credit {
  font-size: 1.3rem;
  color: #fff;
  font-weight: 300;
  padding: 1.5rem;
}
</style>
