import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Dashboard",
    component: () =>
      import(
        /* webpackChunkName: "dashboard" */ "../components/pages/PDashboard.vue"
      ),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/plants",
    name: "Plants",
    component: () =>
      import(/* webpackChunkName: "index" */ "../components/pages/PPlants"),
    meta: {
      requiresAuth: true
    },
    children: [
      {
        path: "",
        name: "PlantsInfo",
        component: () =>
          import(
            /* webpackChunkName: "plants-main" */ "../components/pages/PPlants/PPlantsMain.vue"
          ),
        meta: {
          requiresAuth: true
        }
      },
      {
        path: "info/:id",
        name: "PlantsInfo",
        component: () =>
          import(
            /* webpackChunkName: "plant-bio" */ "../components/pages/PPlants/PPlantBio.vue"
          ),
        meta: {
          requiresAuth: true
        }
      },
      {
        path: "category/:category",
        name: "PlantsCategory",
        component: () =>
          import(
            /* webpackChunkName: "plants-category" */ "../components/pages/PPlants/PPlantsCategory.vue"
          ),
        meta: {
          requiresAuth: true
        }
      }
    ]
  },

  {
    path: "/auth",
    name: "Auth",
    component: () =>
      import(/* webpackChunkName: "auth" */ "../components/pages/PAuth.vue"),
    meta: {
      requiresAuth: false
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.state.auth.accessToken) {
      next();
    } else {
      next({
        path: "/auth",
        query: {
          redirect: to.fullPath
        }
      });
    }
  } else {
    next();
  }
});

export default router;
