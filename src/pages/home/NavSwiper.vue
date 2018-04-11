<template>
    <div class="img-swiper">
        <swiper :options="swiperOption">
            <swiper-slide>
               
            </swiper-slide>
            <swiper-slide>
                
            </swiper-slide>

            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>

import '../../../node_modules/swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
    name: 'NavSwiper',
    data() {
        return {
            swiperOption: {
                direction : 'horizontal',
                autoHeight: true,
                pagination : '.swiper-pagination',
                paginationClickable :true,
                observeParents:true,
            }
        }
    },
    components: {
        swiper,
        swiperSlide
    }
}
</script>

<style lang="scss" scoped>

</style>



