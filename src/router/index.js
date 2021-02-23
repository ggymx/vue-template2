import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/home/home.vue";
import Login from "../views/login/login.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/",
    name: "Home",
    component: Home,
    redirect: "/about",
    children: [
      {
        path: "/about",
        name: "About",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/about/about.vue"),
        meta: {
          title: "关于",
          icon: "el-icon-menu",
        },
      },
      {
        path: "/work",
        name: "Work",
        component: () => import("../views/work/work.vue"),
        meta: {
          title: "工作台",
          icon: "el-icon-aim",
        },
      },
      {
        path: "/merchant/list",
        name: "MerchantList",
        component: () => import("../views/merchant-manage/merchant-list.vue"),
        meta: {
          title: "商家管理",
          icon: "el-icon-bangzhu",
        },
      },
      {
        path: "/merchant/detail",
        name: "MerchantDetail",
        component: () => import("../views/merchant-manage/merchant-detail.vue"),
        meta: {
          hidden: false,
          parent: "MerchantList",
          title: "商家详情",
          icon: "el-icon-bangzhu",
        },
      },
      {
        path: "/merchant/edit",
        name: "MerchantEdit",
        component: () => import("../views/merchant-manage/merchant-edit.vue"),
        meta: {
          parent: "MerchantList",
          hidden: false,
          title: "商家编辑",
          icon: "el-icon-bangzhu",
        },
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  //进入系统前校验
  if (to.path == "/") {
    if (localStorage.getItem("isLogin")) {
      next();
    } else {
      //没有登录就跳转到登录页
      next({ path: "/login" });
    }
  } else {
    next();
  }
});

export default router;
