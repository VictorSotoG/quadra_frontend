import { isAxiosError } from "axios";
import api from "../lib/axios";
import { adminCarSchema } from "../types";

export async function getAllCars() {
    try {
        const { data } = await api('/cars');
        const response = adminCarSchema.safeParse(data)
        if (response.success) {
            return response.data
        }
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error)
        }
    }
}