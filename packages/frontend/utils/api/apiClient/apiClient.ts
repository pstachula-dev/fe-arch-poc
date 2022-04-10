import { Book } from "@fe/types/book";
import axios, { AxiosResponse } from "axios";

export const apiGet = <DataT>(url: string) => {
    return (): Promise<AxiosResponse<DataT>> => axios.get(url);
}

export const apiPost = <DataT>(url: string) => {
    return (params: Book): Promise<AxiosResponse<DataT>> => axios.post(url, params);
}