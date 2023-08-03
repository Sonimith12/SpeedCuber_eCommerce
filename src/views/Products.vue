<template>
  <Index></Index>
  <div id="root" class="flex justify-center font-bold">
    <TabNav :tabs="['Rubiks Cube 3 * 3','Rubiks Cube 4 * 4', 'Rubiks Cube 2 * 2', 'Megaminx', 'Square - 1', 'Others']" :selected="selected" @selected="setSelected">
      <Tab :isSelected="selected === 'Rubiks Cube 3 * 3'">
        <div class="border mt-5">
          <div class="product_container_one">
            <div v-for="product in products" :key="product.id" class="product">
              <router-link :to="{ name: 'ProductView', params: { productId: product.id } }">
                <div class="product_image">
                  <img :src="product.image" alt="Product Image">
                </div>
                <div class="product_details">
                  <div class="product_name">{{ product.product_name }}</div>
                  <div class="product_price">${{ product.price }}</div>
                </div>
              </router-link>
              <div class="flex justify-center">
                  <CartBTN :product="product"></CartBTN>
              </div>
            </div>
          </div>
        </div>
      </Tab>
      
      <Tab :isSelected="selected === 'Rubiks Cube 2 * 2'"> 
        <div class="product_container_one">
          <div class="product" v-for="product in product1" :key="product.id">
            <router-link :to="{ name: 'ProductView', params: { productId: product.id } }">
              <div class="product_image">
                <img :src="product.image" alt="Product Image">
              </div>
              <div class="product_details">
                <div class="product_name">{{ product.product_name }}</div>
                <div class="product_price">${{ product.price }}</div>
              </div>
            </router-link>
            <div class="flex justify-center">
                <CartBTN :product="product"></CartBTN>

            </div>
          </div>
        </div>
      </Tab>

      <Tab :isSelected="selected === 'Rubiks Cube 4 * 4'"> 
        <div class="product_container_one">
          <div class="product" v-for="product in product2" :key="product.id">

            <router-link :to="{ name: 'ProductView', params: { productId: product.id } }">
              <div class="product_image">
                <img :src="product.image" alt="Product Image">
              </div>
              <div class="product_details">
                <div class="product_name">{{ product.product_name }}</div>
                <div class="product_price">${{ product.price }}</div>
              </div>
            </router-link>
            <div class="flex justify-center">
                <CartBTN :product="product"></CartBTN>
            </div>
            
          </div>
        </div>
      </Tab>
      
      <Tab :isSelected="selected === 'Megaminx'"> 
        <div class="product_container_one">
          <div class="product" v-for="product in product3" :key="product.id">
            <router-link :to="{ name: 'ProductView', params: { productId: product.id } }">
              <div class="product_image">
                <img :src="product.image" alt="Product Image">
              </div>
              <div class="product_details">
                <div class="product_name">{{ product.product_name }}</div>
                <div class="product_price">${{ product.price }}</div>
              </div>
            </router-link>
            <div class="flex justify-center">
                <CartBTN :product="product"></CartBTN>
            </div>
          </div>
        </div>
      </Tab>

      <Tab :isSelected="selected === 'Square - 1'"> 
        <div class="product_container_one">
          <div class="product" v-for="product in product4" :key="product.id">
            <router-link :to="{ name: 'ProductView', params: { productId: product.id } }">
              <div class="product_image">
                <img :src="product.image" alt="Product Image">
              </div>
              <div class="product_details">
                <div class="product_name">{{ product.product_name }}</div>
                <div class="product_price">${{ product.price }}</div>
              </div>
            </router-link>
            <div class="flex justify-center">
                <CartBTN :product="product"></CartBTN>
            </div>
            
          </div>
        </div>
      </Tab>
      
      <Tab :isSelected="selected === 'Others'"> 
        <div class="product_container_one">
          <div class="product" v-for="product in others" :key="product.id">
            <router-link :to="{ name: 'ProductView', params: { productId: product.id } }">
              <div class="product_image">
                <img :src="product.image" alt="Product Image">
              </div>
              <div class="product_details">
                <div class="product_name">{{ product.product_name }}</div>
                <div class="product_price">${{ product.price }}</div>
              </div>
            </router-link>
            <div class="flex justify-center">
                <CartBTN :product="product"></CartBTN>
            </div>
            
          </div>
        </div>
      </Tab>
      

    </TabNav>

  </div>

  

  <FooterView></FooterView>
</template>
<script>
import axios from 'axios';
import CartBTN from '../components/CartBTN.vue'
import Index from "./Index.vue";
import FooterView from './FooterView.vue';
import TabNav from './TabNav.vue';
import Tab from './Tab.vue';

export default {
  data() {
    return {
      products: [],
      product1: [],
      product2: [],
      product3: [],
      product4: [],
      others: [],
      selected: 'Rubiks Cube 3 * 3'
    }
  },
  components: {
    Index,
    FooterView,
    TabNav,
    Tab,
    CartBTN
  },
  mounted() {
    this.fetchProduct(); 
  },
  methods: {
    async fetchProduct() {
      try {
        const response = await axios.get('http://localhost:3001/products');
        const response1 = await axios.get('http://localhost:3001/product1');
        const response2 = await axios.get('http://localhost:3001/product2');
        const response3 = await axios.get('http://localhost:3001/product3');
        const response4 = await axios.get('http://localhost:3001/product4');
        const response5 = await axios.get('http://localhost:3001/others_product');

        this.products = response.data;
        this.product1 = response1.data;
        this.product2 = response2.data;
        this.product3 = response3.data;
        this.product4 = response4.data;
        this.others = response5.data;
      } catch (error) {
        console.error(error);
      }
    },
    setSelected(tab){
      this.selected = tab; 
    }
  }
}
</script>
<style>
.red_text {
  margin-top: 20px;
  margin-left: 60px;
  font-size: 30px;
  margin-bottom: 20px;
}
.product_container_one {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: flex-start;
}

.product {
  width: 289px;
  height: 400px;
  margin: 20px;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  align-self: flex-start;
}

.product_image {
  display: flex;
  justify-content: center;
  margin-bottom: 12px; /* Adjust spacing as desired */
}

.product_price {
  font-size: 20px;
  color: red;
}

.product_image img {
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 4px;
}

.product_name {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
}


</style>


