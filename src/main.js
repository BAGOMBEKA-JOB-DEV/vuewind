import "./lib/styles/tokens.css";
import "./lib/styles/components.css";
import "./docs/styles/base.css";
import "./docs/styles/layout.css";
import "./docs/styles/pages.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
