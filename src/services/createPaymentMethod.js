export const createPaymentMethod = async (ccn, exp_month, exp_year, cvc) => {
  const myHeaders = new Headers();
  myHeaders.append("Authorization", process.env.VUE_APP_API_KEY);
  myHeaders.append("Content-Type", "application/json");

  const raw = JSON.stringify({
    "ccn": ccn,
    "exp_month": exp_month,
    "exp_year": exp_year,
    "cvc": cvc
  });

  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  // TODO: Put env var into src/config/index.js file. Export those vars through constants, and import them here
  const response = await (await fetch( process.env.VUE_APP_URL + "paymentMethod", requestOptions)).json()

  // TODO: Handle the response of the method for Errors
    // -> Here
    
  return response
}