import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueYouTubeEmbed from 'vue-youtube-embed'
import vueSmoothScroll from 'vue2-smooth-scroll'

Vue.use(VueYouTubeEmbed)
Vue.use(ElementUI);
Vue.use(vueSmoothScroll)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
