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
                    <span>{{ priceFormatter(productInfo.price) }}</span>
                    <div class="card-text-price-btn">
                        <button @click="addToCart($event)">+</button>
                    </div>
                </div>
            </div>
        </div>
    </router-link>
</template>

<script>

export default {
  name: "ProductCard",
  data(){
    return {
        cart : [],
    }
  },
  props: {
    productInfo: Object,
  },
  beforeMount(){
    if(JSON.parse(sessionStorage.getItem('cart'))){
        this.cart = JSON.parse(sessionStorage.getItem('cart'))
    }
  },
  methods: {
      priceFormatter: function(price) {
          return (price/100).toFixed(2) + " €"
      },
      addToCart: function(event){
        event.preventDefault()
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
        width: 187px;
        margin-bottom: 15px;
        box-shadow: 0 4px 8px rgba(0,0,0, 0.2);
        border-radius: 20px;
        @media screen and (max-width: 375px){   
            .card{
                width: 177px;
            }    
        }

        &-img{
            width: 100%;
            height: 132px;
            border-top-left-radius: 20px;
            border-top-right-radius: 20px;
            background-color: #21B05C;
            position: relative;
            display: flex;
            justify-content: center;

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

            & > h4 {
                margin: 30px 0 0 0;
                font-size: 14px;
                font-weight: bold;
                padding-right: 5px;
                height: 20px;
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