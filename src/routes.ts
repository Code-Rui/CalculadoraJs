import { createRouter, createWebHistory } from "vue-router";

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: () => import("./layouts/MainLayout.vue"),
      children: [
        { path: "", component: () => import("./pages/Inicio.vue") },
        { path: "blog", component: () => import("./pages/Blog.vue") },
        { path: "contact", component: () => import("./pages/Contact.vue") },
        {
          path: "calculator",
          component: () => import("./pages/Calculator.vue"),
        },
      ],
    },
    {
      path: "/:catchAll(.*)*",
      component: () => import("./pages/404.vue"),
    },
  ],
});
