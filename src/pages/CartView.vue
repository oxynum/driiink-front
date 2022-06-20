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
//import { StripeElementPayment } from '@vue-stripe/vue-stripe'
import { createPaymentIntent } from '@/services/createPaymentIntent'

export default {
    name: 'CartView',
    components: {
        TheHeader,
        CartInfo,
        CartProductList,
        CartFooter
        //StripeElementPayment
    },
    data() {
      return {
        cart: [],
        pk: process.env.VUE_APP_PK,
        elementsOptions: {
            appearance: {}, // appearance options
        },
        confirmParams: {
            return_url: 'http://localhost:8080/success', // success url
        },
      }
  },
  beforeMount(){      
      if(JSON.parse(sessionStorage.getItem('cart'))){
          this.cart = JSON.parse(sessionStorage.getItem('cart'))
      }
  },
  mounted () {
    this.generatePaymentIntent();
  },
  methods: {
    async generatePaymentIntent () {
      const paymentIntent = await createPaymentIntent(200); // this is just a dummy, create your own API call
      this.elementsOptions.clientSecret = paymentIntent.client_secret;
    },
    pay () {
      this.$refs.paymentRef.submit();
    },
  },
}

</script>

<style lang="scss" scoped>

</style>