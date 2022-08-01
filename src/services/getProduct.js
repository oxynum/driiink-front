import AppError from "@/entity/AppError";
import Driiink_API from "@/entity/driiink_api";

export const getProduct = async (productID) => {
    try {
      const driiink_api = new Driiink_API();
      const product = await driiink_api.getProduct(productID)
      return product
    } catch (error) {
      throw new AppError('Request Api Error', error)
    }
}

