<template>
  <div
    class="absolute top-0 left-0 right-0 bottom-0 h-full w-full flex bg-[gray] bg-opacity-40 z-20 items-center justify-center text-center"
    v-if="isOpenModal"
  >
    <div
      class="modal-box relative slg:w-[70%] sm:w-full h-fit bg-[#2a2a2a] mt-[3rem] rounded-lg"
    >
      <div class="modal-header w-full flex justify-between">
        <h2 class="text-[1.5rem]">Edit</h2>
        <button class="sale-icon h-fit rounded-none" @click="handleClose">
          <ion-icon name="close-outline"></ion-icon>
        </button>
      </div>
      <div class="modal-body p-[1rem] text-left">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
// import { ref } from "vue";
export default {
  props: {
    isOpenModal: {
      type: Boolean,
    },
    handleCloseModal: {
      type: Function,
    },
  },
  setup(props) {
    const handleClose = () => {
      props.handleCloseModal();
    };
    return {
      handleClose,
    };
  },
};
</script>

<style></style>
