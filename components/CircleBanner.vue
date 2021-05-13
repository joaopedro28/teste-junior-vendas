<template>
    <div class="container circleBanner">
        <swiper ref="mySwiper" :options="swiperOptions">
            <swiper-slide v-for="item in itens" :key="item.id">
                <div class="item">
                    <img class="item-img" :src="item.image" :alt="item.name">
                </div>                
            </swiper-slide>
            
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>
<script>
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import 'swiper/css/swiper.min.css'
import CircleBanner from '~/data/block2.json'
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
            itens: CircleBanner,
            swiperOptions: {
                pagination: {
                    el: '.swiper-pagination'
                }
            }
        }
    },
}
</script>
