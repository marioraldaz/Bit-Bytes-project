<script>
  export let id;
  export let name;
  export let logo;
  export let price;
  export let specifications;
  export let description;
  export let clicked = false;
  function click() {

      clicked = !clicked;
    
  }


</script>
  
  <div class="component {clicked ? 'clicked' : ''}" >
    <div class="component__side component__side--front">
        <div class="component__img" style="background-image: url({logo});"></div>
        <div class="component__box--description">
          <div class="component__name">{name}</div>
          <div class="component__description">
            <p>{description}</p>
          </div>
        </div>
      <div class="component__footer">
        <div class="component__button--specs  divCursor"on:click={click}>Specs</div>
        <a href="#"><div class="component__button--buy divCursor" >Buy</div></a>
      </div>
    </div>
    <div class="component__side component__side--back component__side--back-1">
      <div class="close divCursor" on:click={click}>X</div>
      <div class="specifications">
      <h4>Specifications</h4>
      {#each specifications as specification}
        <div>{specification}</div>
      {/each}
      </div>
    </div> 
  </div>

<style>

  .divCursor{
    cursor: pointer;
  }

  img{
    width: 15rem;
  }

    .specifications{
      height: 100%;
    }

    .specifications div{
      height: 15%;
    }

    .specifications div:not(:last-child){
      margin-bottom: 10%;
    }

    .specifications h4{
      height: 10%;
      margin-bottom: 5%;
    }

    .close{
      font-size: 1.5rem;
      border-radius: 0 10px 0 10px;
      background-color: rgb(185, 10, 185);
      position: absolute;
      padding: .5rem;
      right: .5rem;
      top:.5rem;
    }

    .component__button--specs{
      width: 40%;
      float: left;
      margin-right: 10%;
      margin-left: 5%;
      border-radius: 20px;
      background-color: purple;
    }

    .component__button--buy{
      width: 40%;
      float: left;
      border-radius: 20px;
      background-color: purple;
      text-decoration: none;
      color: white;
    }

    .component {
      perspective: 150rem;
      -moz-perspective: 150rem;
      position: relative;
      margin: 0 auto;
      height: 50rem;
      margin-bottom: 2rem;
      margin: 3rem;
    }
  
    .component__side {
      color: #fff;
      font-size: 2rem;
      height: 50rem;
      transition: all 0.8s ease;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      backface-visibility: hidden;
      margin: 0 auto;
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
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
      background-color: rgb(94, 176, 208);
      height:35%;
    }

    .component__box--description{
      background-color: white;
      height:55%;
    }

    .component__name{
      text-align: center;
      background: black;
      -webkit-background-clip: text;
      color: transparent;
      font-weight: bold;
      font-size: 3rem;
      padding: .5rem;
      padding-top: 1.5rem;
    }

    .component__name:hover {
      transform: skewX(-10deg);
    }

    .component__description{
      padding:1rem;
      margin:.5rem;
      font-size:1.7rem;
      text-align:left;
    }

    .component__footer{
      height:10%;
      background-color: white;
      position: relative;
      padding: .5rem;
      color: white;
      font-size: 3rem;
    }


  @media screen and (max-width: 1800px) {
    .component__description{
      font-size: 1.3rem;
    }
    .component__name{
      font-size: 2rem;
    }
    .component__footer{
      font-size:2.5rem;
    }
  }

  @media screen and (max-width: 1100px) {
    .component__description{
      font-size: 1.8rem;
    }
    .component__name{
      font-size: 3rem;
    }

  }

  @media screen and (max-width:900px){
    .component__description{
      font-size: 1.3rem;
    }
    .component__name{
      font-size: 2.5rem;
    }
  }

  @media screen and (max-width:600px){
    .component__description{
      font-size: 1.8rem;
    }
    .component__name{
      font-size: 3rem;
    }
  }
  </style>