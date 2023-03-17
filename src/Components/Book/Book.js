import React from "react";

const Book = ({ book }) => {
  const { name, img, author, publisher, genre, price } = book;
  return (
    <div className="flex flex-col gap-1 p-2">
      <img src={img} alt="bookImg" />
      <div className="mt-2 capitalize">
        <h1 className="text-2xl text-primary font-semibold">{name}</h1>
        <div className="flex flex-col md:flex-row text-black justify-between mt-2">
          <p className="text-lg">
            <span className="font-semibold">author:</span>
            {author}
          </p>
          <p className="text-lg">
            <span className="font-semibold">publisher:</span>
            {publisher}
          </p>
        </div>
        <div className="mt-2 text-black">
          <p className="text-lg">genre: {genre}</p>
          <p className="text-lg">price: {price} BDT</p>
        </div>
      </div>
    </div>
  );
};

export default Book;
