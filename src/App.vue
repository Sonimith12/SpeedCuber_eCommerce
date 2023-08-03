<template>
  <!-- <div class="wrapper">
    <nav class="p-5">
      <div class="logo">
        <img src="../image/logo.png" alt="">
      </div>
      <div class="nav flex gap-x-3">

        <div class="search-container">
          <input type="text" placeholder="Search..." name="search">
          <button type="submit" class="search-button">
            <img src="../image/search.png" alt="Search Icon" class="search-icon">
          </button>
        </div>
        
        <RouterLink to="/" class="nav-link">Home</RouterLink>
        <RouterLink to="/about" class="nav-link">About</RouterLink>
        <RouterLink to="/product" class="nav-link">Product</RouterLink>
        <RouterLink to="/login" class="nav-link">Login</RouterLink> -->

        <!-- <button @click="$emit('checkout')">Go to checkout</button> -->

      <!-- </div>
    </nav>
  </div> -->
  <!-- <div>
    <Checkout @cancel="isCheckingOut = false" v-if="isCheckingOut" />
    <RouterView v-else @checkout="isCheckingOut = true" />
  </div> -->
  
  <router-view />
  
</template>

<script>
import { RouterLink, RouterView } from "vue-router";
import Index from "./views/Index.vue";
import Checkout from "./views/Checkout.vue";
export default {
  data() {
    return {
      isCheckingOut: false,
    };
  },
  components: {
    Index,
    Checkout,
  },
  
  async mounted() {
   await this.$store.commit('initialiseStore')
  },
};
</script>

<style scoped>


</style>