<template>
    <CartProductCard v-for="product in formattedCart" :key="product" :product="product" :quantity="this.cart.filter(p => p.id === product.id).length" @checkCart="checkCart"/>
</template>

<script>
import CartProductCard from './CartProductCard.vue'

export default{
    name: 'CartProductList',
    components: {
        CartProductCard,
    },
    emits: ["checkCart"],
    data() {
        return {
            formattedCart: [],
            cart: []
        }
    },
    async beforeMount(){
        if(JSON.parse(sessionStorage.getItem('cart'))){
            this.cart = JSON.parse(sessionStorage.getItem('cart'))
        }

        const ids = this.cart.map(o => o.id)
        this.formattedCart = this.cart.filter(({id}, index) => !ids.includes(id, index + 1))
    },
    methods:{
        checkCart(v){
            this.cart = JSON.parse(sessionStorage.getItem('cart'))
            this.$emit('checkCart', v)
        },
        removeOneItem(value){
        for(let i = this.formattedCart.length - 1; i >= 0; i--){
            if(this.formattedCart[i].id == value.id ){
                this.formattedCart.splice([i], 1)
                return this.formattedCart
            }
        }
      },
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