<template>
    <div class="sliders_card">
        <swiper ref="mySwiper" :options="swiperOption">
            <div class="display-flex column">
                <swiper-slide  v-for="(item, index) in items" :key="item.id" :class="index % 2 == 0 ? '': 'odd'">        
                    <CardItem :item="item" />
                </swiper-slide>
            </div>
        </swiper>
    </div>
</template>
<script>
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import 'swiper/css/swiper.min.css'
import CardItem from '~/components/CardItem.vue'
export default {
    props:['items'],
    components:{
        Swiper,
        SwiperSlide,
        CardItem
    },
    data() {
        return {
            swiperOption: {
                slidesPerView: 2,
                spaceBetween: 30,
                // loop: true,
                // autoplay: {
                //     delay: 2500,
                //     disableOnInteraction: false
                // },
                // breakpoints: {
                //     1440: {
                //         slidesPerView: 2,
                //         spaceBetween: 30,
                //         },
                //     1200: {
                //         slidesPerView: 3,
                //         spaceBetween: 30
                //         },
                //     768: {
                //         slidesPerView: 3,
                //         spaceBetween: 20
                //         },
                //     576: {
                //         slidesPerView: 3,
                //         spaceBetween: 20
                //         },
                //     320: {
                //         slidesPerView: 1,
                //         spaceBetween: 10
                //     }
                // }
            }
        }
    },
}
</script>