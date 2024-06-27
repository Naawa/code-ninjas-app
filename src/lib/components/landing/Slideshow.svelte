<script>
	import { Splide, SplideSlide } from "@splidejs/svelte-splide";
    import '@splidejs/svelte-splide/css/skyblue';
</script>
<div class="featured-header box-shadow">
		
    <Splide aria-label="featured-header">

        <SplideSlide>
          <img src="homepage-featured-image1.png" alt="Featured 1"/>
        </SplideSlide>
        
        <SplideSlide>
          <img src="homepage-featured-image1.png" alt="Featured 2"/>
        </SplideSlide>
        
        <SplideSlide>
            <img src="homepage-featured-image1.png" alt="Featured 2"/>
        </SplideSlide>
        
     </Splide>
</div>


<style lang="scss">
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
</style>