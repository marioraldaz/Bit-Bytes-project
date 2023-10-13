<!-- App.svelte -->
<script>
    import ProductList from './ProductList.svelte';
    import {products} from './datos.json'
  </script>
  
  <div class="cuerpo">
    <div class="gradiente_img_cabecera row">
      <img
        class="img_encabezado"
        src="imagenes/componentes_cabecera.png"
        alt="componentes"
      />
    </div>
    <ProductList {products} />
  </div>