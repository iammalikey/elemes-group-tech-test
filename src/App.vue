<template class="min-h-screen">
  <!-- Top Content -->
  <div class="bg-hero-pattern">
    <NavigationTop />
  <!-- Banner -->
  <BannerDesktop />
  <BannerMobile />
  </div>
  <!-- Content Carousel -->
  <div class="py-16">
    <!-- Title & Desc -->
    <div class="lg:px-32 px-8 lg:text-4xl text-2xl font-medium">
      <h2 class="text-[#333333]">Browser Our Category</h2>
      <h3 class="text-[#8BAC3E]">Receipt</h3>
    </div>
    <CarouselComponent :categories="categories" />
    <!-- Carousel -->
  </div>
  <!-- Content Cards -->
  <div class="lg:px-32 px-8 lg:py-28 lg:pt-0 lg:pb-0 py-0 pt-10 pb-32">
    <div class="lg:text-4xl text-2xl font-medium">
      <h2 class="text-[#333333]">Browser Our Trending </h2>
      <h3 class="text-[#8BAC3E]">Receipt</h3>
    </div>
    <div class="grid lg:grid-cols-4 grid-cols-1 lg:gap-4 gap-5 pt-14">
        <template v-for="(receipt, index) in receipts" :key="index">
            <CardComponent 
                :image="receipt.image"
                :title="receipt.title" 
                :category="receipt.category"
                :rate="receipt.rate"
                :color="receipt.color"
            />
        </template>
    </div>
    <!-- Button -->
    <div class="lg:flex hidden justify-center py-10">
      <button class="flex bg-[#8BAC3E] rounded-full text-white px-5 py-2 justify-center">
      All Receipt
      </button>
    </div>
  </div>
  
  <!-- Footer -->
  <FooterComponent />
</template>
<script>
import NavigationTop from '@/components/NavigationTop.vue'
import CardComponent from '@/components/CardComponent.vue'
import CarouselComponent from '@/components/CarouselComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import BannerDesktop from '@/components/BannerDesktop.vue'
import BannerMobile from '@/components/BannerMobile.vue'

export default {
  components: {
    NavigationTop,
    CardComponent,
    CarouselComponent,
    FooterComponent,
    BannerDesktop,
    BannerMobile
  },
  data(){
    return{
        receipts: [
            {
                image: 'piza-paperoni.svg',
                title: 'Pizza Paperoni',
                category: 'Pizza',
                rate: '3',
                color: 'blue'
            },
            {
                image: 'pizza-meat.svg',
                title: 'Pizza Meat',
                category: 'Pizza',
                rate: '3',
                color: 'blue'
            },
            {
                image: 'doner-kebab.svg',
                title: 'Doner Kebab',
                category: 'Kebab',
                rate: '5',
                color: 'gray'
            },
            {
                image: 'salmon-roll.svg',
                title: 'Salmon Roll',
                category: 'Salmon',
                rate: '4',
                color: 'purple'
            },
            {
                image: 'cupcake-choco.svg',
                title: 'Cupcake Choco',
                category: 'Cupcake',
                rate: '4',
                color: 'broken-white'
            },
            {
                image: 'doughnut-milk.svg',
                title: 'Doughnut Milk',
                category: 'Doughnut',
                rate: '5',
                color: 'yellow'
            },
            {
                image: 'doughnut-unicorn.svg',
                title: 'Doughnut Unicorn',
                category: 'Doughnut',
                rate: '4',
                color: 'yellow'
            },
            {
                image: 'kathi-kebab.svg',
                title: 'Kathi Kebab',
                category: 'Kebab',
                rate: '4',
                color: 'gray'
            },
        ],
        categories: [
            {
                icon: 'cupcake.svg',
                title: 'Cupcake',
                total: '22 Items',
                color: 'broken-white'
            },
            {
                icon: 'pizza.svg',
                title: 'Pizza',
                total: '25 Items',
                color: 'blue',
            },
            {
                icon: 'kebab.svg',
                title: 'Kebab',
                total: '12 Items',
                color: 'gray',
            },
            {
                icon: 'salmon.svg',
                title: 'Salmon',
                total: '22 Items',
                color: 'purple',
            },
            {
                icon: 'doughnut.svg',
                title: 'Doughnut',
                total: '11 Items',
                color: 'yellow'
            },
        ]
    }
  }
}
</script>
<style>

</style>