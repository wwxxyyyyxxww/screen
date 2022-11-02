import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/bigScreen",
      name: "bigScreen",
      meta: {
        title: "bigScreen",
      },
      component: () => import("@/views/BigScreen/index.vue"),
    },
  ],
});

export default router;
