<script>
    import Product from './Product.svelte';
    export let products;


    function addComponent(producto){
      
    }

  </script>

  <div class="list">
      {#each products as product }
          <div class="column">
            <Product
                id = {product.id}
                name={product.name}
                logo={product.logo}
                price={product.price}
                specifications={product.specifications}
                description={product.description}/>
          </div>
      {/each}
  </div>

    <style lang="scss">

  .list{
    position: relative;
    text-align: center;
    overflow: auto;
    border: 1px solid black;
    width: 90%;
    margin: 0 auto;
  }
  
    .column{
    position: relative;
    float: left;
    margin-bottom: 20px;
    }

    @media screen and (min-width: 1100px) {
      .column {
      width:calc((100% - 5rem*3)/4);
    }

    .column:not(:last-child){
      margin-right: 5rem;
    }
    }


    @media screen and (max-width: 1100px) {
      .column {
      width: 45%;
      }
      .column:not(:last-child){
      margin-right: 5%;
      }
    }

    @media screen and (max-width: 600px) {
      .column {
        width: 80%;
      }
      .list{
        position: relative;
        margin-left: 12%;
      }
    }

  </style>

  