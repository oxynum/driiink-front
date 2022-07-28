import Driiink_API from "@/entity/driiink_api";

export const createPaymentIntent = async (amount) => {
    const driiink_api = new Driiink_API();
    
    const raw = JSON.stringify({
      "price": amount
    });

    const requestOptions = {
      method: 'POST',
      headers: driiink_api.header,
      body: raw,
      redirect: 'follow'
    };

    // TODO: Put env var into src/config/index.js file. Export those vars through constants, and import them here
    const response = await (await fetch(process.env.VUE_APP_URL + "paymentIntent", requestOptions)).json()

    // TODO: Handle the response of the method for Errors
    // -> Here
      
    return response
}