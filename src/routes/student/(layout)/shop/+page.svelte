<section>

    <div class="points-total">
        <div class="points">
        <img src="../Info Icon.png" class = "cursor-pointer" alt="">
        <h2> 900 </h2>
        <img src="../points.png" alt="">
        </div>
    </div>

    <h1 class = "text-center text-shadow">Shop</h1>
    <h3 class = "text-center text-shadow">Exchange your points with 3d Prints here!</h3>

    

    <div class="items">

        <div class="box rounded-glass text-center">
            <img src="../Kart-ninja.png" alt="">
            <h3>Item Name</h3>
            <b>25 points</b>
            <p>description</p>
            <button class = "primary-btn"> REDEEM </button>
        </div>
        <div class="box rounded-glass text-center">
            <img src="../Kart-ninja.png" alt="">
            <h3>Item Name</h3>
            <b>25 points</b>
            <p>description</p>
            <button class = "primary-btn"> REDEEM </button>
        </div>
        <div class="box rounded-glass text-center">
            <img src="../Kart-ninja.png" alt="">
            <h3>Item Name</h3>
            <b>25 points</b>
            <p>description</p>
            <button class = "primary-btn"> REDEEM </button>
        </div>
        <div class="box rounded-glass text-center">
            <img src="../Kart-ninja.png" alt="">
            <h3>Item Name</h3>
            <b>25 points</b>
            <p>description</p>
            <button class = "primary-btn"> REDEEM </button>
        </div>
        <div class="box rounded-glass text-center">
            <img src="../Kart-ninja.png" alt="">
            <h3>Item Name</h3>
            <b>25 points</b>
            <p>description</p>
            <button class = "primary-btn"> REDEEM </button>
        </div>
        

    </div>


</section>


<style lang="scss">
    section {
		width: 100%;
        display: flex;
        flex-direction: column;
        gap:1em;
        padding: 0em;

        .points-total {

        //    margin-left: auto;
           margin: 0em 3em -5em auto;

            .points {
                display: flex;
                background-color: #000;
                color: #fff;
                border-radius: 3em;
                padding: 0.5em;
                height: 3em;
                width: 15em;
                justify-content: space-between;
                margin: 0em 0em 3em -6em;

                img {
                    width: 2em;
                    height: 2em;
                }
        } 
        }

      

        .items {
            display: flex;
            flex-wrap: wrap;
            margin: 2em;
            gap:2em;
            justify-content: center;

            .box {
                display: flex;
                flex-direction: column;
                padding: 1.5em;
                width: 15em;
                height: 18em;
                justify-content: center;
                gap:0.35em;

                button {
                    margin-bottom:2em;
                }
       
                img {
                    width: 8em;
                    // height: 8em;
                    margin: 1em auto 1em auto;
                    border: 3mm ridge #0f4e72;
                }
                
            }
            
            
        }

        
    }
</style>