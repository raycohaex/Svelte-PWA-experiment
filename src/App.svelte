<script>
	import { Router, Route, Link } from "svelte-navigator";
	import Home from "./routes/Home.svelte";
	import Product from "./routes/Product.svelte";

	export let scanPlant = () => {
		console.log('ask permission');
	}
</script>
  
<Router>
<main>
	<div class="menu" id="menu">
		<div class="container">
			<span class="site-name">Rayco's plantshop</span>
			<ul>
				<li>Home</li>
				<li>Featured</li>
				<li>Indoor</li>
				<li>Outdoor</li>
			</ul>
			<ul>
				<li>Legal</li>
				<li>About</li>
				<li>Contact</li>
			</ul>
			<div on:click={scanPlant} class="button icon-button margin-top-auto">
				Scan Plant 
					<svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path fill-rule="evenodd" clip-rule="evenodd" d="M9 3H3V9H5V5H9V3ZM3 21V15H5V19H9V21H3ZM15 3V5H19V9H21V3H15ZM19 15H21V21H15V19H19V15ZM7 7H11V11H7V7ZM7 13H11V17H7V13ZM17 7H13V11H17V7ZM13 13H17V17H13V13Z" fill="black"/>
					</svg>
			</div>
		</div>

	</div>
	<div class="content" id="main-content">
		<!-- <Link to="about">About</Link> -->
		<Route path="/">
			<Home/>
		</Route>

		<Route path="product/*productRoute" component={Product} />

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
		font-family: "Merriweather", serif;
		font-size: 22px;
    	font-weight: 900;
	}
	.menu {
		position: fixed;
		height: 100vh;
		top: 0;
		left: 0;
		padding: 30px 0;
	}
	.menu .container {
		height: 100%;
	}
	.menu ul {
		all: unset;
    	list-style: none;
		margin-top: 40px;
	}
	.menu ul li {
		padding: 10px 0;
    	border-bottom: 1px solid #ffffff30;
	}
</style>
  