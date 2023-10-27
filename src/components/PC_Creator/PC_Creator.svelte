<script>
    import PC_Creator from "../../stores/PC_Creator.js";
    import Select from "./Select.svelte"
    import {getComponents} from   "../productsScript";
    import {onMount} from "svelte";
    let usedComponents = [];
    let arrays = [];
    let totalPrice = 0;
    let arrayComponents = ["Motherboard","CPU", "RAM","SSD", "PC_Case"];
    for (let i = 0; i < arrayComponents.length; i++){
      arrays.push(getComponents(arrayComponents[i]));
    }
    onMount(()=>{
      return PC_Creator.subscribe((data)=>{
        usedComponents = data.usedComponents;
      });
    });

    function buy(){
      return PC_Creator.update((data)=>{
        data.usedComponents = usedComponents;
        return data;
      });
    }

    function handleChange(e) {
      totalPrice += e.target;
    }

</script>

<div class="container">
  <h1 class="container__title">PC Creator</h1>

  {#each arrays as array}
    <div class="container__section">
      <h1 class="container__section__title">{array[0].type}</h1>  
      <Select {array} on:change={handleChange}/>
    </div>
  {/each}
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
      margin-bottom:2rem;
      width:70%;
      height:70%;
      background-color: white;
      font-size:2rem;
      
      &__title{
        float:left;
        font-size:3rem;
      }
    }

    &__buy{
      width:15rem;
      height:5rem;
      float:left;
      
    }
  }

</style>