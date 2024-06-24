<script lang="ts">
    let showModal = false;
    // Comments
</script>

<div class="login-button">
    <button on:click={() => { showModal = true }}>
        Login
    </button>
</div>


{#if showModal}
<section>
    <div id="login-section" class="animate__animated animate__zoomIn">

        <div class="close-login">
            <button on:click={() => {
                showModal = false
            }}>
                <img src="close-login.png" alt="">
            </button>
        </div>
       
        <div class="img">
            <img src="codeninjaslogo.png" alt="code-ninjas-logo">
        </div>

        <div class="student-admin">
            <!-- <div class=".animate__animated animate__slideInLeft"> -->
                <a href="/admin/login"><button class=".animate__animated animate__slideInLeft">&nbsp&nbspStudent&nbsp&nbsp</button></a>
            <!-- </div> -->
            <!-- <div class=".animate__animated animate__slideInLeft"> -->
                <a href="/student/login"><button class=".animate__animated animate__slideInLeft" style="border-left: 1px solid #0071AB;">&nbsp&nbspAdmin&nbsp&nbsp</button></a>
               
            <!-- </div> -->
            
            
            
        </div>

        
        <div class="form">

            <form action="">

                <div class="fill-up">
                    <label for="Username">Ninja Username</label><br>
                    <input type="text" placeholder="Ninja Username">
                </div>

                <div class="fill-up">
                    <label for="Password">Password</label><br>
                    <input type="text" placeholder="Password">
                </div>

            </form>
        </div>

        <div class="sign-in">
            <button on:click={() => {
                showModal = false
            }}>SIGN IN</button><br>
            <a data-sveltekit-reload href="/path">Forgot your password?</a>

        </div>
        
    </div>
</section>
{/if}

<style lang="scss">

@import 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css';

    .login-button button{
        color: #fff;
        background-color: #2AAC8A;
        padding: 8px 30px;
        border-radius: 8px;
        border:none;
        box-shadow: 1px 1px 15px #504f4f;
        margin: 20px;
    }

    section {
        font-weight: 700;
        position: absolute;
        height: 100vh;
        width: 100vw;
        top: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.3rem;
        flex-direction: column;
        text-align: center;
        border: none;
       

        #login-section {
            transition: all 0.3s ease-in-out;
            padding: 2em;
            background-image: linear-gradient(#1AB7E5, #00619A);
            border-radius: 34.5px;
            width: 500px;
            transition: 0.8s ease-out;
            border:10px solid #000;
            position: relative;
            margin:20px
            // border:10px solid #fff;
            
        }


        .animate__animated.animate__zoomIn{
            --animate-duration: 0.5s;
        }

        .animate__animated.animate__slideInLeft{
            --animate-duration: 0.5s;
        }

        .img img{
            width: 300px;
            margin-right: -20px;
            padding: 20px;
        }

        .close-login button{
            background-color: transparent;
            border: none;
            float: right;
        }

        .close-login img:hover{
            height: 37px;
        }

        .close-login img{
            height: 35px;
            
        }

        .student-admin{
            display: flex;
            justify-content: space-around;
            border: 5px solid #0071AB;
        }

        .student-admin button{
            background-color: transparent;
            font-size: 1.3rem;
            text-decoration-style:solid;
            font-weight: 700;
            transition: all 0.3s ease-in-out;
            color: #fff;
            padding: 10px 50px;
            cursor: pointer;
            border: none
            
            // border-style: solid;
            // border-color: #0071AB;
        }

        .student-admin button:hover{
           background-color: #03699c;
        //    border-radius: 8.5px;
           transition: all 0.3s ease-in-out;
           text-shadow: 2px 2px 10px #000000;
        }
        .form{
            text-align: left;
            margin: 20px;
            color: azure;
        }

        input[type=text] {
            width: 100%;
            padding: 20px;
            display: inline-block;
            border: 2px solid #0071AB;
            border-radius: 17px;
            background-color: var(--white);
           
        }

        label{
            color: #fff;
        }

        .fill-up{
            margin-bottom: 30px;
            font-weight: 700;
        }
        .sign-in{
            
        }

        .sign-in button{
            font-size: 1.6rem;
            padding: 10px 40px;
            background-color: #2AAC8A;
            border-radius: 8.5px;
            border:none;
            color: #fff;
            text-shadow: 2px 2px 10px #000000;
            font-weight: 700;
            cursor: pointer;
        }

        .sign-in button:hover{
            box-shadow: 1px 1px 15px #504f4f;
        }
        .sign-in a{
            color: azure;
            text-decoration: none;
            font-size: 1rem;
            
        }
        .sign-in a:hover{
            text-decoration: underline;
            color: #fff;
            
        }
    }

      
</style>
