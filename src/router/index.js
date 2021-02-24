import { createRouter, createWebHashHistory } from "vue-router";
import Login from "../views/account/Login";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/home/Index")
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("../views/account/Register")
  },
  {
    path: "/forget",
    name: "Forget",
    component: () => import("../views/account/Forget")
  },
  {
    path: "/index",
    name: "Index",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/layout/Index.vue")
  }
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
});

export default router;
