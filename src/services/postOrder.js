import AppError from "@/entity/AppError";
import Driiink_API from "@/entity/driiink_api";

export const postOrder = async (order) => {
    
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

    try {
        const driiink_api = new Driiink_API();
        const response = await driiink_api.postOrder(raw)
        return response
    } catch (error) {
        throw new AppError('Request Api Error', error)
    }

}