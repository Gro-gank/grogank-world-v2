<template>
  <div class="my-[2rem] flex mb-[10rem]">
    <div class="bio w-[75%]">
      <p>User ID: {{ user[0].userId }}</p>
      <p>Name: {{ user[0].firstName }} {{ user[0].lastName }}</p>
      <p>Email: {{ user[0].email }}</p>
      <p>Birthday: {{ user[0].birthday }}</p>
      <p>Joined:{{ user[0].createdAt }}</p>
      <button class="btn mt-[3rem] w-[4rem]" @click="handleOpenModalEdit">
        Edit
      </button>
    </div>
    <div class="avatar w-[25%]">
      <img :src="user[0].avatar" alt="" />
    </div>
  </div>
  <app-modal
    :isOpenModal="isOpenModalEdit"
    :handleCloseModal="handleCloseModalEdit"
  >
    <edit-profile :user="user[0]"></edit-profile>
  </app-modal>
</template>

<script>
import { computed, ref } from "vue";
import { useStore } from "vuex";
import AppModal from "../AppModal.vue";
import EditProfile from "./EditProfile.vue";
export default {
  components: { AppModal, EditProfile },
  setup() {
    const store = useStore();
    const user = computed(() => store.state.user.user);

    const isOpenModalEdit = ref(false);
    const handleOpenModalEdit = () => {
      isOpenModalEdit.value = true;
    };
    const handleCloseModalEdit = () => {
      isOpenModalEdit.value = false;
    };
    return {
      user,
      handleOpenModalEdit,
      isOpenModalEdit,
      handleCloseModalEdit,
    };
  },
};
</script>

<style></style>
