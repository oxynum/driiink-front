import AppError from "@/entity/AppError";
import Driiink_API from "@/entity/driiink_api";

export const createPaymentIntent = async (amount) => {
    const raw = JSON.stringify({
      "price": amount
    });

    try {
      const driiink_api = new Driiink_API();
      const response = driiink_api.createPaymentIntent(raw)
      return response
    } catch (error) {
      throw new AppError('Request Api Error', error)
    }
    


}