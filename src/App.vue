<template>
  <div  id="app">
    <the-header></the-header>
    <router-view></router-view>
  </div>
</template>

<script>
import TheHeader from './components/TheHeader';
export default {
  name: "app",
  components: {
    'the-header': TheHeader
  }
}
</script>

<style lang="scss">
body, p, h1, h2, h3, h4, h5, h6,
article, figure, footer, header, nav {
  margin: 0;
  padding: 0;
}

input{
  padding: 5px 10px;
  font-size: 16px;
  border-radius: 6px;
}

.btn-primary {
  cursor: pointer;
  min-width: 100px;
  padding: 10px 10px;
  font-size: 1em;
  border: none;
  border-radius: 6px;
  font-weight: bold;
  color: white;
  background-color: #3f3d55;
  margin: 10px 5px;
}

.btn-secondary {
  cursor: pointer;
  min-width: 100px;
  padding: 10px 10px;
  font-size: 1em;
  border: none;
  border-radius: 6px;
  font-weight: bold;
  color: #3f3d55;
  background-color: white;
  margin: 10px 5px;
  border: 1px solid #3f3d55;
}
.x-scrollable {
  overflow-x: scroll;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.section {
  padding: 40px 0px;
}

.flex-container {
  display: flex;
  &.center {
    justify-content: center;
  }
  &.around {
    justify-content: space-around;
  }
  &.between {
    justify-content: space-between;
  }
  &.wrap {
    flex-wrap: wrap;
  }
  &.column {
    flex-direction: column;
  }
}

.text-center {
  text-align: center;;
}

.error {
  color: #B22222;
  font-weight: bold;
}
</style>
