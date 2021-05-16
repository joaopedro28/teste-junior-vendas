<template>
    <div class="menu align-self-center">
        <ul v-if="$device.isDesktop">
            <li v-for="item in menu" :key="item.id">
                <a :src="item.link" >{{item.name}}</a>
            </li>
        </ul>
        <div class="display-flex" v-if="$device.isMobileOrTablet">
            <img class="hamburguer" src="img/hamburguer.png" alt="menu" title="menu" @click="OpenMenu()">
            <div class="mobile_items" :class="active ? 'active' : ''">
                <ul>
                    <li v-for="item in menu" :key="item.id">
                        <a :src="item.link" >{{item.name}}</a>
                    </li>
                </ul>
                <div class="display-flex my_icons">
                    <img src="img/lupa.png" alt="Busca" title="Busca">
                    <img src="img/user.png" alt="Minha conta" title="Minha conta">
                    <img src="img/cart.png" alt="Carrinho" title="Carrinho">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Menu from '~/data/menu.json'

export default {
    
    data(){
        return {
            menu : Menu,
            active:false
        }
    },
    methods: {
        OpenMenu() {
            this.active = !this.active;
        }
    }
}
</script>
