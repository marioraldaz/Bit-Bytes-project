<script>
  export let name = "name";
  export let logo = "logo_src";
</script>

<div class="elem-container">
  <a href="#">
    <img src={logo} id={name} class="image" alt="logo-nav-elem"/>
    <span class="elem-name">{name}</span>
  </a>
</div>

<style lang="scss">

  .elem-container{
    width:100%;
    height:100px;
    margin-top:40px;
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
      display: block;
      color:white;
      float:right;
      font-size:25px;
      padding-right:20%;
    }
    &:hover{
      .elem-name{
        opacity: 100;
      }
    }
  }
</style>
