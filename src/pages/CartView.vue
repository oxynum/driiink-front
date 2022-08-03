<template>
    <TheHeader :counter="this.counter"/>
    <CartInfo :time="this.time" :counter="this.counter"/>
    <CartProductList @checkCart="checkCart"/>
    <CartFooter :price="this.price" :counter="this.counter"/>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue'
import CartInfo from '@/components/CartInfo.vue'
import CartProductList from '@/components/CartProductList.vue'
import CartFooter from '@/components/CartFooter.vue'

export default {
    name: 'CartView',
    components: {
        TheHeader,
        CartInfo,
        CartProductList,
        CartFooter
    },
  emits: ["checkCart"],
  data() {
    return {
      cart: [],
      time: 0,
      price: 0,
      counter: 0
    }
  },
  beforeMount(){      
      if(JSON.parse(sessionStorage.getItem('cart'))){
          this.cart = JSON.parse(sessionStorage.getItem('cart'))
          this.counter = this.cart.length
      }

      this.cart.forEach(el => {
        this.time = this.time + parseInt(el.prepTime.slice(el.prepTime.indexOf(':') + 1, el.prepTime.lastIndexOf('+')).replace(':00', ''))
        this.price = this.price + parseFloat((el.price/100).toFixed(2))
      });
  },
  methods: {
    checkCart(v){
        if(v){
            this.cart = JSON.parse(sessionStorage.getItem('cart'))
            this.time = 0
            this.counter = 0
            this.price = 0
            this.cart.forEach(el => {
                this.time = this.time + parseInt(el.prepTime.slice(el.prepTime.indexOf(':') + 1, el.prepTime.lastIndexOf('+')).replace(':00', ''))
                this.price = this.price + parseFloat((el.price/100).toFixed(2))
            });
            this.counter = this.cart.length
            
        }
    }
  }
}

</script>

<style lang="scss" scoped>

</style>