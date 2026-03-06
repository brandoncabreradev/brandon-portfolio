import { createRouter, createWebHistory } from "vue-router";
import { nextTick } from "vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/HomeView.vue"),
    meta: { title: "Inicio" },
  },
  {
    path: "/sobre-mi",
    name: "about",
    component: () => import("../views/AboutView.vue"),
    meta: { title: "Sobre mí" },
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition;
    return { top: 0, behavior: "smooth" };
  },
});

router.afterEach((to) => {
  nextTick(() => {
    document.title = to.meta.title
      ? `${to.meta.title} — Brandon Cabrera`
      : "Brandon Cabrera — Full Stack Developer";
  });
});

export default router;
