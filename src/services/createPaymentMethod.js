export const createPaymentMethod = async (ccn, exp_month, exp_year, cvc) => {
    let card = null
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
    myHeaders.append("Authorization", process.env.VUE_APP_STRIPE_KEY);
    
    var urlencoded = new URLSearchParams();
    urlencoded.append("type", "card");
    urlencoded.append("card[exp_month]", exp_month);
    urlencoded.append("card[exp_year]", exp_year);
    urlencoded.append("card[number]", ccn);
    urlencoded.append("card[cvc]", cvc);
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: urlencoded,
      redirect: 'follow'
    };
    
    await fetch("https://api.stripe.com//v1/payment_methods", requestOptions)
      .then(response => response.text())
      .then(result => card = result)
      .catch(error => console.log('error', error));

    
    return card
}