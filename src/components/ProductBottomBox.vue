<template>
    <div class="bottom-box">
        <div class="bottom-box-line">
            <p class="bottom-box-line-name">{{ product.name }}</p>
            <p class="bottom-box-line-price">{{ priceFormatter(product.price) }}</p>
        </div>
        <p>{{ product.description }}</p>
        <div class="bottom-box-ing" v-if="product.ingredient.length">
            <p class="bottom-box-ing-title">Ingrédients</p>
            <div class="bottom-box-ing-container">
                <div class="bottom-box-ing-container-card" v-for="ingredient in product.ingredient" :key="ingredient">
                    <img src="https://driiink.s3.eu-west-3.amazonaws.com/vodka+1.png" alt="vodka">
                    <span>{{ ingredient.name}}</span>
                </div>                
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProductBottomBox',
    props: {
        product: Object
    },
    methods: {
      priceFormatter: function(price) {
          return (price/100).toFixed(2) + " €"
      }
  }
}
</script>

<style lang="scss" scoped>
    .bottom-box{
        display: flex;
        flex-direction: column;
        width: 350px;
        margin: 54px auto 0 auto;
        font-family: Nunito, serif;

        &-line{
            display: flex;
            justify-content: space-between;
            align-items: center;

            &-name {
                font-size: 20px;
                font-weight: 600;
            }

            &-price {
                font-size: 20px;
                font-weight: bold;
            }
        }

        & > p {
            margin: 15px 0;
            color: #A4A4A4;
            line-height: 20px;
        }

        &-ing {
            
            &-title {
            margin: 15px 0;
            font-size: 12px;
            font-weight: 600;
            }

            &-container{
                display: flex;
                flex-wrap: nowrap;
                white-space: nowrap;
                overflow-x: auto;
                -webkit-overflow-scrolling: touch;
                -ms-overflow-style: -ms-autohiding-scrollbar;
                

                &::-webkit-scrollbar {
                    display: none;
                }

                &-card {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    background-color: #D7D7D7;
                    padding: 10px 14px;
                    border-radius: 19px;
                    margin-right: 20px;

                    & > img{
                        max-width: 37px;
                        margin-bottom: 2px;
                    }

                    & > span {
                        font-size: 12px;
                        font-weight: 600;
                    }
                }
            }
        }
        
    }
</style>