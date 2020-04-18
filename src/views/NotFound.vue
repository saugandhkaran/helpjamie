<template>
  <section class="not-found">
      <div class="flex-container center">
          <h3>Page Not Found</h3><br>
          <router-link to="/"><button class="btn-primary">Go to Homepage</button></router-link>
      </div>
  </section>
</template>

<script>

export default {
  name: 'NotFound'
}
</script>
<style lang="scss" scoped>
.not-found{
  max-width: 1000px;
  margin: 0 auto;
}
</style>
