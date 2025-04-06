import { isAxiosError } from "axios";
import api from "../lib/axios";

export async function getAllInsurances() {
    try {
        const { data } = await api('/insurances');
        return data
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error)
        }
    }
}