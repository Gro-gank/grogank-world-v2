import {
  addReviewApi,
  addReviewtoItem,
  getAllItemApi,
  getItemCommentApi,
  getItemDetailApi,
  getItembyCategoryApi,
  getItembySearchApi,
  getSaleItemApi,
  viewCountApi,
} from "@/api/items";
import {
  newestFirst,
  sortHightoLow,
  sortLowtoHigh,
  sortbyRate,
  sortbyView,
} from "@/utilities/myutils";

const state = () => {
  return {
    itemList: [],
    itemDetail: [],
    itemListbyView: [],
    newReleaseList: [],
    itemListbyRate: [],
    saleItemList: [],
    itemHightoLow: [],
    itemLowtoHigh: [],
    itemComment: [],
  };
};

const mutations = {
  getAllItemMutation(state, payload) {
    state.itemList = payload;
    state.itemListbyView = sortbyView(payload);
    state.newReleaseList = newestFirst(payload);
    state.itemListbyRate = sortbyRate(payload);
    state.itemHightoLow = sortHightoLow(payload);
    state.itemLowtoHigh = sortLowtoHigh(payload);
  },
  getItemDetailMutation(state, payload) {
    localStorage.setItem("itemDetail", JSON.stringify(payload));
    state.itemDetail = payload;
  },
  getSaleItemMutation(state, payload) {
    state.saleItemList = payload;
  },
  getItembySearchMutation(state, payload) {
    state.itemList = payload;
  },
  getItembyCategoryMutation(state, payload) {
    state.itemList = payload;
  },
  getItemCommentMutation(state, payload) {
    state.itemComment = payload;
  },
};
const actions = {
  async getAllItemAction({ commit }) {
    const data = await getAllItemApi();
    commit("getAllItemMutation", data);
  },
  async getItemDetailAction({ commit }, payload) {
    const data = await getItemDetailApi(payload);

    commit("getItemDetailMutation", data);
  },
  async getSaleItemAction({ commit }) {
    const data = await getSaleItemApi();
    commit("getSaleItemMutation", data);
  },
  async getItembySearchAction({ commit }, payload) {
    const data = await getItembySearchApi(payload);
    commit("getItembySearchMutation", data);
  },
  async getItembyCategoryAction({ commit }, payload) {
    const data = await getItembyCategoryApi(payload);
    commit("getItembyCategoryMutation", data);
  },
  async getCommentAction({ commit }, payload) {
    const data = await getItemCommentApi(payload);
    commit("getItemCommentMutation", data);
  },
  async addReviewAction({ dispatch }, { userReview, newItem, router }) {
    await addReviewApi(userReview);
    await addReviewtoItem(newItem);
    router.go(0);
    dispatch("getItemReviewAction", newItem.itemId);
  },
  async countViewAction({ commit }, payload) {
    console.log(commit);
    await viewCountApi(payload);
  },
};

export default {
  state,
  mutations,
  actions,
  namespaced: true,
};
