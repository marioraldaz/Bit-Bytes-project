<script>
   import Datos from './footerData.json';

   let footerData=Datos.Elements;
</script>

<footer class="footer">
  <div class="row">
    {#each footerData as section (section.title)}
      <div class="col-1-of-4">
        <h4>{section.title}</h4>
        {#if section.links}
        <ul>
          {#each section.links as link (link.text)}
            <li><a href="{link.url}">{link.text}</a></li>
          {/each}
        </ul>
        {/if}
        {#if section.socialMedia}
          <div class="social-media">
            {#each section.socialMedia as social (social.icon)}
              <a href="{social.url}"><i class="{social.icon}"></i></a>
            {/each}
          </div>
        {/if}
      </div>
    {/each}
  </div>
</footer>

<style>

.row {
  max-width: 114rem;
  margin: 0 10px;
  text-align: center;
}
.row:not(:last-child) {
  margin-bottom: 8rem;
}
.row:after {
  content: "";
  display: table;
  clear: both;
}
.row [class^="col-"] {
  float: left;
}
.row [class^="col-"]:not(:last-child) {
  margin-right: 6rem;
}

.row .col-1-of-2 {
  width: calc((100% - 6rem) / 2);
}
.row .col-1-of-3 {
  width: calc((100% - 2 * 6rem) / 3);
}
.row .col-2-of-3 {
  width: calc(2 * ((100% - 2 * 6rem) / 3) + 6rem);
}
.row .col-1-of-4 {
  width: calc((100% - 3 * 6rem) / 4);
}

.row .col-2-of-4 {
  width: calc(2 * ((100% - 3 * 6rem) / 4) + 6rem);
}

.img_encabezado {
  width: 70%;
}

.gradiente_img_cabecera {
  background: linear-gradient(to bottom, #333333, #007acc);
  clip-path: polygon(5% 0%, 100% 0%, 95% 100%, 0% 100%);
  border-radius: 15px;
  margin-bottom: 3rem;
  margin-top: 100px;
}

.footer {
  clear: both;
  background-color: #fff;
  padding: 100px 0;
  line-height: 1.5;
  font-family: "Poppins", sans-serif;
}

.footer-content {
  max-width: 1170px;
  margin: auto;
}

.row {
  display: flex;
  flex-wrap: wrap;
}

.footer-col {
  width: 25%;
  padding: 0 15px;
}

.footer-col h4 {
  font-size: 18px;
  color: #000;
  text-transform: capitalize;
  margin-bottom: 35px;
  font-weight: 500;
  position: relative;
}

.footer-col h4::before {
  content: "";
  position: absolute;
  left: 0;
  bottom: -10px;
  background-image: linear-gradient(
    60deg,
    rgb(176, 32, 229) 25%,
    rgb(94, 176, 208)
  );
  height: 2px;
  box-sizing: border-box;
  width: 100%;
}

.footer-col ul li:not(:last-child) {
  margin-bottom: 10px;
}

.footer-col ul li a {
  font-size: 16px;
  text-transform: capitalize;
  color: #000;
  text-decoration: none;
  font-weight: 300;
  color: #000;
  display: block;
  transition: all 0.3s ease;
}

.footer-col ul li a:hover {
  color: #000;
  padding-left: 8px;
}

ul {
  list-style: none;
}

</style>
