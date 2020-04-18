<template>
  <article v-bind:class="getClass">
    <h4>{{temperatureDetails.Date | formatDate}}</h4>
    <h4>Max/ Min: {{temperatureDetails.Temperature.Maximum.Value}}&#176;{{temperatureDetails.Temperature.Maximum.Unit}}/ {{temperatureDetails.Temperature.Minimum.Value}}&#176;{{temperatureDetails.Temperature.Minimum.Unit}}
    </h4>
    <img :src="getIconUrl(temperatureDetails.Day.Icon)" :alt="temperatureDetails.Day.IconPhrase"/>
    <img :src="getIconUrl(temperatureDetails.Night.Icon)" :alt="temperatureDetails.Night.IconPhrase"/>
  </article>
</template>

<script>
export default {
  name: 'CityCard',
  props: {
    temperatureDetails: Object,
    activeDate: String
  },
  computed: {
    getClass () {
      if (this.$props.activeDate === this.$options.filters.formatTimeForFlights(this.temperatureDetails.Date)) {
        return 'card text-center active';
      } else {
        return 'card text-center';
      }
    }
  },
  methods: {
    getIconUrl (iconNumber) {
      let icon = this.$options.filters.convertToTwoDigit(iconNumber);
      return process.env.VUE_APP_WEATHER_ICON + `${icon}-s.png`;
    }
  }
}
</script>

<style scoped lang="scss">
.card {
  border: 1px solid #6b63ff;
  padding: 10px;
  border-radius: 6px;
  cursor: pointer;
  margin: 10px;
  min-width: 192px;
}

.active {
  color: white;
  background-color: #3f3d55;
}
</style>
