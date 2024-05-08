import { createWebHistory, createRouter } from "vue-router";
import TitlePage from "../components/TitlePage.vue";
import PortfolioPage from "../components/PortfolioPage.vue";
import AboutPage from "../components/AboutPage.vue";
import Detail from "../components/Detail.vue";

const routes = [
  { path: "/", component: TitlePage },
  { path: "/about", component: AboutPage },
  { path: "/portfolio", component: PortfolioPage },
  { path: "/detail/:id", component: Detail },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
