class Driiink_API {    
    constructor(){
        this.header = new Headers()
        this.header.append("Authorization", process.env.VUE_APP_API_KEY);
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

    async getBarInfoByID(id){
        const requestOptions = {
            method: 'GET',
            headers: this.header,
            redirect: 'follow'
        };

        return await fetch(process.env.VUE_APP_URL + 'bars/' + id, requestOptions)
            .then(async (resp) => {
                const data = await resp.json()
                if (!data.name){
                    return "DATA WAS NOT FOUND"
                }
                console.log(data)
                return data
            })
            .catch((error) => {
                return "DATA WAS NOT FOUND" + error
            })
        }
}

export default Driiink_API