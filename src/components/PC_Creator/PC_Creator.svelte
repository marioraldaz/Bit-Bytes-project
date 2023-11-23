<script>
  import PC_Creator from "../../stores/PC_Creator.js";
  import shoppingCart from "../../stores/shoppingCart.js";
  import Select from "../Select.svelte"
  import {getComponents,getProducts} from "../../stores/PC_Creator.js"

  let productSelected = [];
  let products=getProducts();
  let PC={
    "CPU":null,
    "RAM":null,
    "Motherboard":null,
    "SSD":null,
    "PC_Case":null,
  }
  let arrays = [];
  let totalPrice = 0;
  let arrayComponents = ["Motherboard","CPU", "RAM","SSD", "PC_Case"];

  for (let i = 0; i < arrayComponents.length; i++){
    arrays.push(getComponents(arrayComponents[i]));
  }

  function buy(){
    for(let product of $PC_Creator.usedComponents){
      if(product){
        $shoppingCart.addToShoppingCart(product);
      }
    }
  }
  function calPrice(array){
      totalPrice = 0;
      for(let i=0;i<array.length;i++){
        if(array[i]){
          totalPrice += array[i].price;
        }
      }
    }

  function handleChange(e) {
    
    for(let product of products){
      if(product.id == e.target.value){
        PC[product.type] = product;
      }
    }
    calPrice(Object.values(PC));
    return PC_Creator.update((data)=>{ 
      data.usedComponents=Object.values(PC);
      console.log(data.usedComponents);
      return data;
    });
  }

</script>

<div class="container">
<h1 class="container__title">PC Creator</h1>

<div class="container__section">
{#each arrays as array}
  <div class="container__section__selects">
    <h1 class="container__section__selects--title">{array[0].type}</h1>  
    <Select {array} {productSelected} on:change={handleChange}/>
  </div>
{/each}
</div>
<h1 class="container__section__price">Total: {totalPrice}$</h1>
<button class="container__buy" on:click={buy}>Add to shopping cart</button>
</div>

<style lang="scss">
.container{
position: relative;
margin-top: 9rem;
text-align: center;
font-size: 5rem;
display: block;
margin-bottom:10rem;
margin-left:5rem;
  &__title{
    margin-bottom:5rem;
  }

  &__section{
    width: 60%;
    margin: 0 auto;
    
    &__selects{
      margin-bottom:2rem;
      
      background-color: white;
      font-size:2rem;
      
      &--title{
        float:left;
        font-size:3rem;
      }
    }
  }
  &__buy{
    display: block;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%,0);
    font-size: 3rem;
    height: 25%;
    width: 40%;
    color: rgb(255, 255, 255);
    border-radius: 2rem;
    border: none;  
    float: left;
    cursor: pointer;
    background-color: black;
    transition: transform 1s;

    &:hover {
      transform: translate(-48%,-25%);
      height: 35%;
      box-shadow: 1rem 1rem 3rem 1rem rgb(94, 176, 208)
    }
  }
}

</style>