<template>
  <header>
		<nav class="flex-container between">
			<div class="brand">
				<h3>Jamie's app</h3>
			</div>
			<div>
				<h4>Hello, Jamie</h4>
			</div>
		</nav>
  </header>
</template>

<script>
export default {
  name: 'TheHeader',
  props: {
    msg: String
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
header {
	position: sticky;
	top:0;
	min-height: 50px;
	border-bottom: 2px solid #6b63ff;
	background-color: white;
	nav {
		align-items: center;
		max-width: 1000px;
		margin: 0 auto;
		padding: 0 10px;
	}
	h3 {
			padding: 10px 0px;
	}
}
</style>
