<template>
    <div class="container insta_block">
        <div class="title">
            {{content.title}}
        </div>
        <swiper ref="mySwiper" :options="swiperOption">
            <swiper-slide class="images" v-for="(item, index) in content.items" :key="item.id" :class="(index+1) % 2 == 0 ? 'odd' : ''">
                <img :src="item.image" :alt="item.title" >
                <div class="hidden_text">
                    <div class="text" v-html="item.text">

                    </div>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>
<script>
import content from '~/data/block5.json'
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import 'swiper/css/swiper.min.css'
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
            content,
            swiperOption: {
                slidesPerView: 3,
                spaceBetween: 50,
                loop: true,
                autoplay: {
                    delay: 5000,
                    disableOnInteraction: true
                },
                breakpoints: {
                    1440: {
                        slidesPerView: 3,
                        spaceBetween: 50,
                        },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 20
                        },
                    576: {
                        slidesPerView: 1,
                        spaceBetween: 20
                        },
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 10
                    }
                }
            }
        }
    }
}
</script>