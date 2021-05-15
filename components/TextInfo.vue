<template>
    <div class="text_info display-flex row ">
        <div v-if="content.image">
            <img class="image-fluid" :src="content.image" :alt="content.uptitle" :title="content.uptitle">
        </div>
        <div class="display-flex column">
            <div class="uptitle" v-if="content.uptitle">
                {{content.uptitle}}
            </div>
            <div class="title" v-if="content.title">
                {{content.title}}
            </div>
            <div class="text" v-if="content.text" v-html="content.text">
            </div>
            <div class="button" v-if="content.link_button">
                <a :href="content.link_button"  v-if="content.button">
                    {{content.button}}
                </a>
            </div>                        
        </div>
    </div>
</template>
<script>
export default {
    props:['content']
}
</script>