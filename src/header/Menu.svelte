<script>

</script>


<div class="header_menu">
    <button class="hamburguer-menu">
        <img src="./imagenes/menu-de-hamburguesas.png" class="menu-logo" alt="Logo-menu">
        <h1 class="menu-text">Menu</h1>
    </button>
</div>
<style lang="scss">
  .header_menu {
  width:160px;
  height:100%;
  margin:3px;
    .hamburguer-menu{
      height: 100%;
      width:100%;
      border:none;
      background: none;
      cursor: pointer;
      .menu-logo{

        height: 80%;
        width: 35%;
        float: left;
      }
      &:hover{
        .menu-logo{
          transform: scale(120%);
        }
        .menu-text {
          display: inline-block;
        }
      }
      
      &.is-active{
        .menu-logo{
          opacity: 0;
        }
      }
      &.is-active::after{
        
      }

      &.is-active::before{

      }

      .menu-text{
        display: none;
        float:right;
        margin-top: 15px;   
      }
    }

  }

</style>