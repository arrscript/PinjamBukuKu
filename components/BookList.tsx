import { BookListProps } from "@/types/book.types";
import BookCard from "./BookCard";

const BookList = ({ title, books, containerClassName }: BookListProps) => {
  return (
    <section className={containerClassName}>
      <h2 className="text-light-100 text-4xl font-bebas-neue">{title}</h2>

      <ul className="book-list">
        {books.map((book) => (
          <BookCard key={book.id} {...book} />
        ))}
      </ul>
    </section>
  );
};

export default BookList;
