<template>
    <div class="cart-info">
        <div class="cart-info-return">
            <router-link :to="{ name: 'PLP', params: { id: this.$route.params.id} }"><button><font-awesome-icon icon="angle-left" /></button></router-link>
        </div>
        <h2 v-show="this.counter == 0" class="cart-info-title">Ta commande est vide 🗒</h2>
        <h2 v-show="this.counter !=0" class="cart-info-title">Ta commande 🗒</h2>
        <p v-show="this.counter !=0" class="cart-info-time">⏱<span> : {{ this.time }} min</span></p>
    </div>
</template>

<script>
export default {
  name: 'CartInfo',
  props:{
    time: Number,
    counter: Number
  },
  data(){
    return {
        cart: []
    }
  },
  beforeMount(){
    if(JSON.parse(sessionStorage.getItem('cart'))){
          this.cart = JSON.parse(sessionStorage.getItem('cart'))
    }
  }
}
</script>

<style lang="scss" scoped>

    *{
        font-family: Nunito, serif;
    }
    .cart-info{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        &-return{
            display: flex;
            width: 90%;
            margin: 0 auto;
        }

        &-title{
            margin-top: 10px;
            font-size: 24px;
            font-weight: bold;
        }

        &-time {
            color: #302F3C;
            font-family: Nunito, serif;
            font-size: 18px;
            margin-top: 20px;
            margin-bottom: 10px;
            & > span {
                opacity: 40%;
            }
        }
    }

    button {
        width: 30px;
        height: 30px;
        border-radius: 15px;
        background-color: #21B05C;
        border: none;
        color: white;
    }
</style>