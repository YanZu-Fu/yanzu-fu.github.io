import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import('../views/index.vue'),
    },
    {
      path: "/temporaryTask",
      name: "temporaryTask",
      component: () => import('../views/temporaryTask.vue'),
    },
    {
      path: "/initiateApplication",
      name: "initiateApplication",
      component: () => import('../views/initiateApplication.vue'),
    },
    {
      path: "/submitInfo",
      name: "submitInfo",
      component: () => import('../views/submitInfo.vue'),
    },
    {
      path: "/approvalInfo",
      name: "approvalInfo",
      component: () => import('../views/approvalInfo.vue'),
    },
    {
      path: "/ccInfo",
      name: "ccInfo",
      component: () => import('../views/ccInfo.vue'),
    },
  ],
});

export default router;
