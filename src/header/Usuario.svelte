<script>
</script>

<div class="header__usuario">
  <a href="/"><img src="./images/usuario.png" alt="usuario.png" /> </a>
</div>

<style lang="scss">
  .header__usuario {
    float: right;
    width: 8rem;
    height: 8rem;
    img {
      position: relative;
      width: 60%; 
      height: 60%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      transition: all 0.3s;

      &:hover {
        width: 75%;
        height: 75%;
        filter: drop-shadow(0.2rem 0.2rem 0.2rem rgb(176, 32, 229));
      }
    }
    transition: all .5s ease-out;
  }

  @media screen and (max-width:600px){
    .header__usuario  {
      width: 5.5rem;
      height: 5.5rem;
      margin-top:6%;
    }
  }
</style>