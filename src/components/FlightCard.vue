<template>
  <article class="card">
    <div class="flex-container between first-part">
      <h3>{{flightDetails.flyFrom}}<span v-for="route in $props.flightDetails.route" :key="route.id"> - {{route.cityCodeTo}}</span></h3>
      <p v-if="$props.flightDetails.route.length === 1">Direct</p>
      <p v-if="$props.flightDetails.route.length !== 1">{{flightDetails.route.length}} stops</p>
      <p>{{flightDetails.fly_duration}}</p>
      <h3>{{flightDetails.conversion.EUR}} EUR</h3>
    </div>
    <div class="flex-container between flight-detail">
      <div class="flex-container">
        <img v-for="route in $props.flightDetails.route" :key="route.id" :src="`https://images.kiwi.com/airlines/32x32/${route.airline}.png`" alt="" />
      </div>
      <div>
        <p><span v-for="route in $props.flightDetails.route" :key="route.id">No-{{route.flight_no}}  </span></p>
        <p><img class="flight-icon" src="../assets/departures.svg" /> {{flightDetails.route[0].dTime | formatUnixTimeToReadable}}</p>
        <p><img class="flight-icon" src="../assets/arrivals.svg" /> {{flightDetails.route[0].aTime | formatUnixTimeToReadable}} localtime</p>
      </div>
      <button class="btn-primary" @click="goToBooking(flightDetails.deep_link)">Book</button>
    </div>
  </article>
</template>

<script>
export default {
  name: 'CityCard',
  props: {
    flightDetails: Object
  },
  methods: {
    goToBooking(deeplink) {
      window.open(deeplink, '_blank');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.card {
    border: 1px solid #6b63ff;
    padding: 10px;
    border-radius: 6px;
    margin: 10px 0px;
}
.flight-detail {
  align-items: center;
  img {
    padding-left: 5px;
  }
}

.first-part {
  border-bottom: 1px solid #cccccc;
  margin-bottom: 10px;
}

.flight-icon {
  width: 20px;
  margin-right: 5px;
}
</style>
