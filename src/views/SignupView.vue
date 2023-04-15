<template>
  <div
    class="login absolute w-full h-full left-0 top-0 bottom-0 right-0 flex z-[500] overflow-hidden text-center justify-center items-center"
  >
    <img
      src="images/bg5.png"
      alt=""
      class="absolute w-full h-full object-cover"
    />
    <div
      class="auth-container relative w-[450px] grid gap-4 h-fit rounded-xl py-[20px] px-[50px]"
    >
      <form action="submit" @submit.prevent="handleSubmit">
        <h3><span class="text-main">Grogank</span> World Register</h3>
        <div class="input-box">
          <input type="email" required v-model="registerForm.email" />
          <label for="">Email</label>
        </div>
        <div class="input-box">
          <input type="password" required v-model="registerForm.password" />
          <label for="">Password</label>
        </div>
        <div class="input-box">
          <input
            type="password"
            required
            v-model="registerForm.repeatPassword"
          />
          <label for="">Repeat Password</label>
        </div>
        <div class="flex gap-2 mb-5">
          <div class="input-box">
            <input type="name" required v-model="registerForm.firstName" />
            <label for="">First Name</label>
          </div>
          <div class="input-box">
            <input type="name" required v-model="registerForm.lastName" />
            <label for="">Last Name</label>
          </div>
        </div>
        <div class="birthday-box w-full mb-8 text-left">
          <label for="birthday"
            >Enter your day of birth
            <div class="flex gap-3">
              <select name="" id="year" v-model="registerForm.year">
                <option>Year</option>
                <option v-for="(year, index) in yearList" :key="index">
                  {{ year }}
                </option>
              </select>
              <select name="" id="month" v-model="registerForm.month">
                <option value="">Month</option>
                <option v-for="(month, index) in monthList" :key="index">
                  {{ month }}
                </option>
              </select>
              <select name="" id="day" v-model="registerForm.day">
                <option value="">Day</option>
                <option v-for="(day, index) in dayList" :key="index">
                  {{ day }}
                </option>
              </select>
            </div>
          </label>
        </div>
        <button class="btn text-[1.4rem] text-center mx-auto">Register</button>
      </form>
      <div class="auth-footer text-[1rem] grid gap-5">
        <p>
          Already have an account ?
          <router-link to="/login" class="text-main text-[1.2rem]"
            >Log in</router-link
          >
        </p>
        <div class="text-center underline">
          <router-link to="/">
            <p class="hover:text-main">Back to homepage</p>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";
import { createArrayofNumber, randomId } from "@/utilities/myutils";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import Swal from "sweetalert2";
export default {
  setup() {
    const yearList = createArrayofNumber(1970, 2013);
    const monthList = createArrayofNumber(1, 12);
    const dayList = createArrayofNumber(1, 31);
    const store = useStore();
    const router = useRouter();
    const registerForm = reactive({
      email: "",
      password: "",
      repeatPassword: "",
      lastName: "",
      firstName: "",
      year: "",
      month: "",
      day: "",
    });
    const handleSubmit = () => {
      if (registerForm.password === registerForm.repeatPassword) {
        const userData = {
          firstName: registerForm.firstName,
          lastName: registerForm.lastName,
          email: registerForm.email,
          password: registerForm.password,
          birthday: `${registerForm.year}/${registerForm.month}/${registerForm.day} `,
          type: "CLIENT",
          avatar: "",
          userId: randomId(),
        };
        const dataPersional = {
          name: registerForm.lastName,
          userId: userData.userId,
          avatar: "",
          email: registerForm.email,
          cart: [],
          wishList: [],
          paymentHistory: [],
        };
        console.log("userdata", userData);
        store.dispatch("user/registerAction", { userData, router });
        store.dispatch("user/createUserPersonalAction", dataPersional);
      } else
        Swal.fire({
          icon: "error",
          title: "Password and repeat password aren't match!",
          showConfirmButton: true,
        });
    };
    return {
      registerForm,
      yearList,
      monthList,
      dayList,
      handleSubmit,
    };
  },
};
</script>

<style lang="scss">
.birthday-box {
  select {
    width: 30%;
    padding: 0.2rem;
    background-color: transparent;
    border-radius: 0.2rem;
    border: 0.1rem solid var(--light-color);
  }
  option {
    background-color: black;

    &:hover {
      background-color: rgba($color: #888585, $alpha: 0.2);
    }
  }
}
</style>
