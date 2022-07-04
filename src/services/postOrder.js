export const postOrder = async (order) => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", process.env.VUE_APP_API_KEY);
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Cookie", "sf_redirect=%7B%22token%22%3A%22ab09f0%22%2C%22route%22%3A%22api_orders_post_collection%22%2C%22method%22%3A%22POST%22%2C%22controller%22%3A%22api_platform.action.post_collection%22%2C%22status_code%22%3A201%2C%22status_text%22%3A%22Created%22%7D");

    let ids = order.map(o => o.id)
    let uniqueProduct = order.filter(({id}, index) => !ids.includes(id, index + 1))
    let product = []

    uniqueProduct.forEach(element => {
        let temp = {
            "product": "/api/products/" + element.id,
            "quantity": order.filter(product => product.id === element.id).length
        }
        product.push(temp)
    });

    var raw = JSON.stringify({
        "status": "/api/order_statuses/1",
        "orderItems": product
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };
    
    let response = await (await fetch("https://driiink-api.herokuapp.com/api/orders", requestOptions)).json()
    return response
}