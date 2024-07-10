<script lang="ts">
    export let data
</script>

<section>
    <div class="top">
        <div class="student-profile">

            <img src="../ninja-profile.jpg" class = "cursor-pointer" alt="">
            <div class="text">
                <h1 class="text-shadow">{data.student.name}</h1>
                <div class="belt-level">
                    <img src="../OrangeBelt.png" alt="">
                    <h3 class="text-shadow">LEVEL 7 </h3>
                </div>
            </div>
        </div>

        <div class="points">
            <img src="../Info Icon.png" class = "cursor-pointer" alt="">
            <h2> 900 </h2>
            <img src="../points.png" alt="">
        </div>
    </div>

    <div class="middle">
        <div >
            <button class="primary-btn cursor-pointer">
                VIEW FULL PROGRESS 
            </button>
        </div>

        <div class="ninja-laptop">
            <img src="../ninja-laptop.png" alt="">
        </div>

        <div class="quest-event">

            <div class="box box-shadow">
                <div>
                    <h2 class ="text-shadow text-center"> WEEKLY QUESTS </h2>
                </div>

                <div class="reward box-shadow">
                    <p>05</p>
                    <img src="../points.png" alt="">
                </div>
            </div>

            <div class="box box-shadow">
                <h2 class ="text-shadow text-center"> MONTHLY EVENTS </h2>
                <!-- <p> NONE </p> -->
                <div class="reward box-shadow">
                    <p>50</p>
                    <img src="../points.png" alt="">
                </div>

            </div>
        </div>
    </div>

    <div class="bottom create-gradient">

        <div class="camp-box text-center">
            <h3 class = "ninja-blue"> CAMP </h3>
            <p class = "ninja-blue">description here</p>
        </div>
        <div class="camp-box text-center">
            <h3 class = "ninja-blue"> CAMP </h3>
            <p class = "ninja-blue">description here</p>
        </div>
        <div class="camp-box text-center">
            <h3 class = "ninja-blue"> CAMP </h3>
            <p class = "ninja-blue">description here</p>
        </div>
        <div class="camp-box text-center">
            <h3 class = "ninja-blue"> CAMP </h3>
            <p class = "ninja-blue">description here</p>
        </div>
        <div class="camp-box text-center">
            <h3 class = "ninja-blue"> CAMP </h3>
            <p class = "ninja-blue">description here</p>
        </div>
       
    </div>


</section>


<style lang="scss">
    section {
		width: 100%;
        display: flex;
        flex-direction: column;
        padding: 0em;

        .top {
            display: flex;
            justify-content: space-between;
            align-content: start;
            margin: 0em 2em;

            .student-profile {
                display: flex;
                align-items: center;
                gap: 1em;

              
                h3 {
                    color: #eb7515;
                }

                img {
                    width: 8em;
                    height: 8em;
                    border-radius: 1em;
                    border: 4mm ridge #0f4e72;
                }

                .text {

                    .belt-level {
                        display: flex;
                        align-items: center;
                        gap: 0.5em;
                        
                        img {
                            width: 3em;
                            height: 3em;
                            border: none;
                            border-radius: 0em;
                        }
                    }
                }
            }
            .points {
                display: flex;
                background-color: #000;
                color: #fff;
                border-radius: 3em;
                padding: 0.5em;
                height: 3em;
                width: 15em;
                justify-content: space-between;
                margin: 1em 2em;

                img {
                    width: 2em;
                    height: 2em;
                }
        }
        }

        .middle {
            display: flex;
            justify-content: space-between;
            align-items: center;
            // margin: -3em 2em 0em 2em;
            padding: -3em 2em 0em;

            .ninja-laptop img {
                width:30em;
                transform: translateY(2%);
            }

            .primary-btn{
                margin-left: 1em;
            }

            .quest-event { 
                
                .box {
                    background-color: #ebebeb;
                    border-radius: 2em;
                    margin: 1.3em 2.5em 0em 0em;
                    padding: 1.5em 5em;
                    height: 10em;
                    // width: 10em;
                    justify-content: center;

                    .reward {
                        background-color: rgb(42, 155, 111);
                        display: flex;
                        align-items: center;
                        color: #fff;
                        width: 5em;
                        border-radius: 2em;
                        padding-left: 1em;
                        justify-content: center;
                        align-self: start;
                        transform: translateY(5.5em) translateX(6.5em);


                        img {
                            width: 2em;
                            transform: translateX(0.5em);
                        }

                    }

                }
            }
        }

        .bottom {
            display: flex;
            padding: 1.5em 3em;
            justify-content: center;
            color: #0f4e72;
            gap:3em;

            .camp-box {
                color: #0f4e72;
                background-color: #fff;
                border-radius: 1em;
                padding: 1.5em 0em;
                height: 10.5em;
                width: 16em;
            }

        }

    }

    @media screen and (max-width: 1600px) {
        section {
            // width: 91%;
            font-size: smaller;

            .middle {
                margin: -4em 1em 0em 1em;
                .ninja-laptop img {
                    width:24.7em;
                    transform: translateY(2%);
                }
                .quest-event {
                    .box {
                        padding: 1em 2em;
                    .reward {
                        transform: translateY(5.5em) translateX(8.5em);
                    }
                        
                    }
                }
            }          
        }
    }


    
</style>