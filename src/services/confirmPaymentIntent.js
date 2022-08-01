import Driiink_API from "@/entity/driiink_api";
import AppError from "@/entity/AppError";
export const confirmPaymentIntent = async(payment_intent, payment_methods) => {
    const raw = JSON.stringify({
        "paymentIntentID": payment_intent,
        "paymentMethodID": payment_methods
    });

    try {
        const driiink_api = new Driiink_API();
        const response = await driiink_api.confirmPaymentIntent(raw)
        return response
      } catch (error) {
        throw new AppError('Request Api Error', error)
      }

}