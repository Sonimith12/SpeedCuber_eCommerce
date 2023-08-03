<template>
    <button
        type="button"
        @click="addOrRemove()"
        :class="{
            'bg-black': toAdd,
            'bg-white': !toAdd,
            'text-white': toAdd,
            'text-black': !toAdd,
            'text-sm': true,
            'rounded-lg': true,
            'py-2': true,
            'px-4': true,
            'font-semibold': true,
            'shadow-md': true,
            'hover:shadow-lg': true,
            'transition-all': true,
        }"
        >
        <span>{{ toAdd ? 'Add to Cart' : 'Remove from Cart' }}</span>
</button>

 </template>

 <script>
 import CartAddRemove from './CartAddRemove.vue';
 import { toast } from 'vue3-toastify';
 import 'vue3-toastify/dist/index.css';
 export default{
     props:['product'],
     components :{CartAddRemove},
     data(){
         return{
             toAdd:true,
             item:[]
         }
     },
     methods:{
        async addOrRemove(){
                this.item.qty = 1
                this.$store.commit('addRemoveCart',{product:this.item,toAdd:this.toAdd})
                let toasMSG;
                this.toAdd?  
                toasMSG = 'Added to cart' :  toasMSG = 'Removed from cart' 
                toast.success(toasMSG, {
                autoClose: 1000,
                });
                this.toAdd = !this.toAdd  
         }
     },
     mounted(){
         console.log(this.$store.state.cart)
         let cart = this.$store.state.cart
         let obj = cart.find(o => o.id ===  this.product.id);
         if(obj) {
            this.toAdd=false  
            this.item = obj
         }
         else{
            this.item = this.product
            this.toAdd=true
         }
     }
 }
 </script>
 <style>

</style>