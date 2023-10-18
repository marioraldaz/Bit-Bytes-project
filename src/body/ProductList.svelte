<!-- ProductList.svelte -->
<script>
    import Product from './Product.svelte';
    export let products;
    let clicked;

  function addComponent(){

  }

  </script>
  
    <div class="row">
            {#each products as product (product.id)}
            <div class="col-1-of-4">
                <Product
                id={product.id}
                componentName={product.componentName}
                image={product.image}
                price={product.price}
                specifications={product.specifications}
                description={product.description}
                bind:clicked={product.clicked}
                />
            </div>
            {#if product.clicked}
              HOLA
            {/if}
            {/each}
    </div>

    <style lang="scss">
     
    </style>

  