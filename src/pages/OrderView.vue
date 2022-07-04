<template>
    <TheHeader :counter="this.counter"/>
    <OrderInfo :order="this.order"/>
    <OrderProductList :order="this.order"/>
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
            counter: 0
        }
    },
    beforeMount(){
        if(JSON.parse(sessionStorage.getItem('order'))){
          this.order = JSON.parse(sessionStorage.getItem('order'))
        }
        if(JSON.parse(sessionStorage.getItem('cart'))){
          this.counter = JSON.parse(sessionStorage.getItem('cart').length)
        }

    },
}
</script>

<style lang="scss" scoped>

</style>