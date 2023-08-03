<template>
  <div class="w-full p-[50px]">
    <div class="font-bold text-[35px]">Shipping Methods</div>
    <div class="relative w-full m-auto">
      <div class="w-[65%] absolute left-0 flex flex-col border-t-[1px] pl-0 gap-y-4">
        <div class="w-full border-b-[1px] flex flex-col gap-y-4 pb-3">

          <div class="flex justify-between pt-4">
            <div class="text-[20px] font-[600]">
              Shipping information:
              <span class="text-[16px]">{{ customerInfo.address }}, {{ customerInfo.state }}, {{ customerInfo.country }}</span>
            </div>
            <router-link to="/cart/checkout">
              <div class="text-[20px] text-blue-500 underline">Edit</div>
            </router-link>
          </div>

          <div class="flex flex-col">
            <span class="text-[20px] font-[600]">Shipping method</span>
            <form action="" class="p-3 pb-5 border-b-[1px]">
              <fieldset class="flex gap-y-1 flex-col">
                <div v-for="method in shippingMethods" :key="method.name" class="flex justify-between">
                  <div class="flex gap-x-3">
                    <input
                      type="radio"
                      :name="method.name"
                      :value="method"
                      v-model="selectedShippingMethod"
                    >
                    <label for="">{{ method.name }}</label>
                  </div>
                  <div>${{ method.price }}</div>
                </div>
              </fieldset>
            </form>
          </div>
          <div class="flex gap-x-[330px] pt-4">
            <router-link to="/cart/checkout" class="w-full ">
              <div
                class="p-3.5 text-white rounded-[20px] font-bold bg-black 
                flex gap-x-1 drop-shadow-[10px_4px_4px_rgba(0,0,0,0.25)] justify-center"
                @click="redirectToCustomerInfo"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M8.38268 3.07609C8.75636 3.23087 9 3.59551 9 3.99997V6.5H15.5C16.9587 6.5 18.3576 7.07946 19.3891 8.11091C20.4205 9.14236 21 10.5413 21 12V20C21 20.5523 20.5523 21 20 21H19C18.4477 21 18 20.5523 18 20V12C18 11.337 17.7366 10.7011 17.2678 10.2322C16.7989 9.76339 16.163 9.5 15.5 9.5H9V12C9 12.4044 8.75636 12.7691 8.38268 12.9238C8.00901 13.0786 7.57889 12.9931 7.29289 12.7071L3.29289 8.70707C2.90237 8.31655 2.90237 7.68339 3.29289 7.29286L7.29289 3.29286C7.57889 3.00686 8.00901 2.92131 8.38268 3.07609Z"
                    fill="white"
                  />
                </svg>
                <span>Customer info</span>
              </div>
            </router-link>
            <router-link to="/cart/payment" class="w-full">
              <div
                class="p-3.5 text-white rounded-[20px] font-bold bg-black
                w-full flex drop-shadow-[10px_4px_4px_rgba(0,0,0,0.25)] justify-center"
                @click="continueToPayment"
              >
                <span>Continue to Payment</span>
              </div>
            </router-link>
          </div>
        </div>
      </div>
      <div class="absolute right-0 flex w-[30%] h-[450px] p-4 border-[1px] flex-col bg-[#F5F5F5]">
        <div class="text-[20px] border-b-[1px] w-full font-bold">
          Summary ({{ $store.state.cart.length }} Items)
        </div>
        <div class="flex flex-col pt-4 pb-4 gap-y-4 border-b-[1px]">
          <div class="flex justify-between">
            <span>Subtotal</span>
            <span>${{ $store.state.cartTotal.toFixed(2) }}</span>
          </div>
          <div class="flex justify-between">
            <span>Shipping</span>
            <span v-if="selectedShippingMethod">${{selectedShippingMethod.price}}</span>
            <span v-else>-</span>
          </div>
          <div class="flex justify-between">
            <span>Est. Taxes</span>
            <span>$1.44</span>
          </div>
        </div>
        <div class="flex justify-between pt-4 pb-6 border-b-[1px]">
          <span class="font-bold">Total</span>
          <span class="font-bold" v-if="selectedShippingMethod">${{ ($store.state.cartTotal + selectedShippingMethod.price + 1.44).toFixed(2)}}</span>
          <span class="font-bold" v-else>{{$store.state.cartTotal}}</span>
        </div>
        
      </div>
    </div>
  </div>
</template>


<script>
import store from '../store';

export default {
  data() {
    return {
      selectedShippingMethod: null, // Set the default selected shipping method here
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
        country: "Country", // Default option
        state: "State", // Default option
        zipCode: "",
      },
      toPay: null, 
    };
  },

  methods: {
    continueToPayment() {
      // Save the selected shipping method to localStorage as a JSON string
      localStorage.setItem("selectedShippingMethod", JSON.stringify(this.selectedShippingMethod));
      // Proceed to the next step (payment) here, for example:
      // this.$router.push("/cart/payment");
      
    },

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
      // this.toPay = selectedShippingMethod.price
    },

    loadCustomerInfoFromLocalStorage() {
      // Load customerInfo from localStorage if it exists
      const savedCustomerInfo = localStorage.getItem("customerInfo");
      if (savedCustomerInfo) {
        this.customerInfo = JSON.parse(savedCustomerInfo);
      }
      console.log("Customer Information:", this.customerInfo);

    },
  },

  created() {
    this.loadSelectedShippingMethodFromLocalStorage();
    this.loadCustomerInfoFromLocalStorage();


  },

  
  
};
</script>