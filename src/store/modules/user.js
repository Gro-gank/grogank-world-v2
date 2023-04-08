import {
  createPersionalApi,
  deleteCartApi,
  getPersonalApi,
  getUserApi,
  paymentApi,
  registerApi,
  updateCartApi,
  updateProfileApi,
} from "@/api/user";
import Swal from "sweetalert2";
const state = () => {
  return {
    user: [],
    userPersonal: [],
  };
};

const mutations = {
  loginMutation(state, payload) {
    localStorage.setItem("user", JSON.stringify(payload));
    state.user = payload;
  },

  getUserPersonalMutation(state, payload) {
    localStorage.setItem("userPersonal", JSON.stringify(payload));
    state.userPersonal = payload;
  },
  setUserLoginFromLocalStorage(state, { user, userPersonal }) {
    state.user = user;
    state.userPersonal = userPersonal;
  },
};
//     grogankick@gmail.com
const actions = {
  async loginAction({ commit }, { loginForm, router }) {
    const data = await getUserApi(loginForm.email);
    if (data.length > 0) {
      if (data[0].password == loginForm.password) {
        commit("loginMutation", data);
        const userPersonal = await getPersonalApi(data[0].email);

        commit("getUserPersonalMutation", userPersonal);
        Swal.fire({
          icon: "success",
          title: "Login successfully",
          showConfirmButton: false,
          timer: 1500,
        });

        if (router == "/") {
          setTimeout(() => router.push("/"), 1500);
        } else {
          setTimeout(() => router.go(-1), 1500);
        }
      } else {
        Swal.fire({
          title: "Error!",
          text: "Wrong Password",
          icon: "error",
          confirmButtonText: "ok",
        });
        localStorage;
      }
    } else {
      Swal.fire({
        title: "Error!",
        text: "That Email isn't registered",
        icon: "error",
        confirmButtonText: "Ok",
      });
      localStorage;
    }
  },
  async registerAction({ commit }, { userData, router }) {
    console.log(commit);
    console.log("data", userData);
    await registerApi(userData);
    Swal.fire({
      icon: "success",
      title: "Register successfully",
      showConfirmButton: false,
      timer: 1500,
    });
    setTimeout(() => router.push("/login"), 1500);
  },
  async createUserPersonalAction({ commit }, dataPersional) {
    await createPersionalApi(dataPersional);
    console.log(commit);
  },

  async getUserPersonalAction({ commit }, payload) {
    const userPersonal = await getPersonalApi(payload);
    commit("getUserPersonalMutation", userPersonal);
    console.log(userPersonal);
  },
  loadUserLoginFromLocalStorageAction({ commit }) {
    let user = {};
    let userPersonal = {};
    if (localStorage.getItem("user")) {
      user = JSON.parse(localStorage.getItem("user"));
    }
    if (localStorage.getItem("userPersonal")) {
      userPersonal = JSON.parse(localStorage.getItem("userPersonal"));
    }
    commit("setUserLoginFromLocalStorage", { user, userPersonal });
  },
  logoutAction(context, router) {
    console.log(context);
    localStorage.removeItem("user");
    localStorage.removeItem("userPersonal");
    router.push({ path: "/" });
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  },
  async payAction({ commit }, { newpayment, router }) {
    console.log(commit, newpayment);
    await paymentApi(newpayment);
    Swal.fire({
      icon: "success",
      title: "Payment successfully",
      showConfirmButton: false,
      timer: 1500,
    });
    setTimeout(() => router.push("/"), 1500);
  },
  async updateCartAction({ dispatch }, { newCart }) {
    await updateCartApi(newCart);
    dispatch("getUserPersonalAction", newCart.email);
  },
  async updateProfileAction({ commit }, newUser) {
    console.log(newUser);
    await updateProfileApi(newUser);
    commit;
    Swal.fire({
      icon: "success",
      title: "Update profile successfully! Please login again",
      showConfirmButton: true,
    });
  },
  async deleteCartAction({ dispatch }, newCart) {
    await deleteCartApi(newCart);
    dispatch("getUserPersonalAction", newCart.email);
  },
};

export default {
  state,
  mutations,
  actions,
  namespaced: true,
};
