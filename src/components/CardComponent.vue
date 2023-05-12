<template>
    <!-- Content -->
    <div class="card hover:bg-small-pattern cursor-pointer" :class="{'card--blue':color=='blue', 'card--gray':color=='gray', 'card--yellow':color=='yellow', 'card--purple': color=='purple', 'card--broken-white': color=='broken-white'}">
        <img :src="getReceiptImgUrl(image)" class="w-24 h-24 object-cover rounded-lg" :alt="title">
        <div class="flex flex-col gap-2">
            <h2 class="text-2xl pt-5 font-medium text-black">{{ title }}</h2>
            <span class="text-[#8BAC3E] text-lg font-medium">{{ category }}</span>
            <!-- star rate -->
            <RatingComponent :rate="rate"/>
        </div>
    </div>
</template>

<script>
import RatingComponent from "@/components/RatingComponent.vue";

export default {
    components:{
        RatingComponent
    },
    props:[
        'image',
        'title',
        'category',
        'rate',
        'color'
    ],
    methods:{
        getReceiptImgUrl (url){
           return require('@/assets/img/'+url)
        }
    }
}

</script>