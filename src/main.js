import Vue from "vue";
import Vuetify from "vuetify/lib";
import "vuetify/dist/vuetify.min.css";
import "vuetify/src/stylus/app.styl";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import dotenv from"dotenv";

dotenv.config();
Vue.config.productionTip = false

Vue.use(Vuetify)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app")