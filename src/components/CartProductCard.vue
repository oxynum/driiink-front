<template>
    <div class="cart-card" v-show="counter > 0">
        <div class="cart-card-btn">
            <div class="add_to_cart"><button @click="removeFromCart()"> - </button> <p>{{ this.counter }}</p> <button @click="addToCart()"> + </button></div>
        </div>
        <router-link :to="{ name : 'PDP', params: { id: this.$route.params.id, productID: this.product.id}}">
            <div class="cart-card-img">
                <img v-show="this.product.picture" :src="this.product.picture" class="top-box-img" alt="cocktails">
                <img v-show="!this.product.picture" src="https://driiink.s3.eu-west-3.amazonaws.com/png-transparent-red-cocktail-red-drink-cocktail-thumbnail-removebg-preview+2.png" alt="product image">
            </div>
        </router-link>
        <div class="cart-card-text">
            <h2>{{ this.product.name }}</h2>
            <p>{{ this.product.description }}</p>
        </div>
        <div class="cart-card-price">
            <p>{{ priceFormatter(this.product.price) }}</p>
        </div>
        <div class="cart-card-remove">
            <button @click="removeAllFromCart()"><font-awesome-icon icon="xmark" /></button>
        </div>
    </div>
</template>

<script>
export default{
    name: 'CartProductCard',
    props: {
        product: Object,
        quantity: Number,
    },
    data() {
        return {
            cart: [],
            counter: this.quantity,
            totalPrice: 0
        }
    },
    methods: {
      priceFormatter: function(price) {
          return (price/100).toFixed(2) + " €"
      },
      addToCart: function(){
        this.cart = []
        if(JSON.parse(sessionStorage.getItem('cart'))){
          this.cart = JSON.parse(sessionStorage.getItem('cart'))
        }
        this.cart.push(this.product) 
        sessionStorage.setItem('cart', JSON.stringify(this.cart))
        this.counter++
        this.$emit('checkCart', true)
      },
      removeFromCart: function(){
        this.cart = this.removeOneItem(this.product)
        sessionStorage.setItem('cart', JSON.stringify(this.cart))
        this.counter--
        this.$emit('checkCart', true)
      },
      removeOneItem(value){
        for(let i = this.cart.length - 1; i >= 0; i--){
            if(this.cart[i].id == value.id ){
                this.cart.splice([i], 1)
                return this.cart
            }
        }
      },
      removeAllFromCart(){
        this.cart = []
        if(JSON.parse(sessionStorage.getItem('cart'))){
          this.cart = JSON.parse(sessionStorage.getItem('cart'))
        }
        this.cart = this.cart.filter(p => p.id !== this.product.id)
        sessionStorage.setItem('cart', JSON.stringify(this.cart))
        this.counter = 0
        this.$emit('checkCart', true)
      },
    },
    async beforeMount() {
        if(JSON.parse(sessionStorage.getItem('cart'))){
          this.cart = JSON.parse(sessionStorage.getItem('cart'))
        }
    }
}
</script>

<style lang="scss" scoped>

    .cart-card{
        display: flex;
        margin-top: 10px;
        width: 100%;
        height: 68px;
        justify-content: space-evenly;
        align-items: center;

        &-btn > .add_to_cart{
        width: 62px;
        height: 24px;
        border-radius: 25px;
        border: none;
        background-color: #21B05C;
        color: white;
        font-size: 20px;
        font-family: Nunito, serif;
        font-weight: 600;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        padding: 0 5px;

        & > button{
            border: none;
            background-color: #21B05C;
            color: white;
        }

        & > p {
            font-size: 12px;
            font-weight: 600;
            font-family: Nunito, serif;
        }

        }

        &-img {
            width: 47px;
            height: 68px;
            display: flex;
            justify-content: center;
            align-items: center;

            & > img{
                width: 100%;
            }
        }

        &-text{
            display: flex;
            width: 171px;
            flex-direction: column;
            align-items: flex-start;
            font-family: Nunito, serif;

            & > h2 {
                font-size: 14px;
                font-weight: bold;
                width: 171px;
            }

            & > p {
                font-weight: 600;
                font-size: 12px;
                color: #A4A4A4;
                white-space: nowrap;
                text-overflow: ellipsis;
                width: 171px;
                display: block;
                overflow: hidden
            }
        }

        &-price{
            font-family: Nunito, serif;
            font-size: 14px;
            font-weight: bold;
        }

        &-remove > button {
            border: none;
            border-radius: 20px;
            width: 22px;
            height: 22px;
            background-color: #F2F2F2;
            color: #8B8B8B;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }

    
    

</style>