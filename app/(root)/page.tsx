import BookList from "@/components/BookList";
import BookOverview from "@/components/BookOverview";
import { sampleBooks } from "@/dummy";

export default function Home() {
  return (
    <>
      <BookOverview {...sampleBooks[0]} />
      <BookList />
    </>
  );
}
