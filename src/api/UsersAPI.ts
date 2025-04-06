// import { isAxiosError } from "axios";
// import api from "../lib/axios";

// export async function getAllUsers() {
//     try {
//         const { data } = await api('/users');
//         return data
//     } catch (error) {
//         if (isAxiosError(error) && error.response) {
//             throw new Error(error.response.data.error);
//         }
//     }
// }