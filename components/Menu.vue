<template>
    <div class="menu align-self-center">
        <ul>
            <li v-for="item in menu" :key="item.id">
                <a :src="item.link" >{{item.name}}</a>
            </li>
        </ul>
    </div>

</template>
<script>
import Menu from '~/data/menu.json'

export default {
    
    data(){
        return {
            menu : Menu,
        }
    }
}
</script>
