import Driiink_API from "@/entity/driiink_api";
import AppError from "@/entity/AppError";

export const getBarInfo = async (barID) => {
    try{
        const driiink_api = new Driiink_API()
        const currentBar = driiink_api.getBarInfoByID(barID)
        return currentBar
    } catch(error){
        throw new AppError('Request API error', error)
    }
}

