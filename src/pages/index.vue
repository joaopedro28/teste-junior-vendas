<template>
    <div >
        <header data-aos="fade-left" data-aos-offset="600" data-aos-easing="ease-in-sine">
            <nav class="container display-flex  justify-content-between my_nav">
                <div class="brand_logo">
                    <nuxt-link to="/" >
                        <img class="image-fluid" :src="general.default.logo" :alt="general.default.title" :title="general.default.title" >
                    </nuxt-link>
                </div>
                <div class="display-flex">
                    <Menu />
                </div>
                <div class="display-flex" v-if="$device.isDesktop">
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
            <section data-aos="zoom-in" data-aos-duration="2500">
                <Banner />
            </section>
            <section data-aos="zoom-in-up" data-aos-duration="2000" class="container">
                <CircleBanner />
            </section>
            <section data-aos="zoom-out-up" data-aos-duration="2500">
                <Highlights />
            </section>
            <section data-aos="zoom-in-right" data-aos-duration="2000">
                <Product />
            </section>
            <section data-aos="zoom-in-left" data-aos-duration="3000">
                <InstaBlock />
            </section>
        </main> 
        <footer data-aos="fade-up" data-aos-easing="linear" data-aos-duration="2500">
            <Footer :logo="general.default.logo" :copyright="general.default.copyright+general.default.CNPJ"/>
        </footer>
    </div>
</template>

<script>
import Menu from '~/components/Menu.vue'
import Banner from '~/components/Banner.vue'
import CircleBanner from '~/components/CircleBanner.vue'
import Highlights from '~/components/Highlights.vue'
import Product from '~/components/Product.vue'
import InstaBlock from '../components/InstaBlock.vue'
import Footer from '~/components/Footer.vue'

import general from '~/data/general.json'

export default {
    head() {
        return {
            title: this.general.default.title,
            meta: [
                {
                    hid: `og:title`,
                    property: 'og:title',
                    content: this.general.default.title
                },
                {
                    hid: `description`,
                    name: 'description',
                    content: 'Projeto feito para um teste de Frontend Júnior - João Pedro Rocha'
                },
                {
                    hid: `og:description`,
                    property: 'og:description',
                    content: 'Projeto feito para um teste de Frontend Júnior - João Pedro Rocha'
                },
                {
                    hid: `og:url`,
                    property: `og:url`,
                    content: this.$route.fullPath
                }
            ]
        }
    },
    components:{
        Menu,
        Banner,
        CircleBanner,
        Highlights,
        Product,
        InstaBlock,
        Footer
    },
    data(){
        return{
            general: general.data
        }
    }
}
</script>
