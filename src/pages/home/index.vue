<template>
    <div>
       <home-header></home-header>
       <home-swiper></home-swiper>
       <nav-swiper></nav-swiper>
    </div>
</template>

<script>

import HomeHeader from '../../components/home/HomeHeader'
import HomeSwiper from './HomeSwiper'
import NavSwiper from './NavSwiper'

export default {
    name: 'Home',
    components: {
       HomeHeader,
       HomeSwiper,
       NavSwiper
    }
}

</script>

<style scoped>

</style>