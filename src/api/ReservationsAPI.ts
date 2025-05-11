import { isAxiosError } from "axios";
import api from "../lib/axios";
import { adminReservationsSchema, Reservation, ReservationFormDataType, reservationSchema } from "../types";


export async function createReservation(formData : ReservationFormDataType) {
    try {
        const { data } = await api.post('/reservations', formData)
        return data
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error)
        }
    }
}

export async function getAllReservations() {
    try {
        const { data } = await api('/reservations');
        const response = adminReservationsSchema.safeParse(data);
        if (response.success) {
            return response
        }
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error)
        }
    }
}

export async function getReservationById(id: Reservation['_id']) {
    try {
        const { data } = await api(`/reservations/${id}`)
        const response = reservationSchema.safeParse(data)
        if (response.success) {
            return response.data
        }
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error)
        }
    }
}


export async function deleteReservation(id: Reservation['_id']) {
    try {
        const { data } = await api.delete(`/reservations/${id}`);
        return data;
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error)
        }
    }
}