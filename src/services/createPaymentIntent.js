export const createPaymentIntent = async (amount) => {
    let res = null
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
    myHeaders.append("Authorization", process.env.VUE_APP_STRIPE_KEY);

    var urlencoded = new URLSearchParams();
    urlencoded.append("amount", amount);
    urlencoded.append("currency", "EUR");

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: urlencoded,
        redirect: 'follow'
      };
      
    await fetch("https://api.stripe.com//v1/payment_intents", requestOptions)
      .then(response => response.text())
      .then(result => res = result)
      .catch(error => console.log('error', error));

    return res
}