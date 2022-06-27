export const createPaymentIntent = async (amount) => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", process.env.VUE_APP_API_KEY);
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "price": amount
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    let response = await (await fetch(process.env.VUE_APP_URL + "paymentIntent", requestOptions)).json()
      
    return response
}