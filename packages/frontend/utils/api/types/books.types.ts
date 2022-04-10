import { BookDto } from '@fe/types/book';

// export interface BookDto extends Book {}

export interface Book extends Omit<BookDto, 'newname'> {
    name: string;   
}