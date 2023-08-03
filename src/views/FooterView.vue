<template>

  <div class="footer bg-gray-900 text-white text-white">
    <div class="wrapper max-w-7xl mx-auto px-4 flex justify-between items-center h-[110px]">
      <div class="bottom_logo text-black">SpeedCuber <b>by Kai</b></div>
      <div class="brand_container flex gap-4">
        <div class="brand w-[80px]">
          <img src="../../image/brand1.png" alt="">
        </div>
        <div class="brand w-[80px]">
          <img src="../../image/brand2.png" alt="">
        </div>
        <div class="brand w-[80px]">
          <img src="../../image/brand3.png" alt="">
        </div>
        <div class="brand w-[135px] rounded-md">
          <img class="rounded-md" src="../../image/brand4.png" alt="">
        </div>
      </div>
      <div class="filling_email flex items-center">
        <div class="text-black font-bold">Stay in touch!</div>
        <input class="email ml-4 rounded-l-lg p-2 bg-white text-black" placeholder="Enter your email">
        <button class="submit-email rounded-r-lg bg-[#586a79] text-white p-2 border-2">Submit</button>
      </div>
    </div>
  </div>
</template>

<style>
.footer {
  background-color: #bdbdbd; /* Use the gray color of your choice here */
  color: #fff;
}

.wrapper {
  max-width: 1500px;
  width: 100%;
  padding: 0 20px;
}
</style>
