import { BASE_URL, DRIIINK_API_KEY } from "@/config";
import ApiError from "./ApiError";

class Driiink_API {    
    constructor(){
        this.header = new Headers()
        this.header.append("Authorization", DRIIINK_API_KEY);
        this.header.append("Content-Type", "application/json");
    }

    /**
     * Will add a specified header to all requests processed with this class
     * 
     * @param {String} identificator the local storage identificator
     * @param {any} value 
     * @returns {Boolean} if added or not
     */
    addHeaders(identificator, value){
        try{
            this.header.append(identificator, value)
            return true 
        } catch(e){
            return false
        }
    }

    /**
     * Will remove a specified header to all requests processed with this class
     * @param {String} identificator the local storage identificator
     * @returns {Boolean} if removed or not
     */
    removeHeaders(identificator){
        try{
            this.header.delete(identificator)
            return true
        } catch(e){
            return false
        }
    }

    /**
     * Show you all the header
     * @returns {Iterator} The list of every pair of identificator/value
     */
    getHeader(){
        return this.header.entries()
    }

    /**
     * Create the request option for your request 
     * @param {String} type Type of the request you want to send
     * @param {JSON} body A JSON with all the data you want to send
     * @returns {Object} an object with the request option for your request 
     */
    loadHeader(type = 'GET', body = null){
        return {
            method: type,
            headers: this.header,
            body: body,
            redirect: 'follow'
        }
    }

    async getBarInfoByID(id = null){
        if (!id) throw new Error('Bad Usage')
        const requestOptions = this.loadHeader()

        const response = await (await fetch(`${BASE_URL}/bars/${id}`, requestOptions)).json()
        // const response = await Promise.all([fetch(`${BASE_URL}/bars/${id}`, requestOptions)])
        //     .then(async (resp) => {
        //         const data = resp.json()
        //         return data
        //     })
        if(!response) throw new ApiError('No Data available', 404, false)
        return response 
    }

    async getMenusById(id = null){
        if (!id) throw new Error('Bad Usage')
        const requestOptions = this.loadHeader()

        const response = await (await fetch(`${BASE_URL}/bars/${id}`, requestOptions)).json()
        if(!response.menu) throw new ApiError('No Data available', 404, false)
        return response.menu
    }

    async getProductOfMenu(id = null){
        if (!id) throw new Error('Bad Usage')
        const requestOptions = this.loadHeader()
        
        const response = await (await fetch(`${BASE_URL}/menus/${id}`, requestOptions)).json()
        if(!response) throw new ApiError('No Data available', 404, false)
        return response 
    }

    async getProduct(id = null){
        if (!id) throw new Error('Bad Usage')
        const requestOptions = this.loadHeader()

        const response = await (await fetch(`${BASE_URL}/products/${id}`, requestOptions)).json()
        if(!response) throw new ApiError('No Data available', 404, false)
        return response
    }

    async postOrder(order = null){
        if (!order) throw new Error('Bad Usage')
        const requestOptions = this.loadHeader('POST', order)
        
        const response = await (await fetch(`${BASE_URL}/orders`, requestOptions)).json()
        if (!response) throw new ApiError('Post Method Not Working', 504, false)
        return response
    }

    async createPaymentMethod(body){
        if(!body) throw new Error('Bad usage')
        const requestOptions = this.loadHeader('POST', body)
        const response = await (await fetch(`${BASE_URL}/paymentMethod`,  requestOptions)).json()
        if(!response) throw new ApiError('Post Method Not Working', 504, false)
        return response
    }

    async createPaymentIntent(body){
        if(!body) throw new Error('Bad Usage')
        const requestOptions = this.loadHeader('POST', body)
        const response = await (await fetch(`${BASE_URL}/paymentIntent`,  requestOptions)).json()
        if (!response) throw new ApiError('Post Method Not Working', 504, false)
        return response
    }

    async confirmPaymentIntent(body){
        if(!body) throw new Error('Bad Usage')
        const requestOptions = this.loadHeader('POST', body)
        const response = await (await fetch(`${BASE_URL}/confirmPayment`,  requestOptions)).json()
        if (!response) throw new ApiError('Post Method Not Working', 504, false)
        return response
    }
}

export default Driiink_API