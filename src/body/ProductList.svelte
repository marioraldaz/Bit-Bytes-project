<!-- ProductList.svelte -->
<script>
    import Product from './Product.svelte';
    export let products;
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
      .row {
  max-width: 114rem;
  margin: 0 10px;
  text-align: center;
}
.row:not(:last-child) {
  margin-bottom: 8rem;
}
.row:after {
  content: "";
  display: table;
  clear: both;
}
.row [class^="col-"] {
  float: left;
}
.row [class^="col-"]:not(:last-child) {
  margin-right: 6rem;
}

.row .col-1-of-2 {
  width: calc((100% - 6rem) / 2);
}
.row .col-1-of-3 {
  width: calc((100% - 2 * 6rem) / 3);
}
.row .col-2-of-3 {
  width: calc(2 * ((100% - 2 * 6rem) / 3) + 6rem);
}
.row .col-1-of-4 {
  width: calc((100% - 3 * 6rem) / 4);
}

.row .col-2-of-4 {
  width: calc(2 * ((100% - 3 * 6rem) / 4) + 6rem);
}

    </style>

  