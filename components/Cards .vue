<template>
    <div  class="cards"  ref="cardgs">
        <div class="display-flex column" > 
            <div  v-for="(item, index) in items" :key="item.id" :class="index % 2 == 0 ? '': 'odd'">        
                <CardItem :item="item" />
            </div>
        </div>
    </div>
</template>
<script>
import CardItem from '~/components/CardItem.vue'
export default {
    props:['items'],
    components:{
        CardItem
    }
}
</script>