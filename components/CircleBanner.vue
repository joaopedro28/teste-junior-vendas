<template>
    <div class=" circleBanner">
        <swiper ref="mySwiper" :options="swiperOption">
            <swiper-slide v-for="item in itens" :key="item.id">
                <div class="item">
                    <img class="item-img" :src="item.image" :alt="item.name">
                </div>                
            </swiper-slide>
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
            swiperOption: {
                loop: true,
                autoplay: {
                    delay: 2500,
                    disableOnInteraction: false
                },
                breakpoints: {
                    1440: {
                        slidesPerView: 6,
                        spaceBetween: 30,
                        },
                    1200: {
                        slidesPerView: 4,
                        spaceBetween: 30
                        },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 20
                        },
                    576: {
                        slidesPerView: 2,
                        },
                    320: {
                        slidesPerView: 1,
                    }
                }
            }
        }
    },
}
</script>
