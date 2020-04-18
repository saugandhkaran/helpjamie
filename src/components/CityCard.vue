<template>
  <article>
		<button v-bind:class="getActiveClass()">{{cityDetail.cityName}}</button>
  </article>
</template>

<script>
export default {
  name: 'CityCard',
  props: {
    cityDetail: Object,
    activeCity: Object
  },
  methods: {
    getActiveClass (){
      if (this.$props.cityDetail.cityCode === this.$props.activeCity.cityCode) {
        return 'btn-primary';
      } else {
        return 'btn-secondary';
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
