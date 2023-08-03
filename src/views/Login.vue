<template>
	
	<div class="w-full h-screen main flex justify-center items-center">
        <div class="w-[95%] h-[85%] bg-white rounded-lg flex">
            <!-- for images background color -->
            <div class="w-[45%] h-full">
				<img src="../../image/loginasd.png" alt="" class="rounded-xl w-full h-full">
			</div>
            <div class="w-[55%] flex flex-col">
                <div class="flex justify-center py-[50px] font-bold text-2xl">
                    Speed Cuber - Login
                </div>
                <div class="px-9">
                    <form @submit.prevent="login" action="" class="flex gap-y-4 flex-col font-semibold">
                        <label for="full-name">Email <span class="text-red-500">*</span></label>
						<input v-model="email" id="email" required placeholder="Enter your email"
						class="bg-[#F4F4F4] w-full placeholder:text-[16px] py-2.5 px-[20px] rounded-md">
                        <label for="full-name">Password <span class="text-red-500">*</span></label>
                        <input v-model="password" name="password" type="password" required placeholder="••••••••"
                        class="bg-[#F4F4F4] w-full placeholder:text-[16px] py-2.5 px-[20px] rounded-md">
                        <div class="flex justify-center w-full mt-6">
                          <button type="submit"
                          class="login p-5 bg-[#8e9eab] text-black font-bold py-3 rounded-sm w-[40%]">
                          Login</button>
                        </div>
                    </form>
                </div>

                <div class="p-2 flex justify-center">
                  <div class="font-semibold">
                      <router-link to="/" class="text-[#8e9eab] underline underline-offset-auto">Continue as a guest</router-link>
                  </div>
                </div>
                
                <div class="p-3 flex justify-center">
                    <div class="font-semibold">
                        <span >Don't have account?  </span>
                        <router-link to="/auth/signup" class="text-[#8e9eab] underline underline-offset-auto">Create new account</router-link>
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
	emits: ['checkout'],
	
	name: "Login",
	data() {
	  return {
      email: '',
      password: '',
      isLogin: false
	  }
	},
	methods: {
	  async login() {
		try {
		  let response = await axios.get(`http://localhost:3001/users?email=${this.email}&password=${this.password}`);
		  console.warn(this.email, this.password);
		  console.warn(response);
      let toastMSG;
		  if (response.status === 200 && response.data.length > 0) {
			localStorage.setItem("isLogin", JSON.stringify(this.isLogin)); 
			localStorage.setItem("user_info", JSON.stringify(response.data[0]));
      
      this.isLogin = true;
      localStorage.setItem('isLogin', JSON.stringify(this.isLogin));


      toastMSG = 'Login Successfully'
      toast.success(toastMSG, {autoClose: 3000,});
			
			this.$router.push({ name: 'home' });
		  }else{
        toastMSG = 'Failed to login, incorrect password and/or email !'
        toast.warning(toastMSG, {autoClose: 3000,});
      }
		} catch (error) {

		  console.error(error);

		}
	  }
	},
	
  }
  </script>
  
  <style>
  .main {
    background: linear-gradient(180deg, #8e9eab 0%, #eef2f3 100%);
  }
  
  </style>
  