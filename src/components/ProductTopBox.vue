<template>
    <div class="top-box" >
        <div class="top-box-line">
            <router-link :to="{ name: 'PLP', params: {id: this.$route.params.id}}"><button><font-awesome-icon icon="angle-left" /></button></router-link>
            <p>⏱<span> : {{ prepTimeFormatter(product.prepTime) }} min</span></p>
        </div>
        <img class="top-box-img" src="https://driiink.s3.eu-west-3.amazonaws.com/Mojito-PNG-Image+1.png" alt="cocktails">
        <button class="add_to_cart" v-if="counter === 0" @click="addToCart()"> Ajouter au panier </button>
        <div class="add_to_cart btn_position" v-if="counter !== 0"> <button @click="removeFromCart()" > - </button> <p>{{ counter }}</p> <button @click="addToCart()"> + </button></div>
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
          counter: (JSON.parse(sessionStorage.getItem('cart')).filter(product => product.id === this.product.id)).length,
          cart: JSON.parse(sessionStorage.getItem('cart')),
      }
  },
  methods: {
      prepTimeFormatter: function(time) {
          return time.slice(time.indexOf(':') + 1, time.lastIndexOf('+')).replace(':00', '')
      },
      addToCart: function(){
        this.cart.push(this.product) 
        sessionStorage.setItem('cart', JSON.stringify(this.cart))
        this.counter++
        console.log(this.cart)
      },
      removeFromCart: function(){
          this.cart = this.removeOneItem(this.product)
          sessionStorage.setItem('cart', JSON.stringify(this.cart))
          this.counter--
          console.log(this.cart)
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
        height:  281px;
        display: flex;
        flex-direction: column;
        background-color: #D7D7D7;
        position: relative;

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
            width: 112px;
            margin: 0 auto;
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
        left: calc(50% - 117.5px);
        bottom: -25px;
    }

    .btn_position{
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        width: 146px;
        left: calc(50% - 73px);
    }
</style>