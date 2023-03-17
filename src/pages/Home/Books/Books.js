import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Book from "../../../Components/Book/Book";

const Books = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/limitedbooks")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);
  return (
    <section className="my-6 mx-10 px-10 py-6 text-primary flex flex-col items-center">
      <h1 className="text-4xl text-center font-serif">Books</h1>
      <div className="grid grid-cols-1 my-3 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {books.map((book) => (
          <Book key={book._id} book={book}></Book>
        ))}
      </div>
      <Link
        to="/books"
        className="capitalize bg-primary text-white px-4 py-3 rounded-md hover:bg-primaryLight"
      >
        explore books
      </Link>
    </section>
  );
};

export default Books;
