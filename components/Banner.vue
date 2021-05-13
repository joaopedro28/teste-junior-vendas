<template>
    <div class="banner">
        <swiper ref="mySwiper" :options="swiperOptions">
            <swiper-slide v-for="item in itens" :key="item.id">
                <img :src="item.image" :alt="item.name">
            </swiper-slide>
            
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>
<script>
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import 'swiper/css/swiper.min.css'
import BannerItens from '~/data/block1.json'
export default {
    components: {
    Swiper,
    SwiperSlide
    },
    directives: {
        swiper: directive
    },
    data() {
        return {
            itens: BannerItens,
            swiperOptions: {
                pagination: {
                    el: '.swiper-pagination'
                }
            }
        }
    },
}
</script>