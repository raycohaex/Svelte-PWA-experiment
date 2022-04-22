<script>
    import { Router, Route, Link } from "svelte-navigator";
    import Header from "./../components/Header.svelte";
</script>

<Header theme={'light'} backTo={'Home'} />
<div class="gradient gradient-shadowed product-intro">
    <h1>Strelitzia</h1>

    <div class="plant-price">
        <span>Price</span>
        <span class="plant-pricetag">€18'-</span>
    </div>

    <div class="button">Add to cart</div>
</div>
<div class="container">
    <h2>Information</h2>
    <span>Aliquam eu dolor ut enim aliquam imperdiet eu eget sem. Nulla pellentesque laoreet metus ac pulvinar. Nam risus neque, rutrum in sapien eu, ornare pretium risus.</span>
</div>
<section class="specifications">
    <div class="left">
        <h3>Specifications</h3>
        <div>
            <dl>
                <dt>Size</dt>
                <dd>150-180cm</dd>
            </dl>
            <dl>
                <dt>Age</dt>
                <dd>5-10 years</dd>
            </dl>
            <dl>
                <dt>Color</dt>
                <dd>Green</dd>
            </dl>
        </div>
    </div>
    <div class="right background-secondary">

    </div>
</section>

<style>
    .product-intro {
        padding: 90px 30px 30px 30px;
        border-radius: 0 0 20px 20px;
        margin-bottom: 50px;
        color: #fff;
        display: flex;
        flex-direction: column;
    }

    .button {
        margin-top: 20px;
        margin-right: auto;
    }

    .specifications {
        font-size: 14px;
        margin: 40px 0 0 30px;
        display: flex;
        justify-content: space-between;
    }
    .plant-price {
        font-size: 16px;
        display: flex;
        flex-direction: column;
        font-weight: 300;
    }
    .plant-price .plant-pricetag {
        font-weight: 500;
    }
    .specifications .right {
        flex: 0 0 50%;
        min-height: 200px;
        border-radius: 20px 0 0 0;
    }
    dl {
        display: flex;
        flex: 1 0 auto;
        margin: 0;
    }
    dt {
        font-weight: 500;
        min-width: 50px;
    }
    dd {
        margin-left: 10px;
    }
</style>