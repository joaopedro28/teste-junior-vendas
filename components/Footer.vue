<template>
    <div>
        <div class="logo">
            <img :src="logo" >
        </div>
        <div class="container display-flex row  justify-content-between">
            <div v-for="item in rodape" :key="item.id">
                <div class="item" >
                    {{item.name}}
                </div>
                <div class="subitem" v-if="item.type === 'subitems'">
                    <div class="icon" v-for="subitem in item.subitems" :key="subitem.id">
                        <img :src="subitem.icon" :alt="subitem.name" :title="subitem.name" v-if="subitem.icon">
                        <a v-if="subitem.link" :href="subitem.link" target="_top" >
                            {{subitem.name}}
                        </a>
                        <p v-else>{{subitem.name}}</p>
                    </div>
                </div>
                <div class="form" v-if="item.type === 'form'">
                    <form class="display-flex row">
                        <input type="email" placeholder="Email" class="" id="email" >
                        <button>
                            Enviar
                        </button>
                    </form>
                </div>
            </div>
        </div>    
        <div class="container">
            <div class="copy display-flex justify-content-center w-100">
                {{copyright}}
            </div>
        </div>  
    </div>
</template>
<script>
import rodape from '~/data/rodape.json'

export default {
    props: ['logo','copyright'],
    data(){
        return {
            rodape
        }
    }
}
</script>
