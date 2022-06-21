<template>
    <TheHeader/>
    <ReturnBack/>
    <PaymentCardForm/>
    <PaymentFooter/>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue'
import ReturnBack from '@/components/ReturnBack.vue'
import PaymentCardForm from '@/components/PaymentCardForm.vue';
import PaymentFooter from '@/components/PaymentFooter.vue';


export default{
    name: 'PaymentView',
    components: {
        TheHeader,
        ReturnBack,
        PaymentCardForm ,
        PaymentFooter
    },
    data(){
        return {
            cart: [],
            totalPrice: 0,
        }
    },
    async beforeMount(){
        if(JSON.parse(sessionStorage.getItem('cart'))){
          this.cart = JSON.parse(sessionStorage.getItem('cart'))
        }

        this.cart.forEach(el => {
            this.totalPrice = this.totalPrice + parseFloat((el.price/100).toFixed(2))
        });
    },
}
</script>

<style lang="scss" scoped>

</style>