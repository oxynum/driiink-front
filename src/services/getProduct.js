import Driiink_API from "@/entity/driiink_api";

export const getProduct = async (productID) => {
    const driiink_api = new Driiink_API();

    const requestOptions = {
      method: 'GET',
      headers: driiink_api.header,
      redirect: 'follow'
    };

    const el = await (await fetch(process.env.VUE_APP_URL + 'products/' + productID, requestOptions)).json()
    return el 
}

