<template>
    <div class="container">
        <div class="cart-btn">
        <button>Comptoir</button> 
        <button>Payer par carte</button> 
        </div>
        <div class="cart-total">
            <p>Total : {{ this.totalPrice.toFixed(2) }} €</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CartFooter',
    data(){
        return{
            cart: [],
            totalPrice: 0
        }
    },
    beforeMount(){
        if(JSON.parse(sessionStorage.getItem('cart'))){
          this.cart = JSON.parse(sessionStorage.getItem('cart'))
        }

        this.cart.forEach(el => {
            this.totalPrice = this.totalPrice + parseFloat((el.price/100).toFixed(2))
        });
    }
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
        padding-top: 200px;
        background: linear-gradient(180deg, rgba(255,255,255,0) 15%, rgba(255,255,255,1) 100%);

        & > button {
            font-family: Nunito, serif;
            font-weight: 600;
            font-size: 20px;
            padding: 10px 20px;
            margin-bottom: 20px;
            border: none;
            border-radius: 100px;
            background-color: #21B05C;
            color: white;

            &:nth-child(1){
                background-color: #D7D7D7;
                color: #B1B1B1;
            }
        }
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