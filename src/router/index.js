import { createRouter, createWebHistory } from "vue-router";

import MainLayout from "../layouts/MainLayout.vue";

import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";

const routes = [
  {
    path: "/content",
    name: "MainLayout",
    component: MainLayout,
    children: [{ path: "/about", name: "About", component: AboutView }],
  },
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
