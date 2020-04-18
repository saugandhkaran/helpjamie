<template>
  <article>
		<button v-bind:class="getActiveClass">{{cityDetail.cityName}}</button>
  </article>
</template>

<script>
export default {
  name: 'CityCard',
  props: {
    cityDetail: Object,
    activeCity: Object
  },
  computed: {
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

<style scoped lang="scss">

</style>
