<script>
    export let products;
    export let mainImg;
    import Product from "./Product.svelte";
    
    
</script>

<div class="container">

    <div class="container__img">
        <img src={mainImg} class="container__img__img" alt="mainImgSrc4"/>
    </div>

    <div class="container__caroussel">
        <button class="container__caroussel__previousButton">
            <img src="images/left-arrow.png" alt="izq" class="container__caroussel__previousButton__img">
        </button>
        {#each products as product}
        <div class="container__caroussel__product" >
            <Product {product}/>
        </div>
        {/each}
        <button class="container__caroussel__nextButton">
            <img src="images/right-arrow.png" alt="izq" class="container__caroussel__nextButton__img">
        </button>
    </div>
</div>
<style lang="scss">
    .container{
        height:50rem;
        width:100%;
        display: inline-block;
        background-color: white;
        &__img{
            width:25rem;
            height: 100%;
            float:left;
            &__img{
                width:100%;
                height: 100%
            }
        }

        &__caroussel{
            width:90%;
            height: 100%;
            float: right;
            left:30%;
            position: absolute;
            &__product{
                float:left;
                width:25%;
                height: 45rem;
                position: absolute;
                overflow: hidden;

            }

            &__nextButton{
            width:10rem;
            height: 10rem;
            position: relative;
            left:10%;
            top:0;
            z-index:99999;
                &__img{
                    width:100%;
                    height: 100%;
                }
            }
            
            &__previousButton{
                z-index:99999;
                width:10rem;
                height: 10rem;
                position: relative;
                left:0%;
                top:0%;

                &__img{
                    width:100%;
                    height: 100%;
                }

            }
        }
    }
</style>
