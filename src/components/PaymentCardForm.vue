<template>
    <h2>Ton moyen de paiement</h2>
    <form class="form" id="CardForm">
        <div class="form-card">
            <div class="form-card-top">
                <label for="ccn">Numéro de carte</label>
                <input type="text" name="ccn" maxlength="16" placeholder="4978175934555235" id="ccn" value="4242424242424242">
            </div>
            <div class="form-card-bottom">
                <div class="form-card-bottom-exp">
                    <label for="exp">Date d'expiration</label>
                    <div class="form-card-bottom-exp-input">
                        <input type="text" placeholder="MM" maxlength="2" id="expMonth" value="09">
                        <p>/</p>
                        <input type="text" placeholder="YYYY" maxlength="4" id="expYear" value="2030">
                    </div>
                </div>
                <div class="form-card-bottom-cvc">
                    <label for="cvc">CVC</label>
                    <input type="text" placeholder="309" maxlength="3" id="cvc" value="309">
                </div>
            </div>
        </div>
    </form>
    <div class="form-submit">
        <button @click="makePayment()">Confirmer votre commande</button>
    </div>
</template>

<script>
import { createPaymentMethod } from '@/services/createPaymentMethod'
import { confirmPaymentIntent } from '@/services/confirmPaymentIntent'
import { createPaymentIntent } from '@/services/createPaymentIntent';

 
export default{
    name: "PaymentFormCard",
    data(){
        return{
            card: null,
            paymentResult: null,
            paymentIntent: null,
            payment: null,
            totalPrice: 0,
        }
    },
    beforeMount(){
        if(JSON.parse(sessionStorage.getItem('cart'))){
          this.cart = JSON.parse(sessionStorage.getItem('cart'))
        }

        this.cart.forEach(el => {
            this.totalPrice = this.totalPrice + parseFloat((el.price/100).toFixed(2))
        });
    },
    async mounted(){
        this.paymentIntent = await createPaymentIntent(parseInt((this.totalPrice*100).toFixed(0)))
    },
    methods: {
        async createCard (){
            let ccn = document.getElementById("ccn").value
            let expMonth = document.getElementById("expMonth").value
            let expYear = document.getElementById("expYear").value
            let cvc = document.getElementById("cvc").value
            
            this.card = await createPaymentMethod(ccn, expMonth, expYear, cvc)
            console.log(this.card)
        },
        async makePayment(){
            this.$emit('loader', true)
            await this.createCard()
            this.payment = await confirmPaymentIntent(this.paymentIntent.id, this.card.id)
            console.log(this.payment)
            if(this.payment.status === "succeeded"){
                sessionStorage.setItem('order', JSON.stringify(this.cart))
                sessionStorage.setItem('payment', JSON.stringify(this.payment))
                sessionStorage.removeItem('cart')
                this.$router.push({name:'Order', params: {id: this.$route.params.id}})
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    *{
        box-sizing: border-box;
        font-family: Nunito, serif;
    }

    h2{
        font-size: 20px;
        font-weight: bold;
        font-family: Nunito, serif;
        height: 20px;
        text-align: center;
        margin-top: 10px;
    }

    .form-submit{
        position: fixed;
        bottom: 75px;
        display: flex;
        width: 100%;
        justify-content: center;
        align-items: center;
        
        & > button {
            border: none;
            border-radius: 100px;
            background-color: #21B05C;
            color: white;
            padding: 10px 30px;
            font-size: 20px;
            font-weight: 600;
        }
    }

    label{
        font-size: 12px;
        font-weight: 600;
    }

    .form-card{
        width: 365px;
        margin: 20px auto 0 auto;
        display: flex;
        flex-direction: column;
        background-color: #D7D7D7;
        border-radius: 15px;
        padding: 15px 26px;

        &-top{
            display: flex;
            flex-direction: column;
            margin: 0 auto;
            & > input {
                width: 323px;
                margin-top: 4px;
                border: none;
                border-radius: 100px;
                height: 30px;
                padding: 5px 0 5px 13px;

                &:focus{
                    outline: rgba($color: #000000, $alpha: 0.2) solid 1px;
                }
            }
        }

        &-bottom{
            display: flex;
            justify-content: space-between;
            margin-top: 20px;

            &-exp{
                display: flex;
                flex-direction: column;

                &-input{
                    width: 85px;
                    border-radius: 100px;
                    background-color: white;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    height: 30px;
                    margin-top: 4px;

                    & > input{
                        border: none;
                        width: 40px;
                        background-color: none;
                        &:focus{
                            outline: rgba($color: #000000, $alpha: 0.2) solid 1px;
                        }

                        &:nth-child(1){
                            width: 30px;
                            text-align: right;
                        }
                    }
                }
            }

            &-cvc{
                display: flex;
                flex-direction: column;

                & > input{
                    width: 85px;
                    margin-top: 4px;
                    height: 30px;
                    border: none;
                    border-radius: 100px;
                    padding: 5px 0 5px 13px;

                    &:focus{
                    outline: rgba($color: #000000, $alpha: 0.2) solid 1px;
                }
                }
            }
        }
    }
</style>