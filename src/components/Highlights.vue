<template>
    <div >
        <div class="highlights">
            <div class="container display-flex column">
                <div class="display-flex row w-100">
                    <TextInfo :content="content" class="text_block w-20" />
                    <div class="position-relative w-80" v-if="$device.isDesktop" >
                        <Cards :items="content.items"/>
                    </div>
                </div>
                <div class="arrow" v-if="$device.isDesktop" >
                    <img src="img/arrowdown.png" alt="Para baixo!"  title="Para baixo!">
                </div>
            </div>
        </div>
        <div class="container cards_slider" v-if="$device.isMobileOrTablet">
            <swiper ref="mySwiper" :options="highlightsOption">
                <swiper-slide v-for="item in content.items" :key="item.id">
                    <CardItem :item="item" />
                </swiper-slide>
            </swiper>
        </div>
    </div>
</template>
<script>
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import 'swiper/css/swiper.min.css'
import content from '~/data/block3.json'
import TextInfo from '~/components/TextInfo.vue'
import Cards from "~/components/Cards .vue" 
import CardItem from '~/components/CardItem.vue'


export default {
    components: {
        TextInfo,
        Cards,
        CardItem,
        Swiper,
        SwiperSlide
    },
    data(){
        return {
            content,
            highlightsOption: {
                loop: true,
                autoplay: {
                    delay: 3500,
                    disableOnInteraction: false
                },
                spaceBetween:30
            }
        }
    }, 
    
}
</script>