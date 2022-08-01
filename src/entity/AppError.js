class AppError extends Error {

    /**
     * Create a new AppError
     * @param {String} message The message of the error
     * @param {String} error
     */
    constructor(message, error){
        super(message)
        this.name = 'AppError'
        this.error = error
    }
}

export default AppError