<template>
    <Index></Index>
    <div class="flex">
        <div class="ml-[80px] w-[90%] mt-[50px] p-[50px] self-center flex border">
            <div class="profile-picture w-[40%] mr-[30px]">
                <img class="mb-[25px] rounded-full border-2 border-black " src="https://howtodrawforkids.com/wp-content/uploads/2020/08/13-how-to-draw-a-Person.jpg" alt="Profile Picture"/>
                <div class="font-bold text-center">Personal Information</div>
              </div>
            
            <div class="profile-info flex flex-col w-[60%]">
                <h2 class="font-bold text-[30px] mb-[20px]">Edit Profile</h2>
                <div class="flex gap-x-7 mb-[20px]">
                    <input v-model="customerInfo.firstName" class="p-2 pl-5 border-[2px] border-gray-500 w-full rounded-[10px] drop-shadow-[10px_4px_4px_rgba(0,0,0,0.25)]" placeholder="First name">
                    <input v-model="customerInfo.lastName" class="p-2 pl-5 border-[2px] border-gray-500 w-full rounded-[10px] drop-shadow-[10px_4px_4px_rgba(0,0,0,0.25)]" placeholder="Last name">
                  </div>
                <div>
                    <input v-model="customerInfo.email" class="p-2 pl-5 border-[2px] w-full border-gray-500 rounded-[10px] drop-shadow-[10px_4px_4px_rgba(0,0,0,0.25)] mb-[20px]" placeholder="Email">
                </div>
                
                <input v-model="customerInfo.company" class="p-2 pl-5 border-[2px] border-gray-500 w-full rounded-[10px] drop-shadow-[10px_4px_4px_rgba(0,0,0,0.25)] mb-[20px]" placeholder="Company (Optional)">
                
                    
                <div class="flex w-full gap-x-7 mb-[20px]">
                    <input v-model="customerInfo.address" class="p-2 pl-5 border-[2px] border-gray-500 w-[70%] rounded-[10px] drop-shadow-[10px_4px_4px_rgba(0,0,0,0.25)]" placeholder="Address">
                    <input v-model="customerInfo.apt" class="p-2 pl-5 border-[2px] border-gray-500 w-[30%] rounded-[10px] drop-shadow-[10px_4px_4px_rgba(0,0,0,0.25)]" placeholder="Apt. (Optional)">
                  </div>
                  <div class="flex w-full gap-x-7 mb-[20px]">
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
                  <button class="mb-[8px] font-bold" @click="changePassword">Change password (Click here)</button>
                  <input v-model="currentPassword" class="p-2 pl-5 border-[2px] w-full border-gray-500 rounded-[10px] drop-shadow-[10px_4px_4px_rgba(0,0,0,0.25)] mb-[20px]" placeholder="Current Password">
                  <input v-model="newPassword" class="p-2 pl-5 border-[2px] w-full border-gray-500 rounded-[10px] drop-shadow-[10px_4px_4px_rgba(0,0,0,0.25)] mb-[20px]" placeholder="New Password">
                
                </div>


          </div>

    </div>
    <div class="flex justify-center">
        <button class="m-[50px] text-center w-[250px] h-[50px] rounded-[15px] p-1 text-black
        bg-white font-semibold drop-shadow-[10px_4px_4px_rgba(0,0,0,0.25)]" @click="logout">Logout</button>
        <button class="m-[50px] text-center w-[250px] h-[50px] rounded-[15px] p-1 text-white
        bg-black font-semibold drop-shadow-[10px_4px_4px_rgba(0,0,0,0.25)]" @click="saveChanges">Save Changes</button>
    </div>
    
  </template>
  


  <script>

import Index from './Index.vue';
import axios from 'axios';
import { toast } from 'vue3-toastify';
  export default {
    components: {
        Index
    },
    data() {
      return {
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
        newPassword: '',
        currentPassword: '', 
        isLogin: true, 
      };
    },
    methods: {
        loadCustomerInfoFromLocalStorage() {
        const savedCustomerInfo = localStorage.getItem("customerInfo");
            if (savedCustomerInfo !== null) {
                try {
                    this.customerInfo = JSON.parse(savedCustomerInfo);
                } catch (error) {
                    console.error("Error parsing JSON data from localStorage:", error);
                }
            }
        },

        async saveChanges() {
            let toastMSG;
            localStorage.setItem("customerInfo", JSON.stringify(this.customerInfo));

            toastMSG = 'Information updated successfully';
            toast.success(toastMSG, { autoClose: 3000 });
        },
        logout(){
            this.isLogin = false;
            localStorage.setItem('isLogin', JSON.stringify(this.isLogin));

            this.$router.push({ name: 'login' });

        },
        async changePassword() {
            try {
                let response = await axios.get(`http://localhost:3001/users?email=${this.customerInfo.email}&password=${this.currentPassword}`);
                console.warn(response);
                let toastMSG;

                if (response.status === 200 && response.data.length > 0) {

                    try {
                        // Replace the URL with the appropriate endpoint for updating the user
                        const updateUrl = `http://localhost:3001/users/${response.data[0].id}`;

                        const userDataToUpdate = {
                            ...response.data[0],
                            password: this.newPassword, 
                        };
                        await axios.put(updateUrl, userDataToUpdate);

                        toastMSG = 'Password updated successfully';
                        toast.success(toastMSG, { autoClose: 3000 });

                        } catch (error) {
                            console.error('Error updating password:', error);
                        }

            }else{
                toastMSG = 'Incorrect Current Password !'
                toast.warning(toastMSG, {autoClose: 3000,});
            }
            } catch (error) {
                console.error(error);
            }
        },
       
    },

    

    created() {
        this.loadCustomerInfoFromLocalStorage(); 
    }
  };

    
  </script>
  
  <style>
  /* Add your CSS styles here to style the profile view */
  
  </style>
  