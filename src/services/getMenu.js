import AppError from "@/entity/AppError";
import Driiink_API from "@/entity/driiink_api";

export const getMenu = async (barID) => {
    try{
      const driiink_api = new Driiink_API()
      const menus = await driiink_api.getMenusById(barID)
      return menus
    } catch(error) {
      throw new AppError('Request Api Error', error)
    }
}

