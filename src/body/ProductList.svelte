<!-- ProductList.svelte -->
<script>
    import Product from './Product.svelte';
    export let products;


  function addComponent(producto){
      
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
                />
            </div>
            {/each}
    </div>

    <style lang="scss">
     
    </style>

  