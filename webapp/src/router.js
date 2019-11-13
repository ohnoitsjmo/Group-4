import Vue from "vue";
import Router from "vue-router";
import Login from "./common/layouts/login/Login.vue";
import Signup from "./common/layouts/signup/Signup.vue";
import Orders from "./common/layouts/order_management/Orders.vue";
import Home from "./common/layouts/home/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/shop",
      name: "shop",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./common/layouts/shop/Shop.vue")
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/signup",
      name: "signup",
      component: Signup
    },
    {
      path: "/orders",
      name: "orders",
      component: Orders
    }
  ]
});
