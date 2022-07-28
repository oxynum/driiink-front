export const getProduct = async (productID) => {
    let product = {}
    const myHeaders = new Headers();
    myHeaders.append("Authorization", process.env.VUE_APP_API_KEY);

    const requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

    const el = await (await fetch(process.env.VUE_APP_URL + 'products/' + productID, requestOptions)).json()
    // TODO: Handle errors of API call
    product = el
    return product 
}

