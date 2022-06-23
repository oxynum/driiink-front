export const getProduct = async (productID) => {
    let product = {}
    var myHeaders = new Headers();
    myHeaders.append("Authorization", process.env.VUE_APP_API_KEY);

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

    const el = await (await fetch(process.env.VUE_APP_URL + 'products/' + productID, requestOptions)).json()
    product = el
    return product 
}

