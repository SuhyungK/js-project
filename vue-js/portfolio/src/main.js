import { createApp } from "vue";
import router from "./router/router";
import "./style.css";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

createApp(App).use(router).mount("#app");
