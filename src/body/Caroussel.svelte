<script>
    export let products;
    export let mainImg;
    let index=0;
    import Product from "./Product.svelte";
    let showProducts=[];
    let leftProduct=showProducts[products.length-1];
    changeShowProducts();
    function changeShowProducts(){
        showProducts=[];
        
        if(index>0){
            leftProduct=products[index-1]
            showProducts.push(leftProduct);
        } else{
            leftProduct=products[products.length-1];
            showProducts.push(leftProduct);
        }
        
        showProducts.push(products[index]);
        
        if(index==products.length-1){
            showProducts.push(products[0]);
        } else{
            showProducts.push(products[index+1]);
        }   
    }
    
    $:{
        if(index){
            if(index==products.length-1){
                index=0;
            } else{
                if(index==-1){
                    index=products.length-1;
                }
            }
        }
        changeShowProducts();
    }

</script>

<div class="container">

    <div class="container__img">
        <img src={mainImg} class="container__img__img" alt="mainImgSrc4"/>
    </div>

    <div class="container__caroussel">
        <button class="container__caroussel__previousButton" on:click={()=>{index--}}>
            <img src="images/left-arrow.png" alt="izq" class="container__caroussel__previousButton__img">
        </button>
        {#key showProducts}
        {#each showProducts as product}
            {#if product==products[index]}
                <div class="container__caroussel__active">
                    <Product {product} /> 
                </div>
            {:else if product==leftProduct}
                 <div class="container__caroussel__inactive1">
                    <Product {product} /> {index}
                </div>
            {:else}
                <div class="container__caroussel__inactive2">
                    <Product {product} /> 
                </div>
            {/if}
        {/each}
        {/key}
        <button class="container__caroussel__nextButton" on:click={()=>{index++}}>
            <img src="images/right-arrow.png" alt="izq" class="container__caroussel__nextButton__img">
        </button>
    </div>
</div>
<style lang="scss">
    .container{
        height:100%;
        width:100%;
        display: inline-block;
        box-sizing: border-box;
        background-color: white;
        &__img{
            width:40rem;
            height: 90%;
            float:left;
            &__img{
                width:100%;
                height: 100%
            }
        }

        &__caroussel{
            width:100%;
            height: 100%;
            top:0;
            left:20%;
            position: relative;
     
            &__inactive1{
                width:50rem;
                height:100%; 
                transform: scale(0.7);
                position: absolute;
                top:-10%;
                left:10%;
                opacity: 50%;
                z-index: 5;
            }

            &__active{
                width: 50rem;
                height: 100%; 
                transform: scale(0.7);
                position: absolute;
                top:-15%;
                left:30%;
                z-index: 6;

            }

            &__inactive2{
                width: 30%;
                height: 100%;    
                transform: scale(0.7);
                position: absolute;
                top:-10%;
                left:50%;
                opacity: 50%;
                z-index: 5;

            }
            

            &__nextButton{
            width:5rem;
            height: 5rem;
            position: absolute;
            left:72%;
            top:50%;
            z-index:99;
                &__img{
                    width:100%;
                    height: 100%;
                }
            }
            
            &__previousButton{
                z-index:99;
                width:5rem;
                height: 5rem;;
                position: absolute;
                left:15%;
                top:50%;

                &__img{
                    width:100%;
                    height: 100%;
                }

            }
        }
    }
</style>
