import Driiink_API from "@/entity/driiink_api";

export const confirmPaymentIntent = async(payment_intent, payment_methods) => {
    const driiink_api = new Driiink_API();

    const raw = JSON.stringify({
        "paymentIntentID": payment_intent,
        "paymentMethodID": payment_methods
    });

    const requestOptions = {
        method: 'POST',
        headers: driiink_api.header,
        body: raw,
        redirect: 'follow'
    };

    // TODO: Put env var into src/config/index.js file. Export those vars through constants
    const response = await (await fetch(process.env.VUE_APP_URL + "confirmPayment", requestOptions)).json()

    // TODO: Handle the response of the method for Errors
    // -> Here

    return response
}