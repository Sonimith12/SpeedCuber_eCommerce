<template>
  <div class="w-full h-screen main flex justify-center items-center">
    <div class="w-[95%] bg-white rounded-lg flex">
        <!-- for images background color -->
        <div class="w-[45%] h-full">
          <img src="../../image/loginasd.png" alt="" class="pt-9">
        </div>
        <div class="w-[55%] flex flex-col">
            <div class="flex justify-center py-7 font-bold text-2xl">
                Speed Cuber - Create New Account
            </div>
            <div class="px-9 ">
                <form @submit.prevent="signup" action="" class="flex gap-y-2 flex-col font-semibold">
                    <label for="full-name">First Name <span class="text-red-500">*</span></label>
                    <input v-model="firstName" id="username" name="username" required placeholder="First Name" 
                    class="bg-[#F4F4F4] py-2.5 px-[20px] w-full placeholder:text-[16px] rounded-md" 
                    >
                    <label for="full-name">Last Name <span class="text-red-500">*</span></label>
                    <input v-model="lastName" id="username" name="username" required placeholder="Last Name" 
                    class="bg-[#F4F4F4] py-2.5 px-[20px] w-full placeholder:text-[16px] rounded-md" 
                    >
                    <label for="full-name">Email <span class="text-red-500">*</span></label>
                    <input type="email" v-model="email" id="email" name="email" placeholder="Enter your email" required
                    class="bg-[#F4F4F4] w-full placeholder:text-[16px] py-2.5 px-[20px] rounded-md" pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$" title="example@gmail.com"
                    >
                    <label for="full-name">Password <span class="text-red-500">*</span></label>
                    <input type="password" v-model="password" id="password" name="password" required placeholder="••••••••"
                    class="bg-[#F4F4F4] w-full placeholder:text-[16px] py-2.5 px-[20px] rounded-md" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters"
                    >
                    
                    <label for="full-name">Confirm Password <span class="text-red-500">*</span></label>
                    <input type="password" v-model="confirm_password" id="confirm_password" name="password" required placeholder="••••••••"
                    class="bg-[#F4F4F4] w-full placeholder:text-[16px] py-2.5 px-[20px] rounded-md" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters"
                    >
                    <div class="flex justify-center w-full mt-6">
                      <button type="submit" 
                      class="p-5 bg-[#8e9eab] font-bold py-3 rounded-sm w-[40%]">
                      Create Account</button>
                    </div>
                </form>
            </div>
            <div class="p-3 flex justify-center w-full">
                <div class="font-semibold">
                    <span>Already have a account?  </span>
                    <router-link to="/auth/login" class="text-[#8e9eab] underline underline-offset-auto">Login</router-link>
                </div>
            </div>
        </div>
    </div>
</div>
  </template>
  
  <script>
  import axios from 'axios';
import { toast } from 'vue3-toastify';
  
  export default {
    name: "SignUp",
    data() {
      return {
        firstName: "",
        lastName: "", 
        email: "",
        password: "",
        confirm_password: ""
      };
    },
    methods: {
      async signup() {
        try {
          const emailExists = await axios.get(`http://localhost:3001/users?email=${this.email}`);
          if (emailExists.data.length > 0) {
            alert("Email already exists. Please choose a different email.");
            return;
          }
          if(this.confirm_password != this.password){
            alert("Password does not match."); 
            return; 
          }
          
          
          const response = await axios.post("http://localhost:3001/users", {
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            password: this.password
          });
  
          console.log(response);
          console.log(response.status);
          if (response.status === 201) {
            localStorage.setItem("user-info", JSON.stringify(response.data));
            toast.success("Sign Up Successfully !")
            this.$router.push({ name: 'login' });
          }
        } catch (error) {
          console.error(error);
        }
      }
    }
  };
</script>
<style>;
  .main {
    background: linear-gradient(180deg, #8e9eab 0%, #eef2f3 100%);
  }
  
</style>
  