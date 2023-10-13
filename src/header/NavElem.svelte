<script>
  export let name = "name";
  export let logo = "logo_src";
</script>

<div class="elem-container">
  <a href="#">
    <img src={logo} id={name} class="image" alt="logo-nav-elem"/>
    <h2 class="elem-name">{name}</h2>
  </a>
</div>

<style lang="scss">

  .elem-container{
    width:100%;
    height:120px;
    margin-top:10px;
    a{
      text-decoration: none;
    }

    .image{
      display: inline-block;
      width:120px;
      height: 100%;
    }
    .elem-name{
      opacity: 0;
      display: inline-block;
      float:right;
      margin-right:150px;
      margin-top:35px;
      font-size: 35px;
      color:white;
    }
    &:hover{
      .elem-name{
        opacity: 100;
      }
    }
  }
</style>
