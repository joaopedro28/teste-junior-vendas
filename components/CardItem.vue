<template>
    <div class="card_item w-80">
        <img :src="item.image" :alt="item.title">
        <div class="text_box">
            <h4>
                {{item.title}}
            </h4>
            <p class="uptitle">
                {{item.description}}
            </p>
        </div>
    </div>
</template>
<script>
export default {
    props:['item']
}
</script>