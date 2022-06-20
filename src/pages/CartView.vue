<template>
    <TheHeader/>
    <CartInfo/>
    <CartProductList :cart="this.cart"/>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue'
import CartInfo from '@/components/CartInfo.vue'
import CartProductList from '@/components/CartProductList.vue'

export default {
    name: 'CartView',
    components: {
        TheHeader,
        CartInfo,
        CartProductList,
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