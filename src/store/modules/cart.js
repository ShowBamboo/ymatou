import {
  SETLIST,
  ADDCART,
  PLUSNUM,
  MININUM,
  PLUS,
  MINI,
  DELETE,
  DELETEONE
} from "./action-types";

import store from "../../../node_modules/store/dist/store.legacy";

let cartList = store.get("cartList") || [];

const state = {
  list: cartList
};

const mutations = {
  [SETLIST](
    state,
    {
      id,
      name,
      price,
      img,
      avatarUrl,
      sellerName,
      countryName,
      countryIconUrl,
      num
    }
  ) {
    let item = cartList.find(value => {
      return value.id === id;
    });
    if (item) {
      item.num += num;
    } else {
      cartList.unshift({
        id,
        name,
        price,
        img,
        avatarUrl,
        sellerName,
        countryName,
        countryIconUrl,
        num
      });
    }
    store.set("cartList", cartList);
  },
  [PLUSNUM](state, id) {
    let item = cartList.find(value => {
      return value.id === id;
    });
    if (item) {
      item.num++;
    }
    store.set("cartList", cartList);
  },
  [MININUM](state, id) {
    let item = cartList.find(value => {
      return value.id === id;
    });
    if (item) {
      item.num--;
    }
    store.set("cartList", cartList);
  },
  [DELETEONE](state, id) {
    let index = cartList.findIndex(value => {
      return value.id === id;
    });

    cartList.splice(index, 1);
    console.log(cartList);

    store.set("cartList", cartList);
  }
};

const actions = {
  [ADDCART]({ commit }, obj) {
    commit(SETLIST, obj);
  },
  [PLUS]({ commit }, id) {
    commit(PLUSNUM, id);
  },
  [MINI]({ commit }, id) {
    commit(MININUM, id);
  },
  [DELETE]({ commit }, id) {
    commit(DELETEONE, id);
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
