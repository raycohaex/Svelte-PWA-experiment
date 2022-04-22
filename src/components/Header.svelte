<script>
    import { Router, Route, Link } from "svelte-navigator";

    $: menu = document.getElementById("menu");
    $: mainContent = document.getElementById("main-content");

    export let toggleMenu = () => {
        if(menu.classList.contains('active')) {
            menu.classList.remove('active');
            mainContent.classList.remove('active');
        } else {
            menu.classList.add('active');
            mainContent.classList.add('active');
        }
    }
    export let theme;
    export let backTo;
</script>
<header class="site-header {theme === 'light' ? 'light' : ''}">
    <div class="header-left">
        {#if backTo == null}
            <div on:click={toggleMenu}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-menu"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
            </div>
        {:else}
            <Router>
                <Link to="/">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-left"><polyline points="15 18 9 12 15 6"></polyline></svg>
                </Link>
            </Router>
        {/if}
    </div>
    <div class="header-right">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-shopping-cart"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
    </div>
</header>

<style>
    .site-header {
        display: flex;
        position: absolute;
        top:0;
        left: 0;
        width: 100%;
        padding: 50px 30px 10px;
        justify-content: space-between;
    }
    .site-header svg {
        stroke-width: 1px;
    }
    .site-header.light {
        color: #fff;
    }
    .site-header.light svg {
        stroke: #fff;
    }
</style>