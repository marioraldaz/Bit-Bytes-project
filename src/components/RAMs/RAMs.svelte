<script>
    import {getRAMs} from   "../productsScript";
    import ProductList from "../../body/ProductList.svelte";
</script>
    <div class="cuerpo">
        <div class="gradiente_img_cabecera row">
        </div>
        <h1 class="title">RAMS</h1>
        <ProductList products={getRAMs()}  />
    </div>

<style lang="scss">
.title{
    text-align: center;
    margin-bottom: 2rem;
    font-size: 50px;
}
</style>