import { isAxiosError } from "axios";
import api from "../lib/axios";
import { adminInsurancesSchema, Insurance, InsuranceFormData, insuranceSchema } from "../types";


export async function createInsurance(formData: InsuranceFormData) {
    try {
        const { data } = await api.post('/insurances', formData)
        return data
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error)
        }
    }
}


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

export async function getInsuranceById(id: Insurance['id']) {
    try {
        const { data } = await api(`/insurances/${id}`)
        const response = insuranceSchema.safeParse(data)
        if (response.success) {
            return response.data
        }
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error)
        }
    }
}

