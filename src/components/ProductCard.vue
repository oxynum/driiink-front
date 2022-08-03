<template>
    <router-link :to="{ name: 'PDP', params: {  productID: productInfo.id} }">
        <div class="card">
            <div class="card-img">
                <img v-show="productInfo.picture" :src="productInfo.picture" alt="cocktails">
                <img v-show="!productInfo.picture" src="https://driiink.s3.eu-west-3.amazonaws.com/png-transparent-red-cocktail-red-drink-cocktail-thumbnail-removebg-preview+2.png" alt="cocktails">
            </div>
            <div class="card-text">
                <h4>{{ productInfo.name }}</h4>
                <p>{{ productInfo.description }}</p>
                <div class="card-text-price">
                    <span>{{ product.priceFormatter(productInfo.price) }}</span>
                    <div class="card-text-price-btn">
                        <button @click.prevent="this.cart.add()">+</button>
                    </div>
                </div>
            </div>
        </div>
    </router-link>
</template>

<script>
import { useCartStore } from '@/store/cart'
import { useProductStore } from '@/store/products'

export default {
  name: "ProductCard",
  setup(){
    const cart = useCartStore()
    const product = useProductStore()

    return {
        cart,
        product
    }
  },
  props: {
    productInfo: Object,
  },
  methods: {
      addToCart(){
        this.cart = []
        if(JSON.parse(sessionStorage.getItem('cart'))){
          this.cart = JSON.parse(sessionStorage.getItem('cart'))
        }
        this.cart.push(this.productInfo) 
        sessionStorage.setItem('cart', JSON.stringify(this.cart))
        this.$emit('checkCounter', true)
      },
  },
}

</script>

<style scoped lang="scss">
    *{
        box-sizing: border-box;
        text-decoration: none;
    }

    .card{
        margin-bottom: 15px;
        box-shadow: 0 4px 8px rgba(0,0,0, 0.2);
        border-radius: 20px;
        flex-basis: 100%;
        

        &-img{
            width: 100%;
            height: 132px;
            border-top-left-radius: 20px;
            border-top-right-radius: 20px;
            background-color: #21B05C;
            position: relative;
            display: flex;
            justify-content: center;
            z-index: 2;

            & > img {
                height: 100%;
            }
        }
        
        &-text{
            width: 100%;
            height: 176px;
            border-bottom-left-radius: 20px;
            border-bottom-right-radius: 20px;
            background-color: #F2F2F2;
            display: flex;
            flex-direction: column;
            font-family: Nunito, serif;
            padding: 0 0 0 20px;
            color: #000;
            position: relative;

            & > h4 {
                margin: 30px 0 0 0;
                font-size: 14px;
                font-weight: bold;
                padding-right: 5px;
                max-width: 147px
            }

            & > p {
                font-size: 12px;
                font-weight: 600;
                color: #A4A4A4;
                width: 147px;
                margin: 4px 0 0 0;
                line-height: 20px;
                height: 78px;
                overflow: hidden;
            }

            &-price{
                display: flex;
                justify-content: space-between;
                align-items: center;
                position: absolute;
                bottom: 5px;
                width: 85%;

                & > span {
                    font-size: 20;
                    font-weight: bold;
                }

                &-btn > button {
                    border: none;
                    border-radius: 50%;
                    width: 30px;
                    height: 30px;
                    background-color: #21B05C;
                    color: white;
                    margin: 0 7px 0 0;
                }
            }
        }
    }

    img{
        position: absolute;
        top: 20px;
        
    }

    


</style>