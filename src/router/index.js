import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Login from "../views/LoginView.vue";
import Signup from "../views/SignupView.vue";
import ItemDetail from "../views/ItemDetail.vue";
import BrowseView from "../views/BrowseView.vue";
import PaymentView from "../views/PaymentView.vue";
import ProfileView from "../views/ProfileView.vue";
import AboutView from "../views/AboutView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/login",
    name: "LogIn",
    component: Login,
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
  },
  {
    path: "/detail/:itemId",
    name: "ItemDetail",
    component: ItemDetail,
  },
  {
    path: "/browse",
    name: "BrowseView",
    component: BrowseView,
  },
  {
    path: "/payment/:id",
    name: "PaymentView",
    component: PaymentView,
  },
  {
    path: "/account",
    name: "ProfileView",
    component: ProfileView,
  },
  {
    path: "/about",
    name: "AboutView",
    component: AboutView,
  },
];

const router = createRouter({
  mode: "history",
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "active",
  scrollBehavior() {
    // return desired position
    return { top: 0 };
  },
});

export default router;
