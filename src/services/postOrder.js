import Driiink_API from "@/entity/driiink_api";

export const postOrder = async (order) => {
    const driiink_api = new Driiink_API();
    
    let ids = order.map(o => o.id)
    let uniqueProduct = order.filter(({id}, index) => !ids.includes(id, index + 1))
    let product = []

    product = uniqueProduct.map(element => {
        return {
            "product": "/api/products/" + element.id,
            "quantity": order.filter(product => product.id === element.id).length
        }
    });

    const raw = JSON.stringify({
        "status": "/api/order_statuses/1",
        "orderItems": product
    });

    const requestOptions = {
        method: 'POST',
        headers: driiink_api.headers,
        body: raw,
        redirect: 'follow'
    };
    
    const response = await (await fetch("https://driiink-api.herokuapp.com/api/orders", requestOptions)).json()

    // TODO: Handle API errors
    return response
}