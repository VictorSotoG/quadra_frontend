import { isAxiosError } from "axios";
import api from "../lib/axios";
import { adminCarSchema, Car, carSchema } from "../types";

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

export async function getCarById(id: Car['id']) {
    try {
        const { data } = await api(`/cars/${id}`)
        const response = carSchema.safeParse(data)
        if (response.success) {
            return response.data
        }
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error)
        }
    }
}


export async function deleteCar(id: Car['id']) {
    try {
        const { data } = await api.delete(`/cars/${id}`);
        return data;
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error)
        }
    }
}