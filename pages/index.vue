<template>
    <div >
        <header >
            <nav class="my_nav container">
                <div>
                    logo
                </div>
                <div>
                    <Menu />
                </div>
                <div>
                    lupa user e carrinho
                </div>
            </nav>
        </header>
        <main>
            <section>
                <Banner/>
            </section>
            <section class="container">
                <CircleBanner/>
            </section>
            <section>
                
            </section>
            <section>
                
            </section>
            <section>
                
            </section>
        </main>
        <footer>

        </footer>

  <div class="container">
    


    <div class="grid">
      <div class="grid__item grid__item--xs-span-1">
        xs-1
      </div>
      <div class="grid__item grid__item--xs-span-2">
        xs-2
      </div>
      <div class="grid__item grid__item--xs-span-3">
        xs-3
      </div>
      <div class="grid__item grid__item--xs-span-6">
        xs-6
      </div>
    </div>

    <div class="grid">
      <div class="grid__item grid__item--md-span-4">
        md-4
      </div>
      <div class="grid__item grid__item--md-span-4">
        md-4
      </div>
      <div class="grid__item grid__item--md-span-4">
        md-4
      </div>
    </div>

    <div class="grid">
      <div class="grid__item grid__item--sm-span-1">
        sm-1
      </div>
      <div class="grid__item grid__item--sm-span-1">
        sm-1
      </div>
      <div class="grid__item grid__item--sm-span-1">
        sm-1
      </div>
      <div class="grid__item grid__item--sm-span-1">
        sm-1
      </div>
      <div class="grid__item grid__item--sm-span-1">
        sm-1
      </div>
      <div class="grid__item grid__item--sm-span-1">
        sm-1
      </div>
      <div class="grid__item grid__item--sm-span-1">
        sm-1
      </div>
      <div class="grid__item grid__item--sm-span-1">
        sm-1
      </div>
      <div class="grid__item grid__item--sm-span-4">
        sm-4
      </div>
      <div class="grid__item grid__item--sm-span-1">
        sm-1
      </div>
      <div class="grid__item grid__item--sm-span-1">
        sm-1
      </div>
      <div class="grid__item grid__item--sm-span-12">
        sm-12
      </div>
      </div>
        </div>
    </div>
</template>

<script>
import Menu from '~/components/Menu.vue'
import Banner from '~/components/Banner.vue'
import CircleBanner from '~/components/CircleBanner.vue'

export default {
    components:{
        Menu,
        Banner,
        CircleBanner
    }

}
</script>
