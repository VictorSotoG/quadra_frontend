import { isAxiosError } from "axios";
import { Car } from "../types";
import api from "../lib/axios";


export async function getMaintenancesByVehicleId(id: Car['id']) {
    try {
        const { data } = await api(`/maintenances/${id}`)
        return data
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error)
        }
    }
}