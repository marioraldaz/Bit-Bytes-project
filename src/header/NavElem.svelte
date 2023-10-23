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

  .elem-container{
    width:100%;
    height:100px;
    border:3px solid rgb(176, 32, 229);
    margin:0;
    padding:0;
    a{
      text-decoration: none;
    }

    .image{
      display: inline-block;
      width:100px;
      height: 100%;

      &:hover{
        transform: scale(120%);
      }
    }

    .elem-name{
      opacity: 0;
      display: block;
      color:white;
      float:right;
      margin:0;
      padding:0;
      font-size:30px;
      padding-right:20%;
    }
    &:hover{
      .elem-name{
        opacity: 100;
      }
      background-color: rgb(176, 32, 229,0.2);
    }
  }
</style>
