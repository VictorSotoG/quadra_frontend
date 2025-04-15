import { isAxiosError } from "axios";
import api from "../lib/axios";
import { adminInsurancesSchema } from "../types";

export async function getAllInsurances() {
    try {
        const { data } = await api('/insurances');
        const response = adminInsurancesSchema.safeParse(data)
        if (response.success) {
            return response.data
        }
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error)
        }
    }
}