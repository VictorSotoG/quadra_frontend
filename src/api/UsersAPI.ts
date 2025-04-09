import { isAxiosError } from "axios";
import api from "../lib/axios";
import { adminUsersSchema } from "../types";

export async function getAllUsers() {
    try {
        const { data } = await api('/users');
        const response = adminUsersSchema.safeParse(data)
        console.log(response)
        if (response.success) {
            return data
        }
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error);
        }
    }
}