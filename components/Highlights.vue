<template>
    <div class="highlights">
        <div class="container display-flex column">
            <div class="display-flex row w-100">
                <TextInfo :content="content" class="text_block w-20" />
                <div class="position-relative w-80" >
                    <Cards :items="content.items" ref="cards"/>
                </div>
            </div>
            <div class="arrow">
                <img src="img/arrowdown.png" alt="Para baixo!"  title="Para baixo!">
            </div>

        </div>
    </div>
</template>
<script>
import content from '~/data/block3.json'
import TextInfo from '~/components/TextInfo.vue'
import Cards from "~/components/Cards .vue" 

export default {
    components: {
        TextInfo,
        Cards 
    },
    data(){
        return {
            content,
        }
    }, 
    
}
</script>