import {
  createMemoryHistory,
  createRouter,
  createWebHistory,
} from "vue-router";
import LoginView from "../views/LoginView.vue";
import HomeView from "../views/HomeView.vue";
import SignupView from "../views/SignupView.vue";
import XprofileView from "../views/XprofileView.vue";

const routes = [
  { path: "/", name: "home", component: HomeView },
  { path: "/login", name: "login", component: LoginView },
  { path: "/signup", name: "signup", component: SignupView },
  { path: "/profile", name: "profile", component: XprofileView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
