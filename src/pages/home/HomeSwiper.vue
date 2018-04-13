<template>
    <div class="img-swiper">
        <swiper :options="swiperOption">
            <swiper-slide v-for="item in imgsInfo" :key="item.id">
                <img class="swiper-img" :src="item.imgUrl" alt="">
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>

import '../../../node_modules/swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
    name: 'HomeSwiper',
    data() {
        return {
            swiperOption: {
                direction : 'horizontal',
                autoHeight: true,
                pagination : '.swiper-pagination',
                paginationClickable :true,
                observeParents:true,
            },
            imgsInfo: [{
                "id": "1",
                "imgUrl": "//fuss10.elemecdn.com/0/e7/64044fb6df771e9cb42196ae3eeeejpeg.jpeg?imageMogr/format/webp/",
                "link": "/detail"
            },{
                "id": "2",
                "imgUrl": "////fuss10.elemecdn.com/b/0a/5b1ab540506687c7b93e148704db1jpeg.jpeg?imageMogr/format/webp/",
                "link": "/detail"
            }]
        }
    },
    components: {
        swiper,
        swiperSlide
    }
}
</script>

<style lang="scss" scoped>
.img-swiper{
    overflow: hidden;
    width: 100%;
    height: 1.05rem;

    .swiper-img{
        width: 100%;
        height: 1.05rem;
    }
}
</style>



