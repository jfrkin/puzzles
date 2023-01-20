import { createRouter, createWebHistory } from "vue-router";
import NaslovnicaView from "../views/NaslovnicaView.vue";
import NotFound from "../views/NotFound.vue"
import LoginView from "../views/LoginView.vue" 
import { useAuthStore } from "../stores/auth.js";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/",
      name: "naslovnica",
      component: NaslovnicaView,
    },
    {
      path: "/puzzle",
      name: "puzzle",
      component: () => import("../views/PuzzleView.vue"),
    },
    { path: "/:catchAll(.*)",
      name: "NotFound",
      component: NotFound,
    },
  ],
});


router.beforeEach(async (to) => {
  const publicPages = ["/login"];
  const authRequired = !publicPages.includes(to.path);
  const auth = useAuthStore();
  if (authRequired && !auth.isAuthenticated) {
    auth.setLandingUrl(to.fullPath);
    return "/login";
  }
});

export default router;
