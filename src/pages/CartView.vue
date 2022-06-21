<template>
    <TheHeader/>
    <CartInfo/>
    <CartProductList :cart="this.cart"/>
    <CartFooter/>
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
    data() {
      return {
        cart: [],
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

</style>