<template>
  <Index></Index>
  <div>
    <div class="picture">
      <transition name="slide">
        <img :key="currentImage" :src="currentImage" alt="image">
      </transition>
    </div>  
    <div class="text_one">Boost your performance, break the record and get the rewards!</div>
    <div class="type_cube">
      <router-link to="/product">
        <div class="type">
          <img src="../../image/image_47.png" alt="">
        </div>
      </router-link>
      <router-link to="/product">
        <div class="type">
          <img src="../../image/image_47_(1).png" alt="">
        </div>
      </router-link>
      <router-link to="/product">
        <div class="type">
          <img src="../../image/image_47_(2).png" alt="">
        </div>
      </router-link>
      <router-link to="/product">
        <div class="type">
          <img src="../../image/image_26.png" alt="">
        </div>
      </router-link>
      <router-link to="/product">
        <div class="type">
          <img src="../../image/image_47_(3).png" alt="">
        </div>
      </router-link>
      
    </div>
    <div class="text_two">Best Selling Product</div>

    <div class="flex">
      <div class="w-[300px] m-[20px] p-[20px] bg-neutral-100 shadow-black "
      v-for="product in getRandomProducts(products, 4)" :key="product.id">
        <router-link
        :to="{ name: 'ProductView', params: { productId: product.id } }">

        <div class="flex justify-center mb-[3px]">
          <img :src="product.image" alt="Product Image" class="w-[200px] h-[200px] object-cover rounded">
        </div>
        <div class="flex flex-col items-center p-[10px] rounded mt-[10px] justify-center text-center">
          <div class="font-[18px] font-bold mb-[5px]">Name: {{ product.product_name }}</div>
          <div class="font-[20px] text-red-500 self-center">Price: {{ product.price }}</div>
        </div>

      </router-link>
      <div class="flex justify-center">
        <CartBTN :product="product"></CartBTN>
      </div>
    </div>
      
    </div>  

    <div class="flex">
      <div class="w-[300px] m-[20px] p-[20px] bg-neutral-100 shadow-black "
      v-for="product in getRandomProducts(products, 4)" :key="product.id">
        <router-link
        :to="{ name: 'ProductView', params: { productId: product.id } }">

        <div class="flex justify-center mb-[3px]">
          <img :src="product.image" alt="Product Image" class="w-[200px] h-[200px] object-cover rounded">
        </div>
        <div class="flex flex-col items-center p-[10px] rounded mt-[10px] justify-center text-center">
          <div class="font-[18px] font-bold mb-[5px]">Name: {{ product.product_name }}</div>
          <div class="font-[20px] text-red-500 self-center">Price: {{ product.price }}</div>
        </div>

      </router-link>
      <div class="flex justify-center">
        <CartBTN :product="product"></CartBTN>
      </div>
    </div>
      
    </div>  


  </div>

  <FooterView></FooterView>
</template>

<script>
import axios from 'axios';
import Index from './Index.vue'; 
import FooterView from './FooterView.vue';
import CartBTN from '../components/CartBTN.vue';

export default {
  data() {
    return {
      images: [
        "../../image/a.png",
        "../../image/b.png",
        "../../image/c.png"
      ],
      currentImageIndex: 0,
      products: []
    };
  },
  mounted() {
    setInterval(this.changeImage, 5000);
    this.fetchProduct();
  },
  methods: {
    changeImage() {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
    },
    getRandomProducts(products, count) {
    const shuffled = products.slice().sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
    },
    async fetchProduct() {
      try {
        const response = await axios.get('http://localhost:3001/products');
        this.products = response.data;
      } catch (error) {
        console.error(error);
      }
    }
  },
  computed: {
    currentImage() {
      return this.images[this.currentImageIndex];
    }
  }, 
  components: {
    FooterView,
    Index,
    CartBTN
  },
};
</script>

<style scoped>
@media (min-width: 1024px) {
.home {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}

.wrapper-router {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.product_container_one {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.product {
  width: 300px;
  height: 380px;
  margin: 20px;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.product_image {
  display: flex;
  justify-content: center;
  margin-bottom: 3px;
}

.product_image img {
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 4px;
}

.product_details {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  border-radius: 4px;
  margin-top: 10px;
  justify-content: center; 
  text-align: center; 
}

.product_price {
  font-size: 20px;
  color: red;
  margin-bottom: 3px;

}
.product_name {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
  
}

.product_price {
  font-size: 20px;
  color: red;
  margin-bottom: 18px;
  align-self: center;
}

.product_description {
  font-size: 14px;
  color: #666;
  text-align: center;
}

.brand_container{
  display: flex;
  gap: 45px; 
  align-items: center;
}
.brand {
  width: 80px;
  height: 80px;

}
.brand_diff {
  width: 160px;
  height: 80px;
  display: flex;
  align-self: center;

}
.bottom_logo {
  margin-left: 20px;
}
.picture{
  display: flex;
  justify-content: center;
}
.picture img{
  padding-top: 30px;
  padding-left: 30px;
  padding-right: 30px;
  width: auto;
  height: auto;
}
.text_one {
  font-size: 25px;
  font-family: 'Oswald', sans-serif;
  padding-top: 20px;
  display: flex;
  justify-content: center;
}
.type {
  border: solid 1px;
  width: 217px;
  height: 210px;
  display: flex;
  justify-content: center;
}
.text_two {
  font-size: 25px;
  font-family: 'Oswald', sans-serif;
  padding-top: 25px;
  display: flex;
  justify-content: center;
}
.type_cube {
  padding-top: 25px;
  display: flex !important;
  justify-content: center;
  gap: 30px;
}
.email {
  border: solid 2px;
  padding-left: 10px;
  margin-right: 20px;
}
.picture {
  position: relative;
}
.slide-enter-active, .slide-leave-active {
  animation: slide-in 0.5s ease;
}
.slide-enter, .slide-leave-to {
  transform: translateX(100%);
  position: absolute;
}
.add_to_cart:hover {
  background-color: lightgray; 
}
.add_to_cart{
  width: 130px;
  border-color: lightgreen;
  border-radius: 5px;
  border-width: 2px;
  display: flex;
  justify-content: center;

}

@keyframes slide-in {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
}
</style>