import { isAxiosError } from "axios";
import { CheckPasswordForm, ConfirmToken, RequestConfirmationCodeForm, UserRegistrationForm } from "../types";
import api from "../lib/axios";


export async function createAccount(formData: UserRegistrationForm) {
    try {
        const url = '/auth/create-account'
        const { data } = await api.post<string>(url, formData)
        return data
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error)
        }
    }
}

export async function confirmAccount(formData: ConfirmToken) {
    try {
        const url = '/auth/confirm-token'
        const { data } = await api.post<string>(url, formData)
        return data
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error)
        }
    }   
}

export async function requestConfirmationCode(formData: RequestConfirmationCodeForm) {
    try {
        const url = '/auth/request-code';
        const { data } = await api.post<string>(url, formData);
        return data;
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error)
        }
    }
}

export async function checkPassword(formData: CheckPasswordForm) {
    try {
        const url = '/auth/check-password'
        const { data } = await api.post(url, formData)
        return data
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error)
        }
    }
}