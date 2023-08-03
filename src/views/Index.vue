<template>
  <header class="header">
    <div class="wrapper">
      <nav class="nav">
        <div class="logo">
          <router-link to="/">
            <img src="../../image/logo.png" alt="">
          </router-link>
        </div>
        <div class="search-container ml-[200px]">
          <input type="text" placeholder="Search..." name="search" class="search-input">
          <button type="submit" class="search-button">
            <img src="../../image/search.png" alt="Search Icon" class="search-icon">
          </button>
        </div>
        <div class="menu">
            <router-link to="/" class="menu-item">Home</router-link>
            <router-link to="/about" class="menu-item">About</router-link>
            <router-link to="/product" class="menu-item">Product</router-link>
            <router-link to="/cart" class="menu-item">Cart</router-link>

            <router-link to="/auth/login" class="menu-item" v-if="!isLogin">Login</router-link>
            <router-link v-else to="/userProfile" class="menu-item">
              {{ this.user_information.firstName }} {{ this.user_information.lastName }}
            </router-link>
            

        </div>
      </nav>
    </div>
  </header>
  <router-view />
</template>

<script>
import axios from 'axios';

export default {
  name: "Index",

  data() {
    return {
      isLogin: false,
      user_information: '', 

    }
  },

  methods: {
    async getIsLogin() {
      const isLoginValue = localStorage.getItem("isLogin"); 
      if (isLoginValue !== null && isLoginValue !== undefined) {
        this.isLogin = JSON.parse(isLoginValue);
      }

      console.log("isLogin value:", this.isLogin);
    },

    async getUserInfo(){ 
      const customerInfo = localStorage.getItem("user_info");
      if(customerInfo !== null && customerInfo !== undefined) {
        this.user_information = JSON.parse(customerInfo); 
      }
      console.log("User Information: ", this.user_information); 

    },

    async getNameFromJSON() {
      
    }
    
  },
  created() {
    this.getIsLogin();
    this.getUserInfo();
  },

  
};

</script>

<style>
.header {
  background-color: #bdbdbd; /* Use the gray color of your choice here */
  color: #fff;
  font-family: 'Poppins', sans-serif;
  height: 85px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.wrapper {
  max-width: 1500px;
  width: 100%;
  padding: 0 20px;
}

.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
}


  .logo {
    display: flex;
    align-items: center;
  }

  .logo img {
    height: 60px;
    width: auto;

  }

  .search-container {
    display: flex;
    align-items: center;
  }

  .search-input {
    padding: 8px 12px;
    border: none;
    border-radius: 5px;
    background-color: #fff;
    font-size: 16px;
    width: 300px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }

  .search-button {
    background-color: #7a858f;
    color: #fff;
    border: none;
    border-radius: 0 5px 5px 0;
    padding: 10px 20px;
    cursor: pointer;
  }

  .search-icon {
    height: 20px;
    width: 20px;
  }

  .menu {
    display: flex;
    gap: 30px;

    
  }
  .menu-item {
    color: black;
    text-decoration: none;
    font-size: 19px;
    font-weight: bold;
    padding: 10px;
    border-radius: 5px;
    transition: background-color 0.2s ease;
  }

  .menu-item:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }

</style>
