import AppError from "@/entity/AppError";
import Driiink_API from "@/entity/driiink_api";

export const createPaymentMethod = async (ccn, exp_month, exp_year, cvc) => {
  const card = JSON.stringify({
    "ccn": ccn,
    "exp_month": exp_month,
    "exp_year": exp_year,
    "cvc": cvc
  });

  try {
    const driiink_api = new Driiink_API()
    const response = driiink_api.createPaymentMethod(card)
    return response
  } catch (error) { 
    throw new AppError('Request Api Error')
  }
}