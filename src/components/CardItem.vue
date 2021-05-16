<template>
    <div class="card_item w-80">
        <div class="text_box">
            <img :src="item.image" :alt="item.title">
            <h4>
                {{item.title}}
            </h4>
            <p class="text">
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