import Vue from 'vue'
import App from './App.vue'
import router from './router'
import headerPage from "./components/headerPage";
import footerPage from "@/components/footerPage";
import ('./style.css')


import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faUserSecret)
export const eventBus = new Vue();

/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('headerPage', headerPage)
Vue.component('footerPage', footerPage)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

