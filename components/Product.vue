<template>
    <div class="product" >
        <div class="container">
            <div class="display-flex row justify-content-between">
                <TextInfo :content="content" class="w-50" />
                <SlidesProducts :items="content.items"  />
            </div>
            
        </div>
            <div class="product_bg" ></div>
    </div>
</template>
<script>
import TextInfo from '~/components/TextInfo.vue';
import SlidesProducts from '~/components/SlidesProducts.vue';

import content from '~/data/block4.json'

export default {
    components:{
        TextInfo,
        SlidesProducts
    },
    data() {
        return {
            content
        }
    }
}
</script>