import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store"; 
import VueHtml2pdf from 'vue-html2pdf' // Import the vue-html2pdf component

import "./assets/css/main.css";

const app = createApp(App);

app.use(router);
app.use(store); 

// 2. Register the VueHtml2pdf component globally
app.component('vue-html2pdf', VueHtml2pdf);

app.mount("#app");
