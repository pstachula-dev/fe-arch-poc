import { BookDto } from '@app/types';

import { baseApiClient } from '../apiClient/baseApiClient';
import { baseApiClientRoutes } from '../apiClient/routesMap';
import { ApiClientResponse } from '../apiClient/services/types';

export const getAllBooks = async (): Promise<BookDto[]> => {
  const { data } = await baseApiClient.get<BookDto[]>(
    baseApiClientRoutes.books,
  );
  return data;
};

export const postBook = async (
  payload: BookDto,
): ApiClientResponse<BookDto> => {
  return baseApiClient.post<BookDto, BookDto>(
    baseApiClientRoutes.books,
    payload,
  );
};
