<script>
    export let componentName;
    export let image;
    export let price;
    export let id;
    export let specifications;
  </script>
  
  
    <div class="componente__titulo">
      <h1>{componentName}</h1>
    </div>
    <div class="componente">
      <div class="componente__side componente__side--front">
        <img id={id} src={image} alt="Producto" />
      </div>
  
      <div class="componente__side componente__side--back componente__side--back-1">
        <p>{specifications}</p>
      </div>
    </div>
    <div class="componente__precio">
      <h1>{price}</h1>
    </div>
  
<style>
  
    .componente {
      perspective: 150rem;
      -moz-perspective: 150rem;
      position: relative;
      margin: 0 auto;
      height: 10rem;
    }
  
    .componente__side {
      color: #fff;
      font-size: 2rem;
      height: 10rem;
      transition: all 0.8s ease;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      backface-visibility: hidden;
      margin: 0 auto;
    }
  
    .componente__side--front {
      border-radius: 20px;
      background: linear-gradient(135deg, #00ffec, #0081ff);
    }
  
    .componente__side--back {
      transform: rotateY(180deg);
    }
  
    .componente__side--back-1 {
      background: linear-gradient(135deg, #00ffec, #0081ff);
      border-radius: 20px;
    }
  
    .componente:hover .componente__side--front {
      transform: rotateY(180deg);
    }
  
    .componente:hover .componente__side--back {
      transform: rotateY(0);
    }
  
    .componente__titulo {
      text-align: center;
      background: linear-gradient(135deg, #00ffec, #0081ff, #ff007f);
      -webkit-background-clip: text;
      color: transparent;
      font-weight: bold;
    }
  
    .componente__titulo:hover {
      transform: skewX(-10deg);
    }
  
    .componente__precio {
      text-align: center;
      background: linear-gradient(135deg, #ff8800, #fbd24d, #c99710);
      -webkit-background-clip: text;
      color: transparent;
      padding: 0;
    }
  
    .componente__precio:hover {
      transform: scale(120%);
    }
  
    #ddr {
      width: 70%;
    }
  
    #fuente_alimentacion {
      width: 60%;
    }
  
    #ventilador {
      width: 60%;
    }
  
    #torre {
      width: 50%;
    }
  
    .componente__titulo h1,
    .componente__precio h1 {
      font-size: 1.5rem;
      transition: font-size 0.3s;
    }
  
    @media screen and (max-width: 768px) {
      .componente__titulo h1,
      .componente__precio h1 {
        font-size: 0.8rem;
      }
    }
  
    .componente__side--back p {
      font-size: 1.3rem;
      transition: font-size 0.3s;
    }
  
    @media screen and (max-width: 768px) {
      .componente__side--back p {
        font-size: 0.6rem;
      }
    }
  </style>
  