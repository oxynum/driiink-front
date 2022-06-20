<template>
    <CartProductCard v-for="product in formattedCart" :key="product" :product="product" :quantity="this.cart.filter(p => p.id === product.id).length"/>
    <div class="divider"></div>
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
    .divider{
        margin: 20px auto 0 auto;
        border: 1px solid #000000;
        opacity: 0.2;
        width: 190px;
    }
</style>