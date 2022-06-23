<template>
    <OrderProductCard v-for="product in this.formattedOrder" :key="product" :product="product" :quantity="this.order.filter(p => p.id === product.id).length"/>
</template>

<script>
import OrderProductCard from './OrderProductCard.vue'

export default{
    name: 'OrderProductList',
    data(){
        return {
            order: [],
            formattedOrder: []
        }
    },
    components: {
        OrderProductCard,
    },
    beforeMount(){
        if(JSON.parse(sessionStorage.getItem('order'))){
          this.order = JSON.parse(sessionStorage.getItem('order'))
        }

        const ids = this.order.map(o => o.id)
        this.formattedOrder = this.order.filter(({id}, index) => !ids.includes(id, index + 1))
    }
}
</script>

<style lang="scss" scoped>

</style>