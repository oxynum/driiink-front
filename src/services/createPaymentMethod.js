export const createPaymentMethod = async (ccn, exp_month, exp_year, cvc) => {
  var myHeaders = new Headers();
  myHeaders.append("Authorization", process.env.VUE_APP_API_KEY);
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    "ccn": ccn,
    "exp_month": exp_month,
    "exp_year": exp_year,
    "cvc": cvc
  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  let response = await (await fetch( process.env.VUE_APP_URL + "paymentMethod", requestOptions)).json()
    
  return response
}