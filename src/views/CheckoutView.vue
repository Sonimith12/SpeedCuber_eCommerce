<template>
  <div class="w-full p-[50px]">
    <div class="pb-4 flex items-center">
      <h2 class="font-bold text-[35px]">Customer Information and Address</h2>
    </div>
    <div class="relative w-full m-auto">
      <div class="w-[65%] absolute left-0 flex flex-col border-t-[1px] pl-0 gap-y-4">
        <div class="w-full border-b-[1px] flex flex-col gap-y-4 pb-8">
          <div class="flex justify-between pt-4">
            <div class="text-[20px] font-[600]">Customer information</div>

            <div v-if="isLogin" class="text-[20px]">Sign in as {{customerInfo.firstName}} {{customerInfo.lastName}}
            </div>
            <div v-else class="text-[20px]">Already have an account?
              <router-link to="/auth/login" class="underline text-blue-500">Login</router-link>
            </div>
          </div>
          <input v-model="customerInfo.email" class="p-2 pl-5 border-[2px] w-full border-gray-500 rounded-[10px] drop-shadow-[10px_4px_4px_rgba(0,0,0,0.25)]" placeholder="Email">
        </div>
        <div class="w-full flex flex-col gap-y-4">
          <div class="text-[20px] font-[600]">Shipping address</div>
          <div class="flex gap-x-7">
            <input v-model="customerInfo.firstName" class="p-2 pl-5 border-[2px] border-gray-500 w-full rounded-[10px] drop-shadow-[10px_4px_4px_rgba(0,0,0,0.25)]" placeholder="First name">
            <input v-model="customerInfo.lastName" class="p-2 pl-5 border-[2px] border-gray-500 w-full rounded-[10px] drop-shadow-[10px_4px_4px_rgba(0,0,0,0.25)]" placeholder="Last name">
          </div>
          <div>
            <input v-model="customerInfo.company" class="p-2 pl-5 border-[2px] border-gray-500 w-full rounded-[10px] drop-shadow-[10px_4px_4px_rgba(0,0,0,0.25)]" placeholder="Company (Optional)">
          </div>
          <div class="flex w-full gap-x-7">
            <input v-model="customerInfo.address" class="p-2 pl-5 border-[2px] border-gray-500 w-[70%] rounded-[10px] drop-shadow-[10px_4px_4px_rgba(0,0,0,0.25)]" placeholder="Address">
            <input v-model="customerInfo.apt" class="p-2 pl-5 border-[2px] border-gray-500 w-[30%] rounded-[10px] drop-shadow-[10px_4px_4px_rgba(0,0,0,0.25)]" placeholder="Apt. (Optional)">
          </div>
          <div class="flex w-full gap-x-7">
            <select v-model="customerInfo.country" class="p-2.5 border-[2px] w-full border-gray-500 rounded-[10px] drop-shadow-[10px_4px_4px_rgba(0,0,0,0.25)]">
              <option value="Country">Country</option>
              <option value="Cambodia">Cambodia</option>
              <option value="Vietnam">Vietnam</option>
              <option value="Thailand">Thailand</option>
            </select>
            <select v-model="customerInfo.state" class="p-2.5 border-[2px] w-full border-gray-500 rounded-[10px] drop-shadow-[10px_4px_4px_rgba(0,0,0,0.25)]">
              <option value="State">State</option>
              <option value="Phnom Penh">Phnom Penh</option>
              <option value="Kampot">Kampot</option>
              <option value="Sihanouk Ville">Sihanouk Ville</option>
            </select>
            <input v-model="customerInfo.zipCode" class="p-2 pl-5 border-[2px] border-gray-500 w-full rounded-[10px] drop-shadow-[10px_4px_4px_rgba(0,0,0,0.25)]" placeholder="Zip Code">
          </div>
          <div class="flex gap-x-[330px] pt-4">
            <router-link to="/cart" class="w-full ">
              <div class="p-3.5 text-white rounded-[20px] font-bold bg-black flex gap-x-1 drop-shadow-[10px_4px_4px_rgba(0,0,0,0.25)] justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M8.38268 3.07609C8.75636 3.23087 9 3.59551 9 3.99997V6.5H15.5C16.9587 6.5 18.3576 7.07946 19.3891 8.11091C20.4205 9.14236 21 10.5413 21 12V20C21 20.5523 20.5523 21 20 21H19C18.4477 21 18 20.5523 18 20V12C18 11.337 17.7366 10.7011 17.2678 10.2322C16.7989 9.76339 16.163 9.5 15.5 9.5H9V12C9 12.4044 8.75636 12.7691 8.38268 12.9238C8.00901 13.0786 7.57889 12.9931 7.29289 12.7071L3.29289 8.70707C2.90237 8.31655 2.90237 7.68339 3.29289 7.29286L7.29289 3.29286C7.57889 3.00686 8.00901 2.92131 8.38268 3.07609Z" fill="white"/>
                </svg>
                <span>Back to Cart</span>
              </div>
            </router-link>
            <router-link to="/cart/shipping" class="w-full">
              <div class="p-3.5 text-white rounded-[20px] font-bold bg-black w-full flex drop-shadow-[10px_4px_4px_rgba(0,0,0,0.25)] justify-center">
                <span @click="continueToShipping">Continue to Shipping</span>
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
            <span>${{$store.state.cartTotal.toFixed(2)}}</span>
          </div>
          <div class="flex justify-between">
            <span>Shipping</span>
            <span>-</span>
          </div>
          <div class="flex justify-between">
            <span>Est. Taxes</span>
            <span>-</span>
          </div>
        </div>
        <div class="flex justify-between pt-4 pb-6 border-b-[1px]">
          <span class="font-bold">Total</span>
          <span class="font-bold">${{$store.state.cartTotal.toFixed(2)}}</span>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script> 
export default {
  data() {
    return {
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
      isLogin: false,
    }
  },

  methods: {
    continueToShipping() {
      localStorage.setItem("customerInfo", JSON.stringify(this.customerInfo));

    },
    loadCustomerInfoFromLocalStorage() {
      // Load customerInfo from localStorage if it exists
      const savedCustomerInfo = localStorage.getItem("user_info");
      if (savedCustomerInfo) {
        this.customerInfo = JSON.parse(savedCustomerInfo);
      }
      console.log("Customer Information:", this.customerInfo);
    },
    async getIsLogin() {
      const isLoginValue = localStorage.getItem("isLogin"); 
      if (isLoginValue !== null && isLoginValue !== undefined) {
        this.isLogin = JSON.parse(isLoginValue);
      }

      console.log("isLogin:", this.isLogin);
    },
  },
  created() {
    // Load customerInfo from localStorage when the component is created
    this.loadCustomerInfoFromLocalStorage();
    this.getIsLogin(); 
  },
}
</script>
