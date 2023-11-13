<script>
    import Caroussel from './Caroussel.svelte';
    import { getComponents, getOffers } from "../stores/PC_Creator";

 
    let bodyCaroussels = [
    {
      products:getOffers(),
      mainImage:"images/offer-removebg-preview.png"
    },
    {
      products:getComponents("Motherboars"),
      mainImg:"src/components/images/MSImortar.jpg"
    },
    {
      products:getComponents("CPU"),
      mainImg:"src/components/images/MSImortar.jpg"
    },
    {
      products:getComponents("RAM"),
      mainImg:"src/components/images/MSImortar.jpg"
    },
    {
      products:getComponents("SSD"),
      mainImg:"src/components/images/MSImortar.jpg"
    },
    {
      products:getComponents("GPU"),
      mainImg:"src/components/images/MSImortar.jpg"
  }
  ];
   
</script>

  <div class="cuerpo">
    <div class="gradiente_img_cabecera">
      <img
        class="img_encabezado"
        src="images/componentes_cabecera.png"
        alt="componentes"
      />
    </div>
    {#each bodyCaroussels as bodyCaroussel}
      <Caroussel mainImg={bodyCaroussel.mainImg} products={bodyCaroussel.products} />
    {/each}
  </div>

  <style>
    

.gradiente_img_cabecera {
  background: linear-gradient(to bottom, #333333, #007acc);
  clip-path: polygon(5% 0%, 100% 0%, 95% 100%, 0% 100%);
  border-radius: 15px;
  margin-bottom: 3rem;
  margin-top: 3rem;
  text-align: center;
}
.img_encabezado {
  width: 40%;
}

.cuerpo{
  margin-top: 9rem;
  position: absolute;
  top:0;
}


  </style>