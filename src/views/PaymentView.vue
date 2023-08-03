<template>
   
    <div class="w-full p-[50px]">
        <div class="text-[35px] font-bold">Payment Methods</div>
        <div class="relative w-full m-auto ">
            <div class=" w-[65%] absolute left-0 flex flex-col border-t-[1px] pl-0 gap-y-4 ">
              <div class="w-full flex flex-col gap-y-4 pb-3">


                <div class="flex justify-between pt-4">
                    <div class="text-[20px] font-[600]">
                      Shipping information:
                      <span class="text-[16px]">{{ customerInfo.address }}, {{ customerInfo.state }}, {{ customerInfo.country }}</span>
                    </div>
                    <router-link to="/cart/checkout">
                      <div class="text-[20px] text-blue-500 underline">Edit</div>
                    </router-link>
                </div>
                <div class="flex justify-between border-b-[1px] pb-4">
                    <div class="text-[20px] font-[600]">Shipping Method 
                      <span v-if="selectedShippingMethod" class="text-[16px]"> - {{ selectedShippingMethod.name }}, {{ selectedShippingMethod.price }}$</span>
                      <span v-else class="text-[16px]"> - Not selected</span>
                    </div>
                    <router-link to="/cart/shipping">
                      <div class="text-[20px] text-blue-500 underline">Edit</div>
                    </router-link>
                  </div>
                <div class="flex justify-between">
                  <div class="text-[20px] font-[600]">Payment Method</div>
                  <img src="../assets/images/pay-method.png" alt="">
                </div>
                <div class="w-full relative">
                  
                    <input
                    type="text"
                    placeholder="Card Number"
                    class="w-full p-2.5 rounded-[10px] border-[1px] drop-shadow-xl"
                    v-model="cardInfo.cardNumber">
                  <svg class="absolute right-5 top-2.5" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                    <path d="M0 13.7464V22.5C0 24.5711 1.67893 26.25 3.75 26.25H26.25C28.3211 26.25 30 24.5711 30 22.5V13.7464C29.9656 13.7488 29.9309 13.75 29.8958 13.75H0.104167C0.0691175 13.75 0.0343794 13.7488 0 13.7464Z" fill="black" fill-opacity="0.8"/>
                    <path d="M30 11.2536V7.5C30 5.42893 28.3211 3.75 26.25 3.75H3.75C1.67893 3.75 0 5.42893 0 7.5V11.2536C0.0343794 11.2512 0.0691175 11.25 0.104167 11.25H29.8958C29.9309 11.25 29.9656 11.2512 30 11.2536Z" fill="black" fill-opacity="0.8"/>
                  </svg>
                </div>
                <div class="flex gap-x-5 pb-6 border-b-[1px]">
                  <div class="w-full relative">
                    <input type="text" placeholder="Name"
                    class="w-full p-2.5 rounded-[10px] border-[1px] drop-shadow-[10px_4px_4px_rgba(0,0,0,0.25)]" v-model="cardInfo.cardName">
                    <svg class="absolute right-5 top-2.5" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                      <path d="M15 1.25C11.203 1.25 8.125 4.32804 8.125 8.125C8.125 11.922 11.203 15 15 15C18.797 15 21.875 11.922 21.875 8.125C21.875 4.32804 18.797 1.25 15 1.25Z" fill="black" fill-opacity="0.8"/>
                      <path d="M8.75 17.5C5.29822 17.5 2.5 20.2982 2.5 23.75V27.5C2.5 28.1904 3.05964 28.75 3.75 28.75H26.25C26.9404 28.75 27.5 28.1904 27.5 27.5V23.75C27.5 20.2982 24.7018 17.5 21.25 17.5H8.75Z" fill="black" fill-opacity="0.8"/>
                    </svg>
                  </div>
                  <div class="w-full relative">
                    <input type="text" placeholder="MM/YY"
                    class="w-full p-2.5 rounded-[10px] border-[1px] drop-shadow-[10px_4px_4px_rgba(0,0,0,0.25)]" v-model="cardInfo.expiryDate">
                    <svg class="absolute right-5 top-2.5" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                      <path d="M10 0.625C11.0355 0.625 11.875 1.46447 11.875 2.5V3.75H18.125V2.5C18.125 1.46447 18.9645 0.625 20 0.625C21.0355 0.625 21.875 1.46447 21.875 2.5V3.75H23.75C25.8211 3.75 27.5 5.42893 27.5 7.5V10H2.5V7.5C2.5 5.42893 4.17893 3.75 6.25 3.75H8.125V2.5C8.125 1.46447 8.96447 0.625 10 0.625Z" fill="black" fill-opacity="0.8"/>
                      <path d="M2.5 25V12.5H27.5V25C27.5 27.0711 25.8211 28.75 23.75 28.75H6.25C4.17893 28.75 2.5 27.0711 2.5 25Z" fill="black" fill-opacity="0.8"/>
                    </svg>
                  </div>
                  <div class="w-full relative">
                    <input type="text" placeholder="CVV"
                    class="w-full p-2.5 rounded-[10px] border-[1px] drop-shadow-[10px_4px_4px_rgba(0,0,0,0.25)]" v-model="cardInfo.CVV">
                    <svg class="absolute right-5 top-2.5" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M12.9832 2.23162C13.6693 2.30786 14.1637 2.92588 14.0875 3.61202L13.4124 9.68753H17.7682L18.4816 3.26692C18.5578 2.58078 19.1759 2.08636 19.862 2.1626L20.4832 2.23162C21.1693 2.30786 21.6637 2.92588 21.5875 3.61202L20.9124 9.68753H25.3125C26.0029 9.68753 26.5625 10.2472 26.5625 10.9375V11.5625C26.5625 12.2529 26.0029 12.8125 25.3125 12.8125H20.5652L20.0791 17.1875H25.3125C26.0029 17.1875 26.5625 17.7472 26.5625 18.4375V19.0625C26.5625 19.7529 26.0029 20.3125 25.3125 20.3125H19.7319L19.0185 26.7332C18.9422 27.4193 18.3242 27.9137 17.6381 27.8375L17.0169 27.7685C16.3308 27.6923 15.8363 27.0742 15.9126 26.3881L16.5876 20.3125H12.2319L11.5185 26.7332C11.4422 27.4193 10.8242 27.9137 10.1381 27.8375L9.51689 27.7685C8.83076 27.6923 8.33634 27.0742 8.41258 26.3881L9.08764 20.3125H4.6875C3.99714 20.3125 3.4375 19.7529 3.4375 19.0625V18.4375C3.4375 17.7472 3.99714 17.1875 4.6875 17.1875H9.43486L9.92097 12.8125H4.6875C3.99714 12.8125 3.4375 12.2529 3.4375 11.5625V10.9375C3.4375 10.2472 3.99714 9.68753 4.6875 9.68753H10.2682L10.9816 3.26692C11.0578 2.58078 11.6759 2.08636 12.362 2.1626L12.9832 2.23162ZM16.9349 17.1875L17.421 12.8125H13.0652L12.5791 17.1875H16.9349Z" fill="black" fill-opacity="0.8"/>
                    </svg>
                  </div>
                </div>
                <div class="flex gap-y-4 flex-col pb-4">
                    <span class="text-[20px] font-[600]">Billing address</span>
                    <div class="w-full p-2.5 rounded-[10px] border-[1px] drop-shadow-xl font-[600]">
                      <input
                        type="radio"
                        name="billingRadio"
                        v-model="cardInfo.billingAddressSameAsShipping"
                        value="true"
                      >
                      <label for=""> Same as shipping address</label>
                    </div>
                    <div class="w-full p-2.5 rounded-[10px] border-[1px] drop-shadow-xl font-[600]">
                      <input
                        type="radio"
                        name="billingRadio"
                        v-model="cardInfo.billingAddressSameAsShipping"
                        value="false"
                      >
                      <label for=""> Use a different billing address</label>
                    </div>
                  </div>
                  <div class="flex gap-y-4 flex-col">
                    <span class="text-[20px] font-[600]">Information</span>
                    <div class="w-full p-2.5 rounded-[10px] border-[1px] drop-shadow-xl font-[600]">
                      <input type="checkbox" v-model="cardInfo.saveInformation">
                      <label for=""> Save my information</label>
                    </div>
                  </div> 
              </div>
              <div class="flex gap-x-[330px] pt-4 pb-4">
                  <router-link to="/cart/shipping" class="w-full ">
                  <div class="p-3.5 text-white rounded-[20px] font-bold bg-black 
                    flex gap-x-1 drop-shadow-[10px_4px_4px_rgba(0,0,0,0.25)] justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M8.38268 3.07609C8.75636 3.23087 9 3.59551 9 3.99997V6.5H15.5C16.9587 6.5 18.3576 7.07946 19.3891 8.11091C20.4205 9.14236 21 10.5413 21 12V20C21 20.5523 20.5523 21 20 21H19C18.4477 21 18 20.5523 18 20V12C18 11.337 17.7366 10.7011 17.2678 10.2322C16.7989 9.76339 16.163 9.5 15.5 9.5H9V12C9 12.4044 8.75636 12.7691 8.38268 12.9238C8.00901 13.0786 7.57889 12.9931 7.29289 12.7071L3.29289 8.70707C2.90237 8.31655 2.90237 7.68339 3.29289 7.29286L7.29289 3.29286C7.57889 3.00686 8.00901 2.92131 8.38268 3.07609Z" fill="white"/>
                    </svg>
                    <span>Shipping info</span>
                  </div>
                  </router-link>
                  <router-link to="/cart/complete-order" class="w-full">
                  <div class="p-3.5 text-white rounded-[20px] font-bold bg-black
                    w-full flex drop-shadow-[10px_4px_4px_rgba(0,0,0,0.25)] justify-center">
                    <span @click="completeOrder">Complete order</span>
                  </div>
                  </router-link>  
              </div>
            </div>
            <div class="absolute right-0 flex w-[30%] h-[550px] p-4 border-[1px] flex-col bg-[#F5F5F5]">
                <div class="text-[20px] border-b-[1px] w-full font-bold">
                    Summary (1Item)
                </div>
                <div class="flex flex-col pt-4 pb-4 gap-y-4 border-b-[1px]">
                    <div class="flex justify-between">
                        <span>Subtotal</span>
                        <span>${{$store.state.cartTotal.toFixed(2)}}</span>
                    </div>
                    <div class="flex justify-between">
                        <span>Shipping</span>
                        <span>${{selectedShippingMethod.price}}</span>
                    </div>
                    <div class="flex justify-between">
                        <span>Est. Taxes</span>
                        <span>$1.44</span>
                    </div>
                </div>
                <div class="flex justify-between pt-4 pb-6 border-b-[1px]">
                    <span>Promotion Code</span>
                    <span v-if="isValidPromoCode" class="text-red-500">-{{discount_value}}%</span>
                    <span v-else>-</span>
                </div>

                <div v-if="isValidPromoCode">
                  <div class="flex justify-between pt-4">
                    <span class="font-bold">Total</span>
                    <span class=""><s>${{(($store.state.cartTotal + selectedShippingMethod.price + 1.44).toFixed(2))}}</s></span>
                  </div>
                  <div class="flex justify-end">
                    <div class="font-bold">${{totalPrice}}</div>
                  </div>
                </div>
                <div v-else>
                  <div class="flex justify-between pt-4">
                    <span class="font-bold">Total</span>
                    <span class="font-bold">${{(($store.state.cartTotal + selectedShippingMethod.price + 1.44).toFixed(2))}}</span>
                  </div>
                </div>
                



                <div class="flex justify-center pb-2 w-full gap-x-4 pt-4">
                    <input type="text" placeholder="Apply promo code"
                    class="w-[70%] p-2 border-[2px] pl-5 drop-shadow-[10px_4px_4px_rgba(0,0,0,0.25)] rounded" v-model="selectedPromo_code"
                    >
                    <button class="w-[30%] p-2 bg-black text-white rounded drop-shadow-[10px_4px_4px_rgba(0,0,0,0.25)]" @click="checkPromoCode">Apply</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'; 
import { toast } from 'vue3-toastify';
import store from '../store';

export default {
  data() {
    return {
      selectedShippingMethod: null,
      shippingMethods: [
        { name: "UPS Ground", price: 2.22 },
        { name: "UPS 3 Day", price: 5.22 },
        { name: "UPS 2nd Day Air", price: 6.22 },
        { name: "UPS Next Day Air", price: 10.22 },
      ],
      customerInfo: {
        email: "",
        firstName: "",
        lastName: "",
        company: "",
        address: "",
        apt: "",
        country: "Country",
        state: "State",
        zipCode: "",
      },
      cardInfo: {
        cardNumber: "",
        cardName: "",
        expiryDate: "",
        CVV: "",
        billingAddressSameAsShipping: true,
        saveInformation: false,
      },
      promo_code: '',
      selectedPromo_code: '',
      discount_value: null, 
      isValidPromoCode: false, 
      totalPrice: 0
    };
  },
  methods: {
    loadSelectedShippingMethodFromLocalStorage() {
      const savedShippingMethod = localStorage.getItem("selectedShippingMethod");
      if (savedShippingMethod !== null) {
        try {
          this.selectedShippingMethod = JSON.parse(savedShippingMethod);
        } catch (error) {
          console.error("Error parsing JSON data from localStorage:", error);
          this.selectedShippingMethod = null;
        }
      }
      console.log("Selected Shipping Method:", this.selectedShippingMethod);
    },
    loadCustomerInfoFromLocalStorage() {
      const savedCustomerInfo = localStorage.getItem("customerInfo");
      if (savedCustomerInfo !== null) {
        try {
          this.customerInfo = JSON.parse(savedCustomerInfo);
        } catch (error) {
          console.error("Error parsing JSON data from localStorage:", error);
        }
      }
      console.log("Customer Information:", this.customerInfo);
    },

    completeOrder() {
        localStorage.setItem("cardInfo", JSON.stringify(this.cardInfo)); 
    },

    loadCardInfoFromLocalStorage() {
        const savedCardInfo = localStorage.getItem("cardInfo"); 
        if(savedCardInfo !== null) {
            try {
                this.cardInfo = JSON.parse(savedCardInfo); 
            }catch(error) {
                console.error("Error parsing JSON data from localStorage:", error);
            }
        }


    },

    async checkPromoCode() {
      try {
        const response = await axios.get('http://localhost:3001/promo_code');
        this.promo_code = response.data;
        console.log('response:', this.promo_code);

        const selectedPromoCode = this.selectedPromo_code;

        console.log("Promo_Code: ",this.selectedPromo_code); 

        for (const promo of this.promo_code) {
          if (promo.code === selectedPromoCode) {
            this.isValidPromoCode = true;

            toast.success("Promotion Code Valide");
            this.discount_value = promo.discount;


            localStorage.setItem("discount_value", JSON.stringify(this.discount_value)); 

            // console.log(this.isValidPromoCode); 
            

          }
        }
        if(this.isValidPromoCode){
          this.totalPrice = (((this.$store.state.cartTotal + this.selectedShippingMethod.price + 1.44).toFixed(2)) * ((100 - this.discount_value)/100)).toFixed(2);
        }else{
          this.totalPrice = ((this.$store.state.cartTotal + this.selectedShippingMethod.price + 1.44).toFixed(2))
        }
        console.log("total price: ", this.totalPrice); 
      } catch (error) {
        console.error('Error fetching promo code:', error);
      }

      localStorage.setItem("isValidPromoCode", JSON.stringify(this.isValidPromoCode)); 
      console.log("isValidPromo: ",this.isValidPromoCode)
    },
  },
  created() {
    this.loadSelectedShippingMethodFromLocalStorage();
    this.loadCustomerInfoFromLocalStorage();
    this.loadCardInfoFromLocalStorage();
  },
  
  
  
};
</script>
