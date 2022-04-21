<script>
	import { Router, Route, Link } from "svelte-navigator";
	import Home from "./routes/Home.svelte";
</script>
  
<Router>
<main>
	<div class="menu" id="menu">
		<div class="container">
			<span class="site-name">Rayco's plantshop</span>
		</div>

	</div>
	<div class="content" id="main-content">
		<!-- <Link to="about">About</Link> -->
		<Route path="/">
			<Home/>
		</Route>

		<Route path="about">
		<h3>About</h3>
		<p>That's what it's all about!</p>
		</Route>
	</div>
</main>
<script>
	if('serviceWorker' in navigator) {
		navigator.serviceWorker.register('/service-worker.js');
	}
</script>
</Router>

<style>
	.site-name {
		font-size: 20px;
		font-family: "Merriweather", serif;
	}
	.menu {
		position: fixed;
		height: 100vh;
		top: 0;
		left: 0;
		padding: 30px 0;
	}
</style>
  