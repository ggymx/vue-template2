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
      },
      {
        path: "/work",
        name: "Work",
        component: () => import("../views/work/work.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  //进入系统前校验
  // console.log("to------", to);
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
