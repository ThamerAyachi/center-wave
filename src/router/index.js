import { createRouter, createWebHistory } from "vue-router";

import MainLayout from "../layouts/MainLayout.vue";

import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import BlogsView from "../views/BlogsView.vue";

const routes = [
  {
    path: "/content",
    name: "MainLayout",
    component: MainLayout,
    children: [
      { path: "/about", name: "About", component: AboutView },
      { path: "/blogs", name: "Blogs", component: BlogsView },
    ],
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
