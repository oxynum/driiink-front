import Driiink_API from "@/entity/driiink_api";

export const createPaymentMethod = async (ccn, exp_month, exp_year, cvc) => {
  const driiink_api = new Driiink_API();

  const raw = JSON.stringify({
    "ccn": ccn,
    "exp_month": exp_month,
    "exp_year": exp_year,
    "cvc": cvc
  });

  const requestOptions = {
    method: 'POST',
    headers: driiink_api.header,
    body: raw,
    redirect: 'follow'
  };

  // TODO: Put env var into src/config/index.js file. Export those vars through constants, and import them here
  const response = await (await fetch( process.env.VUE_APP_URL + "paymentMethod", requestOptions)).json()

  // TODO: Handle the response of the method for Errors
    // -> Here
    
  return response
}