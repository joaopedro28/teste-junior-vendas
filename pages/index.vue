<template>
    <div >
        <header >
            <nav class="container display-flex row justify-content-between my_nav">
                <div class="brand_logo">
                    <img class="image-fluid" :src="general.default.logo" :alt="general.default.title" :title="general.default.title" >
                </div>
                <div class="display-flex">
                    <Menu />
                </div>
                <div class="display-flex">
                    <div class="align-self-center">
                        <div class="display-flex row my_icons">
                            <img src="img/lupa.png" alt="Busca" title="Busca">
                            <img src="img/user.png" alt="Minha conta" title="Minha conta">
                            <img src="img/cart.png" alt="Carrinho" title="Carrinho">
                        </div>
                    </div>
                </div>
            </nav>
        </header>
        <main>
            <section>
                <Banner />
            </section>
            <section class="container">
                <CircleBanner />
            </section>
            <section>
                <Highlights />
            </section>
            <section>
                
            </section>
            <section>
                
            </section>
        </main>
        <footer>

        </footer>
    </div>
</template>

<script>
import Menu from '~/components/Menu.vue'
import Banner from '~/components/Banner.vue'
import CircleBanner from '~/components/CircleBanner.vue'
import Highlights from '~/components/Highlights.vue'
import general from '~/data/general.json'

export default {
    components:{
        Menu,
        Banner,
        CircleBanner,
        Highlights
    },
    data(){
        return{
            general: general.data
        }
    }
}
</script>
