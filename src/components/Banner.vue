<template>
    <div class="banner">
        <swiper ref="mySwiper" :options="BannerPrimary">
            <swiper-slide v-for="item in itens" :key="item.id">
                <div class="aspect-ratio ratio-21-9">
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