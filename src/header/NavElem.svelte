<script>
  import { onMount } from "svelte";
  export let name = "name";
  export let logo = "logo_default";
  import Menus from "../stores/menus.js";
  let menus=[];

  function onClick(){
    return Menus.update((data) =>{
      data.active = name;
      return data;
    });
  };
  
  onMount(()=>{
    return Menus.subscribe((data)=>{
    menus=data.menus;
    });
  });
</script>

<a href="/#" on:click={onClick}>
  <div class="elem-container">
      <img src={logo} id={name} class="image" alt="logo-nav-elem"/>
      <span class="elem-name">{name}</span>
  </div>
</a>


<style lang="scss">
    a{
      text-decoration: none;
    }
.elem-container{
    margin:0;
    padding:0;
    width:100%;
    border:3px solid rgb(176, 32, 229);
    position: relative;


    .image{
      display: inline-block;

      &:hover{
        transform: scale(120%);
      }
    }

    .elem-name{
      opacity: 0;
      display: block;
      color:white;
    }
    &:hover{
      .elem-name{
        opacity: 100;
      }
      background-color: rgb(176, 32, 229,0.2);
    }
  }
@media screen and (min-width: 1100px) {
  .elem-container{
    height:10rem;

    .image{
      width:10rem;
      height: 100%;
      position: absolute;

    }

    .elem-name{
      position: absolute;
      right: 0;
      font-size:2.5rem;
    }
}
}

@media screen and (max-width: 1100px) {
  .elem-container{
    text-align: center;
    height: 11rem;

    .image{
      width:8rem;
      height: 80%;
    }

    .elem-name{
      font-size:2.3rem;
    }
}
}

@media screen and (max-width: 600px) {

  .elem-container{
    text-align: center;
    height:12rem;

    .image{
      width:10rem;
      height: 75%;
    }

    .elem-name{
      font-size:1.7rem;

    }
  }

}
</style>
