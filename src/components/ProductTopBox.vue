<template>
    <div class="top-box" >
        <div class="top-box-line">
            <router-link :to="{ name: 'PLP', params: {id: this.$route.params.id}}"><button><font-awesome-icon icon="angle-left" /></button></router-link>
            <p>⏱<span> : {{ prepTimeFormatter(product.prepTime) }} min</span></p>
        </div>
        <img v-show="this.product.picture" :src="this.product.picture" class="top-box-img" alt="cocktails">
        <img v-show="!this.product.picture" class="top-box-img" src="https://driiink.s3.eu-west-3.amazonaws.com/Mojito-PNG-Image+1.png" alt="cocktails">
        <div class="top-box-btn">
            <button class="add_to_cart" v-if="counter === 0" @click="addToCart()"> Ajouter au panier </button>
            <div class="add_to_cart btn_position bounce" v-if="counter !== 0"> <button @click="removeFromCart()" > - </button> <p>{{ counter }}</p> <button @click="addToCart()"> + </button></div>
        </div>
    </div>
</template>

<script>
export default {
  name: "ProductTopBox",
  props: {
      product: Object
  },
  data() {
      return {
          counter: 0,
          cart: [],
      }
  },
  async created(){
    const item = await sessionStorage.getItem('cart')
    if(JSON.parse(item)){
        this.cart = JSON.parse(sessionStorage.getItem('cart'))
    }

    console.log('product id',this.product.id)
    if(this.cart.filter(product => product.id === this.product.id).length > 0){
        this.counter = this.cart.filter(product => product.id === this.product.id).length
        console.log('counter',this.counter)
    } 
  },
  methods: {
      prepTimeFormatter: function(time) {
          return time.slice(time.indexOf(':') + 1, time.lastIndexOf('+')).replace(':00', '')
      },
      addToCart: function(){
        this.cart = []
        if(JSON.parse(sessionStorage.getItem('cart'))){
            this.cart = JSON.parse(sessionStorage.getItem('cart'))
        }
        this.cart.push(this.product) 
        sessionStorage.setItem('cart', JSON.stringify(this.cart))
        this.counter++
        this.$emit('checkCounter', true)
      },
      removeFromCart: function(){
        this.cart = this.removeOneItem(this.product)
        sessionStorage.setItem('cart', JSON.stringify(this.cart))
        this.$emit('checkCounter', true)
        this.counter--          
      },
      removeOneItem(value){
        for(let i = this.cart.length - 1; i >= 0; i--){
            if(this.cart[i].name == value.name ){
                this.cart.splice([i], 1)
                return this.cart
            }
        }
      }
  },

}
</script>

<style lang="scss" scoped>
    .top-box {
        width: 100%;
        display: flex;
        flex-direction: column;
        background-color: #F2F2F2;
        position: relative;
        padding-bottom: 2.5em;

        &-line{
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 22.5px 30px 0 30px;

            & > p {
                color: #302F3C;
                font-family: Nunito, serif;
                font-size: 18px;
                & > span {
                    opacity: 40%;
                }
            }   
        }


        &-img{
            width: 200px;
            margin: 0 auto;
        }

        &-btn{
            width: 100%;
            display: flex;
            justify-content: center;
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

    .add_to_cart{
        width: 235px;
        height: 50px;
        border-radius: 25px;
        border: none;
        background-color: #21B05C;
        color: white;
        font-size: 20px;
        font-family: Nunito, serif;
        font-weight: 600;
        position: absolute;
        bottom: -25px;
        margin: auto;
    }

    .btn_position{
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        width: 146px;
        margin: 0 auto;
    }

    .bounce{
        animation: .6s cubic-bezier(0.4, -0.3, 0.4, 0) bounce;
    }


    @keyframes bounce {
        0% {
            width: 235px;
        }

        15% {
            width: 146px;
        }

        45% {
            width: 200px;
        }

        65% {
            width: 146px;
        }

        88%{
            width: 165px;
        }

        100%{
            width: 146px;
        }
    }
</style>