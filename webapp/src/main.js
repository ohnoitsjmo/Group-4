import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbvue/lib/mdbvue.css";
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { createStore } from "./store";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";

Vue.config.productionTip = false;
Vue.use(Vuetify);
const store = createStore();
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
