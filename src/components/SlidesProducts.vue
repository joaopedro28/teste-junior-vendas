<template>
    <div class="slides_products">
        <swiper ref="mySwiper" :options="BannerPrimary">
            <swiper-slide v-for="item in items" :key="item.id">
                <div class="aspect-ratio ratio-16-9">
                    <div class="aspect-content">
                        <img  class="object-fit-cover" :src="item.image" :alt="item.name">
                    </div>
                </div>
            </swiper-slide>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
    </div>
</template>
<script>
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import 'swiper/css/swiper.min.css'
export default {
    props:['items'],
    components: {
        Swiper,
        SwiperSlide
    },
    directives: {
        swiper: directive
    },
    data() {
        return {
            BannerPrimary: {
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                }
            }
        }
    },
}
</script>