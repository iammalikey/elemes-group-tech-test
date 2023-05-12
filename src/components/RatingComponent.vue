<template>
    <div class="flex">
        <img v-for="index in parseInt(rate)" :key="index" src="../assets/icon/star.svg" alt="">
        <img v-for="index in 5-parseInt(rate)" :key="index" src="../assets/icon/star-blank.svg" alt="">
    </div>
</template>
<script>
export default {
    props:[
        'rate'
    ]
}
</script>
<style lang="">
    
</style>