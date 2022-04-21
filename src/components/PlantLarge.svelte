<script>
	export let price;
    export let image;
    export let name;
</script>

<div class="plant-large gradient gradient-shadowed card">
    <div class="plant-inner">
        <div class="plant-price">
            <span>Price</span>
            <span class="plant-pricetag">€{price}'-</span>
        </div>
        <span class="plant-name">{name}</span>
    </div>
    <img src="{image}" alt="{{name}}">
</div>

<style>
    .plant-large {
        width: 280px;
        position: relative;
        min-height: 430px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 35px;
        flex: 0 0 auto;
        border-radius: 30px;
    }

    .plant-large .plant-inner {
        position: absolute;
        width: 100%;
        height: 100%;
        padding: 32px 20px;
        color: #fff;
        font-weight: 200;
        display: flex;
        flex-direction: column;
    }

    .plant-large .plant-name {
        margin-top: auto;
        font-size: 26px;
        font-family: 'Merriweather', serif;
    }

    .plant-large .plant-price .plant-pricetag {
        display: block;
        font-weight: 400;
        margin-top: 5px;
    }

    .plant-large img {
        width: 80%;
        height: 100%;
        object-fit: contain;
        position: absolute;
        filter: drop-shadow(2px 4px 26px rgba(0, 0, 0, 0.226));
    }
</style>