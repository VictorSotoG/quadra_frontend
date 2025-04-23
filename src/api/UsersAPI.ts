import { isAxiosError } from "axios";
import api from "../lib/axios";
import { adminUsersSchema, User, userSchema } from "../types";

export async function getAllUsers() {
    try {
        const { data } = await api('/users');
        const response = adminUsersSchema.safeParse(data)
        if (response.success) {
            return response.data
        }
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error);
        }
    }
}

export async function getUserById(id: User['id']) {
    try {
        const { data } = await api(`/users/${id}`)
        const response = userSchema.safeParse(data)
        if (response.success) {
            return response.data
        }
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error);
        }
    }
}