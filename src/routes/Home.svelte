<script>
    import Header from "./../components/Header.svelte";
    import PlantLarge from "./../components/PlantLarge.svelte";
    import PlantSmall from "./../components/PlantSmall.svelte";

	let filterPlants = [
		{ name: 'Strelitzia', price: 18, image: 'http://cdn.shopify.com/s/files/1/0761/9483/products/Strelitzia_Nicolai_150_sierpot_2d290f3c-ac1d-40ef-9e7f-258f5e88aa3d_1024x1024.png?v=1607953243'},
        { name: 'Cactus', price: 24, image: 'https://www.asa-selection.com/media/image/97/67/35/66215444-dekokakteen.png'},
        { name: 'Calathae', price: 16, image: 'https://cdn.webshopapp.com/shops/30495/files/309595322/calathea-compactstar-pauwenplant-bidplant.jpg'},
    ];

    let trendingPlants = [
        { name: 'Pinus Bonzai', price: 25, image: 'https://www.fleur.nl/media/catalog/product/cache/03dad9efe12469bb3cee8e1f809404d1/5/9/595700938_pinus-bonzai-tree-kunstplant32c6b8_1.png'},
        { name: 'Calathae', price: 16, image: 'https://cdn.webshopapp.com/shops/30495/files/309595322/calathea-compactstar-pauwenplant-bidplant.jpg'},
        { name: 'Cactus', price: 24, image: 'https://www.asa-selection.com/media/image/97/67/35/66215444-dekokakteen.png'},
		{ name: 'Strelitzia', price: 18, image: 'http://cdn.shopify.com/s/files/1/0761/9483/products/Strelitzia_Nicolai_150_sierpot_2d290f3c-ac1d-40ef-9e7f-258f5e88aa3d_1024x1024.png?v=1607953243'},
    ];


</script>
  
  <Header/>
  <div class="home">
      <div class="container">
        <h1>Discover</h1>
        <div class="filter">
            <div class="filter-list">
                <div class="filter-list__option active">Popular</div>
                <div class="filter-list__option">Indoor plants</div>
                <div class="filter-list__option">Outdoor plants</div>
                <div class="filter-list__option">Show all</div>
                <div class="filter-list__option">Discounted</div>
            </div>
        </div>
      </div>
      <section class="filtered-products">
        {#each filterPlants as plant}
        <PlantLarge 
            price={plant.price} 
            name={plant.name} 
            image={plant.image}
            />
        {/each}
    </section>
    <section class="trending-week background-secondary">
        <h2 class="margin-unset margin-bottom-small">Trending this week</h2>
        <div class="trending-week-list">
            {#each trendingPlants as plant}
            <PlantSmall 
                price={plant.price} 
                name={plant.name} 
                image={plant.image}
                />
            {/each}
        </div>
    </section>
  </div>

  <style>
      .filter-list {
          display: flex;
          flex-wrap: nowrap;
          overflow-x: scroll;
          padding-bottom: 15px;
          align-items: center;
      }
      .filter-list__option {
          flex-shrink: 0;
          font-weight: 500;
          color: #868686;
          font-size: 14px;
          margin: 0 10px;
      }
      .filter-list__option:first-child {
          margin-left: unset;
      }
      .filter-list__option.active {
          color: #000;
          border-radius: 5px;
          border: 1px solid #000;
          padding: 5px;
      }
      .filtered-products {
          display: flex;
          flex-wrap: nowrap;
          overflow-x: scroll;
          margin: 5px 0 40px;
          width: 100%;
          padding: 0 0 70px 30px;
      }
      .trending-week {
          margin-left: 30px;
          padding: 20px;
          border-radius: 20px 0 0 0;
      }
      .trending-week-list {
        display: flex;
        flex-wrap: nowrap;
        overflow-x: scroll;
        width: 100%;
      }
  </style>