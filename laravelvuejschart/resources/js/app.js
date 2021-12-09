import Vue from 'vue';
import VueAxios from 'vue-axios';
import axios from 'axios';
// Init and customize toaster
import Toasted from 'vue-toasted';
Vue.use(Toasted, {
    duration: null,
    position: 'bottom-right', // ['top-right', 'top-center', 'top-left', 'bottom', 'bottom-center', 'bottom-left']
    theme: 'outline', // ['toasted-primary', 'outline', 'bubble']
    iconPack: 'material' // ['material', 'fontawesome', 'mdi', 'custom-class', 'callback']
});
// In Laravel Mix version 5, you have to import your components as follows (1)
import AddComponent from "./components/AddComponent";
import ChartComponent from "./components/ChartComponent";

require('./bootstrap');
window.Vue = require('vue');
Vue.use(VueAxios, axios);
// In Laravel Mix version 5, you have to import your components as follows (2)
// Register component
Vue.component('add-component', AddComponent);
Vue.component('chart-component', ChartComponent);
const app = new Vue({
    el: '#app'
});
