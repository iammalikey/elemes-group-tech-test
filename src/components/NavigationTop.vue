<template>
    <div class="">
    <!-- Navigation -->
      <!-- Top Desktop & Mobile -->
      <div class="flex justify-between justify-center w-full lg:gap-20 gap-5 lg:px-32 px-8 py-10">
        <!-- Logo / Left -->
        <div class="flex lg:w-1/4 w-1/2">
          <img alt="Elemes logo" src="../assets/img/elemes-logo.svg">
        </div>
        <!-- Menu / Center -->
        <div class="lg:flex hidden justify-around items-center w-2/4 text-sm">
          <a href="#">
            Home
          </a>
          <a href="#">
            About
          </a>
          <div class="relative">
            <a href="#">
              Promotions
            </a>
            <div class="absolute -top-5 right-0 bg-[#E7462D] rounded-2xl px-2 text-[8px] text-white uppercase">hot</div>
          </div>
          <a href="#">
            Blogs
          </a>
          <a href="#">
            Contact Us
          </a>
        </div>
        <!-- CTA / Right -->
        <div class="flex justify-around justify-center items-center lg:w-1/4 w-1/2">
          <a href="" class="lg:block hidden w-1/3 text-sm">
            Masuk
          </a>
          <a href="lg:w-2/3 w-full">
            <div class="flex bg-[#8BAC3E] rounded-full text-white px-5 py-2 justify-center w-full text-sm">
              Daftar Sekarang
            </div>
          </a>
        </div>
      </div>
    <!-- End of navigation -->
  </div>
</template>