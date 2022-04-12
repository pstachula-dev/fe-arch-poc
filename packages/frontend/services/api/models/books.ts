import { BookDto } from '@fe/types/book'
import { AxiosResponse } from 'axios';
import { Book } from '../../types/books.types';
import { apiGet, apiPost } from "../apiClient/apiClient";
import { routesConfig } from "../config/config";

export const getAllBook = apiGet<BookDto[]>(routesConfig.books);

// export const getAllBookExtended = async (): Promise<AxiosResponse<Book[]>> => {
//     const books = await getAllBook();
//     return {
//         ...books,
//         data: books.data.map(el => ({ ...el, pages: parseInt(el.pages) })),
//     }
// }

export const postBook = apiPost<BookDto, BookDto>(routesConfig.books);