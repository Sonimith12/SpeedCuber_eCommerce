<template>
  <Index></Index>
  <div class="w-full">
    <div class="m-[35px] font-bold font-size[35px]">About SpeedCuber</div>
    <div class="flex justify-center">
      <p class="w-[55%] ml-[80px] text-justify border-t-[2px] pt-[15px]">Welcome to our vibrant and user-friendly e-commerce platform! At our website, we are dedicated to providing you with an unparalleled online shopping experience. Explore a wide array of high-quality products from leading brands, carefully curated to cater to your diverse needs and preferences. As a part of our commitment to customer satisfaction, we regularly feature exciting promotional offers and exclusive deals on various products. Keep an eye out for our limited-time discounts, seasonal sales, and special promotions, ensuring you get the best value for your money. Our e-commerce site strives to create a seamless shopping journey for you, where you can enjoy convenience, affordability, and a vast selection of products at your fingertips. Join us in this shopping extravaganza, and let us take your e-commerce experience to new heights with our unbeatable promotions!</p>
      <div class="w-[40%] ml-[100px]">
        <figure class="">
          <img src="https://cdn.dribbble.com/users/299116/screenshots/16803634/media/25b4800be2a132a78cf25c2f7d536b9f.png?resize=400x300&vertical=center" alt="">
          <a class="self-center border-b-[2px] ml-[150px]" href="https://cdn.dribbble.com/users/299116/screenshots/16803634/media/25b4800be2a132a78cf25c2f7d536b9f.png?resize=400x300&vertical=center">View Image</a>
        </figure>
      </div>

    </div>
    <div class="m-[35px] font-bold font-size[35px]">About Owner</div>
    <div class="flex">
      <div class="w-[30%] ml-[100px]">
        <figure class="">
          <img src="https://cdn.dribbble.com/users/299116/screenshots/16803634/media/25b4800be2a132a78cf25c2f7d536b9f.png?resize=400x300&vertical=center" alt="">
          <a class="self-center border-b-[2px] ml-[145px]" href="https://cdn.dribbble.com/users/299116/screenshots/16803634/media/25b4800be2a132a78cf25c2f7d536b9f.png?resize=400x300&vertical=center">View Image</a>
        </figure>
      </div>
      <p class="w-[50%] text-justify border-t-[2px] pt-[15px] ml-[60px]">Allow me to introduce myself – a highly skilled developer with a deep passion for knowledge and a thirst for continuous learning. With a strong educational background in languages and a flair for mathematics, statistics, and probability, I take great pleasure in solving intricate problems with analytical precision. My true center of interest lies in the captivating world of machine learning and artificial intelligence. It is in this realm that I find my purpose, exploring the vast possibilities of data-driven insights and intelligent algorithms. As a dedicated individual with an unwavering commitment to excellence, I strive to stay at the forefront of advancements in my field. With each new challenge, I embrace the opportunity to grow and expand my expertise. I am driven by the belief that technology can change the world, and I am excited to contribute my skills and knowledge to the forefront of AI and machine learning. The journey ahead is bound to be exhilarating as I continue to explore, innovate, and make a meaningful impact in this ever-evolving landscape.</p>
  
    </div>

    <div class="m-[35px] font-bold font-size[35px] border-b-[2px] pb-2">Our Head Quarter Office</div>
    <div class="m-[35px] flex">
      <div class="mapouter">
        <div class="gmap_canvas">
          <iframe class="gmap_iframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Bern&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
          <a href="https://connectionsgame.org/">Connections Game</a>
        </div>
      </div>
      <p class="w-[50%] text-justify ml-[60px]">Located in: <b>Bern, Switzerland</b> <br>Kramgasse 22, 3011 Bern, Switzerland <br><br>For more information please click on this <a class="border-b-[2px] text-sky-600" href="https://www.youtube.com/watch?v=2C_kpTRS2C8">link</a></p>
    </div>
    <div class="flex ml-10 mb-10">
      <p>Follow me: </p>
      <a href="">
        <img class="w-[40px] h-[25px] mt-[4px]" src="https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png" alt="">
      </a>
      <a href="">
        <img class="w-[21px] h-[21px] mt-[6.8px]" src="https://img.freepik.com/free-icon/instagram_318-183413.jpg" alt="">
      </a>
      <a href="">
        <img class="w-[26px] h-[26px] mt-[4.3px] ml-[7px]" src="https://image.similarpng.com/very-thumbnail/2020/07/Linkedin-logo-on-transparent-Background-PNG-.png" alt="">
      </a>
      <a href="">
        <img class="w-[35px] h-[35px]" src="https://static.vecteezy.com/system/resources/previews/018/930/479/non_2x/telegram-logo-telegram-icon-transparent-free-png.png" alt="">
      </a>
    </div>
    
    
  </div>
  <FooterView></FooterView>
</template>
<script>
import Index from "./Index.vue";
import FooterView from "./FooterView.vue";

export default {
  components: {
    Index,
    FooterView
  }
}
</script>
<style>
@media (min-width: 1024px) {
  
}
.mapouter{
  position:relative;
  text-align:right;
  width:600px;height:400px;
}.gmap_canvas {
  overflow:hidden;
  background:none!important;
  width:600px;
  height:400px;
}.gmap_iframe {
  width:600px!important;
  height:400px!important;}

</style>
