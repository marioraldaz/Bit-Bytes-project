<script>
  export let componentName;
  export let image;
  export let price;
  export let id;
  export let specifications;
  export let description;
  export let clicked = false;
  function click(event) {
    if (event.target.tagName !== 'A') {
      clicked = !clicked;
    }
  }

</script>
  
  <div class="component {clicked ? 'clicked' : ''}" on:click={click} >
    <div class="component__side component__side--front">
        <div class="component__img"><img id={id} src={image} alt="Producto" /></div>
        <div class="component__box--description">
          <div class="component__name">{componentName}</div>
          <div class="component__description">
            <p>{description}</p>
          </div>
        </div>
      <div class="component__footer"><a class="buy" href="#">Buy Now</a></div>
    </div>
    <div class="component__side component__side--back component__side--back-1">
      <p>{specifications}</p>
    </div>
  </div>

<style>
  
    .component {
      perspective: 150rem;
      -moz-perspective: 150rem;
      position: relative;
      margin: 0 auto;
      height: 30rem;
      margin-bottom: 20px;
    }
  
    .component__side {
      color: #fff;
      font-size: 2rem;
      height: 30rem;
      transition: all 0.8s ease;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      backface-visibility: hidden;
      margin: 0 auto;
    }

  @media screen and (max-width:900px){
    .component{
      height: 10rem;
    }
    .component__side{
      height: 10rem;
    }

  }

    .component__side--front {
/*       background: linear-gradient(135deg, #00ffec, #0081ff);
 */      color:grey;
         background-color: green;
    }
  
    .component__side--back {
      transform: rotateY(180deg);
    }
  
    .component__side--back-1 {
      background: linear-gradient(135deg, #00ffec, #0081ff);
    }
  
    .component.clicked .component__side--front {
      transform: rotateY(180deg);
    }
  
    .component.clicked .component__side--back {
      transform: rotateY(0);
    }

    
    .component__img{
      background-color: PINK;
      height:35%;
    }

    .component__box--description{
      background-color: white;
      height:55%;
    }

    .component__name{
      text-align: center;
      background: linear-gradient(135deg, #00ffec, #0081ff, #ff007f);
      -webkit-background-clip: text;
      color: transparent;
      font-weight: bold;
      font-size: 1.5rem;
      padding: 5px;
      padding-top: 15px;
    }

    .component__name:hover {
      transform: skewX(-10deg);
    }

    .component__description{
      padding:6px;
      margin:5px;
      font-size:0.9rem;
      text-align:left;
    }

    .component__footer{
      height:10%;
      background-color: purple;
    }

    .component__footer .buy{
      text-align: center;
      background: linear-gradient(135deg, #ff8800, #fbd24d, #c99710);
      -webkit-background-clip: text;
      color: transparent;
      padding: 0;
      text-decoration: none;
      font-size: 1.5rem;
    }

    .component__footer .buy:hover {
      font-size: 1.7rem;
    }
  
    #ddr {
      width: 42%;
      margin-top: 5px;
    }
  
    #fuente_alimentacion {
      width: 48%;

    }
  
    #ventilador {
      width: 42%;
    }
  
    #torre {
      width: 35%;
    }
  
    .component__titulo h1,
    .component__precio h1 {
      font-size: 1.5rem;
      transition: font-size 0.3s;
    }
  
    @media screen and (max-width: 768px) {
      .component__titulo h1,
      .component__precio h1 {
        font-size: 0.8rem;
      }
    }
  
    .component__side--back p {
      font-size: 1.3rem;
      transition: font-size 0.3s;
    }
  
    @media screen and (max-width: 768px) {
      .component__side--back p {
        font-size: 0.6rem;
      }
    }
  </style>