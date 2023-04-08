<template>
  <div class="slg:flex-row sm:flex sm:flex-col-reverse sm:justify-center">
    <div class="md:w-[70%] sm:w-full">
      <form action="submit" class="gap-2 w-full">
        <div class="flex">
          <div class="label grid gap-4 w-fit">
            <label for="name">First Name :</label>
            <label for="name">Last Name :</label>
            <label for="email">Email :</label>
            <label for="password">Password :</label>
            <label for="text">Birthday :</label>
            <label for="text">Avatar link :</label>
          </div>

          <div class="input-box grid gap-4 w-[70%]">
            <input type="text" v-model="newUser.firstName" />

            <input type="text" v-model="newUser.lastName" />

            <input type="text" v-model="newUser.email" />

            <input type="text" v-model="newUser.password" />
            <input type="text" v-model="newUser.birthday" />
            <input type="text" v-model="newUser.avatar" />
          </div>
        </div>
        <div
          class="btn w-[10rem] text-center mt-[5rem]"
          @click="handleSaveProfile"
        >
          Save
        </div>
      </form>
    </div>
    <div class="md:w-[30%] sm:w-full my-[2rem] mx-auto">
      <img :src="newUser.avatar" alt="" />
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
import { useStore } from "vuex";
export default {
  props: {
    user: {
      type: Object,
    },
  },
  setup(props) {
    const { user } = toRefs(props);
    const newUser = reactive({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      birthday: "",
      avatar: "",
      userId: "",
    });
    if (user.value) {
      newUser.firstName = user.value.firstName;
      newUser.lastName = user.value.lastName;
      newUser.email = user.value.email;
      newUser.password = user.value.password;
      newUser.birthday = user.value.birthday;
      newUser.avatar = user.value.avatar;
      newUser.userId = user.value.userId;
    }
    const store = useStore();
    const handleSaveProfile = () => {
      store.dispatch("user/updateProfileAction", newUser);
    };
    return {
      newUser,
      handleSaveProfile,
    };
  },
};
</script>

<style lang="scss" scoped>
.input-box {
  input {
    width: 90%;
    background-color: var(--black);
    border: 1px solid #fff;
    padding: 0.5rem;
  }
}
</style>
