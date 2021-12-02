import Vue from 'vue';
import VueAxios from 'vue-axios';
import axios from 'axios';
require('./bootstrap');
window.Vue = require('vue');
Vue.use(VueAxios, axios);
Vue.component('add-component', require('./components/AddComponent.vue').default);
Vue.component('chart-component', require('./components/ChartComponent.vue').default);
const app = new Vue({
   el: '#app'
});
