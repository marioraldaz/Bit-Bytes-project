<script>

export let lowestPrice;
export let highestPrice;
export let minPrice;
export let maxPrice;


</script>

<div class="cuerpo">
    <h1 class="title">Price Range</h1>
    <div class="cuerpo__min">
        MIN:<input type="number" class="cuerpo__min__numberbox" value={minPrice} min={lowestPrice} max={maxPrice}/>
        <input type="range" min={lowestPrice} max={highestPrice} bind:value={minPrice}/>
    </div>
    <div class="cuerpo__max">
        <input type="range" max={highestPrice} min={lowestPrice} bind:value={maxPrice}/>
        MAX:<input type="number" class="cuerpo__max__numberbox" value={maxPrice} min={minPrice} max={highestPrice}/>
    </div>
</div>

