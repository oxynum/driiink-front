<template>
    <div>
        <p>Total : {{ this.totalPrice.toFixed(2) }} €</p>
    </div>
</template>

<script>
export default{
    name: 'PaymentFooter',
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
    div{
        position: fixed;
        bottom: 0;
        width: 100%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        height: 50px;
        background-color: #21B05C;
        font-family: Nunito, serif;
        font-size: 20px;
        font-weight: 600;
        color: white;
    }

    p {
        margin-right: 40px;
    }
</style>