<template>
    <div class="container" v-show="this.cart.length != 0" >
        <CartProductCard v-for="product in formattedCart" :key="product" :product="product" :quantity="this.cart.filter(p => p.id === product.id).length" @checkCart="checkCart"/>
    </div>
    <div class="cart-empty" v-show="this.cart.length == 0">
        <img class="cart-empty-img" src="https://driiink.s3.eu-west-3.amazonaws.com/cart-empty.png" alt="Cart empty">
        <h2>Il n'y a rien pour l'instant 😓</h2>
    </div>
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
    .container{
        padding-bottom: 250px;
    }

    .cart-empty{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 108px;
        flex-direction: column;

        & > h2 {
            font-size: 24px;
            font-family: Nunito, serif;
            font-weight: bold;
            margin-top: 30px;
        }
    }
</style>