<template>
    <div class="img-swiper">
        <swiper :options="swiperOption">
            <swiper-slide v-for="(page, index) in pages" :key="index">
                <ul class="list-item">
                    <li class="icon-item" v-for="item in page" :key="item.id">
                        <img class="img-item" :src="item.image_hash" alt="">
                        <span class="title">{{item.name}}</span>
                    </li>
                </ul>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>

import axios from 'axios'

import '../../../node_modules/swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
    name: 'NavSwiper',
    data() {
        return {
            swiperOption: {
                direction : 'horizontal',
                autoHeight: true,
                pagination ,k
                paginationClickable :true,
                observeParents:true,
            },
            iconsInfo: []
        }
    },
    methods:{
        get(){
            axios.get('/restapi/shopping/openapi/entries', {
                params:{
                    'latitude':'40.148278',
                    'longitude':'116.288865',
                    'templates[]':'main_template',
                    'templates2[]':'favourable_template',
                    'templates3[]':'svip_template'
                } 
        }).then( (res) => {   
                var arr =  res.data[0].entries.length         
                for( var i = 0 ; i < arr ; i ++ ) {
                    var arr1 = res.data[0].entries[i].image_hash
                    var str = arr1.split('')
                    str.splice(1,0,'/')
                    str.splice(4,0,'/')
                    var arr2 = str.join('')
                    var imgUrl = `//fuss10.elemecdn.com/${arr2}.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/`
                    res.data[0].entries[i].image_hash = imgUrl
                }
                this.iconsInfo = res.data[0].entries
                console.log( this.iconsInfo )
            } )
        }
    },
    computed: {
        pages: function() {
            const pages = [];
            for( var i = 0 ; i < this.iconsInfo.length ; i ++ ) {
                let page = Math.floor( i/10 )
                if( !pages[page] ) {
                    pages[page] = []
                }
                pages[page].push( this.iconsInfo[i] )
            }
            return pages;
        }
    },
    components: {
        swiper,
        swiperSlide
    },
    created() {
        this.get();
    }
}
</script>

<style lang="scss" scoped>
.list-item{
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    height: 1.42rem;

    .icon-item{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        width: 20%;
        margin-top:.1rem;

        .img-item{
            width: .45rem;
            height: .45rem;
        }
    }
    .title{
        font-size: .12rem;
        color: #666;
    }
}
</style>



