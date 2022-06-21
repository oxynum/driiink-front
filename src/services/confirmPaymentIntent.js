export const confirmPaymentIntent = async(payment_intent, payment_methods) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
    myHeaders.append("Authorization", process.env.VUE_APP_STRIPE_KEY);

    var urlencoded = new URLSearchParams();
    urlencoded.append("payment_method", payment_methods.id);

    var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: urlencoded,
    redirect: 'follow'
    };

    let response = await (await fetch("https://api.stripe.com//v1/payment_intents/"+ payment_intent.id +"/confirm", requestOptions)).json()

    return response
}