<template>
    <div>
        <h2>Commande en cours de préparation</h2>
        <h2>Numéro : {{ order.id }}</h2>
        <div>
            <p>Plus que :</p>
            <p>⏱ <span>: {{ this.time }} min</span></p>
        </div>
    </div>
</template>

<script>
export default{
    name: 'OrderInfo',
    props:{
        order : Array
    },
    data(){
        return {
            time: 0
        }
    },
    beforeMount(){
        this.order.orderItems.forEach(el => {
            this.time = this.time + (parseInt(el.product.prepTime.slice(el.product.prepTime.indexOf(':') + 1, el.product.prepTime.lastIndexOf('+')).replace(':00', '')) * el.quantity)
        });
    }
}
</script>

<style lang="scss" scoped>
    div{
        display: flex;
        flex-direction: column;
        font-family: Nunito, serif;
        margin: 50px auto 0 auto;
        width: auto;
        text-align: center;

        & > h2 {
            font-size: 20px;
            font-weight: bold;
        }

        & > div {
            margin-top: 30px;

            & > p {
                margin-bottom: 8px;
                font-size: 14px;
                font-weight: bold;
            }

            & > p:nth-child(2){
                font-size: 18px;
                font-weight: 400;

                & > span {
                    opacity: 40%;
                }
            }
        }
    }
</style>