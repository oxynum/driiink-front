<template>
    <div>
        <TheHeader/>
        <ProductTopBox :product="this.product"/>
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
        }
    }, 
    async beforeMount(){
        const productID = this.$route.params.productID
        this.product = await getProduct(productID)
    },
    
}


</script>

<style scoped>

</style>