import { BookDto } from "@fe/types/book";
import { apiGet, apiPost } from "../apiClient/apiClient";
import { routesConfig } from "../config/config";
import { Book } from "../types/books.types";

// export const getAllBook = apiGet<BookDto[]>(routesConfig.books);

export const getAllBook = async () => {
    const body = await apiGet<BookDto[]>(routesConfig.books)();
    return {
        ...body,
        data: body.data.map(book => ({ ...book, name: book.newname })),
    }
};

export const postBook = apiPost<BookDto, Book>(routesConfig.books);