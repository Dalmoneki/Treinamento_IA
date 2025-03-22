import { createApp } from "vue";
import App from "./App.vue";
import router from "./router"; // Importando o Vue Router
import "./style.css";

const app = createApp(App);
app.use(router); // Ativando o Vue Router
app.mount("#app");
