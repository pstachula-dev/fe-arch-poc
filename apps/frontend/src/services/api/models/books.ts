import { BookDto } from '@app/types';
import { apiGet, apiPost } from '../apiClient/apiClient';
import { routesConfig } from '../config/config';

export const getAllBook = apiGet<BookDto[]>(routesConfig.books);

export const postBook = apiPost<BookDto, BookDto>(routesConfig.books);
