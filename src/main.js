// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store'

import iView from 'iview'
import 'iview/dist/styles/iview.css'
import { Button, Select, Switch, Icon, Input } from 'iview'

Vue.config.productionTip = false

Vue.use(iView)
Vue.component('Select', Select)
Vue.component('i-switch', Switch)
Vue.component('Icon', Icon)
Vue.component('Button', Button)
Vue.component('Input', Input)

/* eslint-disable no-new */
new Vue({
    el: '#app',
    store,
    template: '<App/>',
    components: { App }
})