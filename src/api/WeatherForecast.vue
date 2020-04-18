<script>
import axios from 'axios';
export default {
  props: {
    cityCode: {
      type: String,
      default: '249758'
    }
  },
  data () {
    return {
      api: axios.create({ baseURL: 'https://dataservice.accuweather.com/forecasts/v1/daily/5day/' }),
      data: [],
      error: null,
      params: {
        params: {
            apikey: '2btlwAkCadGeInVBMbUhzYIPECNiUVIu',
            metric: true
        }
      },
      loading: false
    };
  },
  watch: {
    cityCode: function (newVal) {
      this.getWeatherDetails();
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
    getWeatherDetails () {
      this.data = [];
      this.query('get', this.cityCode, this.params).then((res) => {
        return res;
      }).catch((err) => {
        this.error = err;
        return [];
      });
    }

  },
  mounted () {
    this.getWeatherDetails();
  },
  render () {
    return this.$scopedSlots.default({
      data: this.data,
      error: this.error,
      getWeatherDetails: this.getWeatherDetails,
      loading: this.loading
    });
  }
};
</script>
