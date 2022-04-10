import { Book } from '@fe/types/book'
import { apiGet } from "../apiClient/apiClient";
import { routesConfig } from "../config/config";

export const getBook = apiGet<Book>(routesConfig.books);