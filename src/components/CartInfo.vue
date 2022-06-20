<template>
    <div class="cart-info">
        <div class="cart-info-return">
            <router-link :to="{ name: 'PLP', params: { id: this.$route.params.id} }"><button><font-awesome-icon icon="angle-left" /></button></router-link>
        </div>
        <h2 class="cart-info-title">Ta commande 🗒</h2>
        <p class="cart-info-time">⏱<span> : {{ this.time }} min</span></p>
    </div>
</template>

<script>
export default {
  name: 'CartInfo',
  data(){
    return {
        time: 0,
        cart: []
    }
  },
  beforeMount(){
    if(JSON.parse(sessionStorage.getItem('cart'))){
          this.cart = JSON.parse(sessionStorage.getItem('cart'))
      }

    this.cart.forEach(el => {
        this.time = this.time + parseInt(el.prepTime.slice(el.prepTime.indexOf(':') + 1, el.prepTime.lastIndexOf('+')).replace(':00', ''))
    });
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