import useSWR, { SWRConfiguration, Fetcher } from "swr";
import { Book } from '@fe/types/book'
import { apiGet, apiGet2 } from "../apiClient/apiClient";
import { routesConfig } from "../config/config";

export const getBook = apiGet2<Book>(routesConfig.book);

export const fetchBook = (id: string) => getBook(id);