<template>
    <Index></Index>
    <div v-if="$store.state.cart.length >= 1">
        <div class="w-full p-[50px] pt-[30px]">
            <div class="relative w-full m-auto">
                <div class="w-[65%] pt-7 absolute left-0">
                    <table class="w-full text-left border-collapse">
                      <thead>
                        <tr class="w-full border-t-[2px] border-b-[2px] font-bold">
                          <th class="p-4">Items</th>
                          <th class="p-4">Name</th>
                          <th class="pl-[45px]">Qty</th>
                          <th class="pl-[21px]">Price</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="item in $store.state.cart" :key="item.id" class="w-full font-bold border-b-[2px]">
                          <td class="p-4">
                            <img :src="item.image" alt="" class="w-[150px] h-[150px] rounded-lg">
                          </td>
                          <td class="p-4">
                            <div class="flex items-center">
                              <div>{{ item.product_name }}</div>
                            </div>
                          </td>
                          <td class="p-4">
                            <div class="flex items-center">
                              <CartAddRemove :product="item" />

                            </div>
                          </td>
                          <td class="p-4">
                            <div class="flex items-center">
                              ${{ item.price }}
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                <div class="absolute right-0 flex w-[30%] h-[600px] p-4 border-[1px] flex-col bg-[#F5F5F5]">
                    <div class="pb-[15px] text-[20px] border-b-[1px] w-full font-bold">
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
                    <div class="flex justify-between pt-4 font-bold">
                        <span>Total</span>
                        <span>${{$store.state.cartTotal.toFixed(2)}}</span>
                    </div>
                    <div class="flex justify-center pt-[100px] pb-2">
                        <router-link to="/cart/checkout">
                            <button class="w-[200px] p-3 bg-black text-[15px] text-white font-bold rounded-[20px]">Continues Checkout</button>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div v-else>
        <div class="flex justify-center p-[30px]">
            <div class="flex flex-col text-center">
                <img src="https://static.vecteezy.com/system/resources/previews/004/999/463/original/shopping-cart-icon-illustration-free-vector.jpg" width="130" height="130" class="self-center img-fluid mb-4 mr-3">
                <h3><strong>Your Cart is Empty</strong></h3>
                <h4>Add something to make me happy :)</h4>
                <router-link to="/product" class="flex justify-center">
                    <button class="text-center rounded-[15px] p-1 text-white p-3
                    bg-black font-semibold drop-shadow-[10px_4px_4px_rgba(0,0,0,0.25)] mt-[25px]">Continue Shopping</button>
                </router-link>
            </div>

        </div>
        
    </div>


</template>
<script>
import Index from './Index.vue';
import FooterView from './FooterView.vue';
import CartAddRemove from '../components/CartAddRemove.vue'

export default {
    components: {
        Index, 
        FooterView,
        CartAddRemove
    },
    methods:{
        removeItem(item){
            this.$store.commit('addRemoveCart',{product:item,toAdd:false})
        },
    },
}
</script>
<style scoped>
.red_text {
    margin-top: 20px;
    margin-left: 60px;
    font-size: 30px;
    margin-bottom: 20px;
}

body {
    background-color: #eee;
    font-family: 'Calibri', sans-serif !important;
}

.mt-100{
   margin-top:100px;

}


.card {
    margin-bottom: 30px;
    border: 0;
    -webkit-transition: all .3s ease;
    transition: all .3s ease;
    letter-spacing: .5px;
    border-radius: 8px;
    -webkit-box-shadow: 1px 5px 24px 0 rgba(68,102,242,.05);
    box-shadow: 1px 5px 24px 0 rgba(68,102,242,.05);
}

.card .card-header {
    background-color: #fff;
    border-bottom: none;
    padding: 24px;
    border-bottom: 1px solid #f6f7fb;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
}

.card-header:first-child {
    border-radius: calc(.25rem - 1px) calc(.25rem - 1px) 0 0;
}



.card .card-body {
    padding: 30px;
    background-color: transparent;
}

.btn-primary, .btn-primary.disabled, .btn-primary:disabled {
    background-color: #4466f2!important;
    border-color: #4466f2!important;
}
</style>