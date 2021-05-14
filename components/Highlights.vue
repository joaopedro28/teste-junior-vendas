<template>
    <div class="highlights">
        <div class="container">
            <div class="display-flex row w-100">
                <div class="w-20">
                    <div class="display-flex column">
                        <div class="uptitle">
                            {{content.uptitle}}
                        </div>
                        <div class="title">
                            {{content.title}}
                        </div>
                        <div class="text">
                            {{content.uptitle}}
                        </div>
                    </div>
                </div>
            
                <div class="position-relative w-80" >
                    <SlidersCards :items="content.items" />
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import content from '~/data/block3.json'
// import TextInfo from '~/components/TextInfo.vue '
import SlidersCards from "~/components/SlidersCards .vue" 

export default {
    components: {
        // TextInfo
        SlidersCards 
    },
    data(){
        return {
            content,
        }
    }
}
</script>