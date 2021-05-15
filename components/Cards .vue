<template>
    <div  class="cards"  ref="cardgs">
        <div class="display-flex column" ref="cards"> 
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
    },
    mounted () {
        this.matchHeight()
    },
    methods:{
        matchHeight () {
            let height = this.$refs.cards.clientHeight;
            console.log(height)
            let height2 = this.$refs.cardgs.clientHeight;
            console.log(height2)
            
            

        }
    }    
}
</script>