export interface Book {
  id: number;
  title: string;
  author: string;
  genre: string;
  rating: number;
  total_copies: number;
  available_copies: number;
  description: string;
  color: string;
  cover: string;
  video: string;
  summary: string;
  isLoanedBook?: boolean;
}

export type BookCoverVariant = "small" | "default" | "wide";

export interface BookCoverProps {
  coverColor?: string;
  variant?: BookCoverVariant;
  className?: string;
  coverImage?: string;
}
export type BookListProps = {
  title: string;
  books: Book[];
  containerClassName?: string;
};
