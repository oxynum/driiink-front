export const confirmPaymentIntent = async(payment_intent, payment_methods) => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", process.env.VUE_APP_API_KEY);
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "paymentIntentID": payment_intent,
        "paymentMethodID": payment_methods
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    let response = await (await fetch(process.env.VUE_APP_URL + "confirmPayment", requestOptions)).json()

    return response
}