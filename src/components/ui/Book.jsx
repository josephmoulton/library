import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import Price from "./Price";
import Rating from "./Rating";

export default function Book({ book }) {
  return (
    <div className="book">
      <Link to={`/books/${book.id}`}>
        <figure className="book__img--wrapper">
          <img src={book.url} alt="" className="book__img" />
        </figure>
      </Link>
      <div className={book.title}>
        <Link to={`/books/${book.id}`} className="book__title--link">
          Atomic Habits
        </Link>
      </div>
      <Rating rating={book.rating}></Rating>
      <Price originalPrice={book.originalPrice} salePrice={book.salePrice}></Price>
    </div>
  );
}
