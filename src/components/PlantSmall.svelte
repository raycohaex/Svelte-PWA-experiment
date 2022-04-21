<script>
	export let price;
    export let image;
    export let name;
</script>

<div class="plant-small card">
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
    .plant-small {
        width: 160px;
        position: relative;
        min-height: 240px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 35px;
        flex: 0 0 auto;
        border-radius: 14px;
        background: #fff;
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.082);
    }

    .plant-small .plant-inner {
        position: absolute;
        width: 100%;
        height: 100%;
        padding: 16px 12px;
        color: rgb(0, 0, 0);
        font-weight: 200;
        font-size: 16px;
        display: flex;
        flex-direction: column;
    }

    .plant-small .plant-name {
        margin-top: auto;
        font-size: 18px;
        font-family: 'Merriweather', serif;
    }

    .plant-small .plant-price .plant-pricetag {
        display: block;
        font-weight: 400;
    }

    .plant-small img {
        width: 80%;
        height: 100%;
        object-fit: contain;
        position: absolute;
        filter: drop-shadow(2px 4px 26px rgba(0, 0, 0, 0.226));
    }
</style>