<template>
    <div>
        <TheHeader :counter="this.counter" />
        <ProductTopBox :product="this.product" @checkCounter="checkCounter"/>
        <ProductBottomBox :product="this.product"/>
    </div>
</template>

<script>
import TheHeader from "@/components/TheHeader";
import ProductTopBox from "@/components/ProductTopBox"
import ProductBottomBox from "@/components/ProductBottomBox"
import { getProduct } from '@/services/getProduct'


export default {
    name: 'PDPView',
    components: {
        TheHeader,
        ProductTopBox,
        ProductBottomBox
    },
    data() {
        return{
            product: null,
            cart: [],
            counter: 0,
        }
    }, 
    methods:{
        checkCounter(v){
            if(v){
                this.counter = 0
                this.cart = JSON.parse(sessionStorage.getItem('cart'))
                this.counter = this.cart.length
            }
        }
    },
    async beforeMount(){
        const productID = this.$route.params.productID
        this.product = await getProduct(productID)
        
        if(JSON.parse(sessionStorage.getItem("cart"))){
            this.cart = JSON.parse(sessionStorage.getItem("cart"))
            this.counter = this.cart.length
        }
    },
    
}


</script>

<style scoped>

</style>