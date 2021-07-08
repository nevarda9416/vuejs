// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

Vue.config.productionTip = false

/* eslint-disable no-new */
var app = new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  data: {
    domain: '127.0.0.1',
    showMessage: function() {
      console.log(this.domain);
    },
    message: 'VueJS',
    firstName: 'DAO',
    middleName: 'TIEN',
    lastName: 'TU'
  },
  watch: {
    message: function(newValue) {
      console.log('Giá trị message được thay đổi')
    }
  },
  computed: {
    fullName: function () {
      return this.firstName + ' ' + this.middleName + ' ' + this.lastName;
    }
  }
});
app.message = 'Watcher';
console.log(app.fullName);
app.showMessage();