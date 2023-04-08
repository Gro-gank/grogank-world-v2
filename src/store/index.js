import { createStore } from "vuex";
import items from "./modules/items";
import user from "./modules/user";
import cate from "./modules/cate";
import VuexPersistence from "vuex-persist";
const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
});
export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: { items, user, cate },
  plugins: [vuexLocal.plugin],
});
