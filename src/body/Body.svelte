<!-- App.svelte -->
<script>
    import ProductList from './ProductList.svelte';
    import {products} from './datos.json'
  </script>
  
  <div class="cuerpo">
    <div class="row gradiente_img_cabecera">
      <img
        class="img_encabezado"
        src="imagenes/componentes_cabecera.png"
        alt="componentes"
      />
    </div>
    <h1>OFERTAS</h1>
    <ProductList {products} />
  </div>

  <style>
    h1{
      text-align: center;
      margin-bottom: 2rem;
    }
  </style>