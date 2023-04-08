<template>
  <div
    class="login absolute w-full h-full left-0 top-0 bottom-0 right-0 flex z-50 overflow-hidden text-center justify-center items-center"
  >
    <img
      src="images/bg8.jpg"
      alt=""
      class="absolute w-full h-full object-cover"
    />
    <div
      class="auth-container relative w-[450px] grid gap-4 h-fit rounded-xl py-[20px] px-[50px]"
    >
      <form action="submit" @submit.prevent="handleSubmit">
        <h3 class="mb-[3rem]">
          <span class="text-main">Grogank</span> World Login
        </h3>
        <div class="input-box">
          <input type="email" required v-model="loginForm.email" />
          <label for="">Email</label>
        </div>
        <div class="input-box">
          <input type="password" required v-model="loginForm.password" />
          <label for="">Password</label>
        </div>
        <button class="btn text-[1.4rem] text-center mx-auto">Log In</button>
      </form>
      <div class="auth-footer text-[1rem] grid gap-5">
        <p>
          Don't have an account ?
          <router-link to="/signup" class="text-main text-[1.2rem]"
            >Register</router-link
          >
        </p>
        <div class="flex justify-between underline">
          <p>Forgot password</p>
          <router-link to="/">
            <p>Back to homepage</p>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
export default {
  setup() {
    const store = useStore();
    const router = useRouter();
    const loginForm = reactive({
      email: "",
      password: "",
    });
    const handleSubmit = () => {
      store.dispatch("user/loginAction", { loginForm, router });
    };
    return {
      loginForm,
      handleSubmit,
    };
  },
};
</script>

<style lang="scss">
.auth-container {
  background: transparent;
  border: 2px solid rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(20px);
  justify-content: center;
  align-items: center;
  font-size: 1.4rem;
  color: #fff;
  z-index: 1;
  .input-box {
    position: relative;
    width: 100%;
    margin: 1.6rem 0;
    border-bottom: 2px solid #fff;
    label {
      position: absolute;
      top: 50%;
      left: 0.5rem;
      transform: translateY(-50%);
      color: #fff;
      font-size: 1em;
      pointer-events: none;
      transition: 0.5s;
    }
    input:focus ~ label {
      top: -5px;
      color: yellow;
    }
    input:valid ~ label {
      top: -5px;
      color: yellow;
    }
    input {
      width: 100%;
      height: 50px;
      background: transparent;
      border: none;
      outline: none;
      font-size: 1em;
      padding: 0 35px 0 5px;
      color: #fff;
    }
  }
}
</style>
