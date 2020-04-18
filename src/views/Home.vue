<template>
  <div class="home">
    <h3 class="text-center">Assumption Jamie's current location is Prague, Czech Republic</h3>
    <section class="section">
      <h3 class="text-center">Your favourite destinations</h3>
      <div class="flex-container center wrap">
        <city-card :cityDetail="city"
          v-for="city in favourites"
          :activeCity="activeCity"
          :activeDate="activeDate"
          :key="city.id"
          @click.native="changeCity(city)">
        </city-card>
        <button class="btn-secondary">+ Add new destination</button>
      </div>
    </section>

    <section class="section" v-if="activeCity.id">
      <h3 class="text-center">Select your date</h3>
      <weather-forecast :cityCode="activeCity.accuCode">
        <div slot-scope="{ data: weather, loading: loading, error: error }" class="flex-container x-scrollable">
          <h3 v-if="loading" class="text-center loading-animation">Loading weather forecast....</h3>
          <h3 class="error text-center" v-if="error">Something went wrong</h3>
          <temperature-card
            v-for="tempDetail in weather.DailyForecasts"
            :key="tempDetail.Date"
            :temperatureDetails="tempDetail"
            :activeDate="activeDate"
            @click.native="changeDate(tempDetail.Date)">
          </temperature-card>
        </div>
      </weather-forecast>
    </section>

    <section class="section" v-if="activeCity.id">
      <h3 class="text-center">Your flights</h3>
      <flight-details :cityCode="activeCity.cityCode" :activeDate="activeDate">
        <div slot-scope="{ data: flight, loading: loading, error: error }">
          <h3 class="error text-center" v-if="error">Something went wrong</h3>
          <h3 v-if="loading" class="text-center loading-animation">Loading your flight details....</h3>
          <flight-card v-for="flightDetail in flight" :key="flightDetail.id" :flightDetails="flightDetail"></flight-card>
        </div>
      </flight-details>
    </section>
  </div>
</template>

<script>
import CityCard from '../components/CityCard.vue'
import TemperatureCard from '../components/TemperatureCard'
import FlightCard from '../components/FlightCard'
import WeatherForecast from '../api/WeatherForecast.vue'
import FlightDetails from '../api/FlightDetails'

export default {
  name: 'Home',
  components: {
    'city-card': CityCard,
    'temperature-card': TemperatureCard,
    'flight-card': FlightCard,
    'weather-forecast': WeatherForecast,
    'flight-details': FlightDetails
  },
  data () {
    return {
      activeCity: {},
      activeDate: this.$options.filters.formatTimeForFlights(new Date()),
      favourites: [
        {
          id: 1,
          cityCode: 'AMS',
          cityName: 'Amsterdam',
          accuCode: '249758'
        },
        {
          id: 2,
          cityCode: 'MAD',
          cityName: 'Madrid',
          accuCode: '308526'
        },
        {
          id: 3,
          cityCode: 'BUD',
          cityName: 'Budapest',
          accuCode: '187423'
        }
      ],
    }
  },
  methods: {
    changeCity (city) {
      this.activeCity = city;
    },
    changeDate (date) {
      this.activeDate = this.$options.filters.formatTimeForFlights(date);
    }
  }
}
</script>
<style lang="scss" scoped>
.home{
  max-width: 1000px;
  margin: 0 auto;
}

.loading-animation {
  animation: loading-animation 2s infinite;
}
@keyframes loading-animation {
  0% { opacity: 1; }
  50% { opacity: 0; }
  100% { opacity: 1; }
}
</style>
