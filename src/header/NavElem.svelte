<script>
  export let name = "name";
  export let logo = "logo_src";
  export let seeRAMs = true;
  import RAMs from "../components/RAMs/index.svelte";
  let routes = {
    "RAMs": RAMs
  }
  function onClick(){ //Preguntar como hacerlo sin if?
      
  }
</script>

<div class="elem-container">
  <a href="/RAMs" on:click={onClick}>
    <img src={logo} id={name} class="image" alt="logo-nav-elem"/>
    <span class="elem-name">{name}</span>
  </a>
</div>

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
      background-color: rgb(176, 32, 229 / 0.2);
    }
  }
</style>
