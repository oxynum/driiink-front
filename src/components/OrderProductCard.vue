<template>
    <div class="product-card">
        <div class="product-card-quantity">
            <p>{{ this.quantity }}</p>
        </div>
        <div class="product-card-image">
            <img src="https://driiink.s3.eu-west-3.amazonaws.com/Mojito-PNG-Image+1.png" alt="product image">
        </div>
        <div class="product-card-info">
            <h2 class="product-card-info-name">{{ this.product.name }}</h2>
            <p class="product-card-info-desc">{{ this.product.description }}</p>
        </div>
    </div>
</template>

<script>
export default{
    name: "OrderProductCard",
    props:{
        quantity: Number,
        product: Object
    },
}
</script>

<style lang="scss" scoped>
    .product-card{
        width: 306px;
        height: 68px;
        margin: 15px auto;
        display: flex;
        justify-content: space-between;
        align-items: center;

        &-quantity > p {
            width: 24px;
            height: 28px;
            padding: 0 8px;
            background-color: #21B05C;
            border-radius: 50px;
            color: white;
            display: flex;
            justify-content: center;
            align-items: center;
            font-family: Nunito, serif;
        }

        &-image{
            width: 40px;
            height: 68px;
            display: flex;
            justify-content: center;
            align-items: center;

            & > img {
                height: 100%;
            }
        }

        &-info{
            width: 171px;
            height: 40px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: fle;
            font-family: Nunito, serif;

            &-name{
                font-weight: bold;
                font-size: 14px;
            }

            &-desc{
                font-weight: 600;
                font-size: 12px;
                color: #A4A4A4;
                white-space: nowrap;
                text-overflow: ellipsis;
                width: 171px;
                display: block;
                overflow: hidden
            }
        }
    }
</style>