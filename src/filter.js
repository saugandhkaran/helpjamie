import Vue from 'vue'
import moment from 'moment'


Vue.filter('formatDate', function (value) {
  if (value) {
      return moment(String(value)).format('DD MMM YYYY');
  }
})

Vue.filter('formatUnixTimeToReadable', function (value) {
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