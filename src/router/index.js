import Vue from "vue";
import VueRouter from "vue-router";

import Home from "pages/home/Home";
import Community from "pages/community/Community";
import ShoppingCart from "pages/shoppingcart/ShoppingCart";
import Profile from "pages/profile/Profile";
import ProductDetail from "pages/detail/ProductDetail";
import CommunityDetail from "pages/community/CommunityDetail";
import Login from "pages/login/Login";
import Order from "pages/order/Order";

import store from "../../node_modules/store/dist/store.legacy";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/home"
  },
  {
    path: "/home",
    name: "home",
    component: Home
  },
  {
    path: "/community",
    name: "community",
    component: Community
  },
  {
    path: "/shoppingcart",
    name: "shoppingcart",
    component: ShoppingCart
  },
  {
    path: "/profile",
    name: "profile",
    component: Profile
  },
  {
    path: "/productdetail",
    name: "productdetail",
    component: ProductDetail
  },
  {
    path: "/communitydetail",
    name: "communitydetail",
    component: CommunityDetail
  },
  {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: "/order",
    name: "order",
    component: Order
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.afterEach((to, from, next) => {
  if (from.name === "order") {
    store.set("orderList", []);
  }
  // next();
});

export default router;
