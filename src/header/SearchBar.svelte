<script>

</script>

<div class="searchBar-container">

    <input class="searchBar" placeholder="   Search for amazing components"/>

</div>



<style lang="scss">


    .searchBar-container{
        position:absolute;
        left:65%;
        top:25%;
        .searchBar{
            width:350px;
            height:40px;
            border:2px solid violet;
            border-radius: 20px;

            &:hover{
                transform:scale(110%);
            }

            &:focus{
                border:3 px solid violet;
                outline:none;
            }              


        }


    } 


    
</style>