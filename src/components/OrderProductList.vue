<template>
    <OrderProductCard v-for="item in this.order.orderItems" :key="item" :product="item.product" :quantity="item.quantity"/>
</template>

<script>
import OrderProductCard from './OrderProductCard.vue'

export default{
    name: 'OrderProductList',
    props: {
        order: Array
    },
    components: {
        OrderProductCard,
    }
}
</script>

<style lang="scss" scoped>

</style>