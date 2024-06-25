<script>
    export let data;
</script>


    <footer class = "box-shadow-up">
        <div id="footer">

        
        <div class="logo">
            <img src="logo-side.png" alt="">
        </div>
        <div class="links">
            <li> <a href="" class = "white">Support</a>  </li>
            <li> <a href="" class = "white">Privacy Policy</a>  </li>
            <li> <a href="" class = "white">Legal</a>  </li>
        </div>
        <div class="links" style = "border-left:transparent">
            <li> <a href="" class = "white">Facebook</a> </li>
            <li> <a href="" class = "white">Discord</a> </li>
            <li> <a href="" class = "white">Instagram</a> </li>
        </div>
        <div class="button-footer">
            <li> <a href=""> <img src="password.png" alt=""></a></li>
            <li> <a href=""> <img src="contact.png" alt=""></a></li>
            
        </div>
        </div>
        <!-- <hr class= "text-center white"> -->
        <p class= "text-center white">&copy 2024 Code Ninjas | All Rights Reserved</p>
    </footer>



<style lang="scss">

    footer {
                background: rgb(37,108,177);
                background: linear-gradient(180deg, rgba(37,108,177,1) 18%, rgba(91,179,226,1) 100%);

        p {
            font-size: 0.7em;
            opacity:80%;
            }

        
    
        #footer{
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 1em;

                img{
                    width: 20em;
                    padding: 0em 2em;
                    
                }

                .links{
                    border: 2px solid #256CB1;
                    border-top:transparent;
                    border-bottom:transparent;
                    padding: 0em 2em;
                
                }

                li {
                    list-style:none;
                    font-size: 0.8em;
                }

                .button-footer{
                    padding: 0em 2em;
                    display: flex;
                    flex-direction:column;

                    img{
                        width: 80%;
                    }
                }

            }
    }
    
</style>
