<template>
    <div class="lg:hidden flex flex-col lg:px-32 px-8 pb-14">
    <!-- Left Content -->
    <div class="flex flex-col justify-center items-center lg:w-1/2 w-full">
        <h1 class="font-medium lg:text-[64px] text-[48px] text-[#8BAC3E]">Good Food Us Good Mood</h1>
        <div class="relative lg:w-1/2 w-full my-10">
            <!-- Main Image -->
            <div class="flex relative lg:justify-center justify-start">
                <div class="bg-[#C4C4C4] opacity-25 p-5 w-[249px] h-[249px] rounded-full"></div>
                <div class="absolute z-2 p-5 w-[249px] h-[249px]">
                    <img src="../assets/img/green-salad-tomato.svg" alt="" class="lg:w-auto w-52">
                </div>
            </div>
            <!-- Thumbnail Image -->
            <div class="flex gap-5 backdrop-blur-sm bg-white/30 rounded-xl absolute w-auto h-auto p-5 bottom-0 -mb-10 right-0">
                <img src="../assets/img/green-salad-tomato-thumb.svg" alt="">
                <div class="gap-1">
                    <h2 class="text-sm">Green Salad Tomato</h2>
                    <span class="text-xs">Tomato</span>
                    <!-- star rate -->
                    <RatingComponent :rate="4"/>
                </div>
            </div>
        </div>  
        <p class="py-10 text-[#757575] text-[18px]">I would think that conserving our natural resources should be a conservative position: Not to waste food, and not to throw away a lot of the food that we buy.</p>
        <div class="flex w-full gap-6">
            <a href="" class="flex bg-[#8BAC3E] rounded-full text-white px-5 py-2 justify-center drop-shadow-xl">
                Daftar Sekarang
            </a>
            <a href="" class="flex bg-[#F2F2F2] rounded-full px-5 py-2 text-black justify-center items-center">
                About Us
            </a>
        </div>
    </div>
</div>
</template>
<script>
import RatingComponent from "@/components/RatingComponent.vue";

export default {
  components:{
    RatingComponent
  },
}
</script>