<template>
    <TheHeader/>
    <OrderInfo/>
    <OrderProductList/>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue'
import OrderInfo from '@/components/OrderInfo.vue'
import OrderProductList from '@/components/OrderProductList.vue'

export default{
    name: "OrderView",
    components:{
        TheHeader,
        OrderInfo,
        OrderProductList
    },
    data(){
        return{
            order: [],
        }
    },
    beforeMount(){
        if(JSON.parse(sessionStorage.getItem('order'))){
          this.order = JSON.parse(sessionStorage.getItem('order'))
        }

    },
    mounted(){
        //AJOUTEZ LE CALL API POUR AJOUTER UNE ORDER DANS L'API
    }
}
</script>

<style lang="scss" scoped>

</style>