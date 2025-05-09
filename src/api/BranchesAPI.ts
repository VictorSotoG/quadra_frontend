import { isAxiosError } from "axios";
import api from "../lib/axios";
import { adminBranchSchema, Branch, BranchFormData } from "../types";


export async function createBranch(formData: BranchFormData) {
    try {
        const { data } = await api.post('/branches', formData)
        return data
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error)
        }
    }
}

export async function getAllBranches() {
    try {
        const { data } = await api('/branches');
        const response = adminBranchSchema.safeParse(data);
        if (response.success) {
            return response.data
        }
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error)
        }
    }
}



export async function deleteBranch(id: Branch['id']) {
    try {
        const { data } = await api.delete<string>(`/branches/${id}`)
        return data
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error)
        }
    }
}