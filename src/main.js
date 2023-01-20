import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

var history = require('connect-history-api-fallback');

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(history())

app.mount("#app");
