export const confirmPaymentIntent = async(payment_intent, payment_methods) => {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", process.env.VUE_APP_API_KEY);
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
        "paymentIntentID": payment_intent,
        "paymentMethodID": payment_methods
    });

    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    // TODO: Put env var into src/config/index.js file. Export those vars through constants
    const response = await (await fetch(process.env.VUE_APP_URL + "confirmPayment", requestOptions)).json()

    // TODO: Handle the response of the method for Errors
    // -> Here

    return response
}