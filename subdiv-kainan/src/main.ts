import { createApp } from 'vue'
import SubdivKainanApp from "./SubdivKainanApp.vue";
import router from "./router/routes";
import store from "./store";

import "./assets/main.css";

const app: App<Element> = createApp(SubdivKainanApp);
app.use(store);
app.use(router);
app.mount("#app");