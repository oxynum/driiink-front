<template>
    <div class="container">
        <div class="cart-btn">
            <router-link v-show="this.counter != 0" :to="{ name: 'Payment', params: { id: this.id }}"><button class="payment-btn">Payer {{ this.price.toFixed(2) }}€</button></router-link> 
            <router-link v-show="this.counter == 0" :to="{ name: 'PLP', params: { id: this.id }}"><button class="payment-btn">Checker la carte 🍸</button></router-link> 
        </div>
    </div>
</template>

<script>
export default {
    name: 'CartFooter',
    props:{
        price: Number,
        counter: Number
    },
    data(){
        return{
            cart: [],
            id: this.$route.params.id,
        }
    },
    beforeMount(){
        if(JSON.parse(sessionStorage.getItem('cart'))){
          this.cart = JSON.parse(sessionStorage.getItem('cart'))
        }        
    },
    
}
</script>

<style lang="scss" scoped>
    .container{
        position: fixed;
        bottom: 0;
        width: 100%;
    }
    .cart-btn {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        width: 100%;
        padding-top: 150px;
        background: linear-gradient(180deg, rgba(255,255,255,0) 15%, rgba(255,255,255,1) 100%);

        & > a > button {
            font-family: Nunito, serif;
            font-weight: 600;
            font-size: 20px;
            padding: 10px 20px;
            margin-bottom: 20px;
            border: none;
            border-radius: 100px;    
        }
    }

    .order-btn {
        background-color: #D7D7D7;
        color: #B1B1B1;
    }

    .payment-btn {
        background-color: #21B05C;
        color: white;
    }
    .cart-total{
        background-color: #21B05C;
        height: 50px;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        color: white;
        font-family: Nunito, serif;
        font-size: 20px;
        font-weight: 600;
        padding-right: 40px;
    }
</style>