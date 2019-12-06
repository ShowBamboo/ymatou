import { ADDORDER, SETORDER } from "./action-types";

import store from "../../../node_modules/store/dist/store.legacy";

let orderList = store.get("orderList") || [];

const state = {
  list: orderList
};

const mutations = {
  [SETORDER](state, { avatarUrl, id, img, name, num, price, sellerName }) {
    console.log(orderList);

    orderList.unshift({
      avatarUrl,
      id,
      img,
      name,
      num,
      price,
      sellerName
    });
    store.set("orderList", orderList);
  }
};

const actions = {
  [ADDORDER]({ commit }, obj) {
    commit(SETORDER, obj);
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
