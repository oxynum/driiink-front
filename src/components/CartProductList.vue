<template>
    <CartProductCard v-for="product in formattedCart" :key="product" :product="product" :quantity="this.cart.filter(p => p.id === product.id).length"/>
</template>

<script>
import CartProductCard from './CartProductCard.vue'

export default{
    name: 'CartProductList',
    components: {
        CartProductCard,
    },
    data() {
        return {
            formattedCart: []
        }
    },
    props: {
        cart: Array,
    },
    async beforeMount(){
        const ids = this.cart.map(o => o.id)
        this.formattedCart = this.cart.filter(({id}, index) => !ids.includes(id, index + 1))
    }
}
</script>

<style lang="scss" scoped>

</style>