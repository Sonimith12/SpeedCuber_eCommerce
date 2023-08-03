<template>
  <div class="flex justify-end mt-4 mr-4">
    <router-link to="/">
      <button class="text-center w-32 rounded-[15px] p-1 text-black h-14
      bg-white font-semibold drop-shadow-[10px_4px_4px_rgba(0,0,0,0.25)] ml-3">Return To Home</button>
    </router-link>
    

    <button class="text-center w-32 rounded-[15px] p-1 text-white
    bg-black font-semibold drop-shadow-[10px_4px_4px_rgba(0,0,0,0.25)] ml-3" @click="downloadDivAsImage">Download Receipt as Image</button>

    <button class="text-center w-32 rounded-[15px] p-1 text-white
    bg-black font-semibold drop-shadow-[10px_4px_4px_rgba(0,0,0,0.25)] ml-3" @click="downloadDivAsPDF">Download Receipt as PDF</button>
  </div>

    
  <div class="flex justify-start mt-4 mr-4">
    
  </div>
  <div id="receipt_content">
      <div class="w-[50%] ml-[385px] mt-[25px] border-2">
        <div class="p-[25px]">
            <div class="page-container">
                Page
                <span class="page"></span>
                of
                <span class="pages"></span>
            </div>
            
            <div class="logo-container">
                <img src="../assets/images/logo.png">
            </div>
            
            <table class="invoice-info-container">
                <tr>
                <td rowspan="2" class="client-name font-bold">
                    {{customerInfo.firstName}} {{ customerInfo.lastName }}
                </td>
                <td>
                    Speed Cuber KH CO.
                </td>
                </tr>
                <tr>
                <td>
                    138B2 Choam Chao
                </td>
                </tr>
                <tr>
                <td>
                    Invoice Date: <strong>{{currentDate}}</strong>
                </td>
                <td>
                    {{customerInfo.address}} {{ customerInfo.state }} {{ customerInfo.country }}
                </td>
                </tr>
                <tr>
                <td v-if="order">
                    Invoice No: <strong>{{order.id}}</strong>
                </td>
                <td v-else>
                  Invoice No: <strong>Loading</strong>
                </td>
                <td>
                    {{customerInfo.email}}
                </td>
                </tr>
            </table>
            
            
            <table class="line-items-container">
                <thead>
                <tr>
                    <th class="heading-quantity">Qty</th>
                    <th class="heading-description">Product Name</th>
                    <th class="heading-price">Price</th>
                    <th class="heading-subtotal">Subtotal</th>
                </tr>
                </thead>
                <tbody v-if="order">
                  <tr v-for="item in order.cart" :key="item.id">
                    <td>{{ item.qty }}</td>
                    <td>{{ item.product_name }}</td>
                    <td class="right">${{ item.price }}</td>
                    <td class="bold">${{ (item.price * item.qty) }}</td>
                  </tr>
                </tbody>
                <tbody v-else>
                  Loading
                </tbody>
            </table>
            
            <table class="line-items-container has-bottom-border">
                <thead>
                <tr>
                    <th>Payment Info</th>
                    <th>Pay On</th>
                    <th>Total Due</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td class="payment-info">
                    <div>
                        Account No: <strong>1</strong>
                    </div>
                    
                    </td>
                    <td class="font-bold">Shipping:</td>
                    <td class="">${{selectedShippingMethod.price}}</td>
                </tr>

                <tr>
                  <td class="payment-info">
                  <div>
                      -
                  </div>
                  
                  </td>
                  <td class="font-bold">Taxes:</td>
                  <td class="">$1.44</td>
                </tr>

                <tr>
                  <td class="">
                  <div>
                      -
                  </div>
                  
                  </td>
                  <td class="font-bold">Discount:</td>
                  <td class="" v-if="isValidPromoCode">{{discount_value}}%</td>
                </tr>

                <tr>
                  <td class="payment-info">
                  <div>
                      -
                  </div>
                  
                  </td>
                  <td class="large">Total:</td>
                  <td class="large total" v-if="order">${{totalPrice}}</td>
                  <td v-else class="font-bold">Loading</td>
              </tr>
                </tbody>
            </table>
            
            <div class="footer">
                <div class="footer-info">
                <span>sonimith@speedcuber.com</span> |
                <span>+855 93 822 207</span> |
                <span>sonimithhang.tech</span>
                </div>
                <div class="footer-thanks">
                <img src="https://github.com/anvilco/html-pdf-invoice-template/raw/main/img/heart.png" alt="heart">
                <span>Thank you!</span>
                </div>
            </div>
    
    </div>
    </div>
  </div>
    
</template>
<script>
import axios from 'axios';
import store from '../store';
import html2canvas from 'html2canvas';
import { saveAs } from 'file-saver';
import jsPDF from 'jspdf';



export default {
  components: {

  },
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
        lastFourDigits: "",
        currentDate: new Date().toLocaleDateString(),
        orderInfo: null, 
        orderID: 9, 
        order: null,
        isValidPromoCode: false,
        totalPrice: 0,
        discount_value: 0, 

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
    loadCardInfoFromLocalStorage() {
        const savedCardInfo = localStorage.getItem("cardInfo"); 
        if(savedCardInfo !== null) {
            try {
                this.cardInfo = JSON.parse(savedCardInfo); 
            }catch(error) {
                console.error("Error parsing JSON data from localStorage:", error);
            }
        }

        if (typeof this.cardInfo.cardNumber === "string") {
            this.lastFourDigits = this.cardInfo.cardNumber.slice(-4);
        } else {
            this.lastFourDigits = "";
        } 
        console.log("Card Information: ", this.cardInfo); 
        console.log("Cart: ", store.state.cart);
        console.log("Cart Total: ", store.state.cartTotal);

    },

    async loadLastOrderFromJSONFile() {
  try {
      const response = await axios.get("http://localhost:3001/orders");
      this.orderInfo = response.data;
      
      // Find the last order based on the highest id value
      const lastOrder = this.orderInfo.reduce((acc, cur) => (cur.id > acc.id ? cur : acc), this.orderInfo[0]);

      this.order = lastOrder;
      console.log("Last Order: ", this.order);
    } catch (error) {
      console.error("Error fetching order details:", error);
    }
  },
  async downloadDivAsImage() {
      const divElement = document.getElementById('receipt_content'); // Replace 'your-div-id' with the ID of your target div

      try {
        const canvas = await html2canvas(divElement);
        canvas.toBlob(function(blob) {
          saveAs(blob, 'receipt.png'); 
        });
      } catch (error) {
        console.error('Error capturing the div as an image:', error);
      }
    },
    async downloadDivAsPDF() {
      const divElement = document.getElementById('receipt_content');

      if (!divElement) {
        console.error('The div element with the specified ID does not exist.');
        return;
      }

      try {
        const canvas = await html2canvas(divElement);

        const imgData = canvas.toDataURL('image/png');

        const pdf = new jsPDF('p', 'mm', 'a4');

        const divWidth = divElement.offsetWidth;
        const divHeight = divElement.offsetHeight;
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();

        const scaleX = pdfWidth / divWidth * 1.9;
        const scaleY = pdfHeight / divHeight * 1.9;
        const scale = Math.min(scaleX, scaleY);

        const imgWidth = divWidth * scale;
        const imgHeight = divHeight * scale;

        const posX = (pdfWidth - imgWidth) / 1.87;
        const posY = (pdfHeight - imgHeight) / 2;

        pdf.addImage(imgData, 'PNG', posX, posY, imgWidth, imgHeight);

        pdf.save('receipt.pdf');
      } catch (error) {
        console.error('Error capturing the div as a PDF:', error);
      }
    },

    
    calculateTotalPrice() {
      const isValidPromoCode = localStorage.getItem("isValidPromoCode"); 
      if (isValidPromoCode !== null && isValidPromoCode !== undefined) {
        this.isValidPromoCode = JSON.parse(isValidPromoCode);

        console.log(this.isValidPromoCode); 
      }
      this.discount_value = localStorage.getItem("discount_value"); 

      console.log(this.discount_value); 
      if(this.isValidPromoCode){
          this.totalPrice = (((this.$store.state.cartTotal + this.selectedShippingMethod.price + 1.44).toFixed(2)) * ((100 - this.discount_value)/100)).toFixed(2);
        }else{
          this.totalPrice = ((this.$store.state.cartTotal + this.selectedShippingMethod.price + 1.44).toFixed(2))
      }

      console.log(this.totalPrice); 
      }
  },
  created() {
    this.loadSelectedShippingMethodFromLocalStorage();
    this.loadCustomerInfoFromLocalStorage();
    this.loadCardInfoFromLocalStorage(); 
    this.loadLastOrderFromJSONFile(); 
    this.calculateTotalPrice(); 
  },
  
}
    

</script>
<style>
body {
    font-size: 16px;
  }
  
  table {
    width: 100%;
    border-collapse: collapse;
  }
  
  table tr td {
    padding: 0;
  }
  
  table tr td:last-child {
    text-align: right;
  }
  
  .bold {
    font-weight: bold;
  }
  
  .right {
    text-align: right;
  }
  
  .large {
    font-size: 1.75em;
  }
  
  .total {
    font-weight: bold;
    color: #fb7578;
  }
  
  .logo-container {
    margin: 20px 0 70px 0;
  }
  
  .invoice-info-container {
    font-size: 0.875em;
  }
  .invoice-info-container td {
    padding: 4px 0;
  }
  
  .client-name {
    font-size: 1.5em;
    vertical-align: top;
  }
  
  .line-items-container {
    margin: 70px 0;
    font-size: 0.875em;
  }
  
  .line-items-container th {
    text-align: left;
    color: #999;
    border-bottom: 2px solid #ddd;
    padding: 10px 0 15px 0;
    font-size: 0.75em;
    text-transform: uppercase;
  }
  
  .line-items-container th:last-child {
    text-align: right;
  }
  
  .line-items-container td {
    padding: 15px 0;
  }
  
  .line-items-container tbody tr:first-child td {
    padding-top: 25px;
  }
  
  .line-items-container.has-bottom-border tbody tr:last-child td {
    padding-bottom: 25px;
    border-bottom: 2px solid #ddd;
  }
  
  .line-items-container.has-bottom-border {
    margin-bottom: 0;
  }
  
  .line-items-container th.heading-quantity {
    width: 50px;
  }
  .line-items-container th.heading-price {
    text-align: right;
    width: 100px;
  }
  .line-items-container th.heading-subtotal {
    width: 100px;
  }
  
  .payment-info {
    width: 38%;
    font-size: 0.75em;
    line-height: 1.5;
  }
  
  .footer {
    margin-top: 100px;
  }
  
  .footer-thanks {
    font-size: 1.125em;
  }
  
  .footer-thanks img {
    display: inline-block;
    position: relative;
    top: 1px;
    width: 16px;
    margin-right: 4px;
  }
  
  .footer-info {
    float: right;
    margin-top: 5px;
    font-size: 0.75em;
    color: #ccc;
  }
  
  .footer-info span {
    padding: 0 5px;
    color: black;
  }
  
  .footer-info span:last-child {
    padding-right: 0;
  }
  
  .page-container {
    display: none;
  }

  #pdf-content {
    background-color: #ffffff; /* Set background color */
    color: #000000; /* Set text color */
    padding: 20px; /* Add padding around the content */
    font-size: 16px; /* Set font size */
  }
  </style>
