<script>
  import Nav from "./Nav.svelte";

  export let navVisibility = false;
  export let onClick = () => {  navVisibility = navVisibility ? navVisibility=false : navVisibility=true
    console.log(navVisibility);
  }
  var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
        document.body.appendChild(css);
    };
</script>

  <div class="header_menu">
    <button class="hamburguer-menu" on:click={onClick}>
      <div class="bar-container">
        <div class="bar1"/>
        <div class="bar2"/>
        <div class="bar3"/>
    </div>
    </button>
    <h1 class="menu-text">
      <a href="" class="typewrite" data-period="2000" data-type='[ "Components.", "Memory RAM.", "MotherBoards.", "Graphic Cards." ]'>
        <span class="wrap"></span>
      </a>
    </h1>
  </div>

  {#if navVisibility}
    <Nav />
  {/if}

<style lang="scss">
  @use "sass:math";

  .header_menu {
    position: relative;
    display: inline-block;
    width:300px;
    height: 100%;
    margin-left: 10px;
    .hamburguer-menu {
      display:inline-block;
      position:absolute;
      top:0;
      height: 100%;
      border:none;
      width: 100%;
      background: none;
      cursor: pointer;
      .bar1, .bar2, .bar3{
        width: 55px;
        height: 10px;
        margin-bottom: 8px;
        border-radius: 20px;
        display: block;
        background: linear-gradient(60deg,rgb(176, 32, 229) 25%,rgb(94, 176, 208));       
      }

    }
    &:hover {
        .menu-text {
          opacity:100;
        }
      }
      .menu-text{
        position: absolute;
        margin:0;
        padding: 0;;
        opacity: 0;
        top:20%;
        left:35%;
        font-size:30px;
        
        a{
          text-decoration: none;
        }
      }
  }
</style>
