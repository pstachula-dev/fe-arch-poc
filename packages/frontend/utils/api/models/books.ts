import { Book } from '@fe/types/book'
import { apiGet, apiPost } from "../apiClient/apiClient";
import { routesConfig } from "../config/config";

export const getAllBook = apiGet<Book[]>(routesConfig.books);

export const postBook = apiPost<Book, Book>(routesConfig.books);