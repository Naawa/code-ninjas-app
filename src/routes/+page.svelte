<script>
	import TopBar from "$lib/components/landing/TopBar.svelte";
	import BottomBar from "$lib/components/landing/BottomBar.svelte";
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	// import '@splidejs/svelte-splide/css';
	import '@splidejs/svelte-splide/css/skyblue';	

	export let data;
</script>

<TopBar {data}></TopBar>

<div id="wrapper">

	
	<div class="featured-header box-shadow">
		
		<Splide aria-label="featured-header">

			<SplideSlide>
			  <img src="homepage-featured-image1.png" alt="Featured Image 1"/>
			</SplideSlide>
			
			<SplideSlide>
			  <img src="homepage-featured-image1.png" alt="Featured Image 2"/>
			</SplideSlide>
			
			<SplideSlide>
				<img src="homepage-featured-image1.png" alt="Featured Image 2"/>
			</SplideSlide>
			
		 </Splide>
	</div>

	<div class="intro">
		<div class="box">
			<img src="homepage-Front Page Background 3.png" class = "box-shadow" alt="photo of slide 1">
			<h4 class = "bold-9 white">Earn Dojo Coins</h4>
			<p> <b class = "white"> Earn coins by completeting
				challanges, Game Jams, Leveling up,
				and spend them on unique rewards</b> </p>
		</div>
		<div class="box">
			<img src="homepage-Front Page Background 2.png" class = "box-shadow"alt="photo of slide 2">
			<h4 class = "bold-9 white">Collect Awesome Rewards!</h4>
			<p> <b class = "white"> Collect rewards by leveling up,
				competing in challanges, attending events,
				and purchasing through the Shuriken shop</b> </p>
		</div>
		<div class="box">
			<img src="homepage-Front Page Background 1.png" class = "box-shadow"alt="photo of slide 3">
			<h4 class = "bold-9 white">Compete in Challanges!</h4>
			<p> <b class = "white"> Complete daily, monthly, and
				weekly challanges. Compete
				with other ninjas in Game Jams </b> </p>
		</div>
		<div class="box">
			<img src="homepage-Front Page Background 3.png" class = "box-shadow"alt="photo of slide 4">
			<h4 class = "bold-9 white">Become A Legendary Ninja!</h4>
			<p> <b class = "white"> Make your way through the
				Path of Enlightenment and
				Become a Legend! </b> </p>
		</div>
	</div>

	<div class="create create-gradient box-shadow">
		<div class ="img img-create-gradient box-shadow-right">
		<img src="homepage-create.png" alt="">
		</div>
		<div class="text">
			<h3 class="bold-9 white">
				We Create Video Games!
			</h3>
			<p class="white">
				<br>Our application allows Ninjas to compete in event’s all across Code Ninjas BC, find out special events that their centre is participating in and much more. Ninjas will be able to earn coins, see progress and statistics on our leaderboard, collect rewards, and learn how to use their computers better!
				<br> <br>
				Increase your typing speed, Mouse control, Coding ability, and impress friends with your awesome Icons, Banners, and Level.
			</p>
		</div>
	</div>

</div>


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

		#wrapper {
			
			.featured-header {
				margin-bottom:2.5em;
				border-radius: 30px;
				z-index: 2;
			
			 	img {
					width: 100%;
					display: flex;
					justify-content: center;
					margin:0em auto 0em auto;
				}
			}

			.intro {
				// margin: 5em;
				display: flex;
				flex-wrap: wrap;
			}

			.box{
				width: 23%;
				margin: 0.9em;
				justify-content: center;
				
				b{
					opacity: 80%;
					letter-spacing: 1px;
				}

				p,h4{
					text-align: center;
					padding: 0.35em 1.3em;
				}

				img{
					width: 100%;
					border-radius: 20px;
				}
			
			}
			
			.create {
				width: 100%;
				display: flex;
				justify-content: start;
				align-items: center;
				border-radius: 1.5em;
				margin: 3em 0em;

				.img {
				width: 70%;
				height: 100%;
				border-radius: 1.5em;
				border-top-right-radius: 0em;
				border-bottom-right-radius: 0em;
			
					img{
						width: 100%;
					}
				}

				.text{
				padding: 1em 2em;
				font-weight: 700;
				letter-spacing: 1px;
				}
			}
		}

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
	
	
	




