class ApiError extends Error {

    /**
     * Create a new ApiError
     * @param {String} message The message of the error
     * @param {Number} code The code of the error
     * @param {Boolean} isOperational Does the error is from the app or not
     */
    constructor(message, code, isOperational){
        super(message)
        this.name = 'ApiError'
        this.code = code
        this.isOperational = isOperational
    }
}

export default ApiError