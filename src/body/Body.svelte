<!-- App.svelte -->
<script>
    import ProductList from './ProductList.svelte';
    import {products} from './datos.json'
  </script>
  
  <div class="cuerpo">
    <div class="gradiente_img_cabecera">
      <img
        class="img_encabezado"
        src="imagenes/componentes_cabecera.png"
        alt="componentes"
      />
    </div>
    <h1 >OFERTAS</h1>
    <ProductList {products} />
  </div>

  <style>
    h1{
      text-align: center;
      margin-bottom: 2rem;
    }

    .gradiente_img_cabecera {
  background: linear-gradient(to bottom, #333333, #007acc);
  clip-path: polygon(5% 0%, 100% 0%, 95% 100%, 0% 100%);
  border-radius: 15px;
  margin-bottom: 3rem;
  margin-top: 100px;
  text-align: center;
}
.img_encabezado {
  width: 70%;
}
  </style>