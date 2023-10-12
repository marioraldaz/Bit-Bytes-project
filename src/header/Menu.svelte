<script>
  window.onload=function() {
    const menu_btn = document.querySelector('.hamburguer-menu');
    const menu_nav = document.querySelector('.menu-nav');

    menu_btn.addEventListener('click',function() {
      menu_btn.classList.toggle('is-active');
      menu_nav.classList.toggle('is-active');
    });
  }

</script>


<div class="header_menu">
    <button class="hamburguer-menu">
      <div class="bar"></div>
        <h1 class="menu-text">Menu</h1>
    </button>
</div>

    <nav class="menu-nav">
      <div class="nav-elem"><a href="#"> RAM </a></div>
      <div class="nav-elem"><a href="#"> PLACAS </a></div>
    </nav>


<style lang="scss">
  .header_menu {
  position:relative;
  width:130px;
  height:100%;
  margin-left:10px;
    .hamburguer-menu{
      height: 100%;
      width:100%;
      border:none;
      background: none;
      cursor: pointer;
      &:hover{
        .menu-text {
          display: inline-block;
        }
      }

      & .bar, &:after, &:before{
        content:'';
        display: block;
        width: 45px;
        height: 8px;
        background-color: red;
        transition:0.4s;
        border-radius: 20px;
        margin-top:6px;
      }
      
      &.is-active:before{
        transform:rotate(-45deg) translate(-9px,6px);
      }
      &.is-active:after{
        transform:rotate(45deg) translate(-8px,-8px);

      }

      .menu-text{
        display: none;
        float:right;
        margin-bottom: 20px;
      }
    }
  }
  .menu-nav{
    display: block;
    position:fixed;

    top: 0;
    left:100%;
    width:100%;
    min-height: 100vh;
    z-index:98;
    background-color: purple;
    transition:0.4s;

   
    .nav-elem{
      width: 100%;
      height: 50px;
      font-size:30px;
      a{
        color:white;
        text-decoration:none;  
      }
    }
  }

  .menu-nav.is-active{
      left:0;
    }
</style>