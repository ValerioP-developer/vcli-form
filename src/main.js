import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false
import FirstComponent from '@/components/FirstComponent.vue'
import CardComponent from '@/components/CardComponent.vue'

//This component has global visibility
Vue.component('first-c',FirstComponent)
Vue.component('card-c',CardComponent)
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
