import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () =>
      import(/* webpackChunkName: "home" */ "../components/pages/PHome.vue")
  },
  {
    path: "/auth",
    name: "Auth",
    component: () =>
      import(/* webpackChunkName: "auth" */ "../components/pages/PAuth.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
