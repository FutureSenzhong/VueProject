import { createRouter, createWebHashHistory } from "vue-router";
import Login from "../views/account/Login";

const routes = [
  {
    path: "/",
    name: "Home",
    hidden: true,
    component: () => import("../views/home/Index")
  },
  {
    path: "/login",
    name: "Login",
    hidden: true,
    meta: {
      title: "登录"
    },
    component: Login
  },
  {
    path: "/register",
    name: "Register",
    hidden: true,
    meta: {
      title: "注册"
    },
    component: () => import("../views/account/Register")
  },
  {
    path: "/forget",
    name: "Forget",
    hidden: true,
    meta: {
      title: "重置密码"
    },
    component: () => import("../views/account/Forget")
  },
  //管理后台 - 首页
  {
    path: "/index",
    name: "Index",
    meta: {
      title: "首页"
    },
    component: () =>
      import("../views/layout/Index.vue")
  },
  //管理后台 - 管理总台
  {
    path: "/adminIndex",
    name: "AdminIndex",
    meta: {
      title: "管理总台"
    },
    component: () => import("../views/layout/Index.vue"),
    children: [
      {
        path: "/role",
        name: "Role",
        meta: {
          title: "角色管理"
        },
        component: () => import("../views/admin/Role")
      },
      {
        path: "/user",
        name: "User",
        meta: {
          title: "用户管理"
        },
        component: () => import("../views/admin/User")
      },
    ]
  }
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
});

export default router;
