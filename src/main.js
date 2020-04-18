import Vue from 'vue'
import App from './App.vue'
import router from './router'
import moment from 'moment'


Vue.filter('formatDate', function (value) {
  if (value) {
    return moment(String(value)).format('DD MMM YYYY');
  }
})

Vue.filter('formatTime', function (value) {
  if (value) {
    return moment.unix(value).format('hh:mm a')
  }
})

Vue.filter('formatTimeForFlights', function (value) {
  if (value) {
    return moment(String(value)).format('DD/MM/YYYY');
  }
})

Vue.filter('convertToTwoDigit', function (value) {
  if (String(value).length == 1) {
    return '0' + value;
  } else {
    return value;
  }
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
