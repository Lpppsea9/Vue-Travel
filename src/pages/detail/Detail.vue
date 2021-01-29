<template>
    <div>
        <detail-banner :list="list" v-if="list.length"></detail-banner>
        <detail-header></detail-header>
        <div class="content">
            <detail-list></detail-list>
        </div>
        
    </div>
</template>

<script>
import axios from 'axios'
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'

export default {
    name: 'Detail',
    components: {
        DetailBanner,
        DetailHeader,
        DetailList
    },
    data () {
        return {
            list: [],
            sightName:''
        }
    },
    methods: {
        getDetailInfo () {
            axios.get('/api/detail.json', {
                params: {
                    id: this.$route.params.id
                }
            }).then(this.handleGetDataSucc)
        },
        handleGetDataSucc (res) {
            res= res.data
            const data = res.data.ports
            this.list = data
            // console.log(data);

        }
    },

    mounted() {
        this.getDetailInfo()
    }
} 
</script>

<style lang="stylus" scoped>
    .content
        height 50rem
</style>