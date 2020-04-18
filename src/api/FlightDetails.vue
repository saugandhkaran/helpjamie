<script>
import axios from 'axios';
export default {
  props: {
    cityCode: {
      type: String,
      default: 'AMS'
    },
    activeDate: {
        type: String,
        default: ''
    }
  },
  data () {
    return {
      api: axios.create({ baseURL: process.env.VUE_APP_API_FLIGHTS }),
      data: [],
      error: null,
      params: {
        params: {
            flyFrom: 'PRG',
            to: this.cityCode,
            dateFrom: this.activeDate,
            partner: process.env.VUE_APP_FLIGHT_PASS,
            v: 3
        }
      },
      loading: false
    };
  },
  watch: {
    cityCode: function (newVal, oldVal) {
        this.params.params.to = newVal;
        this.getFlightDetails();
    },
    activeDate: function (newVal, oldVal) {
      this.params.params.dateFrom = newVal;
      this.getFlightDetails();
    }
  },
  methods: {
    async query (type, ...params) {
      this.loading = true;
      const response = await this.api[type](...params)
        .catch((err) => {
          this.error = err.response;
          return this.error;
        });
      if (response) {
        this.data = response.data;
        this.loading = false;
        return this.data;
      }
      this.loading = false;
      return [];
    },
    getFlightDetails () {
      this.data = [];
      this.query('get', '', this.params).then((res) => {
        return res;
      }).catch((err) => {
        this.error = err;
        return [];
      });
    }

  },
  mounted () {
    this.getFlightDetails();
  },
  render () {
    return this.$scopedSlots.default({
      data: this.data.data,
      error: this.error,
      getFlightDetails: this.getFlightDetails,
      loading: this.loading
    });
  }
};
</script>
