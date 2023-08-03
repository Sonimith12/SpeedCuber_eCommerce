<template>
    <Index></Index>


    <div v-if="product">
        <div class="w-full p-5">
     
            <div class="relative w-full m-auto h-[420px]">
                <div class=" w-[58%] absolute left-0 flex h-[420px] justify-center
                  bg-[#EEEEEE] pl-0 gap-y-4 drop-shadow-[10px_4px_4px_rgba(0,0,0,0.25)] items-center">
                  <img :src="product.image" class="w-auto h-[90%]" alt="">
                </div>
                <div class="absolute right-0 gap-y-2 flex w-[37%] h-fit p-4 border-[1px] flex-col bg-[#F5F5F5]">
                    <span class="font-bold">
                      {{product.product_name}}
                    </span>
                    <div class="flex justify-between pb-4 border-b-[1px]">
                      <span class="text-[#D30000] font-bold">
                        {{product.price}}
                      </span>
                      <span class="text-[12px] text-gray-400
                      ">19 sold</span>
                    </div>
                    <div class="p-5 border-b-[1px]">
                      <div class="flex gap-x-4">
                        <svg class="mt-[4px]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM18.4158 9.70405C18.8055 9.31268 18.8041 8.67952 18.4127 8.28984L17.7041 7.58426C17.3127 7.19458 16.6796 7.19594 16.2899 7.58731L10.5183 13.3838L7.19723 10.1089C6.80398 9.72117 6.17083 9.7256 5.78305 10.1189L5.08092 10.8309C4.69314 11.2241 4.69758 11.8573 5.09083 12.2451L9.82912 16.9174C10.221 17.3039 10.8515 17.301 11.2399 16.911L18.4158 9.70405Z" fill="#D30000"/>
                        </svg>
                        <span class>Magnet: <b>Yes</b> </span>
                      </div>
                      <div class="flex gap-x-4">
                        <svg class="mt-[4px]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM18.4158 9.70405C18.8055 9.31268 18.8041 8.67952 18.4127 8.28984L17.7041 7.58426C17.3127 7.19458 16.6796 7.19594 16.2899 7.58731L10.5183 13.3838L7.19723 10.1089C6.80398 9.72117 6.17083 9.7256 5.78305 10.1189L5.08092 10.8309C4.69314 11.2241 4.69758 11.8573 5.09083 12.2451L9.82912 16.9174C10.221 17.3039 10.8515 17.301 11.2399 16.911L18.4158 9.70405Z" fill="#D30000"/>
                        </svg>
                        <span>Speed Cube: <b>Yes</b></span>
                      </div>
                      
                    </div>
                    
                    <div class="flex justify-between w-98">
                      <div class="font-bold">Select a color: </div>
                      <div class="pl-20">
                          <select class="border-2 w-32 h-7 pl-1" onchange="selectOption()">
                              <option value="">White</option>
                              <option value="">Black</option>
                           </select>
                      </div>
                      
                    </div>
                    <div class="flex justify-between border-b-[1px] w-98">
                      <div class="font-bold">Quantity:</div>
                      <input type="number" value="1" class="p-3 w-[70px] h-7 w-32 border-2 mb-3">
                    </div>
                    
                    <CartBTN :product="product"></CartBTN>
                    
                    
      
                    <span class="p-1 text-[14px]">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical.</span>
                </div>
            </div>
            <div class="flex gap-x-4 pt-4 pb-6 border-b-[1px]">
              <div class="w-[100px] h-[100px] border-[5px] shadow-[10px_10px_4px_0_rgba(0,0,0,0.25)]
                border-blue-400 flex justify-center">
                <img src="https://i.ebayimg.com/images/g/ch4AAOSwrMFi~V9u/s-l1200.jpg" class="w-fit h-auto" alt="">
              </div>
              <div class="w-[100px] h-[100px] border-[5px] shadow-[10px_10px_4px_0_rgba(0,0,0,0.25)]
                border-[#EAEBEA] flex justify-center">
                <img src="https://i.ebayimg.com/images/g/ch4AAOSwrMFi~V9u/s-l1200.jpg" class="w-fit h-auto" alt="">
              </div>
              <div class="w-[100px] h-[100px] border-[5px] shadow-[10px_10px_4px_0_rgba(0,0,0,0.25)]
                border-[#EAEBEA] flex justify-center">
                <img src="https://cuboss.com/wp-content/uploads/2020/01/gan-356-xs-black.jpg" class="w-fit h-auto" alt="">
              </div>
            </div>
            <div class="mt-2 font-bold text-[30px] pt-2 w-fit border-b-[2px] border-red-600">
              You might also like
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


          
          
          
          
    </div>

    <div v-else>
        Product not found
    </div>
    
    <FooterView></FooterView>
  </template>
  <script>
    import axios from 'axios';
    import Index from './Index.vue'; 
    import FooterView from './FooterView.vue';
    import CartBTN from '../components/CartBTN.vue';
    export default{
        data(){
            return {
                products: [],
                product: '',
            };
        },
        components:{
            Index,
            FooterView,
            CartBTN
        },
        methods: {
            getRandomProducts(products, count) {
                const shuffled = products.slice().sort(() => 0.5 - Math.random());
                return shuffled.slice(0, count);
            },
            async fetchProduct() {
            try {
                const response = await axios.get('http://localhost:3001/products');
                const response1 = await axios.get('http://localhost:3001/product1');
                const response2 = await axios.get('http://localhost:3001/product2');
                const response3 = await axios.get('http://localhost:3001/product3');
                const response4 = await axios.get('http://localhost:3001/product4');
                const response5 = await axios.get('http://localhost:3001/others_product');


                this.products = [
                                  ...response.data,
                                  ...response1.data,
                                  ...response2.data,
                                  ...response3.data,
                                  ...response4.data,
                                  ...response5.data
                                ];
                console.log(this.products); 
                } catch (error) {
                    console.error(error);
                }
            },
            updateProductFromRoute() {
              const productId = parseInt(this.$route.params.productId, 10);
              this.product = this.products.find((product) => product.id === productId);
            },
        },
        async mounted() {
          await this.fetchProduct();
          const productId = parseInt(this.$route.params.productId, 10);
          this.product = this.products.find((product) => product.id === productId);

          this.updateProductFromRoute();
        },

        watch: {
          '$route.params.productId': {
            handler(newProductId) {
              this.updateProductFromRoute();
            },
            immediate: true,
          },
        },

         
    }


    
</script>
 

