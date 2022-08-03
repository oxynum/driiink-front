import AppError from "@/entity/AppError";
import Driiink_API from "@/entity/driiink_api";

export const getMenuData = async (menuID) => {
    try {
      const driiink_api = new Driiink_API();
      const data = await driiink_api.getProductOfMenu(menuID)
      return data
    } catch (error) {
      throw new AppError('Request Api Error', error)
    }
}